# Year 1 textbook audit and local continuation

22 November 2026. Lesson 12-1 is published. Lessons 12-2,12-3,12-4,12-5,13-1,13-2,13-3,13-4,13-5 13-6 and13-7 below are local review candidates only; no new content has been pushed.

## Current coverage

Thirteen of62 lessons now have the full comparison described below:12-1 Algorithm,12-2 Programming Basics[1],12-3 Programming Basics[2],12-4 Application of Programming[1],12-5 Application of Programming[2],13-1 About Generative AI, 13-2 HTML, CSS;13-3 HTML, JS,13-4 Creating Static Web Pages,13-5 Creating Dynamic Web Pages 13-6 Presenting Your Website,13-7 Developing a Quiz App and13-8 Quiz App Review. Lesson12-1 is live;12-2,12-3,12-4,12-5,13-1,13-2,13-3,13-4,13-5,13-6,13-7 and13-8 are prepared and tested locally. The other49 are not certified. Earlier gap inventories and button checks do not count as full textbook reconciliation.

The ready release included batch1, batch2, Unit11 and preparatory work. Its file tree is preserved in corrected-history main d3924900482cf12b64b1601b826ff2b1b336b1d7. New local audit work starts from that clean history, not an older clone.

## 12-1 source coverage

Both supplied books were read across the complete lesson: Arabic 168–171 and English 155–158. All source figures were checked visually. All 15 textbook exercise prompts are represented. Seven single-choice items are automatically scored; eight multi-part questions are explicitly self-checked against the answer key.

### Prepared repairs

- Restored missing fill-in paragraphs, the eight-blank symbol table, all A–F symbol choices and source diagrams. Ten figure excerpts, including the ATM teaching example, are embedded in the self-contained HTML. Their original English labels are retained, as in the books.
- Corrected the vending-machine answer to A,C,B,D. The person presses the purchase button at [2]; the machine counts the money at [3].
- Restored the six symbol-choice letters. The derived answers are F,E,D,A, not the site's old A,B,C,D list.
- Restored the source A/B/C diagram labels in the stock-purchase exercise. B is the branching diagram.
- Replaced placeholder flowchart shapes with drawn symbols, including distinct repeat-start/repeat-end shapes. Corrected the ATM role descriptions and control-structure branch labels.
- Reconciled all 13 recall keys and their feedback in both languages. Feedback and scores now follow language changes.
- Qualified the browser-only JavaScript claim and the claim that separate activity roles necessarily act simultaneously. The supplied books contain simplifications; they are not treated as error-free technical references.
- The extra Python example now follows the complete umbrella path, including leaving afterward. Its AR/EN True/False outputs match CPython. Missing colons, missing/inconsistent indentation and orphan else clauses are rejected in the supported teaching subset. The page clearly says this is a simplified runner, not a full Python environment. Edited pupil code is preserved on a language change; Reset follows the selected language.
- Added the textbook Flowchart alias to the searchable glossary as well as the heading.

### Source contradictions kept visible

1. Some book tables interchange the Data and Process shapes. Arabic 168 has the conventional pairing: parallelogram for Data, rectangle for Process. The online drawing uses that pairing and explains the correction.
2. The final exercise's A symbol is misdrawn as a rectangle although the question requires a data-input/output option. The online A is a parallelogram, with an explanation in the answer.
3. The pedestrian question says to proceed only on green, but its printed key uses “red” rather than “not green.” The page preserves the printed key in a note and explains that D,F,E follows the stated green-only rule, whereas A,F,E assumes only red/green signals.

### Validation

Six full browser runs: AR/EN at 360,390 and 1440. Each checks all 15 prompts, ten loaded figures, all 13 recall interactions, single-choice correct/wrong grading, answer show/hide, feedback/score translation, language-safe code edits, Run and Reset, four CPython comparison cases and four invalid-code cases. No runtime errors or page-wide horizontal overflow. JavaScript syntax and git whitespace checks pass.

Actual final pixels inspected: AR mobile symbol key and exercise; English mobile vending exercise; English desktop control diagrams; AR mobile Python error state; AR mobile ATM diagram and role cards. Source crops were also inspected for complete labels, arrows and endpoints.

## Remaining work, updated through13-6

- 51 lessons still need this full exercise/code/answer-key comparison. Existing partial repairs are not counted as completion.
- Outstanding terminology must be rechecked against the published batch1 fixes before recounting. Original36 AR/4 EN totals are historical inventory figures.
- The earlier13-3 Arabic motion-verb issue is source-checked and repaired in its local candidate, not newly published.
- The inherited13-5 duplicate logo-attribute string is repaired in this local candidate, not newly published.
- Unit11 runtime fixes are live. Later textbook checks must use corrected-history main and must not report an obsolete staging copy as current.

## Primary technical checks

- Node.js, JavaScript outside the browser: https://nodejs.org/learn/getting-started/introduction-to-nodejs
- IBM, activity diagrams can show sequential, alternate and parallel flows: https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=diagrams-activity
- Python, indentation and required colons: https://docs.python.org/3/faq/design.html

The curriculum source remains the two supplied 2025–26 textbooks, not an assumed newer edition.


## 12-2 full source comparison, local candidate

Sources: supplied English book 159-162 and Arabic book 172-175,2025-2026. All eight source pages were read and inspected as images. The exercise program choices and tables contain no separate source diagram that needs an image excerpt.

- Restored the original option order and answer letters for all 15 prompts. There are 12 automatically scored multiple-choice questions and three five-output questions marked as self-checks, excluded from the score.
- Preserved meaningful differences between the two books: Hello Samar versus Hello, A/B differences in Warm Up2 and Try 4, and the Arabic numeric label3 for the third assignment-operator choice. A visible note explains quote/spacing normalization and the printed math glyphs.
- Corrected the Arabic assignment direction in the teaching text and glossary. The assignment drawing now keeps city on the physical left and its value on the right in both languages.
- Added textbook aliases: معامل التخصيص, المعامل الحسابي and البنية التسلسلية; added the full English remainder/power labels. Glossary search covers both language fields.
- Corrected the old Arabic answer for Nice to meet you, clarified numeric strings versus numbers, marked abbreviated division as approximate, and showed actual output `3.0` for `6 / 2` in Python instead of silently copying the book's `3`.
- Corrected negative remainder in the calculator and teaching runner and explained floor division for negative numbers. The small runner now rejects unsafe integer/complex results and is explicitly described as a limited model, not a full Python environment.
- Scores, completed recall feedback and calculator errors now follow language changes. Edited pupil code is preserved; Reset restores the lesson example. Keyboard choice selection works.

Validation: six complete AR/EN browser runs at 360,390 and 1440; two extra wrong-answer, skip, keyboard, revised-answer, unanswered-score, Hide and Reset runs. All 15 source prompts,12 keys,11 recall questions, three editors, seven operator gallery entries, variable animation, search aliases, both assignment directions and overflow/runtime checks passed. All 99 independent teaching-runner fixtures agree with CPython on output or rejection. JavaScript syntax and Git whitespace checks passed. Actual candidate pixels inspected: Arabic mobile source key, Arabic assignment drawing and English mobile exercise card.

Primary technical references:
- https://docs.python.org/3/reference/expressions.html
- https://docs.python.org/3/tutorial/introduction.html

This candidate has not been pushed or published. The following section records the subsequent12-3 comparison.


## 12-3 full source comparison, local candidate

Sources: supplied 2025-2026 English 163-167 and Arabic 176-181. All 11 complete source pages were read and inspected as images, including the indentation and original A-D program choices. The books contain no separate lesson diagram requiring an image excerpt.

### Content and source fidelity

- Restored all 10 complete exercise prompts: five scored multiple-choice questions and five fill-in self-checks with 13 writable blanks. The old page showed some answers in place of the incomplete programs. All full programs, including the seating example, are now present. Fill-in self-checks are explicitly excluded from the score, and equivalent valid expressions are explained rather than falsely marked wrong.
- Restored original order and keys: Warm Up1=B; Try 1=A and Try 2=D; Exercise 1=B and Exercise 2=B. Try 1 now has the four distinct printed output sequences rather than two duplicated pairs. Invalid source alternatives remain invalid, with their missing assignment or output retained. Printed typographic quotes and spacing are normalized to runnable ASCII syntax; indentation is preserved.
- Kept the meaningful Try 4 language difference visible: the English question asks for 1-10, requiring A=11; the Arabic question asks for 1-100, requiring A=101. Both versions retain the source else branch that prints odd values. The question, key and complete solution follow the selected language.
- Both books omit count=0 in the final counting program. The page retains the printed blank program, flags the omission visibly, and gives a corrected runnable solution. Without initialization it raises NameError; after initialization the output is5.
- Corrected the generalized last-value claim end minus increment. The rule is an exclusive stop, with the inequality following the step sign; a range may be empty and step 0 is invalid. The visible source note uses range(1,8,3), whose last value is7, not5.
- Restored the source pass/fail example alongside the existing grade example. There are now three editable, runnable source panels. The six comparison rows also include the full example meanings.
- Added exact structure/statement aliases and the start-value, end-value and increment terms. All 16 glossary entries can be searched across both languages. Added compact range exploration and all-six-operator prediction games without changing the page shell.
- Code keeps physical lines and indentation rather than wrapping inside Python strings. Overflowing code shows a pan cue. Wide source tables scroll within their own box, with keyboard focus and mobile cues; the page itself does not overflow.

### Teaching-model repairs and checks

The runner is explicitly a bounded lesson model, not full Python. It supports the lesson's assignments, output, ranges, nested for and if/elif/else. It compiles blocks before execution so malformed unexecuted branches, missing colons, missing or inconsistent indentation, and orphan/misordered clauses are rejected. Ranges require integer arguments and a nonzero step. Allocation, text, output, nesting, source size and execution are bounded. It has no host-code execution or imports.

Validation on the final candidate:

- Six full browser runs, AR/EN at 360,390 and 1440. Checked all 10 source prompts, all five keys and option texts,13 writable blanks, all nine recall questions, all three default editors and edited branching, six operator predictions, countdown/nonaligned/zero-step range behavior, source-language differences, search, language-safe edits, translated scores/feedback, and Reset. No page errors or page-wide horizontal overflow.
- Two focused runs checked wrong/unanswered/revised scoring, keyboard choice and recall selection, skipped recall translation, live translated indentation errors, the specific zero-step hint, empty/display-limited ranges, changed operands, stale feedback clearing, category filters and all 16 glossary entries.
-254 independent fixtures agree with CPython on output or exception class. These include every runnable source solution, the printed invalid program alternatives,125 positive/negative/empty range combinations, grade/pass boundaries, comparison operators, nested control flow, malformed syntax and indentation.
- Ten additional boundedness checks reject huge range allocation, nested-loop overrun, huge text, unsafe/non-finite numbers, long source, excessive nesting/output, and unbound prototype names. These are model-limit checks, not claims that CPython rejects the same otherwise valid large programs.
- Four AR/EN table-pan checks verified that both ends of the two source tables are reachable and that all six example meanings and operator directions are present. Code pan is also verified.
- JavaScript syntax and Git whitespace checks pass.

Final pixels inspected: Arabic mobile range and comparison games, source-choice key and corrected counting exercise; English mobile source difference; English desktop pass/fail and grade panels; both mobile source tables after panning. During inspection, the original code wrapping and a squeezed Run button were corrected and the updated pixels checked again. Long code is intentionally horizontally scrollable, not truncated permanently.

Primary technical references:
- https://docs.python.org/3/library/stdtypes.html
- https://docs.python.org/3/reference/compound_stmts.html

This candidate remains local and unpublished. Next full comparison:12-4 Application of Programming[1]. Existing immutable BEFORE and standalone AFTER attribution recovery sets are unchanged. New experimental-skill work is separate and has not been incorporated.


## 12-4 full source comparison, local candidate

Sources: supplied 2025-2026 English168-171 and Arabic182-185. All eight full source pages were read and inspected as images. Arabic186 begins12-5 and is outside this comparison. The sources use program tables, not a separate diagram requiring an image excerpt.

### Content and source fidelity

- Restored all11 top-level textbook prompts. These are output and fill-in tasks, not multiple-choice. The page now has29 writable blank fields and eight writable output answers across the three multipart output prompts. Each prompt has its own Show/Hide solution. They are clearly labelled self-checks, with no invented automatic score.
- Restored complete minimum, sum, maximum, count and nested-traversal programs rather than exposing just their blank keys. Restored the full A-O letter matrix and all six exact subject names, including quoted Information studies. Outputs include every omitted middle line, in row-major order, while explaining that the book abbreviates some output displays.
- Preserved the book's max=0 program and its correct output34 for the printed positive list. A visible note explains why this is not a general initialization for an all-negative list and recommends max=a[0] for nonempty lists. The trace activity uses the more general initialization and includes negative data. The book's min, max and sum names remain in source programs, with a note that they shadow built-in functions.
- Reconciled terminology: the Arabic book uses Array / مصفوفة (list) and مصفوفة ثنائية الأبعاد, while English uses List / Two-dimensional list. The page keeps those aliases but clarifies that the Python type is list, not array.array. It also fixes the old claim that an empty list must keep receiving elements and names [] as square brackets.
- Checked the greater-than condition in the Arabic counting exercise against its actual page image. The printed page correctly uses >10. An extracted-text reversal is not treated as a textbook defect.
- Kept all four editable source examples. Repaired the static list diagram's grid alignment and added explicit0-based row/column headers to the two-dimensional diagram. Added compact list/index/append prediction, row/column selection and stepwise sum/minimum/maximum/count activities. The trace includes both positive and all-negative datasets, editable final predictions and Reset.
- Added14 bilingual-searchable glossary entries, including aliases, row, column, empty list, traversal and all four accumulator concepts. Entries link to the relevant editor, game or source program. Retained the page's existing sections, colors, navigation and supplemental nine recall questions.
- Physical Python lines do not wrap into misleading string/indentation fragments. Wide code pans locally, with a visible cue and keyboard focus, rather than widening the page. Arabic negative numeric feedback uses an isolated left-to-right value.

### Teaching-model repairs and validation

The runner is explicitly a bounded lesson model, not full Python. It supports the source's multiline nested lists, aliasing, append, integer indexing including negatives, traversal, ranges, conditions and output. Indexed assignment and imports remain unsupported and are disclosed. It compiles all blocks before execution and rejects malformed unexecuted branches, bracket mismatches, missing colons and indentation errors. List/range allocation, recursive-list construction, execution, source size, text, numeric values, nesting and output are bounded. Old unused interpreter helpers were removed from this page.

Final-candidate validation:

- Six full browser cases: AR/EN at360,390 and1440. Checked all11 source prompts and exact complete programs/solutions,29 writable blanks, eight output fields, all four default editors and edited multiline append, nine supplemental recall questions,14 glossary entries, language-safe edits and answers, Show/Hide, Reset, out-of-range index feedback, all eight operation/dataset trace cases and local overflow. No page errors or page-wide horizontal overflow.
- Two focused cases checked keyboard recall, wrong/skipped feedback translation, live index/indentation/model-limit errors, language-safe code, Show/Hide preservation, list-lab validation and bounds, stale-result clearing, negative maximum predictions, Reset, cross-language/no-match glossary filtering, and the reachable far end of wide subject programs.
-159 independent fixtures agree with CPython on exact output or exception class. These cover all runnable source programs and four editors, minimum/maximum/sum/count across positive/negative/empty data, list indexing bounds, multiline/nested lists, append/None/aliasing, row-major traversal, mutation during iteration, string representation, malformed syntax and indentation.
-15 separate boundedness/capability tests safely reject deliberate model limits, recursive lists, repeated alias trees, unbounded mutation during iteration, oversized range/list/text/output/source/numbers, excessive block nesting, unsupported import/index assignment and an unbound prototype name. These are explicit model-limit checks, not claims that CPython rejects otherwise valid large programs.
- JavaScript syntax and Git whitespace checks pass. Final screenshots were inspected for Arabic mobile list/grid/negative-maximum activities, complete subject exercise and far-end code pan; English mobile maximum note and terminology; English desktop row/column diagram. Sticky-navigation occlusion in a tall review screenshot was fixed by recapturing below the fixed bar. The actual negative result's bidi placement was corrected and checked again.

Technical reference read for list operations and method-return semantics:
https://docs.python.org/3/tutorial/datastructures.html

This candidate remains local and unpublished. Remote main was rechecked at d3924900482cf12b64b1601b826ff2b1b336b1d7. No experimental-skill changes were incorporated, and the immutable BEFORE and standalone AFTER attribution recovery sets remain unchanged. Next full comparison:12-5 Application of Programming[2].


## 12-5 full source comparison, local candidate

Sources: supplied2025-2026 English172-174 and Arabic186-189. All seven complete source pages were read and inspected as images. The definition/call/argument/return diagram was checked in both books and its mechanism rebuilt as a stepwise activity, with separate definition, call, returned value and printed output displays.

### Source fidelity and teaching repairs

- Restored all ten top-level source prompts: six shared English/Arabic questions and four Arabic-only exercises from189. The latter were entirely missing on the old page. They are labelled as Arabic-source questions in both display languages; their English wording is explicitly a supplementary translation, not English-edition textbook text.
- Restored the full circle, judge, triangle, temperature-conversion, grade, addition, rectangle and egg-sizing programs, plus the complete function template and all four original terminology options and source letters. There are20 writable blank/term/letter fields and five writable output answers. These are per-prompt self-checks, not invented multiple-choice scores. Complete solutions and actual Python3 outputs are available individually without erasing typed answers.
- Both books print triangle output25 without a decimal point. The actual Python3 output is25.0 because / returns a float. A visible note preserves that distinction. The two-call exercise shows25.0 and21.0. The egg/grade thresholds were checked against actual source images; reversed comparison operators in Arabic text extraction were not treated as printed defects.
- Kept the source's Argument alias but explained parameter versus argument precisely. Added the missing user-defined-function, calling, def, return, return-value and None terminology to ten bilingual-searchable glossary entries. Each links to a relevant interaction. Clarified that reaching the end of a function returns None, and distinguished printed output from returned value. Qualified exact argument-count advice to the simple definitions in this lesson, rather than claiming that all Python functions require it.
- Retained all three existing source editors. Added a five-phase function-call activity: definition registration, call/binding, body evaluation, return and outer output. Its return-y and print-y variants demonstrate that print-y displays a value but implicitly returns None. Inputs, predictions, Reset and a built-in/user-defined classification activity are interactive in both languages. Negative input/result fields and progress counters are direction-isolated in Arabic.
- Retained the original page shell, colors, navigation, section structure and five supplemental recall questions. Code keeps physical lines and pans locally with cues. Grade/egg tables also pan locally so complete conditions do not wrap into hard-to-read fragments. There is no page-wide overflow.

### Teaching model and final validation

The visible bounded-model disclosure remains explicit: this is not full Python. The repaired compiler handles simple positional function definitions/calls, separate local frames, enclosing/global reads, early/bare/implicit returns, None, nested conditions/loops and source arithmetic. Invalid argument counts are rejected rather than filled silently with None. It validates all function bodies before execution, including unused branches. Defaults, keyword arguments to user functions, imports and function-object display are unsupported. Calls, execution, list/range allocation, source, output, text and numeric values are bounded.

- Six full AR/EN browser cases at360,390 and1440 check all ten prompts and exact source/solution programs,20 writable fields, five outputs, all four original term choices, four Arabic-only exercises and provenance, three editors, five recall questions, ten glossary entries, negative inputs, both print/return variants, all five classification examples, translated feedback, language-safe code/answers, Reset and overflow. No page errors.
- Two focused cases check wrong/missing-argument/indentation/unbound-local/recursion errors and live translation, keyboard recall, wrong/skipped feedback translation, hide/reveal preservation, invalid/fractional inputs, revised predictions, reset and stale output clearing, implicit None before the outer print, isolated progress counters, wrong classification, glossary filtering, all four language/table-pan cases and long-function code pan.
-162 independent fixtures agree with CPython on exact output or exception class. They cover every runnable source solution and source editor; circle/triangle/rectangle/addition/temperature examples; judge, grade and egg boundaries including44/45/46 and54/55/56; local/global/enclosing scope, aliases and closures; implicit/bare/early returns, function redefinition, nested and recursive calls, argument counts, definition timing, malformed bodies and unbound locals.
-19 separate deliberate model-limit/capability tests safely reject excessive call/block depth, mutation/alias-tree/recursive-list overruns, oversized lists/ranges/output/text/source/numbers, prototype names, imports, indexed assignment, default parameters, keyword user calls and function-object display. These are model restrictions, not claims that Python rejects otherwise valid code.
- Direct file opening, language toggle, solution reveal and editor execution passed. JavaScript syntax and Git whitespace checks pass. Exact embedded runner bytes match the independently tested runner.

Final pixels inspected: Arabic mobile definition/call/negative-return activity, full egg exercise, panned egg table; English mobile triangle-output note and full programs, Arabic-only provenance and translated egg exercise; English desktop classification. The function activity was recaptured with its parent diagram padding. Reversed Arabic negative-input and progress-counter display was corrected and inspected again. Code and source tables intentionally pan inside their own boxes.

Primary technical references read:
- https://docs.python.org/3/tutorial/controlflow.html
- https://docs.python.org/3/faq/programming.html

This candidate remains local and unpublished. Earlier12-2/12-3/12-4 candidates and immutable BEFORE/AFTER attribution recovery archives are unchanged. No separate experimental-skill changes were incorporated. Next full comparison:13-1 About Generative AI.


## 13-1 full source comparison, local candidate

Sources: supplied2025-2026 English PDF positions175-176, whose printed numbers are176-177, and Arabic191-192, where PDF and printed numbering agree. All four complete pages were read and visually inspected. The Arabic Copilot interface figure is embedded as a clearly labelled historical source screenshot, not a live/current interface claim.

### Restored source work

- Replaced four abbreviated invented answer cards with the full source sequence, organized into12 writable steps: create a story, revise it, request a quiz that waits, request five questions, change them to True/False, show the score after all answers, vary topic/format/count, have someone else try it, ask who built the pyramids, follow up on the response, check independent sources or ask the history teacher, and the open experiment.
- All12 English step texts independently match the supplied PDF after case/whitespace/punctuation normalization, without substituting wording. Arabic wording and figure were compared with the actual source pages. Source tasks are not automatically scored. Each has a writable note, manual review mark and Show/Hide completion guide. The book has no single model answer for these open activities; no history key or completed external trial has been invented.
- Kept material edition differences explicit: English asks for a cat wizard and dog companion, while Arabic asks for a cat and a companion from other animals. English's five questions are about Egypt generally; Arabic specifies Egyptian history. The English book names Hallucination, while the Arabic passage warns against100% trust without naming the term here. Source-page labels distinguish English printed numbers from PDF positions.
- Preserved the Arabic book's Office365/M365 installation directions and interface screenshot as source material. A dated current note explains that names/interfaces change and Microsoft documents browser access and account/license/region differences. The lesson does not require installation, purchase, account creation or sign-in to complete its offline preparation. It does not promise individual eligibility or access.

### Teaching explanations and interactions

- The textbook's next-word description is labelled a simplification of text generation. Added tokens and sampling, qualified always-highest-probability claims, and avoided asserting that models contain no factual information. Fluent or confident output is not proof of truth. Search engines locate sources; readers should open and compare the actual evidence, including cited sources.
- Added an offline purpose/prompt workshop covering the book's ideas, summary, study and programming uses; a clearly fictional likelihood toy with invented70/20/10 weights; a three-scenario evidence game; a book-tool choice; and a three-step quiz-prompt ordering activity. The toy explicitly is not a real language model, live generation, real tokenization or measured model probability. It demonstrates that sampling can select a lower-weight option, not that popularity proves a fact.
- Retained the six original sections, header/footer, colors, swipe navigation and seven supplemental recall questions. Repaired their mechanism/reliability feedback, including wrong/skipped live translation. Added nine bilingual-searchable glossary entries with links to an interaction for every concept. Compact controls and isolated progress values work in both languages.
- Writable notes survive language changes and guide hiding. They are not sent to AI services or saved after reload, which is disclosed beside the activity instructions. Only language preference persists. Manual review progress is explicitly not a grade or proof of a peer trial. Clearing notes requires confirmation and can be cancelled. Unused legacy Python/interpreter helpers were removed from this non-Python page; existing section navigation and keyboard recall remain usable.

### Validation

- Six final browser cases, AR/EN at360,390 and1440, check all12 complete source-step texts,12 note fields,12 guides, all edition differences, source screenshot, four prompt purposes, highest-choice and lower-weight sample behavior, three evidence scenarios, all three ordering steps, book-tool choice, seven recall questions, nine glossary entries, no-match search, translated dynamic feedback, language-safe notes, manual progress, all resets, no page errors and no page-wide overflow. Network checks show no AI-service requests or note submission.
- Two focused direct-file cases at360/390 block external requests and verify embedded figure/offline fallback, keyboard wrong-choice recall, skipped feedback translation, cancelled clearing, guide/language preservation, reload behavior, all labels/anchor targets and no duplicate IDs. Both also check six toy boundaries, six invalid values and an independent10,000-point grid yielding7000/2000/1000 choices for the declared weights. These are toy-model checks, not measurements of real AI.
- JavaScript syntax, exact embedded-script bytes and Git whitespace checks pass. The12 complete English step texts were independently found in the supplied PDF. The original source pages and figure were inspected as images.

Final pixels inspected: Arabic mobile toy and source-tool figure, English mobile full story/revision/waiting-quiz tasks with edition notes and completion guides, Arabic independent-verification step, English desktop and Arabic mobile glossary. The first glossary render exposed the old span-card styling; it was corrected to non-overlapping cards and recaptured. Arabic sampled-word feedback was direction-isolated and inspected again. Preferred fonts are optional; all lesson content and the embedded source figure work when external requests are blocked.

Six fetched/read clarification references, checked22 November2026:
- https://platform.openai.com/tokenizer/
- https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create
- https://support.microsoft.com/en-us/microsoft-365-copilot/what-s-the-difference-between-microsoft-copilot-free-and-copilot-in-microsoft-365
- https://support.microsoft.com/en-us/microsoft-365-copilot/the-microsoft-365-app-transition-to-the-microsoft-365-copilot-app
- https://nvlpubs.nist.gov/nistpubs/AI/NIST.AI.600-1.pdf
- https://libguides.northwestern.edu/ai-tools-research/evaluatingaigeneratedcontent

Microsoft's current support pages have overlapping product/account descriptions during naming transitions. The lesson therefore avoids a fixed current UI path, detailed entitlement promise or price claim. The supplied textbooks, not the support pages, remain the curriculum source.

This candidate remains local and unpublished. The four earlier Unit12 local candidates, separate external-skill experiments and immutable BEFORE/AFTER attribution recovery sets are unchanged. Next full comparison:13-2 HTML, CSS. Its repository path has been located; compare its exact source heading and complete pages before editing.


## 13-2 full source comparison, local candidate

Sources: supplied 2025-2026 English PDF177-179, printed178-180; Arabic193-195, matching PDF and printed. All six complete source pages inspected visually, including the missing two-paragraph diagram and output screenshots.

- Restored complete plain HTML, complete linked HTML and separate .name CSS, retaining the source link to style.css. Restored the source diagram: My page heading and HELLO/WORLD paragraphs, both red under p { color: red; }, with the heading unchanged. Three real-browser editors now support the source's experiments.
- Restored five organized tasks: plain self-introduction, linked HTML/CSS, adding content, changing size/font and making another-topic page. These are open tasks with notes, optional completion guides and manual review marks, not invented multiple-choice grades. Warm Up combines surrounding instructions and is explicitly labelled accordingly. Added guides are examples, not printed keys.
- Preserved edition names: Arabic Adam, English Ichiro. English screenshots show Adam despite Ichiro in code. Some initial screenshots in both books contain stray markup. Visible notes explain these inconsistencies; previews follow actual code. The printed CSS changes color only, although nearby prose mentions size; size and font are separate Try tasks.
- Corrected blanket closing-tag advice: meta/link are void, p can omit its end tag in defined cases, and DOCTYPE is a declaration. Corrected class uniqueness: .name can match multiple elements across tag types. Kept property/value, selector, attribute, file path and stylesheet distinct. Added seven tag/declaration examples, five selector cases and twelve bilingual-searchable glossary entries linked to practice. Retained seven supplemental recall questions.
- The local preview is explicitly a limited teaching subset, not all HTML/CSS or full validation. Inert parsing, element/attribute allowlisting, escaped style serialization, an empty iframe sandbox and restrictive CSP block scripts, external resources, forms, navigation and downloads. Virtual style.css is local, not uploaded. HTML/CSS length, element count and nesting are bounded. Edits and notes survive language changes but not reload, visibly disclosed.

Validation: six full AR/EN browser cases at360,390,1440. Checked all three source editors, actual output, separate virtual file and missing-file behavior, class mismatch, edited size/font/content, seven tag examples, five selector cases, all five source tasks/guides, seven recall keys, twelve glossary entries, language-safe edits/notes, reset and overflow. Two focused direct-file offline cases test active-content/resource attempts, denied host access, navigation, style-closing input, five rejected limits and three inclusive boundaries, keyboard wrong/correct choices, wrong selector, skipped recall translation and stale-frame clearing. No preview requests or page runtime errors. Both full English HTML files, full CSS and three full Try/Exercise prompts independently match the source PDF after whitespace normalization. Actual mobile/desktop pixels inspected for separate files, source diagram, discrepancy note, selector, font task and glossary. Physical code lines pan locally; no page-wide overflow.

Technical references are recorded in the review package: MDN void elements, link, class selectors, iframe, CSP/default-src and srcdoc; WHATWG inert template contents; WebDen own page. No external account was created and no pupil code was submitted. Earlier local candidates and immutable attribution recovery archives remain unchanged. Nothing pushed or published. Next full comparison:13-3.


## 13-3 full source comparison, local candidate

Sources: English PDF180-184 / printed181-185 and Arabic PDF/printed196-200, all ten complete pages inspected visually.

All ten source pages were inspected. Restored three complete HTML/JS pairs with separate writable files: immediate name change, button name change and button font-size change. Restored the My page / HELLO / WORLD diagram, changing text1 alone to GOOD MORNING. Arabic code uses Adam then Omar; English uses Ichiro then Ohtani. English screenshots nevertheless use Adam/Omar. The visible source note records this discrepancy. Preview output follows each edition's code. The first source HTML links style.css without supplying its contents here. The link is retained, explicitly ignored by the local model, and no missing stylesheet is invented.

Six organized open tasks cover three Warm Up experiments and the source color/size Try, two-element concatenation Try and alternating red/blue Exercise. Warm Up labels combine surrounding instructions and are disclosed as organized, not contiguous quotations. The three later full English prompts and six complete English source code blocks independently match the PDF after normalization. Six writable notes, optional guides and manual review marks do not pretend to automatically grade open work. Full concatenation/toggle examples are supplementary and require confirmation before replacing current code. They are not printed answer keys.

Six concept predictions, nine retained/repaired recall questions and twelve searchable glossary entries support practice. Repaired the Arabic motion-verb mistranslation and blanket claims that JavaScript cannot run on servers or use browser storage. Clarified null, case-sensitive IDs, plain text versus HTML, const binding versus referenced-element mutation, handler registration, zero-argument arrows, concatenation and inline versus computed color. Inherited header markup and editor reset-position defects were repaired locally. Existing visual design and navigation retained. Notes/edits survive language changes, not page reload, as disclosed.

## Bounded teaching model

Acorn 8.19.0 parses pupil JavaScript. Its complete MIT license and provenance are embedded. A small interpreter handles the source subset. It does not evaluate pupil JavaScript as host code. Model elements are separate inert template-owned records; rendered output uses safe text/elements in open Shadow DOM roots with fixed styling. Preview buttons are ordinary controls. Shadow DOM isolates styling, not a security sandbox. Earlier embedded-frame preview experiments were removed after intermittent first-click loss; final tests use the ordinary-control surface.

Supported scope includes const/let, zero-argument arrows, assignment and +=, if/ternary, primitive comparisons/arithmetic/string concatenation, document.getElementById, textContent, onclick and five style properties: color, fontSize, fontWeight, fontFamily and backgroundColor. HTML is a text/list/button allowlist with IDs. This is not a complete browser, JavaScript engine, HTML validator or IDE. Unsupported syntax and capabilities report errors rather than silently executing.

Limits: HTML20,000 and JavaScript8,000 UTF-16 units; 500 elements; HTML depth32; AST depth40 and1500 nodes; 2000 interpretation steps per Run or click; eight nested calls;100 bindings per scope; strings4000 units; finite numeric magnitude at most1e12. Loops, imports, arrays/general objects, computed property access, network, host window/document access, eval, timers and raw innerHTML are unsupported. Active HTML, event attributes and external resources are removed. There are no preview scripts or requests.

## Verification and actual pixels

Final product build 18:16 Cairo. Six AR/EN cases at360,390,1440 pass, plus two AR/EN direct-file cases with24 capability/bounds checks each. These include20 rejected capability/limit inputs, repeated text-growth rejection and three inclusive boundaries. Tests also cover active-content removal, zero preview requests/scripts, null-error clearing/translation, cancelled/accepted reset, code pan reset, native first click, keyboard/skip/wrong feedback and normal-motion operation. Eighty-eight controlled fixtures match native Chrome JavaScript/DOM for source editions, supplementary tasks, scalar/text/style behavior, descendants, duplicate IDs, null, closures, const/let, callbacks and errors. These controlled fixtures do not establish complete JavaScript compatibility.

Nine independent English PDF matches pass: six complete files and three full Try/Exercise prompts. All Arabic code, source figures and edition differences were checked visually. Embedded script syntax/equality and Git whitespace are checked before commit. Prior six local candidate HTMLs remain byte-unchanged.

Actual pixels inspected: mobile AR/EN source button before/after, source diagram, concatenation task/guide, alternating red result, source discrepancy note, clean inherited header, desktop completed concept prediction, and filtered AR mobile/EN desktop glossary. Editors pan inside fields on narrow screens; full physical source lines are retained. Optional remote fonts can fall back offline. Test notes in screenshots are not pupil work.


Clarification references:
- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
- https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://nodejs.org/learn/getting-started/introduction-to-nodejs
- https://github.com/acornjs/acorn
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

All work remains local. The six prior local HTML candidates, separate skill experiments and attribution recovery archives are unchanged. Next full source comparison:13-4.


## 13-4 Creating Static Web Pages, local review candidate

### Curriculum and edition differences

English PDF185-188 corresponds to printed186-189; Arabic PDF/printed201-204. Five Warm Up, three Try and one Exercise activities have writable notes, optional completion guides and manual review. These are not automatic grades or printed answer keys. English uses04 Creating Static Web Pages as the chat name, while Arabic supplies an unnumbered Arabic title. Both are explicit, with direction-safe Arabic guide layout. All fourteen complete English passages independently match the PDF after normalization. Arabic wording and all source pages were checked visually.

Neither edition prints generated HTML/CSS here. Three unchanged source screenshots show About Me blanks, a historical Copilot rename menu and illustrative news items. Two full HTML/CSS samples are authored local practice, clearly labelled rather than called printed code or live AI output. The self-introduction includes name, school, subject, club and goal placeholders. The news sample is fictional. The four final purposes include sports rankings, restaurants in a specified region, school introduction and Egyptian tourist spots; source-dependent facts need checking.

## Teaching and technical decisions

The supplementary prompt tool fills a deterministic template for six purposes, audience and constraint. It neither sends prompts nor generates code. A three-step rename rehearsal changes only a local practice title. Five ordering steps, seven concept predictions, seven retained/repaired recall questions and twelve searchable glossary terms support practice. Every glossary term links to a relevant activity. Notes, code and local state survive language changes, not reload, as visibly stated.

Static pages are served as ready-made files, not files forbidden from editing. Static sites can include JavaScript, though this lesson practices HTML/CSS. Repaired inherited feedback that denied general AI abilities to run pages, save/download files or accept interface actions. Feedback now describes the book's task and stresses understanding/testing generated code. The2025-2026 Copilot menu is historical, not a fixed current UI or entitlement promise.

## Bounded passive preview

The local HTML/CSS preview uses inert template parsing, allowlisted elements/attributes, escaped style serialization and restrictive CSP inside empty-sandbox opaque-origin iframes. Scripts, forms, navigation and external resources are disabled. It accepts inline CSS and one virtual style.css. Without CSS removes both stylesheet rules and inline styles. Limits are20,000 HTML and8,000 CSS UTF-16 units,600 elements and depth40. This is not complete HTML/CSS validation or a full browser. The earlier13-2 lesson is byte-unchanged; this report does not credit it with this fork's inline-style no-CSS repair.

## Verification and pixels

Final build18:38 Cairo. Six AR/EN viewport cases at360,390,1440 pass, as do two AR/EN offline direct-file cases with normal motion. Tests cover tasks, notes/guides/manual marks, two editable samples, stylesheet connection/missing-style/no-CSS output, six prompt purposes, rename/cancel/focus/blank/plain text, ordering, concepts, recall, glossary/filter/empty results, language-safe state and reload behavior. Preview tests cover active content/resource removal, opaque origin/host access denial, CSS closing-tag protection, five rejected limits, four inclusive boundaries and stale output clearing. Cancelled resets preserve work. Labels/IDs/anchors and keyboard operation are checked. No preview requests or runtime errors occurred in these cases.

Actual pixels inspected include AR360 and EN390 edited samples, the full fictional three-card news output, completed workflow/concept predictions, prompt draft, filtered glossary, chat-title edition/rehearsal, full source Exercise and Warm Up guide, source figures and header. The Arabic guide's English chat title was isolated on its own line. The news preview shows all default cards on mobile and discloses internal scrolling for longer edits. Optional remote fonts can fall back; native symbols can differ by device. Test notes shown are not pupil work. Embedded script equality, syntax, whitespace and prior candidate preservation are verified before commit.

## Review and recovery

The recovery package contains actual pre-audit13-4 HTML, eight local AFTER pages, all eight unchanged source PDF pages and three original figures, source/technical notes, tests and final screenshots. Combined recovery starts only from corrected-history d392490; incremental recovery starts from prior local01b4c5d. Both routes must match the complete candidate tree. No old attribution ancestry, external-skill changes or production publication is included. Nine of62 lessons are fully compared:12-1 live, eight local candidates,53 remaining. Sources and their limits are in clarification-sources.md.


## 13-5 Creating Dynamic Web Pages, local review candidate

### Curriculum and edition differences

All four pages inspected: English PDF189-190 / printed190-191; Arabic PDF/printed205-206. Eight tasks are shared. Only English explicitly requests three separate files, asks for a code explanation and supplies chat renaming. Its two extra instruction cards carry an English-only notice; Arabic on those cards is a comparison translation, not a claim about Arabic source text. The English title is Creating Dynamic Web Pages, unnumbered. No Arabic chat title is invented. Eleven complete visible English passages independently match the supplied PDF after whitespace normalization, including the Point and repeated Run instructions. Arabic source wording and omissions were compared visually.

Ten writable note fields, optional guides and manual review marks cover request/run/customize for both examples, explanation/organization where present, unfamiliar-code research and the four purposes: sports rankings, regional restaurants, school introduction and Egyptian tourist spots. These marks are not automatic grades or proof of external work. Guides are not printed answer keys. No prompts were sent to AI, no external code submitted and no accounts created.

## Added teaching practice

Two full authored HTML/CSS/JavaScript samples support a three-color profile and a three-headline fictional news page. Separate complete variants add a fourth color or article, with confirmation before replacing edits. Every button, text and color can be tested. No-JavaScript and no-virtual-CSS comparisons distinguish structure/presentation from handlers and inline style changes. A deterministic six-purpose prompt draft and local-only chat-title rehearsal make no claims of AI generation or real Copilot updates.

Ten concept predictions cover file roles, callback timing, document body, CSS versus JS property spelling, remainder/counter behavior, zero-based array indexing, id/null, plain text, static-hosting distinctions and code review. The array prediction is explicitly outside the editor's supported language. Nine retained recall questions have repaired/qualified feedback. Twelve searchable glossary entries link to relevant practice. Notes, code and local state survive language changes, not reload, as disclosed.

Dynamic means interactive in this lesson, not necessarily server-generated. Static hosting can include JavaScript, and some interaction, such as native details, needs none. Separate files are a useful learning pattern, not the only valid architecture. Convincing AI explanations are not correctness guarantees. Profile names remain placeholders and news remains fictional.

## Bounded preview, not full browser execution

Acorn8.19.0 parses pupil JavaScript; its MIT license is included. The interpreter never evaluates pupil JavaScript as site code. It supports the source-oriented primitive/callback/if/assignment subset, remainder, selected inline styles, ID lookup, textContent, onclick and a separate model document.body. Ordinary preview buttons work with keyboard and pointer. Safe model output is style-separated with Shadow DOM; Shadow DOM is not described as a security sandbox.

The virtual stylesheet accepts simple tag/#id/.class selectors, at most100 rules and20 selectors per rule, and nine property families with box longhands. Pupil stylesheets are parsed but never adopted; only approved values reach model elements. No external resources, active HTML, forms, navigation, script evaluation, general objects/arrays, addEventListener, loops, network or arbitrary host API access is supported. Unsupported material is rejected or counted as ignored. Inline style getters remain separate from rule styling; supported specificity/order, JS overrides and clearing back to CSS were tested.

Other limits: HTML20,000, CSS8,000 and JS8,000 UTF-16 units;500 input elements, HTML depth32, AST1500 nodes/depth40,2000 interpretation steps per Run/click,8 nested calls,100 scope bindings,4000 string units and finite numeric magnitude at most1e12. Technical limits remain available in an expandable panel. JavaScript comes directly from its pane; script links execute nothing. Virtual style.css requires a matching link. No-virtual-CSS does not disable subsequent JavaScript style changes. This is a teaching subset, not full validation, general JavaScript or full browser compatibility.

## Tests and actual pixels

Final build19:06 Cairo. Six AR/EN cases at360,390,1440 pass. Two normal-motion direct-file offline cases each pass44 capability/bounds checks, including11 inclusive boundaries, repeated text-growth rejection, CSS rule/selector limits, active-content/resource removal, HTML attribute/CSS boundary protection, host/body isolation, safe CSS retention and stale-output clearing. All three panes reset correctly; cancellation preserves variants/notes/marks/drafts. Keyboard operation, wrong/skip/error translation, plain-text title/draft handling, labels, unique IDs, anchors and reload semantics pass. No preview requests or runtime errors occurred in these cases.

Eighty-eight inherited engine regression fixtures and50 new controlled native Chrome body/remainder/CSS-subset fixtures pass,138 total. The latter include all authored sample/variant editions, negative/fractional remainders, callback/body changes, CSS specificity/order/inheritance/longhands, inline getters, overrides and clearing back to rule styles. These checks are bounded evidence, not a full compatibility claim.

Actual pixels inspected: full source requests/English-only badges and direction-safe title, complete four-purpose Exercise, profile/news defaults and click outputs, both fourth variants, original news figure/caption, intro, header, completed workflow, prompt draft, desktop concepts and filtered glossary. Three missing decorative emoji glyphs were replaced with local SVG equivalents without changing the design. Editors pan within fields; longer output scrolls within its preview. Optional remote fonts may fall back. Test notes are not pupil work.

## Recovery and review

Package contents: actual BEFORE13-5 HTML, nine local AFTER pages, all four unchanged source PDF pages and two source figures, comparison/source notes, verification summaries, decisive screenshots and combined/incremental patches. Combined recovery starts only from corrected-history d392490; incremental recovery starts from13-4 local65959c6. Both routes must reproduce the complete candidate tree before completion is reported. Earlier eight candidate HTMLs, attribution recovery sets and separate skill experiments are unchanged. Coverage becomes10/62, with12-1 live, nine local candidates and52 remaining. No new publication authority is implied. Source URLs and confidence boundaries are in clarification-sources.md.


## 13-6 Presenting Your Website, local review candidate

### Source fidelity

English PDF191 / printed192; Arabic PDF/printed207. Both complete pages visually inspected. Both share the same core tasks and examples. English soccer corresponds to Arabic football. There is no printed program, answer key, output figure, slide requirement or fixed presentation duration here. Seven complete English passages independently match the supplied PDF after whitespace normalization; Arabic transcription and equivalence were checked visually. The next lesson starts EN PDF192 / AR208, but its full boundaries are not certified by this audit.

All five open tasks have writable notes, optional labelled completion guides and manual self-review marks. The four themes are website topic, HTML, CSS and JavaScript. The fifth is actual presentation to the group. The page does not grade a presentation, record audio, send anything or claim that checking a box proves external work happened. Guides are added teaching suggestions, not printed keys or personal answers supplied for the pupil. Each note field allows2000characters through ordinary browser input.

## Added practice and technical teaching

Four cue cards take only the pupil's own first four notes. Blank topics stay explicitly blank, and rebuilding is needed after edits. Six term/role pairs, a corrected four-step event order, ten concept predictions and twelve searchable glossary entries make the new terms interactive. All eleven inherited recall questions remain, with misleading scope and feedback repaired in both languages. Wrong, skipped and correct states translate without losing progress.

HTML structures content. In the separate-file example, link rel=stylesheet connects CSS and script src loads JavaScript; embedded alternatives remain valid. defer in the example applies to a classic external script waiting for HTML parsing. IDs are unique, case-sensitive global attributes, not button-only features or automatic behavior. A missing element returns null. body and button are type-selector examples; background-color is not exclusive to body.

The event example uses fixed authored native JavaScript. It selects the element and registers the listener before the click invokes its callback. Registration does not run the callback immediately. Missing/case-mismatched IDs are guarded. Re-registering does not multiply callbacks; Reset removes the handler. The displayed equivalent HTML and JavaScript contain the full core callback; surrounding demo controls are separately described. This is not printed code, live AI output, a pupil-code runner or a general browser-compatibility claim.

The CSS example uses fixed choices in a passive opaque-origin iframe with an empty sandbox and restrictive CSP. Body and button colors change independently. No scripts, forms, navigation or external resources; no arbitrary CSS input or host-body styling. Optional motion is disabled for reduced-motion preference. The event counter is separate fixed page code, not a claim that scripts run in that passive CSS frame.

## Verification and actual pixels

Final candidate build19:29 Cairo. Six AR/EN cases at360,390,1440 pass, covering full source text/examples, guides/notes/manual marks, matching, selectors, event registration/count/reset/null behavior, ordering, all predictions and recall, glossary/filter/empty results, cue-card snapshot/rebuild, language-safe state, resets/cancellation, labels/anchors/unique IDs and no page-wide overflow. No runtime errors or external activity requests occurred in these cases.

Two offline normal-motion direct-file cases pass:2000-character native input limit, plain-text cue cards with markup-shaped input, no code execution or fabricated blank answer, keyboard matching/order/prediction/native button, language-safe listener/counter, Reset removing the handler, optional native motion, opaque CSS-frame host denial, passive button, translated wrong/skip feedback, cancelled clearing and reset-on-reload semantics. Notes, marks, cues and activities survive language changes, not reload. Fonts may fall back offline.

Four controlled native-core fixtures, AR/EN with correct/mismatched-case IDs, each compare ten clicks using the HTML and JavaScript read from the candidate. Text/color outputs agree for the active callback; both guard absent IDs. This is narrow evidence about the displayed authored core, not arbitrary edited programs or all JavaScript semantics.

Actual final pixels inspected: complete source HTML/JavaScript/CSS/theme tasks and group Try, intro SVGs and direction-safe headings, clean header/logo, CSS colors/motion controls and preview, working event counter/button, panned code ending, cue cards, matching, completed event order, desktop predictions and glossary. First inspection found and fixed a low-contrast button, code broken across identifiers, unavailable emoji and inherited stray logo text. Code now pans inside its boxes, with a visible instruction. Existing layout and swipeable navigation remain. Test screenshots using review-note placeholders are not real pupil work.

## Recovery and remaining scope

Review package contains actual BEFORE13-6, ten local AFTER pages, both source pages, source/technical ledgers, verification summaries, screenshots and combined/incremental patches. Combined recovery starts only from corrected-history d392490; incremental recovery starts from local13-5 commit444b295. Exact archive inventory/hashes and both complete-tree recovery routes must pass before completion is reported. Earlier nine candidate HTMLs, attribution recovery sets and separate skill experiments remain unchanged. Coverage becomes11/62:12-1 live, ten local candidates and51 remaining. No new publication authority is implied. Sources and confidence limits are in clarification-sources.md.


## 13-7 Developing a Quiz App, local review


22 November2026. Local review only, no publication.

The candidate restores the full lesson from both2025-2026 textbooks while preserving the existing design, section anchors and swipeable navigation. It includes11 source tasks and both original output figures. Complete authored examples are labelled separately from textbook material. The source prints no program or answer key.

## Source fidelity and edition differences

English PDF192-193 corresponds to printed193-194; Arabic PDF/printed208-209. All four pages and the next lesson headings were visually inspected. Eleven complete English passages independently match a separate PDF text extraction after whitespace normalization. Arabic transcription and equivalence were checked against page pixels.

There are9shared tasks,1English-only chat-renaming task and1Arabic-only classify-known/unknown-and-ask-AI task. The English first prompt explicitly requests separate HTML/CSS/JavaScript code; Arabic does not. Arabic calls increasing choices optional. Comparison translations are marked as translations, not invented original passages. The two source figures remain byte-exact. The three-question figure shows only its third question,5×2 with choices8/10/12. The complete first two questions and full app are added authored practice.

## Implementation choice

Fixed authored native quiz logic with structured data editing was chosen over an arbitrary pupil-code interpreter. It supports the actual lesson changes without pretending to run all edited JavaScript. Full free-form code editing belongs in WebDen or local files. Readonly generated code boxes are explicitly labelled.

Two labs accept1-6questions and2-6choices per question. Question text allows200UTF-16 units; choices80. Each question has a required explicit correct answer. Blank, duplicate, out-of-range and over-limit data are rejected. Reducing choices never guesses a replacement answer. Reducing question count retains inactive drafts. Build applies a validated snapshot; dirty edits and failed builds leave the running quiz and displayed files unchanged.

Native labelled radio inputs support keyboard selection. Empty answers are guarded. Feedback remains until deliberate Next. Each question scores once; finish and old-handler guards prevent extra scoring. Restart starts a new run. The optional percentage uses nearest-integer Math.round, so2/3is67%. Fisher-Yates shuffles whole records without separating answers and choices. It can produce the same order; it is not security randomness.

Each lab exposes complete index.html,style.css and script.js, with whole-file selection and local downloads. Actual downloaded JavaScript was compared byte-for-byte to the displayed file. A separate WebDen HTML fragment contains only the quiz root. Current WebDen source was read: it inserts HTML into its own body, wraps CSS in style and JavaScript in an IIFE script. Pasting the complete standalone index.html into that HTML tab is therefore not the documented route. Both standalone files and the tab-composed fragment route were tested. No current Copilot menu layout is asserted by the local rename rehearsal.

Pupil strings render through textContent. Generated JSON data additionally protects less-than characters in script templates. Markup-shaped and closing-script-shaped input was tested as inert text. No prompt, rename, answer or code is sent externally. Notes, activity progress, data drafts and live quiz snapshots survive language changes, not reload. Source notes allow2000UTF-16 units. Manual review marks do not certify external work.

Added practice includes6term/role pairs,5workflow steps,10concept predictions,9retained and repaired recalls and14searchable glossary terms linked to practice. A local rename rehearsal and reviewable prompt draft support the edition-specific tasks. These are added guides, not printed answer keys.

## Verification

The final hash-bound candidate passes6AR/EN viewport cases at360,390,1440;2offline normal-motion direct-file cases;11independent full English passage matches; both original figure hashes; and48controlled answer paths across10complete generated bundles in each of2execution formats. The48cases test the fixed authored outputs with independently specified data and target scores. They do not establish general edited-program compatibility or all JavaScript semantics.

Tests cover scoring0/1/2/3, empty/wrong/correct answers, repeat/post-finish guards, restart,2/3rounding, inert markup, minimum/maximum limits, six-by-six shuffle bank invariants, snapshot/dirty/failed-build behavior, draft retention, keyboard use, download equality, translated checked/completed state, guides/notes/manual marks, matching/order/predictions/recalls/glossary, clear/cancel, unique IDs, anchors, labels, reset-on-reload, no runtime errors and no activity network requests. Fonts may fall back offline.

Actual pixels inspected:6headers,6builder/preview viewports, every complete source task in both languages, both source figures, first prompt at mobile width, intro, checked answer and2/3result, WebDen adapter, full JavaScript box, rename/prompt, completed matching/order and desktop concepts/glossary. Inspection found and fixed pale native form/choice text, inherited logo garbage, answer-select direction and reversed Arabic counters. Updated counter pixels were inspected after the final fix. Code pans inside its boxes with a visible instruction. Mobile nav edge clipping is the existing swipeable design; logo and language switch remain fixed.

## Recovery and limits

Review materials include the actual pre-audit13-7HTML, eleven local AFTER lessons, source pages/figures, source ledgers, hash-bound verification, screenshots, default authored code examples and combined/incremental recovery patches. Combined recovery starts only from corrected-history d392490; incremental recovery starts from completed13-6 e69a9a9. Exact archive inventory, hashes/sizes, manifest equality and two independent whole-tree restores must pass before delivery is reported. Earlier ten HTMLs and separate experiment work stay unchanged.

Coverage is12of62after completion:12-1live, eleven local candidates12-2/3/4/5and13-1through13-7;50remain. No push or publication is authorized. Year3hiding is separate. A later main-branch change must be coordinated rather than overwritten.

Primary source URLs and claim-specific limits are in clarification-sources.md. Textbooks determine source fidelity; browser documentation, NIST and WebDen's own current composition code qualify added technical examples. Community reviews are not evidence for curriculum wording or these API semantics.


## 13-8 full source comparison, local candidate

Sources: supplied 2025-2026 English PDF 194 (printed 195) and Arabic PDF 210 (printed 210). Single-page lesson in both editions; both source pages were read and inspected as images. No source figures, no printed program, no printed answer key.

- Added the book's Point! block verbatim in both languages with a full source citation (EN PDF 194 / printed 195; AR 210) and a note that interactive drills and quizzes are authored additions, not book text.
- Replaced the colloquial Warm Up wording with the exact book text in both editions: the prompt and all four numbered questions, with the book's example answers for theme, HTML (title tag, class), CSS (body selector, .choice selector) and JavaScript (choices array, if...else).
- Restored the Try task verbatim: categorization into «موضوعات كنت تعرفها» / «موضوعات لم تكن تعرفها» (EN "Things I already knew" / "Things I didn't know") and both AI-question examples, replacing the invented colloquial Arabic questions that did not match the Arabic book («أخبرني ماذا يفعل الكود <p id="result"></p>»، «ماذا يعني background: #f5f5f5 ؟»).
- Edition differences kept visible: Arabic writes جملة if~else with a tilde; English writes if...else. The code example uses double quotes around result in Arabic and single quotes in English. Arabic categorizes into «موضوعات...» where English uses "Things...".
- Fixed the page citation: the site said "صفحة 194"; the printed pages are EN 195 and AR 210.
- Made the four exercise option rows bilingual; they previously stayed Arabic in English mode.
- Relabelled the five authored quiz buttons from جرّب نفسك to تدريب إضافي so the book's جرب بنفسك (Try) section stays distinct from authored practice.
- Fixed the inherited attribute-escaping bug: code samples inside data-ar/data-en are now double-escaped, so <title> and <p id="result"></p> render as text after a language switch (the toggle assigns innerHTML). Added four book terms to the glossary: النقاط الرئيسية (Point!)، تحدي معلوماتك (Warm Up)، جرب بنفسك (Try)، مصفوفة (Array)، plus the if~else edition note.

Validation: 6 complete AR/EN browser runs at 360, 390 and 1440 (21 Arabic + 22 English exact source-string checks, no page overflow, no runtime errors). Interaction battery in both languages: 5 quiz starts, 11 recall questions answered wrong-then-right, 11 skips, reveal/hide of the 4 book-example answers, language-switch state, keyboard/click feedback. Actual pixels inspected: AR 390 warm-up/Try/review-labels/glossary/footer, EN 390 warm-up/Try, AR 1440 warm-up, EN 360 intro. JavaScript syntax check passed.

This candidate has not been pushed or published.
