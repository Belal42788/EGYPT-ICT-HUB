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
const threats={targeted:[['رسالة خيالية تستهدف مجموعة طلاب وتعرف اسم فصلهم.','A fictional message targets pupils and knows their class name.'],['التصيد الموجه: معرفة تفاصيل عنك لا تثبت الهوية. تحقق بقناة مستقلة معروفة.','Spear phishing: knowing details about you does not prove identity. Verify independently through a known channel.']],pretext:[['مصدر غير متحقق منه يدعي دور الدعم ويختلق سببًا لطلب بيانات سرية.','An unverified source claims a support role and invents a reason to request secret data.'],['Pretexting: صفة وقصة مختلقتان. لا تعطِ أسرارًا، وارجع لمسؤول تعرفه.','Pretexting: a fabricated role and story. Disclose no secrets; ask a support contact you already know.']],bait:[['إعلان خيالي يَعِد بمكافأة مقابل تنزيل ملف من مصدر مجهول.','A fictional advert promises a reward for downloading an unknown file.'],['الاستدراج: المكافأة طُعم. لا تنزل الملف واطلب مساعدة موثوقة.','Baiting: the reward is a lure. Do not download it; seek trusted help.']]};
function paintCyber(){
 title('بوابة خدمة رمزية، وليست اختبار هجوم','A symbolic service gate, not an attack test','كل النقاط أجهزة وطلبات خيالية. لا عنوان موقع، ولا حركة شبكة، ولا ملفات حقيقية.','Every point represents fictional devices and requests. No website target, network traffic or real files.');
 input('cyber-good',['طلبات شرعية:0 إلى 6','Legitimate requests: 0–6'],cy.good,v=>{const n=num(v,0,6);if(n!==null){cy.good=n;cy.phase=0;paint()}else return false},'number',{min:0,max:6,step:1});input('cyber-bad',['طلبات مزعجة خيالية:0 إلى 12','Fictional unwanted requests: 0–12'],cy.bad,v=>{const n=num(v,0,12);if(n!==null){cy.bad=n;cy.phase=0;paint()}else return false},'number',{min:0,max:12,step:1});
 check('cyber-filter',['مرشح مثالي تعليمي يحجب الرموز الحمراء','Idealised teaching filter blocks red symbols'],cy.filter,v=>{cy.filter=v;cy.phase=0});
 const g=svg(['أجهزة متعددة ترسل رموزًا إلى بوابة ثم خادم تجريبي','Multiple devices send symbols through a gate to a model server']);
 for(let i=0;i<6;i++){const x=48+(i%2)*95,y=30+Math.floor(i/2)*65;g.append(S('rect',{x,y,width:51,height:35,rx:5,fill:'#183644',stroke:'#779eac','stroke-width':2}),S('path',{d:`M${x+51} ${y+17}L365 105L600 105`,fill:'none',stroke:'#345563','stroke-width':2}));}
 g.append(S('path',{d:'M365 54l42 18v36q-1 42-42 64q-41-22-42-64V72Z',fill:cy.filter?'#1e6654':'#4b3540',stroke:cy.filter?'#62e8bb':'#ed8399','stroke-width':3}),S('text',{x:365,y:115,'text-anchor':'middle',fill:'#efffff','font-size':35},cy.filter?'✓':'?'));
 g.append(S('rect',{x:590,y:54,width:112,height:118,rx:16,fill:'#102c39',stroke:'#6fcfba','stroke-width':3}));for(let i=0;i<3;i++)g.append(S('rect',{x:606,y:70+i*27,width:80,height:18,rx:4,fill:'#294859'}));
 const total=cy.good+cy.bad;
 for(let i=0;i<total;i++){const bad=i>=cy.good,x=100+(i%3)*55,y=38+(i%5)*28,tx=cy.phase===0?x:bad&&cy.filter?350:cy.phase===1?445+(i%4)*22:610+(i%4)*20,ty=cy.phase===0?y:78+(i%4)*18;const d=S('circle',{cx:tx,cy:ty,r:7,fill:bad?'#ff859b':'#66e1bd',opacity:bad&&cy.filter&&cy.phase>0?.25:1});animate(d,'cx',x,tx);animate(d,'cy',y,ty);g.append(d)}
 const load=cy.good+(cy.filter?0:cy.bad),over=load>6;
 output('cyber-status',cy.phase===0?['غيّر الحمل ثم شغّل الجولة. قدرة النموذج 6 طلبات في الجولة.','Change the load, then play a round. Model capacity is 6 requests per round.']:[`حمل يصل للخدمة:${load} / 6. ${over?'الحمل يتجاوز القدرة؛ قد تتأخر الخدمة.':'الحمل داخل القدرة في هذا النموذج.'}`,`Load reaching the service:${load} / 6. ${over?'Capacity exceeded; service can be delayed.':'Load is within this model’s capacity.'}`],cy.phase>0&&over);
 controls([B('cyber-play',playing?['إيقاف الحركة','Pause motion']:['شغّل الجولة الرمزية','Play symbolic round'],()=>{if(playing){stop();paint()}else auto(reset=>{cy.phase=reset?0:Math.min(2,cy.phase+1)},()=>cy.phase===2)},'btn primary'),B('cyber-reset',['إعادة الحمل','Reset load'],()=>{stop();Object.assign(cy,{good:3,bad:8,filter:false,phase:0});paint()})]);
 note('يفترض المرشح هنا تمييزًا كاملًا للطلبات المزعجة، وهو تبسيط لا يتحقق دائمًا في الواقع. ليس كل بطء هجومًا، والتشبع لا يعني سرقة البيانات.','The filter assumes perfect identification of unwanted requests, a simplification that real systems cannot always achieve. Slowness does not always mean an attack; overload does not imply data theft.');
 box.append(E('h3',['ملفات خيالية:لماذا تهم النسخة المنفصلة؟','Fictional files: why does a separate backup matter?']));check('cyber-backup',['نسخة منفصلة ومختبرة متاحة في المثال','A separate tested backup exists in the example'],cy.backup,v=>{cy.backup=v});
 const files=panel(null,'wb-files');['notes.txt','art.png','project.txt'].forEach((f,i)=>{const n=E('div',undefined,'wb-file'+(cy.locked?' locked':''));n.append(E('span',cy.locked?'010101':f,'wb-file-name'),E('b',cy.locked?['محجوب في النموذج','Model locked']:['متاح في النموذج','Model available']));files.append(n)});
 controls([B('cyber-lock',['شاهد حجب الملفات الخيالية','Show fictional file denial'],()=>{cy.locked=true;paint()}),B('cyber-restore',['جرّب الاستعادة من النسخة','Try restoring the backup'],()=>{if(cy.backup)cy.locked=false;paint()})]);
 output('backup-status',cy.locked?(cy.backup?['الملفات محجوبة في الرسم؛ النسخة المنفصلة تتيح تجربة الاستعادة.','The drawing’s files are locked; the separate backup enables model recovery.']:['لا نسخة في المثال:الاستعادة ليست مضمونة. اطلب مساعدة بالغ موثوق ودعم تقني، ولا تدفع.','No backup in this example: recovery is not assured. Seek trusted adult and IT help; do not pay.']):['الملفات الخيالية متاحة. لم يُقرأ أو يُشفّر أي ملف من جهازك.','The fictional files are available. No file on your device was read or encrypted.'],cy.locked&&!cy.backup);
 box.append(E('h3',['افحص الفكرة، لا تضغط رابطًا','Inspect the idea, not a link']));select('cyber-scenario',['موقف خيالي','Fictional situation'],[['targeted',['رسالة موجهة','Targeted message']],['pretext',['قصة وصفة مختلقتان','Invented role and story']],['bait',['إغراء بمكافأة','Reward lure']]],cy.scenario,v=>{cy.scenario=v;cy.reveal=false});output('scenario-text',threats[cy.scenario][0]);controls([B('cyber-reveal',['اكشف علامة الخطر والاستجابة','Reveal the cue and response'],()=>{cy.reveal=true;paint()})]);if(cy.reveal)output('scenario-response',threats[cy.scenario][1]);
}
function paint(){box.textContent='';paintCyber()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
