# Archived: the secondary page generator

`build.py` is retired as of 2026-11-28 by Bilal's decision: **the committed HTML
pages are the source of truth for the secondary lessons.** Edit the pages
directly; do not regenerate them.

It is kept here only as a record of how the 18 generated Secondary lessons
(Year 2 Units 2 and 3, Year 3 Units 1 and 2) were first produced.

## Why it must not be run

The script is older than the current pages. Running it from the repository
root rewrites all 18 generated lesson pages and drops the hand fixes made since
(contrast, spacing, tokens, the "و" spacing fix, icon and footer fixes).

Measured on commit `a845b8c`: `git status` after a run shows 18 modified files.
The working tree was restored afterwards.

## What is still used

Nothing reads these files at run time. `lesson-data.json`, `lesson.css` and
`lesson.js` in the parent folder stay as content records only. They are older
than the pages and are not used to regenerate anything.
