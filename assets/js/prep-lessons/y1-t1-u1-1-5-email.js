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
function paintEmail(){
 const bl=(ar,en,tag='span')=>{const e=E(tag);e.dataset.ar=ar;e.dataset.en=en;e.textContent=t([ar,en]);return e};
 title('صندوق بريد تدريبي بلا حساب أو إرسال','A practice mailbox without accounts or sending','لا تدخل اسمًا أو تاريخ ميلاد أو كلمة مرور أو رمزًا. كل العناوين من example.com المخصص للأمثلة، وكل الحقول ثابتة.','Enter no name, birth date, password or code. All addresses use reserved example.com, and all fields are fixed.');
 if(mail.composeOpen===undefined){mail.composeOpen=false;mail.composeOnce=false;mail.gearOpen=false;mail.avatarOpen=false}
 const parts=panel(['فك شفرة عنوان','Decode an address'],'wb3-address');parts.dir='ltr';for(const[p,label]of[['learner',['اسم محلي داخل هذا النطاق','Local part within this domain']],['@',['فاصل','Separator']],['example.com',['النطاق','Domain']]]){const tile=E('div');if(p==='@')tile.className='wb3-at';tile.append(E('b',p),E('small',label));parts.append(tile)}
 note('قد يتكرر learner في نطاق آخر. التفرد للاسم داخل نطاق مزود معين، وليس للاسم وحده على الإنترنت كله.','learner can exist in another domain. The local name is unique within a provider’s domain, not globally by itself.');
 const act=fn=>()=>{fn();paint()};
 const mt=p=>p[mail.saved==='en'?1:0];
 const wrap=E('div',undefined,'ml-scale'),cv=E('div',undefined,'ml-canvas gm');
 wrap.append(cv);box.append(wrap);
 const fit=()=>{const w=wrap.clientWidth||1280,ph=w<720;cv.classList.toggle('gm-phone',ph);if(ph){cv.style.transform='';cv.style.left='';wrap.style.height='';return}const s=Math.min(1,w/1280);cv.style.transform='scale('+s+')';cv.style.left=Math.max(0,(w-1280*s)/2)+'px';wrap.style.height=(720*s)+'px'};
 if(!window.__mlFit){window.__mlFit=1;addEventListener('resize',()=>{document.querySelectorAll('.ml-canvas').forEach(c=>{const p=c.parentElement,w=p.clientWidth,ph=w<720;c.classList.toggle('gm-phone',ph);if(ph){c.style.transform='';c.style.left='';p.style.height='';return}const s=Math.min(1,w/1280);c.style.transform='scale('+s+')';c.style.left=Math.max(0,(w-1280*s)/2)+'px';p.style.height=(720*s)+'px'})})}
 setTimeout(fit,0);
 if(!mail.signed){
  if(mail.phase<1)mail.phase=1;
  const bg=E('div',undefined,'gm-signin-bg');
  const card=E('div',undefined,'gm-card');
  const brand=E('div',undefined,'gm-brand');brand.textContent='✉';card.append(brand);
  card.append(bl('بريد تدريبي','Training Mail','h3'));
  card.append(bl('تسجيل الدخول ببطاقة ثابتة — ليس نموذج حساب حقيقي','Sign in with a fixed card - not a real account form','p'));
  const acc=E('div',undefined,'gm-account');
  const av=E('span',undefined,'gm-avatar');av.textContent='D';acc.append(av);
  const who=E('div',undefined,'gm-who');who.append(E('b','Demo Learner'),E('small','learner@example.com'));acc.append(who);card.append(acc);
  const consent=E('div',undefined,'gm-consent');
  consent.append(bl('موافقة ولي الأمر والشروط داخل السيناريو:','Parent consent and terms inside the scenario:','b'));
  const mkCheck=(id,pair,val,fn)=>{const l=E('label',undefined,'gm-check');const i=E('input');i.type='checkbox';i.id=id;i.checked=val;i.onchange=act(()=>fn(i.checked));l.append(i,bl(...pair));return l};
  consent.append(mkCheck('mail-parent',['راجع ولي الأمر ملاءمة العمر والإشراف','A parent reviewed age eligibility and supervision'],mail.parent,v=>{mail.parent=v;mail.notice=null;if(mail.parent&&mail.terms)mail.phase=Math.max(mail.phase,2)}));
  consent.append(mkCheck('mail-terms',['راجعت الشروط والخصوصية','Terms and privacy were reviewed'],mail.terms,v=>{mail.terms=v;mail.notice=null;if(mail.parent&&mail.terms)mail.phase=Math.max(mail.phase,2)}));
  card.append(consent);
  const signin=E('button',undefined,'gm-primary');signin.type='button';signin.id='mail-signin';signin.disabled=!(mail.parent&&mail.terms);
  signin.append(bl('دخول جلسة خيالية','Enter fictional session'));
  signin.onclick=act(()=>{mail.signed=true;mail.phase=3;mail.notice=['دخلت الجلسة النموذجية فقط.','Entered only the model session.']});
  card.append(signin);
  card.append(bl('لا حقل لكلمة مرور أو عمر أو هاتف. لا يُنشأ حساب لدى Google أو أي مزود.','No password, age or phone field. No account is created with Google or any provider.','small'));
  bg.append(card);cv.append(bg);
 }else{
  const win=E('div',undefined,'gm-win');
  const top=E('div',undefined,'gm-top');
  const burger=E('span',undefined,'gm-burger');burger.textContent='☰';top.append(burger);
  const tb=E('span',undefined,'gm-topbrand');tb.textContent=mt(['بريد تدريبي','Training Mail']);top.append(tb);
  const search=E('div',undefined,'gm-search');search.append(bl(mt(['ابحث في البريد (عرض فقط)','Search mail (display only)']),mt(['ابحث في البريد (عرض فقط)','Search mail (display only)'])));top.append(search);
  const gear=E('button',undefined,'gm-icon-btn');gear.type='button';gear.id='mail-gear';gear.textContent='⚙';gear.setAttribute('aria-label',t(['الإعدادات','Settings']));gear.onclick=act(()=>{mail.gearOpen=!mail.gearOpen;mail.avatarOpen=false});top.append(gear);
  const avb=E('button',undefined,'gm-avatar gm-avatar-btn');avb.type='button';avb.id='mail-avatar';avb.textContent='D';avb.setAttribute('aria-label',t(['الحساب','Account']));avb.onclick=act(()=>{mail.avatarOpen=!mail.avatarOpen;mail.gearOpen=false});top.append(avb);
  win.append(top);
  if(mail.avatarOpen){
   const menu=E('div',undefined,'gm-menu');
   menu.append(E('b','Demo Learner'),E('small','learner@example.com'));
   const so=E('button',undefined,'gm-mini-btn');so.type='button';so.id='mail-signout';so.append(bl('خروج','Sign out'));
   so.onclick=act(()=>{Object.assign(mail,{signed:false,send:0,delivered:false,composeOpen:false,gearOpen:false,avatarOpen:false,notice:['انتهت الجلسة النموذجية. الخروج لا يحذف الحساب.','The model session ended. Signing out does not delete an account.']})});
   menu.append(so);win.append(menu);
  }
  const bodyr=E('div',undefined,'gm-body');
  const side=E('div',undefined,'gm-side');
  const composeBtn=E('button',undefined,'gm-compose');composeBtn.type='button';composeBtn.id='mail-compose-open';composeBtn.append(bl(mt(['إنشاء رسالة','Compose']),mt(['إنشاء رسالة','Compose'])));
  composeBtn.onclick=act(()=>{mail.composeOpen=true;mail.composeOnce=true;if(mail.send===0&&!mail.delivered)mail.notice=null});
  side.append(composeBtn);
  const folder=(pair,badge,on)=>{const r=E('div',undefined,'gm-folder'+(on?' on':''));r.append(bl(mt(pair),mt(pair)));if(badge)r.append(E('b',String(badge),'gm-badge'));return r};
  side.append(folder(['الوارد','Inbox'],mail.delivered?1:0,true));
  side.append(folder(['المُرسلة','Sent'],mail.delivered?1:0,false));
  side.append(folder(['المسودات','Drafts'],0,false));
  bodyr.append(side);
  const list=E('div',undefined,'gm-list');
  if(mail.delivered){
   const row=E('div',undefined,'gm-row');
   const rav=E('span',undefined,'gm-avatar sm');rav.textContent='✓';row.append(rav);
   const rc=E('div',undefined,'gm-rowc');rc.append(E('b',mt(['بريد تدريبي','Training Mail'])));rc.append(E('span',mt(['رسالة تدريبية واحدة — وصلت عبر النقل الرمزي فقط','One practice message - arrived via the symbolic transfer only'])));row.append(rc);
   list.append(row);
  }else{
   const empty=E('div',undefined,'gm-empty');empty.append(bl(mt(['لا رسائل بعد. افتح إنشاء رسالة وشاهد الإرسال الرمزي.','No messages yet. Open Compose and watch the symbolic send.']),mt(['لا رسائل بعد. افتح إنشاء رسالة وشاهد الإرسال الرمزي.','No messages yet. Open Compose and watch the symbolic send.'])));list.append(empty);
  }
  bodyr.append(list);
  win.append(bodyr);
  if(mail.gearOpen){
   const qs=E('div',undefined,'gm-quickset');
   qs.append(bl('الإعدادات السريعة','Quick settings','h4'));
   qs.append(bl('لغة الواجهة الداخلية، مستقلة عن لغة الدرس','Inner-interface language, independent of the lesson','p'));
   const sel=E('select');sel.id='mail-language';
   [['ar','العربية / Arabic'],['en','English / الإنجليزية']].forEach(o=>{const op=E('option',o[1]);op.value=o[0];if(mail.pending===o[0])op.selected=true;sel.append(op)});
   sel.onchange=()=>{mail.pending=sel.value};
   qs.append(sel);
   const save=E('button',undefined,'gm-primary sm');save.type='button';save.id='mail-save';save.append(bl('احفظ لغة الصندوق','Save mailbox language'));
   save.onclick=act(()=>{mail.saved=mail.pending;mail.notice=['حُفظت لغة الصندوق الداخلي فقط.','Saved the inner mailbox language only.']});qs.append(save);
   qs.append(bl('اختيار اللغة لا يحفظها وحده. زر الحفظ يغير الصندوق الداخلي فقط؛ مفتاح لغة الدرس يترجم الشرح ولا يمس الاختيار المحفوظ.','Choosing does not itself save. Save changes only the inner mailbox. The lesson language switch translates teaching text without changing the saved mailbox language.','small'));
   const rst=E('button',undefined,'gm-mini-btn');rst.type='button';rst.id='mail-reset';rst.append(bl('صفّر الصندوق والنموذج','Reset mailbox and model'));
   rst.onclick=act(()=>Object.assign(mail,{phase:0,parent:false,terms:false,signed:false,notice:null,send:0,delivered:false,pending:'ar',saved:'ar',composeOpen:false,composeOnce:false,gearOpen:false,avatarOpen:false}));
   qs.append(rst);win.append(qs);
  }
  if(mail.composeOpen){
   const dock=E('div',undefined,'gm-dock');
   const dh=E('div',undefined,'gm-dock-head');dh.append(bl(mt(['رسالة جديدة','New message']),mt(['رسالة جديدة','New message'])));
   const cx=E('button',undefined,'gm-icon-btn sm');cx.type='button';cx.id='mail-compose-close';cx.textContent='✕';cx.setAttribute('aria-label',t(['إغلاق','Close']));cx.onclick=act(()=>{mail.composeOpen=false});dh.append(cx);dock.append(dh);
   const frow=(lab,val)=>{const r=E('div',undefined,'gm-frow');r.append(E('small',lab));r.append(E('span',val));return r};
   dock.append(frow(mt(['إلى:','To:']),'teacher@example.com'));
   dock.append(frow(mt(['الموضوع:','Subject:']),mt(['مشروع خيالي','Fictional project'])));
   const body=E('div',undefined,'gm-dock-body');body.append(bl(mt(['هذه تجربة مدرسية ثابتة. لا مرفقات حقيقية.','This is a fixed school demonstration. No real attachments.']),mt(['هذه تجربة مدرسية ثابتة. لا مرفقات حقيقية.','This is a fixed school demonstration. No real attachments.'])));dock.append(body);
   const df=E('div',undefined,'gm-dock-foot');
   const sendB=E('button',undefined,'gm-primary');sendB.type='button';sendB.id='mail-send';sendB.disabled=mail.send>0&&!mail.delivered;
   sendB.textContent=mt([mail.send>0&&!mail.delivered?'يمر عبر خادم خيالي…':'إرسال رمزي',mail.send>0&&!mail.delivered?'Passing through a fictional server…':'Symbolic send']);
   sendB.onclick=()=>{if(mail.send>0&&!mail.delivered)return;mail.delivered=false;mail.send=1;paint();setTimeout(()=>{mail.send=2;paint()},650);setTimeout(()=>{mail.send=3;mail.delivered=true;paint()},1300)};
   df.append(sendB);
   df.append(E('small',mt(['لا إرسال حقيقي ولا طلب شبكة.','No real sending and no network request.'])));
   dock.append(df);win.append(dock);
  }
  cv.append(win);
 }
 const steps1=[['بيانات ثابتة','Fixed details'],['عنوان توضيحي','Example address'],['مراجعة الأهل والشروط','Parent/terms review'],['جلسة نموذجية','Model session']];
 const tr1=E('div',undefined,'ml-journey');
 steps1.forEach((s2,i)=>{const c=E('span',undefined,'ml-step'+(mail.phase>i?' done':''));c.append(bl(...s2));tr1.append(c)});
 box.append(tr1);
 const steps2=[['كتابة ثابتة','Fixed compose'],['خادم خيالي','Fictional server'],['نقل رمزي','Symbolic transfer'],['صندوق خيالي','Fictional inbox']];
 const tr2=E('div',undefined,'ml-journey');
 steps2.forEach((s2,i)=>{const done=i===0?(mail.composeOnce||mail.send>0):(i===3?mail.delivered:mail.send>=i);const c=E('span',undefined,'ml-step'+(done?' done':''));c.append(bl(...s2));tr2.append(c)});
 box.append(tr2);
 note('قد يتكرر learner في نطاق آخر. مشاركة الشاشة أو البريد لا تعرض أي بيانات حقيقية من جهازك.','learner can exist in another domain. Nothing here shows any real data from your device.');
 out('mail-status',mail.notice||[mail.signed?'جلسة خيالية مفتوحة. لم يُنشأ حساب لدى Google أو أي مزود.':'لا جلسة مفتوحة. نموذج شرح فقط.',mail.signed?'Fictional session open. No Google or other provider account was created.':'No open session. Teaching model only.'],!!mail.notice&&!mail.signed);
 out('mail-send-status',mail.delivered?['وصل رمز الرسالة إلى الصندوق الخيالي فقط. لا طلب شبكة لإرسال بريد.','The message symbol reached only the fictional inbox. No network mail-send request.']:['الرسالة ثابتة ولا مرفقات حقيقية. راجع المرسل إليه والمحتوى قبل أي إرسال حقيقي.','The message is fixed with no real attachments. Review recipients/content before any real send.']);
}function training(){return [[1,2],[2,4],[3,6],[4,ai.clean?8:9]]}
// The deliberately weak interface is contained inside a labelled prototype.
// Fixed programs, not eval or a general Python interpreter.
const fn={mode:'add',a:'3',b:'5',missing:false,phase:0,outside:false};
// A deliberately bounded decimal-string model. Unsupported Python forms are
// reported as interface limits, not invented Python ValueErrors.
function paint(){box.textContent='';paintEmail()}
window.paintLab=paint;document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();paint()}});window.addEventListener('pagehide',stop);paint();
})();
