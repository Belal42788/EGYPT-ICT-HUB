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
function paintTransformation(){
 title('رحلة خدمة مدرسية خيالية','A fictional school-service journey','لا بيانات شخصية ولا معاملات حقيقية. عدد الخطوات مثال توضيحي، وليس قياسًا لوفر حكومي فعلي.','No personal data or real transactions. Step counts are illustrative, not measurements of real government savings.');
 select('service-kind',['الخدمة التدريبية','Practice service'],[['library',['طلب استعارة كتاب','Book-loan request']],['club',['طلب نشاط مدرسي','School-club request']]],tr.service,v=>{tr.service=v;tr.phase=0});
 check('request-complete',['الحقول التجريبية مكتملة','Dummy required fields are complete'],tr.complete,v=>{tr.complete=v;tr.phase=0});check('request-verified',['تحققت من القناة المعروفة للخدمة','The known service channel was verified'],tr.verified,v=>{tr.verified=v;tr.phase=0});
 flow([['إدخال','Input'],['تحقق','Validation'],['مراجعة','Review'],['رد وتتبع','Response and tracking']],tr.phase);
 const p=panel(['ورقي أم رقمي؟','Paper or digital?'],'wb-compare');p.append(E('div',['مسار ورقي افتراضي:اكتب ← انتقل ← سلّم ← ارجع للسؤال.','Fictional paper path: write → travel → submit → return to ask.']),E('div',['مسار رقمي افتراضي: أدخل ← تحقق ← راجع ← تتبع عن بُعد.','Fictional digital path: enter → validate → review → track remotely.']));
 const valid=tr.complete&&tr.verified;
 const captions=[['الطلب لم يبدأ. رمز الوثيقة ينتظر عند الإدخال.','Not started. The document token waits at input.'],['التحقق يمنع نقص البيانات أو الاعتماد على قناة غير متحققة.','Validation checks completeness and the verified route.'],['الطلب يتحرك إلى المراجعة:الرقمنة ليست قبولًا تلقائيًا.','The request travels to review; digitisation is not automatic approval.'],tr.service==='library'?['رد تجريبي:الطلب LIB-001 قيد التتبع داخل النموذج فقط.','Dummy response: request LIB-001 is trackable only inside this model.']:['رد تجريبي: الطلب CLUB-001 قيد التتبع داخل النموذج فقط.','Dummy response: request CLUB-001 is trackable only inside this model.']];
 output('request-status',!valid&&tr.phase>=1?(!tr.verified?['توقف:تحقق أولًا من قناة الخدمة المعروفة.','Paused: first verify the known service channel.']:['توقف: استكمل الحقول التجريبية المطلوبة.','Paused: complete the dummy required fields.']):captions[tr.phase],!valid&&tr.phase>=1);
 const next=reset=>{if(reset)tr.phase=0;else tr.phase=valid?Math.min(3,tr.phase+1):1};
 controls([B('request-play',playing?['إيقاف الحركة','Pause motion']:['شاهد رحلة الطلب','Watch the request'],()=>{if(playing){stop();paint()}else auto(next,()=>tr.phase===3||(!valid&&tr.phase===1))},'btn primary'),B('request-step',['خطوة واحدة','One step'],()=>{stop();next(tr.phase===3);paint()}),B('request-reset',['إعادة الطلب','Reset request'],()=>{stop();Object.assign(tr,{service:'library',complete:true,verified:true,phase:0});paint()})]);
 note('لاحظ أثر الاتصال والتحقق وتنظيم المراحل، لا مجرد استبدال الورق بصورة. لا تحسب الحركة وفرًا فعليًا في الطاقة.','Observe connectivity, validation and stage management, not merely scanning paper. The animation does not measure actual energy savings.');
}
const os={apps:[],permission:true,printer:true,file:'plan.txt',phase:0,msg:null,device:'pc'};
const cy={good:3,bad:8,filter:false,phase:0,backup:true,locked:false,scenario:'targeted',reveal:false};
function paint(){box.textContent='';paintTransformation()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
