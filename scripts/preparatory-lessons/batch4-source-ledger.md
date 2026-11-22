# Batch 4 source and accuracy ledger

Reviewed 22 November 2026. Local review build only. No publication.

All twelve complete Ministry lesson ranges, including exercises, were read. Page ranges below are physical PDF pages. The Prep 1 English edition differs from the Arabic cover year, as noted in the catalogue.

|Lesson|Arabic PDF pages|English PDF pages|
|---|---|---|
|p1-t1-1-6 Cloud Computing|56–65|56–64|
|p1-t1-1-7 Google Meet and Manage Your Project|66–74|65–74|
|p2-t1-2-2 Web Page Format|59–67|56–63|
|p2-t1-2-3 My Digital Project for My School|68–78|64–72|
|p3-t1-2-1 Prediction Using an Artificial Intelligence Model|65–75|65–74|
|p3-t1-2-2 Artificial Intelligence and Intellectual Property Rights|76–80|75–78|

## Ministry originals

- Prep 1 ar: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026_2027/Prepratory/Prepratory1/Term1/StudentBook/ICT_ARABIC_Prp1_TR1.pdf
- Prep 1 en: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026/Prepratory/Prepratory1/Term1/StudentBook/ICT_ENGLISH_1_Preparatory_Tr1.pdf
- Prep 2 ar: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026_2027/Prepratory/Prepratory2/Term1/StudentBook/ICT_ARABIC_Prp2_TR1.pdf
- Prep 2 en: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026_2027/Prepratory/Prepratory2/Term1/StudentBook/ICT_EN_Prp2_Tr1.pdf
- Prep 3 ar: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026_2027/Prepratory/Prepratory3/Term1/StudentBook/ICT_ARABIC_Prp3_TR1.pdf
- Prep 3 en: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026_2027/Prepratory/Prepratory3/Term1/StudentBook/ICT_EN_Prp3_TR1.pdf

## Supporting primary documentation

The linked provider and technical documentation supports the narrow corrections listed. It is not substituted for the textbook scope. Relevant sections were read; unrelated legal/technical sections were not treated as curriculum.

- Google Meet joining/creating and presenting: https://support.google.com/meet/answer/9303069 and https://support.google.com/meet/answer/7501121?co=GENIE.Platform%3DDesktop&hl=en&oco=0 . Guest admission depends on settings; a later link is not automatically an invited calendar event; another person cannot unmute someone for privacy; presenting is distinct from file-edit rights.
- Drive sharing: https://support.google.com/drive/answer/2494822?hl=en . Viewer/commenter/editor capabilities and restricted access are distinct.
- MDN CSS basics: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started and https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Syntax/Introduction . Selector/property/value, linked sheets and invalid-declaration handling.
- MDN padding/margin/containing blocks: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding , https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin and https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Display/Containing_block . Distinguish internal padding/external margins and percentage width relative to containing block.
- MDN caching: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control . Storage/reuse/freshness/revalidation are policy-dependent, not a download-once-forever promise.
- AWS cloud overview: https://aws.amazon.com/what-is-cloud-computing/ . Resources/services delivered through cloud infrastructure; costs/capabilities are not universally free.
- Google ML introduction: https://developers.google.com/machine-learning/intro-to-ml/what-is-ml . Models learn relationships from data; supervised regression estimates numerical values. This lesson keeps toy estimates separate from guarantees.
- Python tutorial, defining functions/return: https://docs.python.org/3/tutorial/controlflow.html . A return value differs from printing, and a hand-set formula alone does not train coefficients.
- OpenAI ROW Terms, effective 1 January2026: https://openai.com/policies/row-terms-of-use/ . Example of service-specific age/local-minimum and guardian requirements, input rights and qualified contractual output allocation. Not a universal AI policy or global copyright rule.
- OpenAI archive/delete help: https://help.openai.com/en/articles/8809935-deleting-and-archiving-chats-in-chatgpt . Archive retains; deletion removes from view first and has retention/exceptions. The lesson does not generalise the particular30-day policy to every service.
- WIPO generative-AI/IP factsheet2024: https://www.wipo.int/export/sites/www/about-ip/en/frontier_technologies/pdf/generative-ai-factsheet.pdf . Used only for confidentiality/IP uncertainty, human contribution and contractual-right distinctions. Dated regulatory-status passages were not repeated as current law.

## Visual source checks and interpretation

- Prep3 Arabic PDF70 uses both w and m in explanation; w is used consistently in the lesson, with m described as another slope symbol.
- Prep3 Arabic PDF75 really contains correct answer C for the exercise. Its absence in extracted text was not called a textbook defect.
- Prep2 English PDF58 prints light blue, while Arabic PDF62 has lightblue. The lesson explicitly demonstrates invalid declaration handling with actual browser CSS.
- Prep2 Arabic PDF76/77 visibly has80%,10px,15px and5px. Misread text-extraction numbers were not presented as book errors.

## Implementation limits

- Cloud workflow, sharing, meeting, privacy and retention states are fictional/local; no real API/account/device calls.
- CSS frames use allow-same-origin sandboxed srcdoc with no scripts. A shared in-memory Blob represents mystyle.css; it is not an actual external network download.
- School data/photos are fictional, no upload or personal-data fields. Lower-case filenames are used consistently.
- Prediction computes actual least-squares slope/intercept from fixed synthetic points in fitting mode. Supplied mode is clearly labelled, invalid values block calculation, and130 is shown rather than silently clamped.
- Cloud stale-version uploads are blocked pending an explicit fetch; this model is not a real merge/backup tool.
- All15 earlier lesson HTML files remain byte-identical to the previous local commit.
