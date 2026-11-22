from pathlib import Path
import html,json
ROOT=Path(__file__).resolve().parents[2]
ASSETS=Path(__file__).resolve().parent
PAGES=json.loads((ASSETS/'lesson-data.json').read_text())
def P(ar,en):return [ar,en]
import os
OUT=ROOT/'Secondary'
for p in PAGES:
 p['path']=Path(f"Year {p['year']}")/p['unit_folder']/p['slug'] if 'unit_folder' in p else Path(f"Year {p['year']}")/({(2,2):'Unit 2 - Project Requirements and Production Stages',(2,3):'Unit 3 - Creating the Dictionary Website Pages',(3,1):'Unit 1 - Number System Conversion',(3,2):'Unit 2 - Logic Gate Simulation'}[(p['year'],p['unit'])])/p['slug']
css=(ASSETS/'lesson.css').read_text();js=(ASSETS/'lesson.js').read_text()
def B(p,tag='span',attrs=''):
 return f'<{tag} data-ar="{html.escape(p[0],quote=True)}" data-en="{html.escape(p[1],quote=True)}" {attrs}>{html.escape(p[0])}</{tag}>'
def link(p,href,cls=''):return B(p,'a',f'href="{html.escape(href,quote=True)}" class="{cls}"')
for i,data in enumerate(PAGES):
 folder=OUT/data['path'];folder.mkdir(parents=True,exist_ok=True)
 content=''
 for n,(heading,cards) in enumerate(data['sections']):
  content+=f'<section id="concept-{n+1}">'+B(heading,'h2')+'<div class="concept-grid">'
  for title,body in cards:content+='<article class="card">'+B(title,'h3')+B(body,'p')+'</article>'
  content+='</div></section>'
 d=data['demo'];nodes=''.join('<div class="flow-node">'+f'<strong>{n+1:02}</strong>'+B(p)+'</div>' for n,p in enumerate(d['nodes']))
 demo='<section id="demo">'+B(d['title'],'h2')+'<div class="lab">'+B(P('جرّب وشوف السبب','Try it and see why'),'div','class="lab-tag"')+B(d['note'],'p','class="simulation-note"')+f'<div class="flow" role="list" aria-label="Process steps">{nodes}</div><div class="flow-progress" aria-hidden="true"><span id="flow-progress"></span></div><div class="demo-description" id="demo-text" role="status" aria-live="polite"></div><div class="controls">'+B(P('السابق','Previous'),'button','id="demo-prev" class="btn"')+B(P('التالي','Next'),'button','id="demo-next" class="btn primary"')+'<span id="demo-counter" class="counter"></span>'+B(P('تشغيل الخطوات','Play the steps'),'button','id="demo-play" class="btn"')+B(P('ابدأ من الأول','Start again'),'button','id="demo-replay" class="btn"')+'</div></div></section>'
 site=''
 if data.get('lab')=='sitemap':site='<section id="sitemap">'+B(P('خريطة وظائف تفاعلية','Interactive feature map'),'h2')+B(P('اختار رابطًا لقراءة وظيفته. ده نموذج تخطيط، مش قاعدة بيانات شغالة.','Choose a link to inspect its purpose. This is a planning model, not a running database.'),'p','class="section-note"')+'<div class="site-preview">'+B(P('قاموس مصطلحات الكمبيوتر المصور','Illustrated Computer Terms Dictionary'),'div','class="site-preview-head"')+'<div class="site-tabs" id="site-tabs"></div><div id="site-detail" class="site-detail" role="status"></div></div></section>'
 tasks='<section id="tasks">'+B(P('طبّق بنفسك','Put it into practice'),'h2')+B(P('اختياراتك هنا للتدريب فقط. تقدر تعدّلها وتعيد المحاولة، ومش بتتحفظ بعد قفل الصفحة.','These choices are for practice. You can change them and retry; they are not saved after closing the page.'),'p','class="section-note"')+'<div id="tasks-box" class="tasks"></div></section>'
 quiz='<section id="quiz"><div class="quiz-head">'+B(P('اختبار نهاية الدرس','End-of-lesson quiz'),'h2')+B(P('ابدأ الاختبار من جديد','Restart the quiz'),'button','id="quiz-reset" class="btn"')+'</div><p id="quiz-score" class="quiz-score" aria-live="polite"></p>'+B(P('كل سؤال له إجابة واحدة. بعد الاختيار تظهر الإجابة والتفسير. التخطي يكشف الحل بدون نقطة.','Each question has one answer. Answer to see feedback and an explanation. Skipping reveals the answer without a point.'),'p','class="section-note"')+'<div id="quiz-box" class="quiz-grid"></div></section>'
 recap='<section id="recap">'+B(P('الخلاصة','Recap'),'h2')+'<div class="card recap">'+B(data['recap'],'p')+'</div>'+B(data['source'],'p','class="source-note"')+B(P('صياغة تعليمية مبسطة من الكتاب، وليست نقلًا حرفيًا. استخدم بيانات وهمية فقط. نشاط التدريب لا يُحفظ بعد إعادة تحميل الصفحة.','Adapted teaching notes, not a verbatim textbook copy. Use dummy data only. Practice activity is not saved after reload.'),'p','class="source-note"')+'</section>'
 extra=''
 if data.get('lab') and data['lab']!='sitemap':extra='<section id="workbench">'+B(P('معمل التجربة','Practice workbench'),'h2')+'<div class="lab">'+B(data['demo']['note'],'p','class="simulation-note"')+'<div id="interactive-lab"></div></div></section>'
 if data.get('code'):extra+='<section>'+B(P('اقرأ الكود وتتبع الفكرة','Read the code and trace the idea'),'h2')+B(P('مثال تعليمي مصاغ للشرح، وليس نقلًا حرفيًا لكل أسطر الكتاب. لا يتم تنفيذه هنا.','A teaching example, not a verbatim copy of every textbook line. It does not execute here.'),'p','class="section-note"')+'<pre class="code-block" dir="ltr"><code>'+html.escape(data['code'])+'</code></pre></section>'
 if data.get('refs'):extra+='<div class="source-note">'+B(P('مراجع التصحيحات التقنية','Technical correction references'),'h3')+''.join('<p><a href="'+html.escape(u,quote=True)+'" rel="noopener noreferrer" target="_blank">'+html.escape(t)+'</a></p>' for t,u in data['refs'])+'</div>'
 manifest_path=ASSETS/'release-index-manifest.json'
 siblings=[item for item in json.loads(manifest_path.read_text()) if item['year']==data['year']] if manifest_path.exists() else []
 current=next((n for n,item in enumerate(siblings) if item['code']==data['id']),None)
 year_index=f"../../../../secondary-year{data['year']}.html"
 if current is not None and current+1<len(siblings):
  following=siblings[current+1]
  next_link=link(P(following['ar'],following['en']),os.path.relpath(ROOT/following['path'],folder),'btn primary')
 else:
  next_link=link(P('كل دروس السنة','All lessons for this year'),year_index,'btn primary')
 navbottom='<div class="lesson-nav">'+link(P('العودة لدروس السنة','Back to year lessons'),year_index,'btn')+next_link+'</div>'
 notice=''
 if data['year']==3: notice=B(P('ملاحظة ترجمة: النسخة المرفقة من الوحدة الأولى عربية فقط؛ النص الإنجليزي ترجمة تعليمية مسودة للمراجعة.' if data['unit']==1 else 'ملاحظة ترجمة: النسخة المرفقة من الوحدة الثانية إنجليزية فقط؛ النص العربي ترجمة تعليمية مسودة للمراجعة.','Translation note: only the Arabic Unit 1 book was supplied; this English teaching translation is a draft for review.' if data['unit']==1 else 'Translation note: only the English Unit 2 book was supplied; the Arabic teaching translation is a draft for review.'),'p','class="translation-note"')
 if data.get('legacy'):notice+=B(P('تنبيه عن المصدر: فهرس الكتاب المرفق يصف هذا الموضوع بأنه إثرائي للعام 2015–2016، رغم أن الغلاف يحمل 2026–2027. نعرضه مع هذا التنبيه، دون اعتباره حكمًا على المنهج الحالي.','Source note: the supplied contents labels this PHP topic as 2015–2016 enrichment, although the cover says 2026–2027. It is included with that caveat, not as a claim about current requirements.'),'p','class="translation-note"')
 doc='''<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Interactive bilingual secondary ICT lesson, Egypt ICT Hub"><title>'''+html.escape(data['title'][0])+''' | Egypt ICT Hub</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;600;700;800&family=Baloo+2:wght@400;600;700;800&display=swap"><style>'''+css+'''</style></head><body><nav aria-label="Lesson navigation"><div class="nav-inner"><a class="brand" href="../../../../index.html">Egypt ICT Hub<small>BY BILAL ABDELNASSER</small></a><div class="nav-links">'''+link(P('المفاهيم','Concepts'),'#concept-1')+link(P('المحاكاة','Demo'),'#demo')+link(P('المهام','Tasks'),'#tasks')+link(P('الاختبار','Quiz'),'#quiz')+link(P('الخلاصة','Recap'),'#recap')+'''</div><button class="lang" id="lang-toggle" type="button">EN</button></div></nav><header class="hero">'''+'<div class="eyebrow">'+B(P(f"الصف {'الثاني' if data['year']==2 else 'الثالث'} الثانوي · الوحدة {['','الأولى','الثانية','الثالثة'][data['unit']]}",f"Year {data['year']} · Unit {data['unit']}"))+' · <bdi dir="ltr">'+data['id']+'</bdi></div>'+B(data['title'],'h1')+B(data['sub'],'p')+link(P('يلا نبدأ','Start learning'),'#concept-1','btn primary')+'''</header><main><div class="objectives">'''+B(P('هدفك في الدرس','Your learning goal'),'h2')+B(data['goals'],'p')+'</div>'+notice+content+demo+site+extra+tasks+quiz+recap+navbottom+'''</main><footer class="footer">'''+B(P('بلال عبدالناصر · شرح تفاعلي من منهج تكنولوجيا المعلومات والاتصالات','Bilal Abdelnasser · Interactive ICT learning'))+'''</footer><noscript><p class="boot-fallback">الشرح متاح، لكن المحاكاة والمهام والاختبار تحتاج JavaScript. The notes are readable, but demos, tasks and quizzes require JavaScript.</p></noscript><script type="application/json" id="lesson-data">'''+json.dumps({k:v for k,v in data.items() if k!='path'},ensure_ascii=False).replace('</','<\\/')+'''</script><script>'''+js+'''</script></body></html>'''
 (folder/(data['slug']+'.html')).write_text(doc)
 print(folder/(data['slug']+'.html'))
