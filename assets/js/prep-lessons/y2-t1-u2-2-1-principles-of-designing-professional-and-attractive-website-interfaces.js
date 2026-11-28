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
// The deliberately weak interface is contained inside a labelled prototype.
const ux={nav:false,clarity:false,consistent:false,layout:false,palette:'low',page:'home',clicks:0,found:false,watch:0};
const palettes={good:['#f0f7fa','#173244'],low:['#dadada','#b8b8b8'],loud:['#ffeb79','#8a1647']};
function contrast(a,b){const L=h=>{const z=h.match(/[0-9a-f]{2}/gi).map(c=>parseInt(c,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return .2126*z[0]+.7152*z[1]+.0722*z[2]};const x=L(a),y=L(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
function paintUX(){
 title('مصمم مكتبة مدرسية خيالية','Fictional school-library designer','الواجهة الضعيفة مقصودة داخل الصندوق فقط. غيّر مبدأ واحدًا، ثم جرّب العثور على كتاب الماء. لا إقراض أو حسابات حقيقية.','Only the boxed prototype is deliberately weak. Change one principle, then find the water book. No real loans or accounts.');
 for(const[k,p]of[['nav',['سهولة التنقل:تسميات مباشرة','Navigation: direct labels']],['clarity',['الوضوح: خط مقروء وتعليمات مفهومة','Clarity: legible type and instructions']],['consistent',['التناسق: نمط متوقع للأزرار المتشابهة','Consistency: predictable similar buttons']],['layout',['التخطيط: أقسام ومسافات منظمة','Layout: organised sections and spacing']]])check('ux-'+k,p,ux[k],v=>{ux[k]=v;ux.watch=0});
 select('ux-palette',['ألوان النص العادي في النموذج','Ordinary-text prototype colours'],[['low',['تباين ضعيف مقصود','Deliberately weak contrast']],['good',['أزرق فاتح ونص داكن','Light blue and dark text']],['loud',['أصفر ونص خمري، اختبر ولا تفترض','Yellow and burgundy:test, do not assume']]],ux.palette,v=>ux.palette=v);
 const[bg,fg]=palettes[ux.palette],ratio=contrast(bg,fg),proto=panel(null,'wb3-prototype'+(ux.layout?' organised':' crowded')+(ux.clarity?' clear':' unclear')+(ux.consistent?' consistent':' inconsistent'));proto.style.setProperty('--proto-bg',bg);proto.style.setProperty('--proto-fg',fg);proto.setAttribute('aria-label',t(['نموذج مكتبة خيالية قابل للتعديل','Editable fictional library prototype']));
 const header=E('div',undefined,'wb3-protohead');header.append(E('strong',ux.clarity?['مكتبة الفصل','Class library']:['مـــكـتـبــة ؟','L i b r a r y ?']));proto.append(header);
 const menu=E('div',undefined,'wb3-protonav');const go=(label,dest)=>{const b=E('button',label);b.type='button';b.dataset.dest=dest;b.onclick=()=>{stop();ux.page=dest;ux.clicks++;ux.watch=0;paint()};return b};
 menu.append(go(ux.nav?['الرئيسية','Home']:['١؟','1?'],'home'),go(ux.nav?['الكتب','Books']:['٢؟','2?'],ux.nav?'books':'more'),go(ux.nav?['مساعدة','Help']:['٣؟','3?'],'help'));proto.append(menu);
 if(ux.page==='home')proto.append(E('p',ux.clarity?['مهمتك:افتح الكتب وابحث عن «الماء سر الحياة».','Task: open Books and find “Water is the secret of life”.']:['ابحث… أين؟ جرب!','Look… where? Try!']));
 if(ux.page==='more')proto.append(E('p',['قائمة إضافية أخفت الكتب في هذا المثال.','An extra menu hides the books in this example.']),go(['المزيد ← قائمة الموارد','More → resource list'],'resources'));
 if(ux.page==='resources')proto.append(go(['افتح رف الكتب','Open bookshelf'],'books'));
 if(ux.page==='help')proto.append(E('p',['المطلوب كتاب الماء، لا رابط خارجي.','Find the water book; there is no external link.']));
 if(ux.page==='books'){const shelf=E('div',undefined,'wb3-books');for(const[id,p]of[['stars',['رحلة النجوم','Star journey']],['water',['الماء سر الحياة','Water is the secret of life']],['plants',['حديقة النبات','Plant garden']]]){const b=go(p,id);b.className='wb3-book';if(id==='water')b.id='ux-water';shelf.append(b)}proto.append(shelf)}
 if(['water','stars','plants'].includes(ux.page)){ux.found=ux.page==='water';proto.append(E('h4',ux.found?['الماء سر الحياة ✓','Water is the secret of life ✓']:['هذا كتاب آخر، جرب الرف.','This is a different book; try the shelf.']),E('p',ux.found?['وجدت الكتاب الخيالي. لا تسجيل استعارة.','You found the fictional book. No loan was recorded.']:['عد إلى الكتب لاختيار العنوان المطلوب.','Return to Books to choose the requested title.']));}
 out('ux-contrast',[`تباين النص العادي:${ratio.toFixed(2)}:1 · ${ratio>=4.5?'يجتاز':'لا يجتاز'} فحص 4.5:1 المحدد.`,`Ordinary-text contrast: ${ratio.toFixed(2)}:1 · ${ratio>=4.5?'passes':'fails'} this specific 4.5:1 check.`],ratio<4.5);
 out('ux-status',[`نقرات المهمة في النموذج:${ux.clicks} · ${ux.found?'وجدت الكتاب.':'لم يُعثر على الكتاب بعد.'}`,`Model task clicks:${ux.clicks} · ${ux.found?'Book found.':'Book not yet found.'}`]);
 controls([B('ux-watch',['شاهد رحلة مستخدم خيالية','Watch a fictional user journey'],()=>{ux.page='home';ux.clicks=0;ux.found=false;ux.watch=0;const route=ux.nav?['books','water']:['more','resources','books','water'];run(()=>{ux.page=route[ux.watch];ux.watch++;ux.clicks++;ux.found=ux.page==='water'},()=>ux.watch>=route.length,()=>{ux.watch=0;ux.page='home';ux.clicks=0})},true),pause('ux-pause'),B('ux-retry',['ابدأ المهمة بنفس التصميم','Restart task with this design'],()=>{ux.page='home';ux.clicks=0;ux.found=false;ux.watch=0}),B('ux-reset',['أعد التصميم الضعيف','Restore weak design'],()=>Object.assign(ux,{nav:false,clarity:false,consistent:false,layout:false,palette:'low',page:'home',clicks:0,found:false,watch:0}))]);
 const dots=panel(null,'wb3-route');dots.dir='ltr';for(let i=0;i<(ux.nav?2:4);i++){const n=E('span',String(i+1),i<ux.watch?'done':'');dots.append(n)}
 note('النسبة محسوبة من إضاءة sRGB وتقارن بقيمة غير مقربة عند 4.5 للنص العادي. الرقم المعروض مقرب. النجاح لا يثبت كل شروط الإتاحة، ولا تقيس نقرات هذا النموذج رضا الناس أو سرعتهم. الأصفر هنا ليس فشلًا لمجرد لونه.','The ratio uses sRGB luminance and an unrounded 4.5 threshold for ordinary text. Display is rounded. Passing does not establish full accessibility; model clicks do not measure people’s satisfaction or speed. Yellow is not a failure merely because it is yellow.');
}
// Fixed programs, not eval or a general Python interpreter.
const fn={mode:'add',a:'3',b:'5',missing:false,phase:0,outside:false};
// A deliberately bounded decimal-string model. Unsupported Python forms are
// reported as interface limits, not invented Python ValueErrors.
function paint(){box.textContent='';paintUX()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
