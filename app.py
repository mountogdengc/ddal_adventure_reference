"""
app.py -- Web UI for the DDAL Adventure Reference pipeline

Run:   python app.py
Then open:  http://localhost:5001

The UI shows a live status table for every adventure PDF, lets you trigger
any pipeline step with a button click, and streams the log output to the
browser in real time via Server-Sent Events.
"""

import json
import re
import sys
import threading
import subprocess
from pathlib import Path

try:
    from flask import Flask, Response, jsonify, request, stream_with_context
except ImportError:
    print("Missing dependency. Please run:  pip install flask")
    sys.exit(1)

# ── Directory layout (mirrors process_adventures.py) ──────────────────────────
ROOT     = Path(__file__).parent
PDF_DIR  = ROOT / "Adventure pdfs"
MD_DIR   = ROOT / "Adventure MD"
DATA_DIR = ROOT / "Adventure Data"
REF_DIR  = ROOT / "Adventure References"
PDF_OUT  = ROOT / "Reference PDF"

# ── Concurrency guard — only one pipeline run at a time ───────────────────────
_running    = False
_run_lock   = threading.Lock()

app = Flask(__name__)


# ==============================================================================
#  STATUS HELPERS  (duplicated from process_adventures.py to avoid import side-effects)
# ==============================================================================

def _code_from_data_file(data_file: Path) -> str | None:
    try:
        m = re.search(r"\bcode[\"']?\s*:\s*[\"']([^\"']+)[\"']",
                      data_file.read_text(encoding="utf-8"))
        return m.group(1) if m else None
    except OSError:
        return None


def _docx_name(code: str) -> str:
    return "al_dm_reference_%s.docx" % re.sub(r"[^a-z0-9]", "_", code, flags=re.IGNORECASE)


def _pdf_name(code: str) -> str:
    return "al_dm_reference_%s.pdf" % re.sub(r"[^a-z0-9]", "_", code, flags=re.IGNORECASE)


def get_status() -> list[dict]:
    """Return a list of adventure dicts with pipeline stage flags."""
    pdfs          = sorted(PDF_DIR.glob("*.pdf"))  if PDF_DIR.exists()  else []
    existing_docx = {p.name for p in REF_DIR.glob("*.docx")} if REF_DIR.exists() else set()
    existing_pdf  = {p.name for p in PDF_OUT.glob("*.pdf")}  if PDF_OUT.exists() else set()

    data_by_code: dict[str, Path] = {}
    if DATA_DIR.exists():
        for df in DATA_DIR.glob("*_DATA.js"):
            code = _code_from_data_file(df)
            if code:
                data_by_code[code] = df

    adventures = []
    for pdf in pdfs:
        md_done = MD_DIR.exists() and (MD_DIR / pdf.with_suffix(".md").name).exists()

        pdf_key      = pdf.stem.replace("-", "_").lower()
        matched_code = next(
            (c for c in data_by_code if c.replace("-", "_").lower() in pdf_key), None
        )
        data_done = matched_code is not None
        docx_done = data_done and _docx_name(matched_code) in existing_docx
        pdf_done  = data_done and _pdf_name(matched_code)  in existing_pdf

        adventures.append({
            "pdf":     pdf.name,
            "md":      md_done,
            "data":    data_done,
            "docx":    docx_done,
            "pdf_out": pdf_done,
        })
    return adventures


# ==============================================================================
#  API ROUTES
# ==============================================================================

@app.route("/api/status")
def api_status():
    return jsonify(get_status())


@app.route("/api/running")
def api_running():
    return jsonify({"running": _running})


@app.route("/api/run")
def api_run():
    """
    Start a pipeline run and stream its output via Server-Sent Events.

    Query params:  flag=--force&flag=--pdf-only  (repeat 'flag' for each flag)
    """
    global _running

    with _run_lock:
        if _running:
            return jsonify({"error": "A run is already in progress"}), 409
        _running = True

    flags = request.args.getlist("flag")

    def generate():
        global _running
        try:
            proc = subprocess.Popen(
                [sys.executable, "process_adventures.py"] + flags,
                stdout    = subprocess.PIPE,
                stderr    = subprocess.STDOUT,
                text      = True,
                cwd       = ROOT,
                bufsize   = 1,   # line-buffered
            )
            for line in proc.stdout:
                yield "data: %s\n\n" % json.dumps({"text": line.rstrip()})
            proc.wait()
            yield "data: %s\n\n" % json.dumps({"done": True, "code": proc.returncode})
        finally:
            _running = False

    return Response(
        stream_with_context(generate()),
        mimetype = "text/event-stream",
        headers  = {"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


# ==============================================================================
#  MAIN PAGE
# ==============================================================================

@app.route("/")
def index():
    return HTML


# ==============================================================================
#  HTML / CSS / JS  (single-file, no external dependencies)
# ==============================================================================

HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DDAL Adventure Reference</title>
<style>
  /* ── Reset & base ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #1a1a1a; color: #ddd;
    font-family: Arial, sans-serif; font-size: 14px;
    min-height: 100vh;
  }

  /* ── Header ── */
  header {
    background: #3E0000;
    padding: 18px 28px;
    display: flex; align-items: center; gap: 16px;
    border-bottom: 3px solid #7B1C1C;
  }
  header h1 { color: #fff; font-size: 20px; letter-spacing: 1px; }
  header .subtitle { color: #bbb; font-size: 12px; margin-top: 2px; }

  /* ── Layout ── */
  .main { padding: 20px 28px; display: grid; gap: 20px; }

  /* ── Card ── */
  .card {
    background: #242424; border: 1px solid #333;
    border-radius: 6px; padding: 16px;
  }
  .card-title {
    font-size: 12px; font-weight: bold; letter-spacing: 1px;
    color: #C4962A; text-transform: uppercase; margin-bottom: 12px;
  }

  /* ── Status table ── */
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th {
    background: #3E0000; color: #fff; font-size: 11px; letter-spacing: 1px;
    text-align: left; padding: 8px 10px; border-bottom: 2px solid #7B1C1C;
  }
  td { padding: 7px 10px; border-bottom: 1px solid #2d2d2d; }
  tr:hover td { background: #2a2a2a; }
  .pdf-name { color: #ccc; max-width: 400px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* ── Stage badges ── */
  .badge {
    display: inline-block; width: 36px; text-align: center;
    padding: 2px 0; border-radius: 3px; font-size: 11px; font-weight: bold;
  }
  .badge-ok   { background: #1a3d1a; color: #5cb85c; }
  .badge-no   { background: #2d2d2d; color: #555; }

  /* ── Controls ── */
  .controls { display: flex; flex-direction: column; gap: 12px; }
  .flag-row  { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
  .flag-label {
    display: flex; align-items: center; gap: 6px;
    cursor: pointer; font-size: 13px; color: #bbb;
    user-select: none;
  }
  .flag-label input[type=checkbox] { accent-color: #7B1C1C; width: 14px; height: 14px; }
  .flag-label.danger { color: #e07070; }

  .btn-row  { display: flex; flex-wrap: wrap; gap: 10px; }
  .btn {
    padding: 8px 18px; border: none; border-radius: 4px;
    font-size: 13px; font-weight: bold; cursor: pointer;
    transition: opacity .15s, transform .1s;
  }
  .btn:hover:not(:disabled) { opacity: .85; }
  .btn:active:not(:disabled) { transform: scale(.97); }
  .btn:disabled { opacity: .35; cursor: not-allowed; }
  .btn-primary { background: #7B1C1C; color: #fff; }
  .btn-secondary { background: #333; color: #ccc; border: 1px solid #444; }
  .btn-sm { padding: 5px 12px; font-size: 12px; }
  .btn-refresh { background: #1a3333; color: #5cb8b8; border: 1px solid #2a5555; }

  /* ── Log console ── */
  .log-toolbar {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 8px;
  }
  #log {
    background: #0d0d0d; border: 1px solid #2d2d2d; border-radius: 4px;
    padding: 10px 14px; height: 380px; overflow-y: auto;
    font-family: "Consolas", "Courier New", monospace; font-size: 12px;
    line-height: 1.6;
  }
  .log-line       { color: #aaa; white-space: pre-wrap; word-break: break-all; }
  .log-line.ok    { color: #5cb85c; }
  .log-line.fail  { color: #e05c5c; }
  .log-line.skip  { color: #666; }
  .log-line.warn  { color: #c4962a; }
  .log-line.info  { color: #5c9be0; }
  .log-line.wait  { color: #999; font-style: italic; }
  .log-empty      { color: #444; font-style: italic; }

  /* ── Status bar ── */
  #status-bar {
    font-size: 12px; color: #888; padding: 6px 0 0;
    display: flex; gap: 16px; align-items: center;
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .dot-idle    { background: #444; }
  .dot-running { background: #c4962a; animation: pulse .8s infinite alternate; }
  .dot-ok      { background: #5cb85c; }
  .dot-fail    { background: #e05c5c; }
  @keyframes pulse { from { opacity: .4; } to { opacity: 1; } }

  /* ── Divider ── */
  .section-label {
    font-size: 11px; color: #7B1C1C; font-weight: bold;
    letter-spacing: 1px; text-transform: uppercase;
    border-left: 3px solid #7B1C1C; padding-left: 8px; margin-bottom: 8px;
  }
</style>
</head>
<body>

<header>
  <div>
    <h1>DDAL Adventure Reference</h1>
    <div class="subtitle">Pipeline: PDF &rarr; Markdown &rarr; DATA.js (Claude API) &rarr; docx &rarr; PDF</div>
  </div>
</header>

<div class="main">

  <!-- Status Table -->
  <div class="card">
    <div class="card-title" style="display:flex;justify-content:space-between;align-items:center">
      <span>Adventure Status</span>
      <button class="btn btn-refresh btn-sm" onclick="refreshStatus()">Refresh</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>PDF FILE</th>
          <th style="width:56px;text-align:center">MD</th>
          <th style="width:56px;text-align:center">DATA</th>
          <th style="width:56px;text-align:center">DOCX</th>
          <th style="width:56px;text-align:center">PDF</th>
        </tr>
      </thead>
      <tbody id="status-tbody">
        <tr><td colspan="5" style="color:#555;text-align:center;padding:20px">Loading&hellip;</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Controls -->
  <div class="card controls">
    <div class="section-label">Options</div>
    <div class="flag-row">
      <label class="flag-label danger">
        <input type="checkbox" id="opt-force">
        Force (overwrite existing outputs)
      </label>
      <label class="flag-label">
        <input type="checkbox" id="opt-skip-ai">
        Skip AI step
      </label>
      <label class="flag-label">
        <input type="checkbox" id="opt-skip-pdf">
        Skip PDF export
      </label>
      <label class="flag-label">
        <input type="checkbox" id="opt-dryrun">
        Dry run (preview only)
      </label>
    </div>

    <div class="section-label" style="margin-top:4px">Run Pipeline</div>
    <div class="btn-row" id="btn-row">
      <button class="btn btn-primary" onclick="runPipeline([])">Run All Steps</button>
      <button class="btn btn-secondary" onclick="runPipeline(['--pdf-only'])">Step 1 — PDF &rarr; MD</button>
      <button class="btn btn-secondary" onclick="runPipeline(['--ai-only'])">Step 1.5 — MD &rarr; DATA (AI)</button>
      <button class="btn btn-secondary" onclick="runPipeline(['--docx-only'])">Step 2 — DATA &rarr; docx</button>
      <button class="btn btn-secondary" onclick="runPipeline(['--pdf-out-only'])">Step 3 — docx &rarr; PDF</button>
    </div>
  </div>

  <!-- Log -->
  <div class="card">
    <div class="log-toolbar">
      <div class="card-title" style="margin:0">Live Log</div>
      <div style="display:flex;gap:8px">
        <label class="flag-label" style="font-size:12px">
          <input type="checkbox" id="opt-autoscroll" checked>
          Auto-scroll
        </label>
        <button class="btn btn-secondary btn-sm" onclick="clearLog()">Clear</button>
      </div>
    </div>
    <div id="log"><span class="log-empty">No run yet. Click a pipeline button above.</span></div>
    <div id="status-bar">
      <span><span class="dot dot-idle" id="status-dot"></span></span>
      <span id="status-text">Idle</span>
    </div>
  </div>

</div><!-- .main -->

<script>
// ── State ────────────────────────────────────────────────────────────────────
let running = false;
let currentES = null;

// ── Helpers ──────────────────────────────────────────────────────────────────
function badge(ok) {
  return ok
    ? '<span class="badge badge-ok">OK</span>'
    : '<span class="badge badge-no">--</span>';
}

function setRunning(state) {
  running = state;
  const dot  = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  const btns = document.querySelectorAll('#btn-row .btn');

  dot.className  = 'dot ' + (state ? 'dot-running' : 'dot-idle');
  text.textContent = state ? 'Running...' : 'Idle';
  btns.forEach(b => b.disabled = state);
}

function setStatusDone(code) {
  const dot  = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  dot.className    = 'dot ' + (code === 0 ? 'dot-ok' : 'dot-fail');
  text.textContent = code === 0 ? 'Completed successfully' : 'Finished with errors (see log)';
}

// ── Log ──────────────────────────────────────────────────────────────────────
function clearLog() {
  document.getElementById('log').innerHTML = '';
}

function appendLog(text) {
  const log = document.getElementById('log');

  // Remove the "No run yet" placeholder if it's still there
  const empty = log.querySelector('.log-empty');
  if (empty) empty.remove();

  const line = document.createElement('div');
  line.className = 'log-line';

  const t = text.toUpperCase();
  if (t.includes('FAIL') || t.includes('ERROR'))    line.classList.add('fail');
  else if (t.includes('  OK ') || t.includes('OK ')) line.classList.add('ok');
  else if (t.includes('SKIP'))                       line.classList.add('skip');
  else if (t.includes('WARNING'))                    line.classList.add('warn');
  else if (t.includes('STEP ') || t.includes('INFO'))line.classList.add('info');
  else if (t.includes('PLEASE WAIT') || t.includes('CALLING') || t.includes('RUNNING') || t.includes('EXPORTING'))
                                                     line.classList.add('wait');

  line.textContent = text;
  log.appendChild(line);

  if (document.getElementById('opt-autoscroll').checked) {
    log.scrollTop = log.scrollHeight;
  }
}

// ── Status table ─────────────────────────────────────────────────────────────
async function refreshStatus() {
  try {
    const resp = await fetch('/api/status');
    const data = await resp.json();
    const tbody = document.getElementById('status-tbody');

    if (!data.length) {
      tbody.innerHTML = '<tr><td colspan="5" style="color:#555;text-align:center;padding:20px">No PDFs found in "Adventure pdfs/"</td></tr>';
      return;
    }

    tbody.innerHTML = data.map(a => `
      <tr>
        <td class="pdf-name" title="${a.pdf}">${a.pdf}</td>
        <td style="text-align:center">${badge(a.md)}</td>
        <td style="text-align:center">${badge(a.data)}</td>
        <td style="text-align:center">${badge(a.docx)}</td>
        <td style="text-align:center">${badge(a.pdf_out)}</td>
      </tr>`).join('');
  } catch(e) {
    console.error('Status fetch failed:', e);
  }
}

// ── Pipeline run ──────────────────────────────────────────────────────────────
function runPipeline(stepFlags) {
  if (running) return;

  // Collect option flags from checkboxes
  const flags = [...stepFlags];
  if (document.getElementById('opt-force').checked)   flags.push('--force');
  if (document.getElementById('opt-skip-ai').checked) flags.push('--skip-ai');
  if (document.getElementById('opt-skip-pdf').checked)flags.push('--skip-pdf-out');
  if (document.getElementById('opt-dryrun').checked)  flags.push('--dry-run');

  // Build query string
  const qs = flags.map(f => 'flag=' + encodeURIComponent(f)).join('&');

  clearLog();
  setRunning(true);
  appendLog('Starting: python process_adventures.py ' + flags.join(' '));
  appendLog('');

  if (currentES) { currentES.close(); currentES = null; }

  const es = new EventSource('/api/run?' + qs);
  currentES = es;

  es.onmessage = function(e) {
    const msg = JSON.parse(e.data);
    if (msg.done) {
      es.close();
      currentES = null;
      setRunning(false);
      setStatusDone(msg.code);
      refreshStatus();
      appendLog('');
      appendLog(msg.code === 0 ? '=== Run complete ===' : '=== Run finished with errors ===');
    } else {
      appendLog(msg.text);
    }
  };

  es.onerror = function() {
    es.close();
    currentES = null;
    setRunning(false);
    appendLog('');
    appendLog('ERROR: Lost connection to server. Is app.py still running?');
    const dot  = document.getElementById('status-dot');
    const text = document.getElementById('status-text');
    dot.className    = 'dot dot-fail';
    text.textContent = 'Connection lost';
  };
}

// ── Init ─────────────────────────────────────────────────────────────────────
refreshStatus();
// Refresh status every 30 s in case files changed outside the UI
setInterval(refreshStatus, 30000);
</script>

</body>
</html>
"""


# ==============================================================================
#  ENTRY POINT
# ==============================================================================

if __name__ == "__main__":
    port = 5001
    print("DDAL Adventure Reference UI")
    print("Open in browser:  http://localhost:%d" % port)
    print("Press Ctrl+C to stop.")
    app.run(host="127.0.0.1", port=port, debug=False, threaded=True)
