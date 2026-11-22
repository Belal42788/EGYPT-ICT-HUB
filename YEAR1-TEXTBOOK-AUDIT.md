# Year 1 textbook audit, first completed lesson

22 November2026. Local review only. No push, merge or publication.

## Current coverage

One of62 lessons has now had the full comparison described below:12-1 Algorithm. The other61 are not yet certified by this audit. Earlier gap inventories and button checks do not count as full textbook reconciliation.

This audit follows the bounded batch2 snapshot cd084eb. It changes12-1 further; it does not replace or include pending batch1, Unit11 or preparatory work.

##12-1 source coverage

Both supplied books were read across the complete lesson: Arabic168–171 and English155–158. All source figures were checked visually. All15 textbook exercise prompts are represented. Seven single-choice items are automatically scored; eight multi-part questions are explicitly self-checked against the answer key.

### Prepared repairs

- Restored missing fill-in paragraphs, the eight-blank symbol table, all A–F symbol choices and source diagrams. Ten figure excerpts, including the ATM teaching example, are embedded in the self-contained HTML. Their original English labels are retained, as in the books.
- Corrected the vending-machine answer to A,C,B,D. The person presses the purchase button at [2]; the machine counts the money at [3].
- Restored the six symbol-choice letters. The derived answers are F,E,D,A, not the site's old A,B,C,D list.
- Restored the source A/B/C diagram labels in the stock-purchase exercise. B is the branching diagram.
- Replaced placeholder flowchart shapes with drawn symbols, including distinct repeat-start/repeat-end shapes. Corrected the ATM role descriptions and control-structure branch labels.
- Reconciled all13 recall keys and their feedback in both languages. Feedback and scores now follow language changes.
- Qualified the browser-only JavaScript claim and the claim that separate activity roles necessarily act simultaneously. The supplied books contain simplifications; they are not treated as error-free technical references.
- The extra Python example now follows the complete umbrella path, including leaving afterward. Its AR/EN True/False outputs match CPython. Missing colons, missing/inconsistent indentation and orphan else clauses are rejected in the supported teaching subset. The page clearly says this is a simplified runner, not a full Python environment. Edited pupil code is preserved on a language change; Reset follows the selected language.
- Added the textbook Flowchart alias to the searchable glossary as well as the heading.

### Source contradictions kept visible

1. Some book tables interchange the Data and Process shapes. Arabic168 has the conventional pairing: parallelogram for Data, rectangle for Process. The online drawing uses that pairing and explains the correction.
2. The final exercise's A symbol is misdrawn as a rectangle although the question requires a data-input/output option. The online A is a parallelogram, with an explanation in the answer.
3. The pedestrian question says to proceed only on green, but its printed key uses “red” rather than “not green.” The page preserves the printed key in a note and explains that D,F,E follows the stated green-only rule, whereas A,F,E assumes only red/green signals.

### Validation

Six full browser runs: AR/EN at360,390 and1440. Each checks all15 prompts, ten loaded figures, all13 recall interactions, single-choice correct/wrong grading, answer show/hide, feedback/score translation, language-safe code edits, Run and Reset, four CPython comparison cases and four invalid-code cases. No runtime errors or page-wide horizontal overflow. JavaScript syntax and git whitespace checks pass.

Actual final pixels inspected: AR mobile symbol key and exercise; English mobile vending exercise; English desktop control diagrams; AR mobile Python error state; AR mobile ATM diagram and role cards. Source crops were also inspected for complete labels, arrows and endpoints.

## Remaining work

-61 lessons still need this full exercise/code/answer-key comparison. Existing partial repairs are not counted as completion.
- Outstanding terminology must be rechecked against the pending batch1 candidate before recounting. Original36 AR/4 EN totals are historical inventory figures.
-13-3 has a recorded Arabic motion-verb issue that still needs source comparison and repair.
-13-5's pre-existing stray logo-attribute text remains pending.
- Unit11 runtime fixes stay on their separate pending branch. Later textbook checks must record which candidate they test, rather than reporting the unfixed main copy as a new defect.

## Primary technical checks

- Node.js, JavaScript outside the browser: https://nodejs.org/learn/getting-started/introduction-to-nodejs
- IBM, activity diagrams can show sequential, alternate and parallel flows: https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-activity
- Python, indentation and required colons: https://docs.python.org/3/faq/design.html

The curriculum source remains the two supplied2025–26 textbooks, not an assumed newer edition.
