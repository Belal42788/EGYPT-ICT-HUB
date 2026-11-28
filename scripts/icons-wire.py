#!/usr/bin/env python3
"""Wire the icon system (assets/css/icons.css + assets/js/icons.js) into lesson and landing pages.

Idempotent: pages that already load icons.css are skipped. Safe to run after a
branch merge or a page rebuild, because it inserts two standalone lines and
never rewrites the head/body content it finds.

Usage:  python3 scripts/icons-wire.py [--root .] [--dry-run]
"""
import argparse, os, re, sys

LANDING = ["secondary.html", "secondary-year2.html", "secondary-year3.html", "preparatory.html",
           "preparatory-year1-term1.html", "preparatory-year2-term1.html", "preparatory-year3-term1.html"]
LINK = '<link rel="stylesheet" href="%sassets/css/icons.css">'
SCRIPT = '<script defer src="%sassets/js/icons.js"></script>'

def targets(root):
    for f in LANDING:
        p = os.path.join(root, f)
        if os.path.exists(p):
            yield p
    for dirpath, _, files in os.walk(os.path.join(root, "Secondary", "Year 1")):
        for f in files:
            if f.endswith(".html"):
                yield os.path.join(dirpath, f)

def prefix_of(html):
    m = re.search(r'href="([^"]*?)assets/', html)
    return m.group(1) if m else None

def wire(path, dry=False):
    html = open(path, encoding="utf-8").read()
    if "assets/css/icons.css" in html:
        return "skip"
    pre = prefix_of(html)
    if pre is None:
        return "no-assets-prefix"
    if "</head>" not in html or "</body>" not in html:
        return "no-head-or-body"
    html = html.replace("</head>", "\n" + (LINK % pre) + "\n</head>", 1)
    i = html.rfind("</body>")
    html = html[:i] + (SCRIPT % pre) + "\n" + html[i:]
    if not dry:
        open(path, "w", encoding="utf-8").write(html)
    return "wired"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    counts = {}
    for p in targets(a.root):
        r = wire(p, a.dry_run)
        counts[r] = counts.get(r, 0) + 1
        if r not in ("wired", "skip"):
            print(r, p, file=sys.stderr)
    print(counts)
    return 0 if not counts.get("no-assets-prefix") and not counts.get("no-head-or-body") else 1

if __name__ == "__main__":
    sys.exit(main())
