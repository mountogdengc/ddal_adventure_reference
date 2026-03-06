# DDAL Adventure Reference Generator

Fully automated pipeline that turns D&D Adventurers League module PDFs into
print-ready DM quick-reference sheets (docx + PDF).

```
Adventure pdfs/   →   Adventure MD/   →   Adventure Data/   →   Adventure References/   →   Reference PDF/
   (source PDF)       (raw text)          (structured JS)          (formatted docx)           (final PDF)
   Step 1              Step 1.5              Step 2                   Step 3
   pdfplumber          Claude API            Node.js / docx           docx2pdf / Word
```

---

## Prerequisites

| Tool | Version | Install |
|---|---|---|
| Python | 3.10+ | python.org |
| Node.js | 18+ | nodejs.org |
| Microsoft Word | Any | Required for Step 3 PDF export |

### Python packages

```
pip install pdfplumber anthropic docx2pdf
```

### Node packages

```
npm install
```
(Installs the `docx` package listed in `package.json`.)

### Anthropic API key (required for Step 1.5 only)

Get your key at **console.anthropic.com** → API Keys.

Set it as a permanent environment variable (restart terminal after):

```
setx ANTHROPIC_API_KEY "sk-ant-..."
```

Step 1.5 is skipped automatically if the key is not set. All other steps work
without it.

---

## Folder Structure

```
DDAL Adventure Reference/
│
├── Adventure pdfs/          ← DROP SOURCE PDFs HERE
├── Adventure MD/            ← auto-generated raw text (Step 1 output)
├── Adventure Data/          ← structured JS data files (Step 1.5 output, edit as needed)
├── Adventure References/    ← formatted docx files (Step 2 output)
├── Reference PDF/           ← final PDFs ready to print (Step 3 output)
│
├── logs/                    ← timestamped log file for every run
│
├── process_adventures.py    ← MAIN SCRIPT — run this
├── build_al_ref_CONFIG.js   ← docx builder (called by the main script)
├── pdf_to_md.py             ← standalone PDF extractor (used inside main script)
├── package.json
└── README.md
```

---

## Basic Usage

**Full pipeline — process everything new, skip existing outputs:**
```
python process_adventures.py
```

**Check what has and hasn't been processed yet:**
```
python process_adventures.py --status
```

**Preview what would happen without writing any files:**
```
python process_adventures.py --dry-run
```

---

## All Flags

| Flag | Steps run | Description |
|---|---|---|
| *(none)* | 1 → 1.5 → 2 → 3 | Full pipeline, skip existing outputs |
| `--force` | 1 → 1.5 → 2 → 3 | Re-process everything, overwrite existing outputs |
| `--pdf-only` | 1 | PDF → Markdown only |
| `--ai-only` | 1.5 | Markdown → DATA.js only (needs API key) |
| `--docx-only` | 2 | DATA.js → docx only |
| `--pdf-out-only` | 3 | docx → PDF only |
| `--skip-ai` | 1, 2, 3 | Skip the Claude API step |
| `--skip-pdf-out` | 1, 1.5, 2 | Skip the PDF export step |
| `--dry-run` | — | Print what would happen, write nothing |
| `--status` | — | Show pipeline status table and exit |

---

## Adding a New Adventure

1. Drop the PDF into `Adventure pdfs/`
2. Run `python process_adventures.py`
3. Review the generated `Adventure Data/<code>_DATA.js` — Claude does a good
   job but check stat blocks carefully (PDF formatting makes numbers hard to
   parse reliably)
4. If you edited the DATA file, re-run `python process_adventures.py` to
   rebuild the docx and PDF (existing outputs are overwritten only with `--force`)

To rebuild a single adventure after editing its DATA file:

```
node build_al_ref_CONFIG.js "Adventure Data/DDAL09_04_DATA.js"
```

This writes the docx directly to `Adventure References/`. Then convert to PDF:

```
python process_adventures.py --pdf-out-only
```

---

## DATA File Format

Each file in `Adventure Data/` is a plain JavaScript object. The field names
are self-documenting. The file **must** end with:

```js
module.exports = DATA;
```

The generated docx filename is derived from the `code` field:
- `code: "DDAL09-04"` → `al_dm_reference_DDAL09_04.docx`

---

## Manual DATA File (without Claude API)

If you prefer to fill in the DATA yourself (or don't have an API key):

1. Copy the template from the top of `build_al_ref_CONFIG.js`
2. Save it as `Adventure Data/<adventure_name>_DATA.js`
3. Fill in each field, referring to the open PDF alongside
4. Add `module.exports = DATA;` at the bottom
5. Run `python process_adventures.py --docx-only`

---

## Log Files

Every run writes a timestamped log to `logs/`. Logs include:

- Which files were processed, skipped, or failed
- Page count and word count for each PDF conversion
- Token count for each Claude API call
- A reminder of which PDFs still have no DATA file

Log filenames: `process_adventures_YYYY-MM-DD_HH-MM-SS.log`

---

## Tips

- **Re-running is safe.** Every step checks for existing output before running.
  Only use `--force` when you want to overwrite.

- **Claude's stat blocks need checking.** pdfplumber extracts PDF text as plain
  characters; formatted tables get mangled. Numbers are usually correct but
  alignment of multi-column stat blocks can be off. Always skim the DATA file
  before building the final docx.

- **The docx is editable.** Open it in Word to make last-minute tweaks before
  running `--pdf-out-only` to export the final PDF.

- **Token cost.** A typical 2-hour AL module (20–40 pages) uses roughly
  15,000–30,000 input tokens and 3,000–5,000 output tokens with `claude-opus-4-6`.
  At current pricing that's under $0.50 per adventure.

- **Model.** The AI model is set by the `_AI_MODEL` constant near the top of
  `process_adventures.py`. Swap to `claude-sonnet-4-6` for faster, cheaper
  generation if you find Opus overkill for this task.
