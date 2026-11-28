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
const bd={dedup:false,validate:false,copies:1,format:'table',rate:'slow',phase:0};
const records=[['1',12],['2',18],['2',18],['3',-4],['4',20],['5','?'],['6',30]];
function dataRows(){const all=[];for(let b=0;b<bd.copies;b++)for(const[id,q]of records)all.push({id:`${b+1}-${id}`,q});const seen=new Set();return all.map(r=>{const duplicate=seen.has(r.id);seen.add(r.id);const invalid=typeof r.q!=='number'||r.q<0;return{...r,duplicate,invalid,drop:(bd.dedup&&duplicate)||(bd.validate&&invalid)}})}
function paintBigData(){
 title('مختبر عينة بيانات خيالية','A synthetic data-sample lab','البيانات تمثل وحدات مباعة غير سالبة فقط في متجر خيالي. لا نقبل السالب هنا؛ قد تحتاج مجالات أخرى قواعد مختلفة.','Data represents nonnegative units sold in a fictional shop. This model rejects negatives; other domains may need different rules.');
 select('data-format',['استكشف نوع البيانات','Explore data type'],[['table',['هيكلية:جدول','Structured: table']],['image',['غير هيكلية: صورة','Unstructured: image']],['email',['شبه هيكلية: بريد','Semi-structured: email']]],bd.format,v=>{bd.format=v});
 if(bd.format==='email'){code('From:fictional-class\nSubject: sample observation\n\nA free-form report about our fictional sample.');note('حقول الرأس منظمة، وجسم الرسالة أكثر حرية. هذا بريد تخيلي لا يُرسل.','Headers are organised; the body is freer. This fictional email is never sent.')}
 if(bd.format==='image'){const g=svg(['صورة متجهية تجريبية لشمس وجبال','A synthetic vector image of a sun and mountains'],180);g.append(S('rect',{x:0,y:0,width:740,height:180,rx:20,fill:'#102f41'}),S('circle',{cx:570,cy:48,r:25,fill:'#ffd67c'}),S('path',{d:'M0 180L170 40L325 180L445 65L610 180L740 110V180Z',fill:'#27765f'}));note('المشهد لا يأتي في صفوف وحقول جدول مبيعات؛ له تمثيل ومعالجة يناسبانه.','The scene is not a sales table of fixed fields and rows; it needs a suitable representation and processing.')}
 box.append(E('h3',['نظّف جدول البيع التجريبي','Clean the fictional sales table']));
 select('data-copies',['حجم العينة:دفعات خيالية','Sample volume: fictional batches'],[['1',['دفعة: 7 سجلات خام','One batch: 7 raw rows']],['2',['دفعتان: 14 سجلًا خامًا','Two batches: 14 raw rows']],['4',['أربع دفعات: 28 سجلًا خامًا','Four batches: 28 raw rows']]],String(bd.copies),v=>{bd.copies=Number(v);bd.phase=0});
 select('data-rate',['معدل الحركة التوضيحي','Illustrative flow rate'],[['slow',['بطيء:توضيح السرعة فقط','Slow: illustrating velocity']],['fast',['سريع: توضيح السرعة فقط','Fast: illustrating velocity']]],bd.rate,v=>{bd.rate=v});
 check('data-dedup',['استبعد تكرار رقم السجل داخل الدفعة','Exclude repeated record IDs within each batch'],bd.dedup,v=>{bd.dedup=v});check('data-validate',['استبعد القيم غير العددية أو السالبة','Exclude nonnumeric or negative quantities'],bd.validate,v=>{bd.validate=v});
 const rows=dataRows(),kept=rows.filter(r=>!r.drop),bad=kept.some(r=>r.duplicate||r.invalid),validNumeric=kept.filter(r=>!r.invalid),total=validNumeric.reduce((s,r)=>s+r.q,0);
 const g=svg(['تدفق عينة إلى الفحص ثم تقرير','Sample flow through validation into a report'],180);g.append(S('path',{d:'M80 90H660',stroke:'#355867','stroke-width':5}));
 for(let i=0;i<Math.min(rows.length,20);i++){const r=rows[i],x=55+(i%5)*22,y=35+Math.floor(i/5)*29,tx=bd.phase===0?x:r.drop?360+(i%4)*15:600+(i%4)*19,ty=bd.phase===0?y:r.drop?130:55+Math.floor(i/4)*17;const n=S('rect',{x:tx,y:ty,width:12,height:14,rx:3,fill:r.invalid?'#ff859b':r.duplicate?'#ffd36c':'#62e0bb',opacity:r.drop?.3:1});if(bd.phase>0&&!reduced()){const a=S('animate',{attributeName:'x',from:x,to:tx,dur:bd.rate==='fast'?'.4s':'1.8s',fill:'freeze'});n.append(a);animate(n,'y',y,ty)}g.append(n)}
 g.append(S('path',{d:'M326 31h93l-30 50v30h-33V81Z',fill:'#1c4c5a',stroke:'#91e8d5','stroke-width':3}),S('text',{x:371,y:157,'font-size':22,'text-anchor':'middle',fill:'#d6eaf1'},'CHECK'),S('rect',{x:575,y:26,width:135,height:116,rx:13,fill:'none',stroke:'#6ddac1','stroke-width':3}));
 controls([B('data-play',['شاهد مرور العينة عبر الفحص','Watch the sample flow'],()=>{bd.phase=bd.phase===1?0:1;paint()},'btn primary'),B('data-reset',['إعادة العينة','Reset sample'],()=>{stop();Object.assign(bd,{dedup:false,validate:false,copies:1,format:'table',rate:'slow',phase:0});paint()})]);
 const wrap=panel(null,'wb-table-wrap'),table=E('table',undefined,'wb-table'),head=E('tr');for(const p of [['رقم السجل','Record ID'],['الكمية','Quantity'],['ملاحظة','Check']])head.append(E('th',p));table.append(head);
 rows.forEach(r=>{const tr=E('tr',undefined,r.drop?'excluded':r.invalid||r.duplicate?'suspect':'');const idCell=E('td',r.id),qCell=E('td',String(r.q));idCell.dir=qCell.dir='ltr';tr.append(idCell,qCell,E('td',r.drop?['مستبعد','Excluded']:r.invalid?['قيمة غير مقبولة','Invalid value']:r.duplicate?['رقم مكرر','Repeated ID']:['صالح في النموذج','Valid in model']));table.append(tr)});wrap.append(table);
 output('data-status',[`المتبقي ${kept.length} من ${rows.length}. ${bad?'الجودة تحتاج مراجعة قبل الاعتماد على النتيجة.':`عينة نظيفة وفق قواعد النموذج:المجموع ${total}، المتوسط ${kept.length?(total/kept.length).toFixed(1):'—'}.`}`,`${kept.length} of ${rows.length} rows retained. ${bad?'Review quality before relying on a result.':`Clean under this model’s rules:total ${total}, mean ${kept.length?(total/kept.length).toFixed(1):'—'}.`}`],bad);
 const vs=panel(['اربط المشاهدة بالـ 5Vs','Connect observations to the 5Vs'],'wb-vs');for(const p of [['الحجم:عدد السجلات','Volume: row count'],['السرعة: معدل حركة الرموز','Velocity: symbol flow rate'],['التنوع: جدول وصورة وبريد','Variety: table, image and email'],['الصحة: التكرار والقيم والمصدر','Veracity: duplicates, values and source'],['القيمة: تقرير يمكن تبريره','Value: a justified report']])vs.append(E('div',p));
 note('كل المصادر هنا مولدة تعليميًا. تغيير الحركة لا يقيس أداء منصة، والعينة الصغيرة ليست بيانات ضخمة حقيقية. قواعد التحقق لا تثبت وحدها صحة المصدر في الواقع.','All sources here are synthetic. Animation speed is not a platform benchmark; this tiny sample is not actual big data. Validation rules alone do not establish real-world source accuracy.');
}
function paint(){box.textContent='';paintBigData()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
