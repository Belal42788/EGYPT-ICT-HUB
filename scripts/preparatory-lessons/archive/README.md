# Archived: the preparatory page generator

`build.py` is retired as of 2026-11-28 by Bilal's decision: **the committed HTML
pages are the source of truth for the preparatory lessons.** Edit the pages
directly; do not regenerate them.

It is kept here only as a record of how the 27 Term 1 lessons and the four
preparatory landing/year pages were first produced.

## Why it must not be run

The script is older than the current site. Running it from the repository root
rewrites 31 files and:

- replaces the shared light stylesheet (`assets/css/site.css`) with about 32 KB
  of the old dark inline CSS on every generated lesson page;
- rebuilds the four landing/year pages in the old dark theme;
- drops later hand fixes (contrast, spacing, tokens, the "و" spacing fix).

Measured on commit `6b53aec`: `git status` after a run shows 31 modified files.

## What is still used

The engine sources in the parent folder stay: `core.js`, `interactions.js`,
`batch2..5-interactions.js`, `prep.css`, `batch2..5.css`, and the
`*-data.json` lesson content. They are the input for the shared-engine work
(moving the inline engine to `assets/js/`), not for regenerating pages.
