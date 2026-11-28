(() => {
'use strict';
const D=JSON.parse(document.getElementById('lesson-data').textContent), supported=new Set(['transformation','operating','cyber','bigdata','aialgorithms','stringslists']);if(!supported.has(D.lab))return;
const box=document.getElementById('interactive-lab'), NS='http://www.w3.org/2000/svg', oldPaint=window.paintLab, t=p=>Array.isArray(p)?(document.documentElement.lang==='en'?p[1]:isolateRuns(p[0])):String(p);
function isolateRuns(s){return s.split(/(\u2066[^\u2069]*\u2069)/g).map(part=>part.startsWith('\u2066')?part:part.replace(/[A-Za-z0-9_"'\[\]()=.,+<>{}@#$%&:\/?!\- ]+/g,v=>/[A-Za-z0-9]/.test(v)?v.match(/^\s*/)[0]+'\u2066'+v.trim()+'\u2069'+v.match(/\s*$/)[0]:v)).join('')}
const E=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=t(text);if(cls)n.className=cls;return n};
const B=(id,label,fn,cls='btn')=>{const n=E('button',label,cls);n.type='button';n.id=id;n.onclick=fn;return n};
const S=(tag,attrs={},text)=>{const n=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,String(v));if(text!==undefined)n.textContent=text;return n};
const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
let timer=null,playing=false;
function stop(){if(timer!==null)clearInterval(timer);timer=null;playing=false}
function auto(next,done){stop();if(done())next(true);playing=true;paint();timer=setInterval(()=>{next(false);if(done())stop();paint()},1100)}
function title(a,e,na,ne){box.append(E('h3',[a,e]),E('p',[na,ne],'source-note'))}
function panel(label,cls='wb-panel'){const n=E('div',undefined,cls);if(label)n.append(E('h4',label));box.append(n);return n}
function output(id,text,bad=false){const n=E('div',text,'wb-result'+(bad?' invalid':''));n.id=id;n.setAttribute('role','status');n.setAttribute('aria-live','polite');box.append(n);return n}
function note(a,e){box.append(E('p',[a,e],'source-note'))}
function controls(nodes){const n=E('div',undefined,'scene-actions');n.append(...nodes);box.append(n)}
function input(id,label,value,fn,type='text',opts={}){const row=E('label',undefined,'wb-field');row.htmlFor=id;row.append(E('span',label));const n=E('input');n.id=id;n.type=type;for(const[k,v]of Object.entries(opts))n.setAttribute(k,String(v));n.value=value;n.onchange=()=>{stop();if(fn(n.value)===false){n.setAttribute('aria-invalid','true');err.textContent=t(['أدخل عددًا صحيحًا داخل المدى الموضح.','Enter an integer within the stated bounds.'])}};const err=E('span',undefined,'wb-input-error');err.id=id+'-error';err.setAttribute('role','status');n.setAttribute('aria-describedby',err.id);row.append(n,err);box.append(row);return n}
function check(id,label,value,fn){const row=E('label',undefined,'wb-check'),n=E('input');n.type='checkbox';n.id=id;n.checked=value;n.onchange=()=>{stop();fn(n.checked);paint()};row.append(n,E('span',label));box.append(row);return n}
function select(id,label,opts,value,fn){const row=E('label',undefined,'wb-field');row.htmlFor=id;row.append(E('span',label));const n=E('select');n.id=id;for(const[v,p]of opts){const o=E('option',p);o.value=v;n.append(o)}n.value=value;n.onchange=()=>{stop();fn(n.value);paint()};row.append(n);box.append(row);return n}
function code(text){const p=E('pre',undefined,'code-block');p.dir='ltr';p.append(E('code',text));box.append(p)}
function num(v,min,max){const s=String(v).trim().replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-1632));if(!/^[+-]?\d+$/.test(s))return null;const n=Number(s);return Number.isSafeInteger(n)&&n>=min&&n<=max?n:null}
function svg(label,height=220){const n=S('svg',{viewBox:`0 0 740 ${height}`,role:'img','aria-label':t(label),class:'wb-svg'});box.append(n);return n}
function animate(node,attr,from,to){if(from===to||reduced())return;node.append(S('animate',{attributeName:attr,from,to,dur:'.75s',fill:'freeze'}))}
function flow(labels,phase,kind='request'){
 const g=svg(['حركة انتقال الطلب بين المراحل','A request travelling between stages']),xs=[80,273,466,660];
 g.append(S('path',{d:'M80 95H660',fill:'none',stroke:'#2c5262','stroke-width':5}));
 xs.forEach((x,i)=>{const group=S('g');group.append(S('rect',{x:x-54,y:42,width:108,height:107,rx:19,fill:i<=phase?'#123e4a':'#102735',stroke:i===phase?'#55dfc1':'#345364','stroke-width':i===phase?3:1}));
 if(kind==='os'&&i===1){group.append(S('rect',{x:x-23,y:63,width:46,height:35,rx:6,fill:'none',stroke:'#8de8d5','stroke-width':3}));for(let k=0;k<4;k++)group.append(S('path',{d:`M${x-15+k*10} 55v8m0 35v8`,stroke:'#8de8d5','stroke-width':3}));}
 else if(i===0||i===3){group.append(S('rect',{x:x-21,y:61,width:42,height:43,rx:4,fill:'none',stroke:'#8de8d5','stroke-width':3}),S('path',{d:`M${x-12} 74h24m-24 10h24m-24 10h15`,stroke:'#8de8d5','stroke-width':3}));}
 else if(i===1){group.append(S('path',{d:`M${x-21} 83l14 14 28-32`,fill:'none',stroke:'#8de8d5','stroke-width':5}));}
 else{group.append(S('circle',{cx:x,cy:82,r:21,fill:'none',stroke:'#8de8d5','stroke-width':3}),S('path',{d:`M${x} 68v15l12 8`,fill:'none',stroke:'#8de8d5','stroke-width':3}));}
 group.append(S('text',{x,y:131,'text-anchor':'middle',fill:'#d9edf3','font-size':20,'font-family':'sans-serif'},String(i+1).padStart(2,'0')));g.append(group)});
 const token=S('rect',{x:xs[phase]-11,y:169,width:22,height:27,rx:4,fill:'#ffd36c'});animate(token,'x',xs[Math.max(0,phase-1)]-11,xs[phase]-11);g.append(token);
 const key=E('div',undefined,'wb-key');key.dir='ltr';labels.forEach((p,i)=>{const item=E('span',[`${i+1}. ${p[0]}`,`${i+1}. ${p[1]}`],i===phase?'active':'');item.dir=document.documentElement.dir;key.append(item)});box.append(key)
}
const tr={service:'library',complete:true,verified:true,phase:0};
const os={apps:[],permission:true,printer:true,file:'plan.txt',phase:0,msg:null,device:'pc'};
const cy={good:3,bad:8,filter:false,phase:0,backup:true,locked:false,scenario:'targeted',reveal:false};
const records=[['1',12],['2',18],['2',18],['3',-4],['4',20],['5','?'],['6',30]];
const ai={mode:'search',phase:0,n:'0',target:'10',label:'spam',trained:false,weights:null,sample:'free school',result:null};
const sorts=(()=>{const a=[5,2,9,1],frames=[{a:[...a],pair:[],swap:false}];for(let end=3;end>0;end--)for(let i=0;i<end;i++){const swap=a[i]>a[i+1];if(swap)[a[i],a[i+1]]=[a[i+1],a[i]];frames.push({a:[...a],pair:[i,i+1],swap})}return frames})();
function trainToy(){const weights={spam:{},school:{}};for(const[text,label]of[['free prize','spam'],['school homework','school'],['free school',ai.label]])for(const word of text.split(' '))weights[label][word]=(weights[label][word]||0)+1;ai.weights=weights;ai.trained=true;ai.result=null}
function predictToy(){if(!ai.trained)return;const score={spam:0,school:0};for(const w of ai.sample.split(' '))for(const c of ['spam','school'])score[c]+=ai.weights[c][w]||0;ai.result={...score,label:score.spam===score.school?'unknown':score.spam>score.school?'spam':'school'}}
function paintAI(){
 title('مرسم الخوارزميات والتعلم','Algorithm and learning studio','النتائج محاكاة لقواعد وأمثلة محددة، لا مفسر Python عامًا ولا خدمة ذكاء اصطناعي خارجية.','Results simulate defined examples, not a general Python interpreter or external AI service.');
 select('ai-mode',['اختر المسار','Choose a path'],[['sequential',['تتابع:تحية','Sequence: greeting']],['condition',['شرط: موجب وسالب وصفر','Condition: positive, negative, zero']],['score',['شرط عتبة 50: ليس نموذج تعلم','Threshold-50 rule: not learned ML']],['loop',['تكرار: Hello خمس مرات','Loop: Hello five times']],['search',['بحث: [3,7,10,5]','Search: [3,7,10,5]']],['sort',['ترتيب: [5,2,9,1]','Sort: [5,2,9,1]']],['learn',['تعلم من أمثلة معلّمة','Learn from labelled examples']]],ai.mode,v=>{ai.mode=v;ai.phase=0;ai.result=null});
 if(ai.mode==='learn'){
  const training=panel(['أمثلة التدريب الثابتة والخيار القابل للتغيير','Fixed training examples and one changeable label']);training.append(E('p','free prize → '+t(['إعلان','Advert'])),E('p','school homework → '+t(['مدرسة','School'])),E('p','free school → '+t(['الفئة التي تختارها أدناه','The label you choose below'])));
  select('ai-training-label',['فئة المثال الثالث','Third example label'],[['spam',['إعلان','Advert']],['school',['مدرسة','School']]],ai.label,v=>{ai.label=v;ai.trained=false;ai.result=null});
  controls([B('ai-train',['درّب من الأمثلة الحالية','Train on current examples'],()=>{trainToy();paint()},'btn primary')]);
  if(ai.trained){const table=panel(null,'wb-table-wrap'),tb=E('table',undefined,'wb-table'),h=E('tr');for(const p of [['الكلمة','Word'],['تكرار إعلان','Advert count'],['تكرار مدرسة','School count']])h.append(E('th',p));tb.append(h);for(const w of ['free','prize','school','homework']){const r=E('tr');r.append(E('td',w),E('td',String(ai.weights.spam[w]||0)),E('td',String(ai.weights.school[w]||0)));tb.append(r)}table.append(tb)}
  select('ai-sample',['عينة اختبار خيالية','Fictional test sample'],[['free school','free school'],['homework','homework'],['new word','new word']],ai.sample,v=>{ai.sample=v;ai.result=null});
  const predict=B('ai-predict',['قارن بالعينة الجديدة','Compare the new sample'],()=>{predictToy();paint()});predict.disabled=!ai.trained;controls([predict,B('ai-learn-reset',['إعادة نموذج التعلم','Reset learning model'],()=>{ai.label='spam';ai.trained=false;ai.weights=null;ai.result=null;paint()})]);
  if(ai.result){const r=ai.result;output('ai-status',[`مجموع تكرارات الكلمات:إعلان ${r.spam}، مدرسة ${r.school}. ${r.label==='unknown'?'لا ترجيح في النموذج.':r.label==='spam'?'ترجيح تعليمي:إعلان.':'ترجيح تعليمي: مدرسة.'}`,`Word-count sums:advert ${r.spam}, school ${r.school}. ${r.label==='unknown'?'No preference in this model.':r.label==='spam'?'Toy prediction:advert.':'Toy prediction: school.'}`]);}else output('ai-status',ai.trained?['تم تعلم جدول التكرارات من الأمثلة الحالية. اختر عينة ثم قارن.','The count table was learned from current examples. Select a sample, then compare.']:['لا نموذج مدرب بعد. تغيير فئة المثال يلزم إعادة التدريب.','No trained model yet. Changing a label requires retraining.']);
  note('هذا مصنف تكرارات كلمات شديد التبسيط:لا احتمالات ثقة، ولا كشف رسائل حقيقي، ولا شبكة عصبية عميقة. الفئات ليست أحكام أمان.','This is an extremely simple word-count classifier: no confidence probabilities, real spam detection or deep neural network. Labels are not safety verdicts.');return;
 }
 if(ai.mode==='condition'||ai.mode==='score')input('ai-number',ai.mode==='score'?['درجة تجريبية 0–100','Example score 0–100']:['عدد صحيح من -1000 إلى 1000','Integer from -1000 to 1000'],ai.n,v=>{ai.n=v;ai.phase=0;paint()},'text',{inputmode:'numeric',autocomplete:'off'});
 if(ai.mode==='search')input('ai-target',['العدد المطلوب:-1000 إلى 1000','Search target: -1000 to 1000'],ai.target,v=>{ai.target=v;ai.phase=0;paint()},'text',{inputmode:'numeric',autocomplete:'off'});
 let max=3,valid=true,caption,source;
 if(ai.mode==='sequential'){caption=[['حدد الاسم Student.','Set name to Student.'],['كوّن التحية.','Build the greeting.'],['جهز عرض النتيجة.','Prepare output.'],['Hello, Student','Hello, Student']][ai.phase];source='name = "Student"\ngreeting = "Hello, " + name\nprint(greeting)';flow([['اسم','Name'],['بناء النص','Build text'],['تجهيز العرض','Prepare output'],['تحية','Greeting']],ai.phase)}
 if(ai.mode==='condition'||ai.mode==='score'){
  const score=ai.mode==='score',n=num(ai.n,score?0:-1000,score?100:1000);valid=n!==null;const result=!valid?'Invalid integer':score?n>=50?'Meets example threshold':'Below example threshold':n>0?'Positive':n<0?'Negative':'Zero';caption=!valid?['أدخل عددًا صحيحًا داخل حدود المثال. الفراغ والكسور ليست أعدادًا صحيحة هنا.','Enter an integer within the example bounds. Empty input and decimals are not valid integers here.']:ai.phase===3?[`النتيجة:${result}`,`Result:${result}`]:[['اقرأ المدخل أولًا.','Read the input first.'],['اختبر الشرط المكتوب؛ لا يوجد تدريب على بيانات.','Test the written condition; no data training occurs.'],['اختر الفرع الصحيح حسب القيمة.','Choose the correct branch for the value.']][ai.phase];
  const g=svg(['قرار متفرع حسب شرط','A decision branching on a condition'],210);g.append(S('path',{d:'M370 14L460 76L370 138L280 76Z',fill:'#174551',stroke:'#72e2c5','stroke-width':3}),S('text',{x:370,y:83,'text-anchor':'middle',fill:'#f0fffb','font-size':26},score?'n ≥ 50 ?':'n > 0 ?'),S('path',{d:'M280 76H125V157M460 76H615V157',fill:'none',stroke:'#89b5bd','stroke-width':3}));for(const[x,txt]of[[125,'NO'],[615,'YES']])g.append(S('rect',{x:x-63,y:157,width:126,height:40,rx:10,fill:'#173946',stroke:'#6abbaf'}),S('text',{x,y:184,'text-anchor':'middle','font-size':23,fill:'#e7fafa'},txt));
  source=score?'score = int(input("Score:"))\nif score >= 50:\n    print("Meets example threshold")\nelse:\n    print("Below example threshold")':'n = int(input("Number: "))\nif n > 0:\n    print("Positive")\nelif n < 0:\n    print("Negative")\nelse:\n    print("Zero")';
  if(!score)note('الرسم يعرض أول قرار فقط؛ فرع NO يحتاج بعده اختبار n < 0 للتمييز بين السالب والصفر كما في الكود.','The diagram shows only the first decision. Its NO branch needs the n < 0 test to distinguish negative from zero, as the code shows.');else note('50 عتبة المثال فقط، وليست سياسة نجاح مدرسية ولا نموذجًا تعلّم من بيانات.','50 is only an example threshold, not a school passing policy or a data-trained model.');
 }
 if(ai.mode==='loop'){max=5;caption=[`تمت ${ai.phase} / 5 دورات. قيم range(5): 0 ثم 1 ثم 2 ثم 3 ثم 4.`,`Completed ${ai.phase} / 5 iterations. range(5) gives 0, 1, 2, 3, 4.`];const p=panel(null,'wb-loop-output');for(let i=0;i<ai.phase;i++)p.append(E('div',`${i}: Hello`,'wb-loop-line'));source='for i in range(5):\n    print("Hello")'}
 if(ai.mode==='search'){
  const target=num(ai.target,-1000,1000),arr=[3,7,10,5],found=arr.indexOf(target);valid=target!==null;max=found<0?4:found+1;const inspected=Math.min(ai.phase,4),finished=ai.phase>=max;caption=!valid?['اكتب عددًا صحيحًا في حدود المثال.','Enter an integer within the example bounds.']:finished?(found<0?['Not found:انتهت العناصر دون تطابق.','Not found: all items were checked.']:[`Found at index ${found}`,`Found at index ${found}`]):[`نفحص عنصرًا واحدًا في كل خطوة. تم فحص ${inspected} من 4.`,`Check one item per step. ${inspected} of 4 inspected.`];
  const g=svg(['فحص عناصر قائمة بالترتيب','Checking list items in order'],190);arr.forEach((v,i)=>{const x=65+i*175,on=i===Math.max(0,inspected-1)&&inspected>0;g.append(S('rect',{x,y:44,width:125,height:85,rx:18,fill:on?'#225d53':'#173543',stroke:on?'#79edc8':'#3f6472','stroke-width':on?4:2}),S('text',{x:x+62,y:97,'text-anchor':'middle','font-size':36,fill:'#f2ffff'},String(v)),S('text',{x:x+62,y:162,'text-anchor':'middle','font-size':23,fill:'#a4c8d0'},`[${i}]`))});if(inspected>0){const x=127+(inspected-1)*175,n=S('path',{d:`M${x-11} 15L${x+11} 15L${x} 34Z`,fill:'#ffd36c'});g.append(n)}
  source='numbers = [3, 7, 10, 5]\ntarget = 10\nfound = False\nfor i, number in enumerate(numbers):\n    if number == target:\n        print("Found at index", i)\n        found = True\n        break\nif not found:\n    print("Not found")';source=source.replace('target = 10',`target = ${valid?target:'10  # enter a valid target in the workbench'}`)
 }
 if(ai.mode==='sort'){
  max=sorts.length-1;const frame=sorts[ai.phase],prev=sorts[Math.max(0,ai.phase-1)],g=svg(['أعمدة تتحرك عند تبديل القيم لترتيبها','Bars moving as values swap into order'],190);
  frame.a.forEach((v,i)=>{const x=65+i*175,y=143-v*11,old=65+prev.a.indexOf(v)*175;const bar=S('rect',{x,y,width:105,height:v*11,rx:9,fill:frame.pair.includes(i)?'#6cddba':'#458594'});animate(bar,'x',old,x);g.append(bar);const text=S('text',{x:x+52,y:178,'text-anchor':'middle','font-size':27,fill:'#d9f7f2'},String(v));animate(text,'x',old+52,x+52);g.append(text)});
  caption=ai.phase===max?['الترتيب النهائي:[1, 2, 5, 9].','Final order: [1, 2, 5, 9].']:ai.phase===0?['البداية [5, 2, 9, 1]. شاهد مقارنات متجاورة.','Start with [5, 2, 9, 1]. Watch adjacent comparisons.']:[`المقارنة ${ai.phase}: ${frame.swap?'حدث تبديل.':'لا حاجة للتبديل.'}`,`Comparison ${ai.phase}: ${frame.swap?'items swapped.':'no swap needed.'}`];
  source='numbers = [5, 2, 9, 1]\nnumbers.sort()\nprint(numbers)  # [1, 2, 5, 9]';note('الحركة تبادل متجاور تعليمي. Python sort() ليس ملزمًا باستخدام هذه الخطوات داخليًا.','The motion is an educational adjacent-swap trace. Python sort() need not use these steps internally.');
 }
 output('ai-status',caption,!valid);const advance=reset=>{ai.phase=reset?0:Math.min(max,ai.phase+1)};
 const play=B('ai-play',playing?['إيقاف التتبع','Pause trace']:['شاهد التنفيذ','Watch execution'],()=>{if(playing){stop();paint()}else auto(advance,()=>ai.phase>=max)},'btn primary'),step=B('ai-step',['خطوة واحدة','One step'],()=>{stop();advance(ai.phase>=max);paint()});play.disabled=step.disabled=!valid;
 controls([play,step,B('ai-reset',['أعد التتبع','Reset trace'],()=>{stop();ai.phase=0;paint()})]);code(source);
}
function paint(){box.textContent='';paintAI()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
