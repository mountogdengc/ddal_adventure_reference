"""
process_adventures.py -- Batch pipeline for DDAL Adventure Reference

Runs a three-step pipeline for every adventure in the folder:

  Step 1    PDF  -> Markdown   (Adventure pdfs/    -> Adventure MD/)
  Step 1.5  MD   -> DATA.js    (Adventure MD/      -> Adventure Data/)   [Claude API]
  Step 2    DATA -> docx       (Adventure Data/    -> Adventure References/)
  Step 3    docx -> PDF        (Adventure References/ -> Reference PDF/)

Each step is skipped automatically if the output already exists, so re-running
after adding a new adventure only processes what is new.

Step 1.5 requires an Anthropic API key in the environment:
  Windows:  setx ANTHROPIC_API_KEY "sk-ant-..."
  (restart your terminal after setting it)

Usage:
  python process_adventures.py                  # full pipeline, skip existing
  python process_adventures.py --force          # re-process everything
  python process_adventures.py --pdf-only        # only Step 1
  python process_adventures.py --ai-only         # only Step 1.5
  python process_adventures.py --docx-only       # only Step 2
  python process_adventures.py --pdf-out-only    # only Step 3
  python process_adventures.py --skip-ai         # skip the Claude API step
  python process_adventures.py --skip-pdf-out    # skip the PDF export step
  python process_adventures.py --dry-run         # preview without writing files
  python process_adventures.py --status          # pipeline status table and exit

Log files are written to:  logs/process_adventures_YYYY-MM-DD_HH-MM-SS.log
"""

import os
import sys
import re
import time
import subprocess
import argparse
import logging
from pathlib import Path
from datetime import datetime


def _elapsed(start: float) -> str:
    """Return a human-readable elapsed time string, e.g. '1m 23s' or '45s'."""
    secs = int(time.monotonic() - start)
    return "%dm %ds" % (secs // 60, secs % 60) if secs >= 60 else "%ds" % secs

# -- Dependency check: pdfplumber (required) -----------------------------------
try:
    import pdfplumber
except ImportError:
    print("Missing dependency. Please run:  pip install pdfplumber")
    sys.exit(1)

# -- Dependency check: anthropic (optional -- only needed for Step 1.5) --------
try:
    import anthropic as _anthropic
    _ANTHROPIC_AVAILABLE = True
except ImportError:
    _ANTHROPIC_AVAILABLE = False

# -- Dependency check: docx2pdf (optional -- only needed for Step 3) -----------
try:
    import docx2pdf as _docx2pdf
    _DOCX2PDF_AVAILABLE = True
except ImportError:
    _DOCX2PDF_AVAILABLE = False

# -- Directory layout (all relative to this script) ----------------------------
ROOT     = Path(__file__).parent
PDF_DIR  = ROOT / "Adventure pdfs"
MD_DIR   = ROOT / "Adventure MD"
DATA_DIR = ROOT / "Adventure Data"
REF_DIR  = ROOT / "Adventure References"
PDF_OUT  = ROOT / "Reference PDF"
LOG_DIR  = ROOT / "logs"

# -- Model to use for DATA file generation ------------------------------------
_AI_MODEL = "claude-opus-4-6"

# -- System prompt sent to Claude for every MD -> DATA conversion --------------
_SYSTEM_PROMPT = """\
You are an expert Dungeons & Dragons Adventurers League dungeon master and module analyst.

Your job is to read the raw text of an AL adventure module and extract its key information
into a JavaScript DATA object that will be used to generate a DM quick-reference sheet.

OUTPUT RULES -- follow these exactly:
- Output ONLY raw JavaScript. No markdown, no code fences, no explanation.
- Begin with:   const DATA = {
- End with:     };

              module.exports = DATA;
- Use double quotes for all strings.
- Escape any double quotes inside strings with a backslash.
- Keep each string field to 1-3 sentences unless noted otherwise.
- If a piece of information is not clearly stated in the text, write a short
  honest placeholder like "Not specified in module." rather than inventing facts.
- Stat block numbers must be copied exactly as written in the adventure text.

FIELD GUIDE:

code        -- The module code, e.g. "DDAL09-04" or "CCC-GHC-BK1-08"
title       -- Full adventure title
levels      -- Level range, e.g. "1-4"
apl         -- Average Party Level as a string, e.g. "3"
duration    -- Approximate run time, e.g. "~2 hrs"
players     -- Player count range, e.g. "3-7"
location    -- Primary setting / location name
reward      -- XP or milestone reward description

background  -- 2-3 sentences: who is the villain and what are they doing, what is at stake,
               and how the players are drawn in.

keyFacts    -- 2-4 sentences of the most critical DM-only facts: villain location, hidden
               information, timer mechanics, series continuity notes.

scenes      -- Array of { name, time, goal, outcome }. One entry per major scene or encounter.
               name:    short scene title
               time:    estimated time at table, e.g. "~20 min"
               goal:    what the players are trying to accomplish
               outcome: what changes or what triggers next

sceneNotes  -- Array of { name, time, setting, trigger, creatures, tactics, loot, dmnote }.
               Match the same scenes as above. For each:
               setting:   where it takes place
               trigger:   what kicks the scene off
               creatures: NPCs / enemies present and their roles
               tactics:   how enemies or NPCs behave; any special rules
               loot:      what players can find or earn
               dmnote:    pacing tip, common player detour, anything to watch for

npcs        -- Array of { name, statBlock, alignment, wants, knows, voice, quote }.
               Include all named NPCs who interact meaningfully with the party.
               statBlock:  "Stat Block Name / CR #"
               alignment:  two-letter code, e.g. "LG", "NE"
               wants:      primary motivation this adventure
               knows:      key information they hold
               voice:      speaking style, mannerisms, emotional baseline
               quote:      a single opening line capturing their personality

skillChecks -- Array of { location, check, dc, success }.
               List every explicitly stated skill check DC in the module.
               location:  which scene or area
               check:     "Ability (Skill)", e.g. "Wis (Perception)"
               dc:        the DC number as a string
               success:   what a success achieves

magicItems  -- Array of { name, rarity, attunement, summary }.
               attunement: true or false
               summary:    one-line mechanical description

downtime    -- Downtime days awarded, e.g. "5 downtime days"
renown      -- Renown awarded, e.g. "none" or "+1 Harpers renown"

statBlocks  -- Array of full stat blocks for every combat-relevant creature.
               Fields: name, cr, size, type, alignment, ac, hp, speed,
               str, dex, con, int, wis, cha  (format each as "16 (+3)"),
               saves (e.g. "Str +5, Con +4" or "" if none),
               skills (e.g. "Stealth +4" or ""),
               resist, immune, condImmune (empty string if none),
               senses (e.g. "darkvision 60 ft., passive Perception 13"),
               traits: array of { name, text }
               actions: array of { name, text }

bonusA      -- Optional bonus encounter A. If the module has none, use:
               { title: "Not Used", timing: "N/A", trigger: "N/A",
                 goal: "N/A", failEffect: "N/A", creatures: "None.",
                 mechanics: "N/A", loot: "None.", dmnote: "N/A",
                 chaseComplications: [] }

bonusB      -- Optional bonus encounter B. If the module has none, use:
               { title: "Not Used", timing: "N/A", trigger: "N/A",
                 goal: "N/A", failPenalty: "None.", creatures: "None.",
                 mechanics: "N/A", loot: "None.", failReward: "None.",
                 dmnote: "N/A" }
"""


# ==============================================================================
#  LOGGING
# ==============================================================================

def setup_logging() -> Path:
    """Create a timestamped log file and attach it alongside stdout."""
    LOG_DIR.mkdir(exist_ok=True)
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    log_file  = LOG_DIR / ("process_adventures_" + timestamp + ".log")

    fmt = "%(asctime)s  %(levelname)-8s  %(message)s"
    logging.basicConfig(
        level    = logging.INFO,
        format   = fmt,
        handlers = [
            logging.FileHandler(log_file, encoding="utf-8"),
            logging.StreamHandler(sys.stdout),
        ],
    )
    return log_file


# ==============================================================================
#  STEP 1 -- PDF -> MARKDOWN
# ==============================================================================

def _clean_text(text: str) -> str:
    """Collapse runs of blank lines (max 2) and strip trailing whitespace."""
    lines     = text.splitlines()
    cleaned   = []
    blank_run = 0
    for line in lines:
        stripped = line.rstrip()
        if stripped == "":
            blank_run += 1
            if blank_run <= 2:      # allow at most two consecutive blank lines
                cleaned.append("")
        else:
            blank_run = 0
            cleaned.append(stripped)
    return "\n".join(cleaned).strip()


def pdf_to_md(pdf_path: Path, dry_run: bool = False) -> tuple[bool, str]:
    """
    Extract text from a PDF and write it as Markdown to MD_DIR.

    Returns (success, message) -- the message is log-ready in both cases.
    """
    md_path = MD_DIR / pdf_path.with_suffix(".md").name

    if dry_run:
        return True, "[DRY RUN] Would create " + md_path.name

    try:
        pages_text: list[str] = []
        with pdfplumber.open(pdf_path) as pdf:
            total = len(pdf.pages)
            for i, page in enumerate(pdf.pages, start=1):
                text = page.extract_text(layout=True) or ""
                pages_text.append(text)
                # Overwrite the same line each page so progress is compact
                print("    page %d/%d" % (i, total), end="\r", flush=True)
        print()  # move past the progress line

        full_text  = "\n\n---\n\n".join(pages_text)
        full_text  = _clean_text(full_text)
        word_count = len(full_text.split())

        md_path.write_text(full_text, encoding="utf-8")
        return True, "Created %s  (%d pages, ~%s words)" % (
            md_path.name, total, "{:,}".format(word_count)
        )
    except OSError as exc:
        return False, "File error converting %s: %s" % (pdf_path.name, exc)
    except Exception as exc:          # pdfplumber can raise many internal types
        return False, "Error converting %s: %s" % (pdf_path.name, exc)


# ==============================================================================
#  STEP 1.5 -- MARKDOWN -> DATA.js  (Claude API)
# ==============================================================================

def _md_has_data_file(md_path: Path, data_by_code: dict[str, Path]) -> bool:
    """Return True if a DATA.js whose code appears in this MD filename exists."""
    md_key = md_path.stem.replace("-", "_").lower()
    return any(
        code.replace("-", "_").lower() in md_key
        for code in data_by_code
    )


def md_to_data(md_path: Path, dry_run: bool = False) -> tuple[bool, str, Path | None]:
    """
    Call the Claude API to generate a DATA.js file from a Markdown adventure.

    The DATA file is named after the adventure code extracted from Claude's
    response, e.g.  DDAL09_04_DATA.js.

    Returns (success, message, data_file_path_or_None).
    """
    if dry_run:
        return True, "[DRY RUN] Would call Claude API for " + md_path.name, None

    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key:
        return (
            False,
            "ANTHROPIC_API_KEY not set -- skipping AI step for " + md_path.name,
            None,
        )

    if not _ANTHROPIC_AVAILABLE:
        return (
            False,
            "anthropic package not installed (pip install anthropic) -- "
            "skipping AI step for " + md_path.name,
            None,
        )

    try:
        md_text = md_path.read_text(encoding="utf-8")
    except OSError as exc:
        return False, "Could not read %s: %s" % (md_path.name, exc), None

    try:
        print("    calling Claude API (%s) -- this takes 30-90s, please wait..." % _AI_MODEL,
              flush=True)
        t0 = time.monotonic()
        client = _anthropic.Anthropic(api_key=api_key)
        with client.messages.stream(
            model      = _AI_MODEL,
            max_tokens = 32768,
            system     = _SYSTEM_PROMPT,
            messages   = [
                {
                    "role": "user",
                    "content": (
                        "Here is the adventure module text. "
                        "Extract it into the DATA.js format described in your instructions.\n\n"
                        + md_text
                    ),
                }
            ],
        ) as stream:
            response = stream.get_final_message()
        print("    Claude responded in %s" % _elapsed(t0), flush=True)
    except _anthropic.APIError as exc:
        return False, "Claude API error for %s: %s" % (md_path.name, exc), None

    if response.stop_reason == "max_tokens":
        return False, "Claude output was truncated (hit max_tokens) for %s" % md_path.name, None

    # Pull the raw text out of the response
    raw = response.content[0].text.strip()

    # Strip any accidental markdown code fences Claude might have added
    raw = re.sub(r"^```[a-z]*\n?", "", raw, flags=re.MULTILINE)
    raw = re.sub(r"```$", "", raw.strip()).strip()

    # Make sure module.exports is present (add it if Claude forgot)
    if "module.exports" not in raw:
        raw = raw + "\n\nmodule.exports = DATA;"

    # Determine the output filename from the 'code' field in the response
    code_match = re.search(r"\bcode\s*:\s*[\"']([^\"']+)[\"']", raw)
    if code_match:
        safe = re.sub(r"[^a-z0-9]", "_", code_match.group(1), flags=re.IGNORECASE)
        out_name = safe + "_DATA.js"
    else:
        # Fall back to the MD filename stem
        out_name = md_path.stem + "_DATA.js"

    out_path = DATA_DIR / out_name
    try:
        out_path.write_text(raw, encoding="utf-8")
    except OSError as exc:
        return False, "Could not write %s: %s" % (out_name, exc), None

    tokens_used = response.usage.input_tokens + response.usage.output_tokens
    return (
        True,
        "Created %s  (%s tokens, %s)" % (out_name, "{:,}".format(tokens_used), _elapsed(t0)),
        out_path,
    )


# ==============================================================================
#  STEP 2 -- DATA FILE -> DOCX
# ==============================================================================

def _get_code_from_data_file(data_file: Path) -> str | None:
    """
    Read the 'code' value from a DATA.js file without executing it.

    Matches patterns like:
        code: "DDAL09-04",
        code: 'CCC-GHC-BK1-08',
    """
    try:
        content = data_file.read_text(encoding="utf-8")
        match   = re.search(r"\bcode[\"']?\s*:\s*[\"']([^\"']+)[\"']", content)
        return match.group(1) if match else None
    except OSError:
        return None


def _expected_docx_name(code: str) -> str:
    """Return the docx filename that build_al_ref_CONFIG.js would produce."""
    safe = re.sub(r"[^a-z0-9]", "_", code, flags=re.IGNORECASE)
    return "al_dm_reference_%s.docx" % safe


def data_to_docx(data_file: Path, dry_run: bool = False) -> tuple[bool, str]:
    """
    Call the Node.js build script to generate a docx from a DATA file.

    Returns (success, message) -- the message is log-ready in both cases.
    """
    code = _get_code_from_data_file(data_file)
    if not code:
        return False, "Could not find 'code' field in " + data_file.name

    docx_name = _expected_docx_name(code)

    if dry_run:
        return True, "[DRY RUN] Would build " + docx_name

    try:
        print("    running Node.js builder...", flush=True)
        t0 = time.monotonic()
        result = subprocess.run(
            ["node", "build_al_ref_CONFIG.js", str(data_file)],
            cwd            = ROOT,
            capture_output = True,
            text           = True,
            timeout        = 60,
            check          = False,   # we inspect returncode manually
        )
        if result.returncode != 0:
            # Prefer stderr for the error text; fall back to stdout
            err = (result.stderr or result.stdout).strip()
            return False, "Node.js error for %s: %s" % (data_file.name, err)
        return True, "Created %s  (%s)" % (docx_name, _elapsed(t0))

    except FileNotFoundError:
        return False, "node not found -- is Node.js installed and on PATH?"
    except subprocess.TimeoutExpired:
        return False, "Timed out (60 s) while processing " + data_file.name
    except OSError as exc:
        return False, "OS error for %s: %s" % (data_file.name, exc)


# ==============================================================================
#  STATUS REPORT
# ==============================================================================

def _build_status_row(
    pdf: Path,
    data_by_code: dict[str, Path],
    existing_docx: set[str],
) -> tuple[bool, bool, bool]:
    """Return (md_done, data_done, docx_done) for a single PDF."""
    md_done = (MD_DIR / pdf.with_suffix(".md").name).exists()

    # Check whether any DATA file's code appears in the PDF stem
    pdf_key = pdf.stem.replace("-", "_").lower()
    matched_code = next(
        (code for code in data_by_code
         if code.replace("-", "_").lower() in pdf_key),
        None,
    )
    data_done = matched_code is not None
    docx_done = (
        data_done and
        _expected_docx_name(matched_code) in existing_docx
    )
    return md_done, data_done, docx_done


def print_status() -> None:
    """
    Print a table showing every PDF and which pipeline stages are complete.

    Stages:
      MD    Markdown extracted (Step 1)
      DATA  DATA.js generated  (Step 1.5)
      DOCX  docx built         (Step 2)
    """
    pdfs = sorted(PDF_DIR.glob("*.pdf"))
    if not pdfs:
        print("No PDFs found in", PDF_DIR)
        return

    existing_docx: set[str] = {p.name for p in REF_DIR.glob("*.docx")}

    # Map code -> data file path for every DATA.js found
    data_by_code: dict[str, Path] = {}
    for df in DATA_DIR.glob("*_DATA.js"):
        code = _get_code_from_data_file(df)
        if code:
            data_by_code[code] = df

    print("\n%-65s  %4s  %5s  %5s" % ("PDF FILE", "MD", "DATA", "DOCX"))
    print("-" * 85)
    for pdf in pdfs:
        md_done, data_done, docx_done = _build_status_row(
            pdf, data_by_code, existing_docx
        )
        print("%-65s  %4s  %5s  %5s" % (
            pdf.name,
            " OK " if md_done   else " -- ",
            " OK " if data_done else " -- ",
            " OK " if docx_done else " -- ",
        ))
    print()


# ==============================================================================
#  PIPELINE STEP RUNNERS
# ==============================================================================

def _run_pdf_step(
    args: argparse.Namespace,
    stats: dict[str, int],
    log: logging.Logger,
) -> None:
    """Step 1: convert any PDF that does not yet have a Markdown file."""
    pdfs = sorted(PDF_DIR.glob("*.pdf"))
    log.info("Step 1 (PDF -> MD): found %d PDF(s) in '%s/'", len(pdfs), PDF_DIR.name)

    for pdf in pdfs:
        md_path = MD_DIR / pdf.with_suffix(".md").name

        if md_path.exists() and not args.force:
            log.info("  SKIP   %s  (MD already exists)", pdf.name)
            stats["pdf_skipped"] += 1
            continue

        log.info("  PDF->MD  %s", pdf.name)
        ok, msg = pdf_to_md(pdf, dry_run=args.dry_run)

        if ok:
            log.info("    OK   %s", msg)
            stats["pdf_converted"] += 1
        else:
            log.error("    FAIL %s", msg)
            stats["pdf_failed"] += 1


def _run_ai_step(
    args: argparse.Namespace,
    stats: dict[str, int],
    log: logging.Logger,
) -> None:
    """
    Step 1.5: for every MD file that has no matching DATA.js, call the Claude
    API to generate one.
    """
    mds = sorted(MD_DIR.glob("*.md"))
    log.info("Step 1.5 (MD -> DATA via Claude API): found %d MD file(s)", len(mds))

    # Build current code -> path map so we can check what already exists
    data_by_code: dict[str, Path] = {}
    for df in DATA_DIR.glob("*_DATA.js"):
        code = _get_code_from_data_file(df)
        if code:
            data_by_code[code] = df

    for md_path in mds:
        if _md_has_data_file(md_path, data_by_code) and not args.force:
            log.info("  SKIP   %s  (DATA.js already exists)", md_path.name)
            stats["ai_skipped"] += 1
            continue

        log.info("  MD->DATA  %s", md_path.name)
        ok, msg, new_data_file = md_to_data(md_path, dry_run=args.dry_run)

        if ok:
            log.info("    OK   %s", msg)
            stats["ai_generated"] += 1
            # Register the new file so later MDs don't duplicate it
            if new_data_file:
                new_code = _get_code_from_data_file(new_data_file)
                if new_code:
                    data_by_code[new_code] = new_data_file
        else:
            log.error("    FAIL %s", msg)
            stats["ai_failed"] += 1


def _run_docx_step(
    args: argparse.Namespace,
    stats: dict[str, int],
    log: logging.Logger,
) -> None:
    """Step 2: build any docx whose DATA file exists but whose docx does not."""
    data_files = sorted(DATA_DIR.glob("*_DATA.js"))
    log.info("Step 2 (DATA -> docx): found %d DATA file(s) in '%s/'",
             len(data_files), DATA_DIR.name)

    for data_file in data_files:
        code = _get_code_from_data_file(data_file)

        if not code:
            log.warning("  SKIP   %s  (no 'code' field found)", data_file.name)
            stats["docx_skipped"] += 1
            continue

        docx_path = REF_DIR / _expected_docx_name(code)

        if docx_path.exists() and not args.force:
            log.info("  SKIP   %s  (docx exists: %s)", data_file.name, docx_path.name)
            stats["docx_skipped"] += 1
            continue

        log.info("  DATA->docx  %s  (code: %s)", data_file.name, code)
        ok, msg = data_to_docx(data_file, dry_run=args.dry_run)

        if ok:
            log.info("    OK   %s", msg)
            stats["docx_built"] += 1
        else:
            log.error("    FAIL %s", msg)
            stats["docx_failed"] += 1


def docx_to_pdf(docx_path: Path, dry_run: bool = False) -> tuple[bool, str]:
    """
    Convert a docx file to PDF using Microsoft Word (via docx2pdf).

    The PDF is written to PDF_OUT with the same base name as the docx.
    Returns (success, message).
    """
    pdf_path = PDF_OUT / docx_path.with_suffix(".pdf").name

    if dry_run:
        return True, "[DRY RUN] Would create " + pdf_path.name

    if not _DOCX2PDF_AVAILABLE:
        return (
            False,
            "docx2pdf not installed (pip install docx2pdf) -- "
            "skipping PDF export for " + docx_path.name,
        )

    try:
        print("    exporting via Word (may take a few seconds)...", flush=True)
        t0 = time.monotonic()
        # convert() accepts str paths; it drives Word silently on Windows
        _docx2pdf.convert(str(docx_path), str(pdf_path))
        return True, "Created %s  (%s)" % (pdf_path.name, _elapsed(t0))
    except Exception as exc:
        return False, "PDF export failed for %s: %s" % (docx_path.name, exc)


def _run_pdf_out_step(
    args: argparse.Namespace,
    stats: dict[str, int],
    log: logging.Logger,
) -> None:
    """Step 3: convert any docx in Adventure References/ that has no PDF yet."""
    docx_files = sorted(REF_DIR.glob("al_dm_reference_*.docx"))
    log.info("Step 3 (docx -> PDF): found %d docx file(s) in '%s/'",
             len(docx_files), REF_DIR.name)

    for docx_path in docx_files:
        pdf_path = PDF_OUT / docx_path.with_suffix(".pdf").name

        if pdf_path.exists() and not args.force:
            log.info("  SKIP   %s  (PDF already exists)", docx_path.name)
            stats["pdf_out_skipped"] += 1
            continue

        log.info("  docx->PDF  %s", docx_path.name)
        ok, msg = docx_to_pdf(docx_path, dry_run=args.dry_run)

        if ok:
            log.info("    OK   %s", msg)
            stats["pdf_out_created"] += 1
        else:
            log.error("    FAIL %s", msg)
            stats["pdf_out_failed"] += 1


def _log_summary(
    stats: dict[str, int],
    log_file: Path,
    log: logging.Logger,
) -> None:
    """Print a summary and remind the user about PDFs with no DATA file."""
    log.info("=" * 60)
    log.info("SUMMARY")
    log.info(
        "  Step 1   PDF  -> MD  :  converted %d  |  skipped %d  |  failed %d",
        stats["pdf_converted"], stats["pdf_skipped"], stats["pdf_failed"],
    )
    log.info(
        "  Step 1.5 MD   -> DATA:  generated %d  |  skipped %d  |  failed %d",
        stats["ai_generated"], stats["ai_skipped"], stats["ai_failed"],
    )
    log.info(
        "  Step 2   DATA -> docx:  built %d     |  skipped %d  |  failed %d",
        stats["docx_built"], stats["docx_skipped"], stats["docx_failed"],
    )
    log.info(
        "  Step 3   docx -> PDF :  created %d   |  skipped %d  |  failed %d",
        stats["pdf_out_created"], stats["pdf_out_skipped"], stats["pdf_out_failed"],
    )
    log.info("  Full log: %s", log_file)

    # Identify PDFs that have no matching DATA file yet
    all_codes = {
        _get_code_from_data_file(df)
        for df in DATA_DIR.glob("*_DATA.js")
    } - {None}

    waiting = [
        pdf for pdf in sorted(PDF_DIR.glob("*.pdf"))
        if not any(
            code.replace("-", "_").lower() in pdf.stem.replace("-", "_").lower()
            for code in all_codes
        )
    ]
    if waiting:
        log.info("=" * 60)
        log.info(
            "  %d PDF(s) still have no DATA file (run --status for full table):",
            len(waiting),
        )
        for pdf in waiting:
            log.info("    %s", pdf.name)


# ==============================================================================
#  MAIN
# ==============================================================================

def main() -> None:
    """Parse arguments and run the adventure processing pipeline."""
    parser = argparse.ArgumentParser(
        description     = "Batch DDAL adventure reference pipeline (PDF -> MD -> DATA -> docx)",
        formatter_class = argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "--force",     action="store_true",
        help="Re-process files even when the output already exists",
    )
    parser.add_argument(
        "--pdf-only",  action="store_true",
        help="Only run Step 1 (PDF -> Markdown)",
    )
    parser.add_argument(
        "--ai-only",   action="store_true",
        help="Only run Step 1.5 (Markdown -> DATA.js via Claude API)",
    )
    parser.add_argument(
        "--docx-only", action="store_true",
        help="Only run Step 2 (DATA -> docx)",
    )
    parser.add_argument(
        "--skip-ai",      action="store_true",
        help="Skip the Claude API step (Step 1.5)",
    )
    parser.add_argument(
        "--pdf-out-only", action="store_true",
        help="Only run Step 3 (docx -> PDF)",
    )
    parser.add_argument(
        "--skip-pdf-out", action="store_true",
        help="Skip the PDF export step (Step 3)",
    )
    parser.add_argument(
        "--dry-run",   action="store_true",
        help="Show what would be processed without writing any files",
    )
    parser.add_argument(
        "--status",    action="store_true",
        help="Print pipeline status for every PDF and exit",
    )
    args = parser.parse_args()

    # --status is a quick read-only report; no log file needed
    if args.status:
        print_status()
        return

    log_file = setup_logging()
    log      = logging.getLogger()

    if args.dry_run:
        log.info("DRY RUN - no files will be written")

    # Warn early if the AI step will be needed but the key is missing
    run_ai = not args.skip_ai and not args.pdf_only and not args.docx_only
    if args.ai_only:
        run_ai = True
    if run_ai and not os.environ.get("ANTHROPIC_API_KEY"):
        log.warning(
            "ANTHROPIC_API_KEY not set -- Step 1.5 (MD -> DATA) will be skipped. "
            "Set the key and re-run, or use --skip-ai to suppress this warning."
        )

    # Ensure output directories exist before we start writing
    MD_DIR.mkdir(exist_ok=True)
    DATA_DIR.mkdir(exist_ok=True)
    REF_DIR.mkdir(exist_ok=True)
    PDF_OUT.mkdir(exist_ok=True)

    stats: dict[str, int] = {
        "pdf_converted": 0, "pdf_skipped": 0, "pdf_failed":  0,
        "ai_generated":  0, "ai_skipped":  0, "ai_failed":   0,
        "docx_built":    0, "docx_skipped":    0, "docx_failed":    0,
        "pdf_out_created": 0, "pdf_out_skipped": 0, "pdf_out_failed": 0,
    }

    # Determine which steps to run based on flags
    only_one = args.pdf_only or args.ai_only or args.docx_only or args.pdf_out_only
    do_pdf     = not only_one or args.pdf_only
    do_ai      = run_ai and (not only_one or args.ai_only)
    do_docx    = (not only_one or args.docx_only) and not args.pdf_only and not args.ai_only
    do_pdf_out = (not only_one or args.pdf_out_only) and not args.skip_pdf_out \
                 and not args.pdf_only and not args.ai_only

    if do_pdf:
        _run_pdf_step(args, stats, log)

    if do_ai:
        _run_ai_step(args, stats, log)

    if do_docx:
        _run_docx_step(args, stats, log)

    if do_pdf_out:
        _run_pdf_out_step(args, stats, log)

    _log_summary(stats, log_file, log)


if __name__ == "__main__":
    main()
