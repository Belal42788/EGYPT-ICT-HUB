(() => {
'use strict';
const D=JSON.parse(document.getElementById('lesson-data').textContent);if(!['installation','email','datatoai','uxui','functions','inputerrors'].includes(D.lab))return;
const box=document.getElementById('interactive-lab'),NS='http://www.w3.org/2000/svg';
function isolate(s){return s.replace(/[A-Za-z0-9_"'\[\]()=.,+<>{}@#$%&:/?!\- ]+/g,v=>/[A-Za-z0-9]/.test(v)?v.match(/^\s*/)[0]+'\u2066'+v.trim()+'\u2069'+v.match(/\s*$/)[0]:v)}
const t=p=>Array.isArray(p)?(document.documentElement.lang==='en'?p[1]:isolate(p[0])):String(p);
const E=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=t(text);if(cls)n.className=cls;return n};
const B=(id,p,fn,primary=false)=>{const n=E('button',p,'btn'+(primary?' primary':''));n.id=id;n.type='button';n.onclick=()=>{stop();fn();paint()};return n};
const S=(tag,attrs={},text)=>{const n=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,String(v));if(text!==undefined)n.textContent=text;return n};
let timer=null,playing=false;function stop(){if(timer!==null)clearInterval(timer);timer=null;playing=false}
function run(next,done,reset){if(done())reset();playing=true;timer=setInterval(()=>{next();if(done())stop();paint()},1000)}
function title(a,e,na,ne){box.append(E('h3',[a,e]),E('p',[na,ne],'source-note'))}
function note(a,e){box.append(E('p',[a,e],'source-note'))}
function panel(p,cls='wb-panel'){const n=E('div',undefined,cls);if(p)n.append(E('h4',p));box.append(n);return n}
function controls(nodes){const n=E('div',undefined,'scene-actions');n.append(...nodes);box.append(n)}
function out(id,p,bad=false){const n=E('div',p,'wb-result'+(bad?' invalid':''));n.id=id;n.setAttribute('role','status');box.append(n);return n}
function select(id,p,opts,v,fn){const row=E('label',undefined,'wb-field'),n=E('select');row.htmlFor=id;row.append(E('span',p));n.id=id;for(const[value,label]of opts){const o=E('option',label);o.value=value;n.append(o)}n.value=v;n.onchange=()=>{stop();fn(n.value);paint()};row.append(n);box.append(row);return n}
function check(id,p,v,fn){const row=E('label',undefined,'wb-check'),n=E('input');n.type='checkbox';n.id=id;n.checked=v;n.onchange=()=>{stop();fn(n.checked);paint()};row.append(n,E('span',p));box.append(row);return n}
function input(id,p,v,fn){const row=E('label',undefined,'wb-field'),n=E('input');row.htmlFor=id;row.append(E('span',p));n.id=id;n.type='text';n.value=v;n.maxLength=24;n.autocomplete='off';n.spellcheck=false;n.onchange=()=>{stop();fn(n.value);paint()};row.append(n);box.append(row);return n}
function code(s){const n=E('pre',undefined,'code-block');n.dir='ltr';n.append(E('code',s));box.append(n)}
function svg(p,h=250){const n=S('svg',{viewBox:`0 0 740 ${h}`,class:'wb-svg',role:'img','aria-label':t(p)});box.append(n);return n}
function anim(n,attr,from,to){if(from!==to&&!matchMedia('(prefers-reduced-motion:reduce)').matches)n.append(S('animate',{attributeName:attr,from,to,dur:'.7s',fill:'freeze'}))}
function key(labels,active){const row=E('div',undefined,'wb3-key');labels.forEach((p,i)=>row.append(E('span',p,i===active?'active':'')));box.append(row)}
function journey(labels,phase,kind='file'){
 const g=svg(['رموز تتحرك بين مراحل المثال المحدد','Symbols moving between this example’s stages'],230),n=labels.length,xs=labels.map((_,i)=>75+i*590/(n-1));
 g.append(S('path',{d:'M75 95H665',stroke:'#375b68','stroke-width':5,fill:'none'}));xs.forEach((x,i)=>{g.append(S('rect',{x:x-48,y:42,width:96,height:108,rx:18,fill:i===phase?'#20574c':'#102d3b',stroke:i===phase?'#72e3bb':'#42616f','stroke-width':2}),S('text',{x,y:79,fill:'#d7efed','font-family':'monospace','font-size':20,'text-anchor':'middle'},String(i+1).padStart(2,'0')));if(kind==='mail')g.append(S('rect',{x:x-25,y:95,width:50,height:31,rx:3,fill:'none',stroke:'#8ae5c8','stroke-width':2}),S('path',{d:`M${x-25} 96l25 19 25-19`,fill:'none',stroke:'#8ae5c8','stroke-width':2}));else if(kind==='data')for(let k=0;k<3;k++)g.append(S('rect',{x:x-25,y:94+k*10,width:50,height:6,rx:2,fill:k===1?'#edc87d':'#73c6ba'}));else g.append(S('path',{d:`M${x-20} 94h30l11 12v24h-41zM${x+10} 94v13h11`,fill:'none',stroke:'#8ae5c8','stroke-width':2}));});
 const x=xs[Math.min(n-1,Math.max(0,phase))],token=S(kind==='mail'?'rect':'circle',kind==='mail'?{x:x-13,y:173,width:26,height:19,rx:3,fill:'#ffd67c'}:{cx:x,cy:184,r:12,fill:'#ffd67c'});anim(token,kind==='mail'?'x':'cx',xs[Math.max(0,phase-1)]-(kind==='mail'?13:0),x-(kind==='mail'?13:0));g.append(token);key(labels,phase)
}
function pause(id){return B(id,['إيقاف الحركة','Pause'],()=>stop())}
// Installation is a local state model. It never downloads, installs or prints.
const ins={source:'zip',trusted:true,compatible:true,extracted:false,phase:0,installed:false,notice:null,model:'usb',port:'usb',connected:false,driver:'none',configured:false,print:0,pnotice:null};
// All account and mail states are fictional, with fixed non-secret fields.
const mail={phase:0,parent:false,terms:false,signed:false,notice:null,send:0,delivered:false,pending:'ar',saved:'ar'};
// A fitted line versus interpolation:held-out references are never fitted.
const ai={clean:false,model:'line',phase:0};
function training(){return [[1,2],[2,4],[3,6],[4,ai.clean?8:9]]}
function learn(){const a=training(),n=a.length,sx=a.reduce((s,p)=>s+p[0],0),sy=a.reduce((s,p)=>s+p[1],0),sxx=a.reduce((s,p)=>s+p[0]*p[0],0),sxy=a.reduce((s,p)=>s+p[0]*p[1],0),m=(n*sxy-sx*sy)/(n*sxx-sx*sx),b=(sy-m*sx)/n;return{m,b,line:x=>m*x+b,curve:x=>a.reduce((sum,[xi,yi],i)=>sum+yi*a.reduce((product,[xj],j)=>i===j?product:product*(x-xj)/(xi-xj),1),0)}}
function paintDataAI(){
 title('درب ثم اختبر خارج أمثلة التدريب','Train, then test beyond the training examples','ست نقاط خيالية فقط، وليست بيانات ضخمة أو نظامًا طبيًا. المرجع الاصطناعي y = 2x؛ النقاط 1–4 للتدريب و5–6 للاختبار فقط.','Six synthetic points, not big data or a medical system. The synthetic reference is y = 2x. Points 1–4 train; points 5–6 only test.');
 check('learn-clean',['صحح القياس الخيالي المعلوم عند x=4 من 9 إلى 8','Correct the known synthetic measurement at x=4 from 9 to 8'],ai.clean,v=>{ai.clean=v;ai.phase=0});
 select('learn-model',['أسلوب ملاءمة التدريب','Training-fit method'],[['line',['خط مستقيم:تعلم ميلًا وثابتًا','Straight line: fit slope and intercept']],['curve',['منحنى مرن يمر بكل أمثلة التدريب','Flexible curve through every training point']]],ai.model,v=>{ai.model=v;ai.phase=0});
 journey([['جمع','Collect'],['تخزين','Store'],['تنظيف','Clean'],['تحليل وتدريب','Analyse/train'],['استخلاص وتقييم','Extract/evaluate']],ai.phase,'data');
 const fit=learn(),predict=fit[ai.model],trained=ai.phase>=3,g=svg(['نقاط تدريب ومنحنى ملاءمة ونقاط اختبار منفصلة','Training points, fitted curve and separate test points'],340),X=x=>65+x*90,Y=y=>290-y*10;
 g.id='learn-plot';g.append(S('path',{d:'M65 35V290H660',fill:'none',stroke:'#829eaa','stroke-width':2}));for(let x=1;x<=6;x++)g.append(S('text',{x:X(x),y:317,fill:'#a9c6d2','text-anchor':'middle','font-size':17},String(x)));for(const y of[0,10,20])g.append(S('text',{x:45,y:Y(y)+5,fill:'#a9c6d2','text-anchor':'middle','font-size':15},String(y)));
 let ref='';for(let x=1;x<=6.001;x+=.1)ref+=(ref?'L':'M')+X(x)+' '+Y(2*x)+' ';g.append(S('path',{d:ref,fill:'none',stroke:'#8299ab','stroke-dasharray':'7 7','stroke-width':2}));
 if(ai.phase>=1)for(const[x,y]of training())g.append(S('circle',{cx:X(x),cy:Y(y),r:8,fill:'#64e4ba'}));
 if(trained){let d='';for(let x=1;x<=6.001;x+=.05)d+=(d?'L':'M')+X(x)+' '+Y(predict(x))+' ';const curve=S('path',{d,fill:'none',stroke:'#ffd17b','stroke-width':4,'stroke-dasharray':1000,'stroke-dashoffset':0});anim(curve,'stroke-dashoffset',1000,0);g.append(curve);}
 if(ai.phase===4)for(const x of[5,6]){g.append(S('rect',{x:X(x)-7,y:Y(2*x)-7,width:14,height:14,fill:'#95b9ff'}),S('circle',{cx:X(x),cy:Y(predict(x)),r:8,fill:'none',stroke:'#ffd17b','stroke-width':3}),S('path',{d:`M${X(x)} ${Y(2*x)}V${Y(predict(x))}`,stroke:'#e895a4','stroke-width':2,'stroke-dasharray':'4 4'}));}
 key([['دائرة خضراء:تدريب','Green circle: training'],['متقطع: المرجع الخيالي','Dashed: synthetic reference'],['أصفر: ملاءمة مدربة','Yellow: trained fit'],['مربع أزرق: اختبار','Blue square: held-out test']],-1);
 const advance=()=>ai.phase=Math.min(4,ai.phase+1);controls([B('learn-play',['شاهد المراحل والتدريب','Watch stages and training'],()=>run(advance,()=>ai.phase===4,()=>ai.phase=0),true),B('learn-step',['المرحلة التالية','Next stage'],advance),pause('learn-pause'),B('learn-reset',['أعد البيانات الخام','Restore raw sample'],()=>Object.assign(ai,{clean:false,model:'line',phase:0}))]);
 const stages=[['السجلات جاهزة للجمع، ولم يدرب نموذج بعد.','Records await collection; no model trained yet.'],['خزنت أربع نقاط تدريب. الاختبار ليس جزءًا من الملاءمة.','Four training points stored. Test data is not fitted.'],['فحصت الجودة بحسب الاختيار. التصحيح معلوم من مولد المثال، لا تخمين.','Quality checked according to the toggle. Correction comes from the synthetic generator, not a guess.'],['حسبنا معاملات من نقاط التدريب فقط. افتح المرحلة الأخيرة للتقييم.','Parameters calculated from training points only. Continue to held-out evaluation.'],['قارِن خطأ التدريب بخطأ اختبار منفصل؛ هذه نتيجة مثال، وليست ضمانًا لكل نموذج.','Compare training error with held-out error. This example is not a guarantee for every model.']];out('learn-status',stages[ai.phase]);
 if(trained){const trainError=training().reduce((s,[x,y])=>s+Math.abs(predict(x)-y),0)/4,testError=[5,6].reduce((s,x)=>s+Math.abs(predict(x)-2*x),0)/2;const result=panel(['متوسط الخطأ المطلق، الأقل أفضل هنا','Mean absolute error, lower is better here'],'wb-vs');result.append(E('div',[`التدريب:${trainError.toFixed(2)}`,`Training:${trainError.toFixed(2)}`]));result.append(E('div',ai.phase===4?[`الاختبار:${testError.toFixed(2)}`,`Held-out test:${testError.toFixed(2)}`]:['الاختبار:لم يُعرض بعد','Held-out test: not shown yet']));if(ai.phase===4)out('learn-predictions',`x=5 → ${predict(5).toFixed(2)} (reference 10) | x=6 → ${predict(6).toFixed(2)} (reference 12)`);code(ai.model==='line'?`# Fitted from four training points only\ny_hat = ${fit.m.toFixed(2)} * x + (${fit.b.toFixed(2)})`:'# Flexible cubic interpolation through training points\n# Coefficients depend on those points; tests are held out.');}
 note('المنحنى المرن استيفاء تكعيبي محسوب من الأربع نقاط، والخط انحدار خطي بأقل المربعات. مع القياس الخام قد يلائم المرن التدريب تمامًا ويضعف خارج العينة. عند التصحيح يتفقان هنا؛ ليست قاعدة أن الأبسط يفوز دائمًا.','The flexible fit is cubic interpolation of the four training points; the line is least-squares regression. With the raw measurement, interpolation can fit training exactly yet fail beyond it. Correcting it makes both agree here, not a universal rule that simpler always wins.');
}
// The deliberately weak interface is contained inside a labelled prototype.
// Fixed programs, not eval or a general Python interpreter.
const fn={mode:'add',a:'3',b:'5',missing:false,phase:0,outside:false};
// A deliberately bounded decimal-string model. Unsupported Python forms are
// reported as interface limits, not invented Python ValueErrors.
function paint(){box.textContent='';paintDataAI()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
