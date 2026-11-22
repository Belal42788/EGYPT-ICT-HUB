# Preparatory Term 1, review batch 1

Status: local review candidate. No push, merge, or deployment is included.

## Scope

The six supplied Ministry books map to 27 lessons: Prep 1 has 10, Prep 2 has 8, Prep 3 has 9. This batch builds only the first lesson in each year. The other 24 are listed as in preparation and have no lesson link.

- Prep 1: Green Technology, 16 term challenges, sensor lab, animated hand/sensor/tap scene.
- Prep 2: Intelligent Systems and Their Impact on Climate Change, 15 term challenges, three-scenario system lab, moving data-message scene with failure states.
- Prep 3: Computational Thinking and Problem Solving, 24 term challenges, all six worked-example ideas, animated accumulation from 1 through 5.

Every pilot also has a step-by-step automatic demonstration, a sequence-order game, two three-row matching games, a six-question quiz with explanations, a recap, and an open design activity. Arabic and English use one shared content record per lesson. Language switches preserve the active practice state; reloading resets answers.

## Sources

`catalogue.json` records the bilingual lesson map, PDF page ranges, source URLs, and build status. `sources.json` records the six supplied source books. `pilot-data.json` contains the three authored lessons.

Edition caveats:
- Prep 1 English cover says 2025-2026; Arabic says 2026-2027. The pilot was compared across both supplied files. Matching contents does not establish that every paragraph in the rest of the books is identical.
- Prep 2 English is in the Ministry's 2026-2027 folder, but its cover does not print a year.
- Prep 3 English filename uses uppercase `TR1`.
- Older Term 2 files in the repository remain untouched. This batch makes no claim that Term 2 does not exist.

Technical corrections in Prep 3: use valid parentheses and straight quotes; distinguish decimal input with float from fractional division with `/`; explain range's excluded stop value; handle zero, equal values, negative odd numbers, and invalid integer text. No official pass threshold is invented.

Supplementary sources:
- https://docs.python.org/3/tutorial/introduction.html
- https://docs.python.org/3/tutorial/controlflow.html
- https://www.epa.gov/greenvehicles/electric-vehicle-myths

All workbenches use fixed teaching rules. They are not real AI, connected sensors, measured environmental savings, agricultural advice, emergency systems, or a general Python interpreter.

## Build

Run `python scripts/preparatory-lessons/build.py` from the repository root. It uses the standard Python library. The separate preparatory assets reuse the secondary visual identity without modifying secondary shared files.

Generated output: three Term 1 lesson HTML files, three year directories, and the preparatory landing. HTML includes its own lesson data, styles, and scripts; the optional Google font and source books require internet access.

## Verification

The pilot matrix covers 360px, 390px, and 1440px, Arabic and English: 18 lesson checks and 24 directory/landing checks. It includes wrong/correct/retry term paths, matching/reset paths, ordering, quiz/skip/reset, language-state preservation, all lab scenarios and failure stages, numeric boundaries, Arabic digits, and invalid inputs. Separate native-time checks verified hand arrival/removal, moving data packets and network interruption, and the accumulation sequence ending at 15. Screenshots and recordings were inspected for the mobile and desktop layouts.

Nothing in this batch changes main, the first-year secondary repair branch, or old Term 2 pages. User review is still required before release.
