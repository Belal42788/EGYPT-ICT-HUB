(() => {
'use strict';
const DATA=JSON.parse(document.getElementById('lesson-data').textContent);
let lang='ar';try{lang=localStorage.getItem('langPreference')==='en'?'en':'ar'}catch(e){}
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], t=p=>p[lang==='en'?1:0];
const labels={choose:['اختار إجابة','Choose an answer'],check:['تحقق من اختياراتي','Check my choices'],reset:['إعادة المحاولة','Try again'],quiz:['اختبار نهاية الدرس','End-of-lesson quiz'],skip:['اعرض الإجابة وتخطّ السؤال','Reveal and skip'],next:['التالي','Next'],prev:['السابق','Previous'],play:['تشغيل الخطوات','Play the steps'],pause:['إيقاف مؤقت','Pause'],replay:['ابدأ من الأول','Start again']};
let step=0,timer=null;const answers=DATA.quiz.map(()=>null);let taskChecked=[false,false], siteChoice=0;
function bilingual(ar,en,tag='span'){const e=document.createElement(tag);e.dataset.ar=ar;e.dataset.en=en;e.textContent=lang==='en'?en:ar;return e}
function updateDemo(){
 $$('.flow-node').forEach((e,i)=>{e.classList.toggle('on',i===step);e.classList.toggle('past',i<step);e.setAttribute('aria-current',i===step?'step':'false')});
 $('#demo-text').textContent=t(DATA.demo.steps[step]);$('#demo-counter').textContent=`${step+1} / ${DATA.demo.steps.length}`;$('#flow-progress').style.width=`${(step+1)/DATA.demo.steps.length*100}%`;
 $('#demo-play').textContent=t(timer?labels.pause:labels.play);
}
function stop(){if(timer){clearInterval(timer);timer=null}updateDemo()}
$('#demo-next').onclick=()=>{stop();step=(step+1)%DATA.demo.steps.length;updateDemo()};$('#demo-prev').onclick=()=>{stop();step=(step+DATA.demo.steps.length-1)%DATA.demo.steps.length;updateDemo()};$('#demo-replay').onclick=()=>{stop();step=0;updateDemo()};
$('#demo-play').onclick=()=>{if(timer){stop();return}if(step===DATA.demo.steps.length-1)step=0;timer=setInterval(()=>{if(step<DATA.demo.steps.length-1){step++;updateDemo()}else stop()},2200);updateDemo()};
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
const taskData=DATA.tasks;
function renderTasks(){
 const box=$('#tasks-box');box.textContent='';taskData.forEach((task,i)=>{
  const card=document.createElement('article');card.className='card task';card.id=`task-${i}`;card.append(bilingual(...task.title,'h3'));const ins=bilingual(...task.instruction,'p');ins.className='instruction';card.append(ins);
  task.rows.forEach((row,j)=>{const wrap=document.createElement('div');wrap.className='task-row';const lab=bilingual(...row.q,'label');lab.htmlFor=`task-${i}-select-${j}`;const select=document.createElement('select');select.id=lab.htmlFor;select.add(new Option(t(labels.choose),''));task.options.forEach((p,k)=>select.add(new Option(t(p),String(k))));select.onchange=()=>{taskChecked[i]=false;card.querySelector('.feedback').classList.remove('show');card.querySelectorAll('.task-row').forEach(e=>e.classList.remove('correct','incorrect'))};wrap.append(lab,select);card.append(wrap)});
  const controls=document.createElement('div');controls.className='controls';const check=bilingual(...labels.check,'button');check.className='btn primary';check.type='button';check.onclick=()=>checkTask(i);const reset=bilingual(...labels.reset,'button');reset.className='btn';reset.type='button';reset.onclick=()=>{card.querySelectorAll('select').forEach(e=>e.value='');taskChecked[i]=false;card.querySelector('.feedback').classList.remove('show');card.querySelectorAll('.task-row').forEach(e=>e.classList.remove('correct','incorrect'))};controls.append(check,reset);const fb=document.createElement('div');fb.className='feedback';fb.setAttribute('role','status');card.append(controls,fb);box.append(card);
 });
}
function checkTask(i){const card=$(`#task-${i}`), selects=[...card.querySelectorAll('select')],fb=card.querySelector('.feedback');fb.textContent='';fb.className='feedback show';if(selects.some(e=>e.value==='')){fb.classList.add('neutral');fb.textContent=t(['كمّل الاختيارات الثلاثة الأول.','Complete all three choices first.']);return}
 taskChecked[i]=true;let correct=0;selects.forEach((s,j)=>{let ok=Number(s.value)===taskData[i].rows[j].a;if(ok)correct++;s.closest('.task-row').classList.toggle('correct',ok);s.closest('.task-row').classList.toggle('incorrect',!ok);const p=document.createElement('p');p.textContent=`${ok?'✓':'✕'} ${t(taskData[i].rows[j].q)}: ${t(taskData[i].rows[j].why)}`;fb.append(p)});if(correct<3)fb.classList.add('wrong');const score=document.createElement('strong');score.textContent=correct===3?t(['3 من 3 صحيحة. أحسنت، فهمت الفكرة.','3 of 3 correct. Well done, you have the idea.']):t([`${correct} من 3 صحيحة. راجع السبب وعدّل اختياراتك.`,`${correct} of 3 correct. Review the explanations and change your choices.`]);fb.prepend(score);
}
function paintSite(){}
function renderQuiz(){const box=$('#quiz-box');box.textContent='';DATA.quiz.forEach((q,i)=>{
 const card=document.createElement('article');card.className='card question';card.id=`question-${i}`;const head=document.createElement('h3');head.textContent=`${i+1}. ${t(q[0])}`;card.append(head);const opts=document.createElement('div');opts.className='options';opts.setAttribute('role','group');opts.setAttribute('aria-label',t(q[0]));
 q[1].forEach((p,j)=>{const b=document.createElement('button');b.type='button';b.className='option';const key=document.createElement('span');key.className='key';key.textContent=String.fromCharCode(65+j);const text=document.createElement('span');text.textContent=t(p);b.append(key,text);if(answers[i]!==null){b.disabled=true;if(j===q[2])b.classList.add('correct');else if(answers[i]===j)b.classList.add('wrong')}b.onclick=()=>{answers[i]=j;renderQuiz();$(`#question-${i} .feedback`).focus({preventScroll:true})};opts.append(b)});card.append(opts);
 const fb=document.createElement('div');fb.className='feedback';fb.tabIndex=-1;fb.setAttribute('role','status');if(answers[i]!==null){fb.classList.add('show');const skipped=answers[i]==='skip',right=answers[i]===q[2];if(skipped)fb.classList.add('neutral');else if(!right)fb.classList.add('wrong');fb.textContent=(skipped?t(['تم عرض الإجابة بدون احتساب نقطة. ','Answer revealed without earning a point. ']):right?t(['إجابة صحيحة. ','Correct. ']):t(['راجع الإجابة الصحيحة المميزة. ','Review the highlighted correct answer. ']))+t(q[3]);}card.append(fb);
 const skip=document.createElement('button');skip.type='button';skip.className='btn skip';skip.textContent=t(labels.skip);skip.disabled=answers[i]!==null;skip.onclick=()=>{answers[i]='skip';renderQuiz()};card.append(skip);box.append(card)
 });
 const done=answers.filter(a=>a!==null).length,right=answers.filter((a,i)=>a===DATA.quiz[i][2]).length,skip=answers.filter(a=>a==='skip').length;$('#quiz-score').textContent=lang==='ar'?`\u2066${done} / ${answers.length}\u2069 تمت · ${right} صحيحة · ${skip} تم تخطيها`:`${done} / ${answers.length} completed · ${right} correct · ${skip} skipped`;
}
$('#quiz-reset').onclick=()=>{answers.fill(null);renderQuiz()};
function setLang(l){
 // Keep dynamic task selections and checked results during translation.
 const vals=$$('#tasks-box select').map(e=>e.value),checked=taskChecked.slice();lang=l;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.title=t(DATA.title)+' | Egypt ICT Hub';
 $$('[data-ar][data-en]').forEach(e=>e.textContent=e.dataset[l]);$('#lang-toggle').textContent=l==='ar'?'EN':'عربي';$('#lang-toggle').setAttribute('aria-label',l==='ar'?'Switch to English':'التحويل إلى العربية');
 $('nav').setAttribute('aria-label',t(['التنقل بين أقسام الدرس','Lesson section navigation']));$('.flow').setAttribute('aria-label',t(['خطوات العملية','Process steps']));
 renderTasks();$$('#tasks-box select').forEach((e,i)=>e.value=vals[i]||'');checked.forEach((v,i)=>{if(v)checkTask(i)});updateDemo();paintSite();renderQuiz();if(window.paintLab)window.paintLab();if(window.paintTerms)window.paintTerms();if(window.paintOrder)window.paintOrder();try{localStorage.setItem('langPreference',l)}catch(e){}
}
$('#lang-toggle').onclick=()=>setLang(lang==='ar'?'en':'ar');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){$$('.nav-links a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}}),{rootMargin:'-15% 0px -65% 0px'});$$('main>section[id]').forEach(e=>observer.observe(e))}
setLang(lang);
})();