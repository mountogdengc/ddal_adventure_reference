"""
pdf_to_md.py — Extract text from an OCR'd PDF into a Markdown file.

Usage:
  - Drag and drop a PDF onto this script (Windows/macOS)
  - Or run:  python pdf_to_md.py path/to/file.pdf

Output:
  Creates a .md file in the same folder as the PDF, with the same base name.
  Example: my_document.pdf → my_document.md
"""

import sys
import re
from pathlib import Path

try:
    import pdfplumber
except ImportError:
    print("Missing dependency. Please run:  pip install pdfplumber")
    sys.exit(1)


def clean_text(text: str) -> str:
    """Light cleanup: collapse excessive blank lines, strip trailing whitespace."""
    lines = text.splitlines()
    cleaned = []
    blank_run = 0
    for line in lines:
        stripped = line.rstrip()
        if stripped == "":
            blank_run += 1
            if blank_run <= 2:          # Allow at most two consecutive blank lines
                cleaned.append("")
        else:
            blank_run = 0
            cleaned.append(stripped)
    return "\n".join(cleaned).strip()


def pdf_to_md(pdf_path: Path) -> Path:
    # Output goes to the "Adventure MD" folder next to this script
    out_dir = Path(__file__).parent / "Adventure MD"
    out_dir.mkdir(exist_ok=True)
    md_path = out_dir / pdf_path.with_suffix(".md").name

    pages_text = []
    with pdfplumber.open(pdf_path) as pdf:
        total = len(pdf.pages)
        print(f"Processing {total} page(s)...")
        for i, page in enumerate(pdf.pages, start=1):
            text = page.extract_text(layout=True) or ""
            pages_text.append(text)
            print(f"  Page {i}/{total}", end="\r")

    print()  # newline after progress

    # Join pages with a clear separator
    full_text = "\n\n---\n\n".join(pages_text)
    full_text = clean_text(full_text)

    md_path.write_text(full_text, encoding="utf-8")
    return md_path


def main():
    if len(sys.argv) < 2:
        print("Usage: python pdf_to_md.py <path_to_pdf>")
        print("       (or drag and drop a PDF onto this script)")
        sys.exit(1)

    pdf_path = Path(sys.argv[1]).resolve()

    if not pdf_path.exists():
        print(f"Error: File not found — {pdf_path}")
        sys.exit(1)

    if pdf_path.suffix.lower() != ".pdf":
        print(f"Error: Expected a .pdf file, got '{pdf_path.suffix}'")
        sys.exit(1)

    print(f"Input : {pdf_path}")
    md_path = pdf_to_md(pdf_path)
    print(f"Output: {md_path}")
    print("Done.")


if __name__ == "__main__":
    main()