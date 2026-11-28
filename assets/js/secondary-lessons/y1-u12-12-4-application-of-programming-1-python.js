    /* ============================================================
       Interactive Explainer JS — Programming Basics (Python)
       ============================================================ */

    /* ---------- particles ---------- */
    (function () {
      var p = document.getElementById('particles');
      if (!p) return; /* 'particles' removed by design - skip safely */
      if (!p) return; /* particles div removed by design - skip safely */
      var frag = document.createDocumentFragment();
      for (var i = 0; i < 30; i++) {
        var d = document.createElement('i');
        d.style.left = (Math.random() * 100) + 'vw';
        d.style.animationDuration = (12 + Math.random() * 8) + 's';
        d.style.animationDelay = (Math.random() * 15) + 's';
        if (Math.random() > .5) d.style.background = 'var(--accent)';
        frag.appendChild(d);
      }
      p.appendChild(frag);
    })();

    /* ---------- nav ---------- */
    var nav = document.getElementById('topnav');
    /* header slide-in:assets/js/nav.js */

    function wireNav() {
      var links = document.querySelectorAll('#navLinks a');
      var ies = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + id); });
          }
        });
      }, { rootMargin:'-45% 0px -45% 0px' });
      document.querySelectorAll('section[id]').forEach(function (s) { ies.observe(s); });
    }

    /* ---------- reveals ---------- */
    function wireReveal() {
      var els = document.querySelectorAll('.section-inner');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold:0.005 });
      els.forEach(function (el) { io.observe(el); });
    }

    /* ---------- operator gallery ---------- */
    var OP_DATA = [
      { t:'+', name: 'الجمع', nameEn: 'Addition', desc: 'Addition', ex: '5 + 3', out: '8' },
      { t:'-', name: 'الطرح', nameEn: 'Subtraction', desc: 'Subtraction', ex: '8 - 3', out: '5' },
      { t:'*', name: 'الضرب', nameEn: 'Multiplication', desc: 'Multiplication', ex: '5 * 3', out: '15' },
      { t:'/', name: 'القسمة', nameEn: 'Division', desc: 'Division', ex: '5 / 3', out: '1.666…' },
      { t:'//', name: 'ناتج صحيح', nameEn: 'Quotient', desc: 'Quotient', ex: '17 // 5', out: '3' },
      { t:'%', name: 'الباقي', nameEn: 'Remainder', desc: 'Remainder', ex: '17 % 5', out: '2' },
      { t:'**', name: 'الأس', nameEn: 'Power', desc: 'Power', ex: '2 ** 4', out: '16' }
    ];
    function opName(o) { return (window.currentLang === 'en') ? o.nameEn:o.name; }
    function divZeroMsg() { return window.currentLang === 'en' ? 'Cannot divide by zero' : 'ممنوع القسمة على صفر'; }
    function paintOpDetail(data) {
      var d = document.getElementById('opDetail');
      if (!d) return; /* 'opDetail' removed by design - skip safely */ if (!d || !data) return;
      d.innerHTML =
        '<div class="body"><div style="color:var(--text);font-weight:700">' + opName(data) + ' <span style="color:var(--dim);font-weight:400;font-size:.85rem">(' + data.desc + ')</span></div>' +
        '<div class="exp">print(' + data.ex + ')</div>' +
        '<div class="out">&gt;&gt; ' + data.out + '</div></div>';
    }
    function wireOperators() {
      var g = document.getElementById('opGallery');
      if (!g) return; /* 'opGallery' removed by design - skip safely */ if (!g) return;
      OP_DATA.forEach(function (o) {
        var c = document.createElement('div'); c.className = 'op-chip';
        c.innerHTML = '<span class="sym">' + o.t + '</span><span class="name">' + opName(o) + '</span>';
        (function (chip, data) {
          chip.addEventListener('click', function () {
            g.querySelectorAll('.op-chip').forEach(function (x) { x.classList.remove('active'); });
            chip.classList.add('active');
            paintOpDetail(data);
          });
        })(c, o);
        g.appendChild(c);
      });
      var calcBtn = document.querySelector('[data-id="opCalcBtn"]');
      var resetBtn = document.querySelector('[data-id="opResetCal"]');
      var opBtns = document.querySelectorAll('#opChoice .op-opt');
      var currentOp = '+';
      if (opBtns.length) {
        opBtns.forEach(function (b) {
          b.addEventListener('click', function () {
            currentOp = b.getAttribute('data-op');
            opBtns.forEach(function (x) { x.classList.toggle('active', x === b); });
          });
        });
        opBtns[0].classList.add('active');
      }
      function calc() {
        var a = parseFloat(document.getElementById('ga').value) || 0;
        var b = parseFloat(document.getElementById('gb').value) || 0;
        var r;
        switch (currentOp) {
          case '-': r = a - b; break;
          case '*': r = a * b; break;
          case '/': r = b === 0 ? divZeroMsg() : a / b; break;
          case '//': r = b === 0 ? divZeroMsg() : Math.floor(a / b); break;
          case '%': r = b === 0 ? divZeroMsg() : a % b; break;
          case '**': r = Math.pow(a, b); break;
          default:r = a + b;
        }
        document.getElementById('opResult').innerHTML = '<span dir="ltr">' + a + ' ' + currentOp + ' ' + b + ' = ' + (typeof r === 'number' && !/^\d+$/.test(String(r)) ? (+r.toFixed(4)) : r) + '</span>';
      }
      if (calcBtn) calcBtn.addEventListener('click', function () { calc(); });
      if (resetBtn) resetBtn.addEventListener('click', function () {
        document.getElementById('ga').value = '5'; document.getElementById('gb').value = '3';
        curOp(); document.getElementById('opResult').innerHTML = '<span dir="ltr">8</span>';
      });
      function curOp() { if (opBtns.length) { currentOp = '+'; opBtns.forEach(function (x) { x.classList.toggle('active', x === opBtns[0]); }); } calc(); }
      calc();
    }

    /* ---------- variable box animation ---------- */
    function wireVarBox() {
      var box = document.getElementById('varBox'), val = document.getElementById('varVal');
      var store = document.querySelector('[data-id="storeBtn"]'), reset = document.querySelector('[data-id="resetBox"]');
      var flyAncestor = document.querySelector('.var-anim'), srcEl = document.querySelector('.var-src');
      if (!box || !val) return;
      if (store) store.addEventListener('click', function () {
        box.classList.remove('live');
        val.textContent = '...';
        var fly = null;
        if (srcEl && flyAncestor) {
          fly = document.createElement('div');
          fly.className = 'var-fly'; fly.textContent = 'Cairo';
          var ar = flyAncestor.getBoundingClientRect();
          var sr = srcEl.getBoundingClientRect();
          fly.style.left = (sr.left - ar.left) + 'px';
          fly.style.top = (sr.top - ar.top) + 'px';
          flyAncestor.appendChild(fly);
          fly.offsetHeight;
          var vr = val.getBoundingClientRect();
          fly.style.left = (vr.left - ar.left) + 'px';
          fly.style.top = (vr.top - ar.top) + 'px';
          fly.style.opacity = '0';
        }
        setTimeout(function () {
          if (fly) fly.remove();
          val.textContent = '"Cairo"'; box.classList.add('live');
        }, 650);
      });
      if (reset) reset.addEventListener('click', function () {
        val.textContent = '...'; box.classList.remove('live');
      });
    }

    /* ---------- sequential animation ---------- */
    var SEQ = [
      ['a = 5', ''],
      ['b = 3', ''],
      ['print(a + b)', '8'],
      ['print(a - b)', '2'],
      ['print(a * b)', '15'],
      ['print(a / b)', '1.6666666666666667'],
      ['print(a // b)', '1'],
      ['print(a % b)', '2'],
      ['print(a ** b)', '125']
    ];
    var seqIdx = 0, seqTimer = null;
    function buildSeq() {
      var t = document.getElementById('seqLines');
      if (!t) return; /* 'seqLines' removed by design - skip safely */ if (!t) return;
      t.innerHTML = '';
      SEQ.forEach(function (item, i) {
        var d = document.createElement('div'); d.className = 'sl';
        d.innerHTML = '<span class="ln">' + (i + 1) + '</span><span class="src">' + item[0] + '</span>';
        t.appendChild(d);
      });
    }
    function seqReset() {
      clearInterval(seqTimer); seqIdx = 0;
      document.querySelectorAll('#seqLines .sl').forEach(function (x) { x.classList.remove('run'); });
      document.getElementById('seqTerm').innerHTML = '';
      document.getElementById('seqCounter').textContent = '0 / ' + SEQ.length;
    }
    function seqRun() {
      var term = document.getElementById('seqTerm');
      if (!term) return; /* 'seqTerm' removed by design - skip safely */
      var lines = document.querySelectorAll('#seqLines .sl');
      lines.forEach(function (x) { x.classList.remove('run'); });
      if (seqIdx >= SEQ.length) { seqReset(); return; }
      var cur = lines[seqIdx];
      cur.classList.add('run');
      var out = SEQ[seqIdx][1];
      if (out !== '') {
        var d = document.createElement('div'); d.className = 'out-line'; d.textContent = out;
        term.appendChild(d);
      }
      term.style.display = 'block';
      document.getElementById('seqCounter').textContent = (seqIdx + 1) + ' / ' + SEQ.length;
      seqIdx++;
      if (seqIdx === SEQ.length) clearInterval(seqTimer);
    }
    function wireSeq() {
      buildSeq();
      var btn = document.querySelector('[data-id="seqRun"]'), reset = document.querySelector('[data-id="seqReset"]');
      if (btn) btn.addEventListener('click', function () {
        clearInterval(seqTimer);
        if (seqIdx >= SEQ.length || seqIdx === 0) seqReset();
        seqTimer = setInterval(seqRun, 650);
      });
      if (reset) reset.addEventListener('click', seqReset);
    }

    /* ---------- exercises reveal ---------- */
    /* ---------- exercises reveal ---------- */
    function wireRevealBtns() {
      document.querySelectorAll('[data-self-check]').forEach(function(button){button.addEventListener('click',function(){var answer=button.nextElementSibling,open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));answer.hidden=!open;answer.classList.toggle('show',open);paintSelfChecks();});});
    }
    function paintSelfChecks(){document.querySelectorAll('[data-self-check]').forEach(function(b){var open=b.getAttribute('aria-expanded')==='true';b.textContent=tr(open?'اخفِ الحل':'اعرض الحل',open?'Hide solution':'Show solution');});}

    /* ---------- recall quiz ---------- */
    function tr(ar, en) {
      return window.currentLang === 'en' ? en:ar;
    }

    function rqFb(el) {
      return tr(el.getAttribute('data-fb-ar'), el.getAttribute('data-fb-en'));
    }

    function recallStart(quiz) {
      var s = quiz.querySelector('[data-start]');
      if (!s) {
        var p = quiz.previousElementSibling;
        if (p && p.hasAttribute('data-start')) s = p;
      }
      return s;
    }

    function wireRecall() {
      document.querySelectorAll('.recall').forEach(function (quiz) {
        var start = recallStart(quiz);
        function paintQuizBtn() {
          if (!start) return;
          start.textContent = quiz.classList.contains('show')
            ? tr('إخفاء الاختبار', 'Hide the quiz')
            : tr('💡 ابدأ الاختبار', '💡 Start the Quiz');
        }
        if (start) start.addEventListener('click', function () {
          quiz.classList.toggle('show');
          paintQuizBtn();
        });
        quiz.querySelectorAll('.rq').forEach(function (q) {
          var opts = q.querySelectorAll('.rq-opt');
          var skip = q.querySelector('.rq-skip');
          var fb = q.querySelector('.rq-fb');
          function lock(qq) {
            qq.classList.add('done');
            opts.forEach(function (o) { o.classList.add('disabled'); });
            if (skip) skip.style.display = 'none';
          }
          function showFb(ok, text, correctKey) {
            q._feedback={ok:ok,text:text,key:correctKey};fb.classList.add('show');
            fb.classList.toggle('ok', ok);
            fb.classList.toggle('no', !ok);
            fb.textContent = (ok ? '✅ ' : '❌ ') +
              (correctKey ? (window.currentLang === 'en' ? 'The correct answer is ' + correctKey + '. ' : 'الإجابة الصحيحة ' + correctKey + '. ') : '') + text;
          }
          opts.forEach(function (o) {
            o.tabIndex=0;o.setAttribute('role','button');o.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();o.click();}});
            o.addEventListener('click', function () {
              if (q.classList.contains('done')) return;
              q._selected=o;var ok = o.getAttribute('data-ok') === '1';
              opts.forEach(function (x) { x.classList.remove('correct', 'wrong'); });
              if (ok) o.classList.add('correct');
              else {
                o.classList.add('wrong');
                var co = q.querySelector('.rq-opt[data-ok="1"]');
                if (co) co.classList.add('correct');
              }
              lock(q);
              showFb(ok, rqFb(o), ok ? null:(q.querySelector('.rq-opt[data-ok="1"]').getAttribute('data-key')));
            });
          });
          if (skip) skip.addEventListener('click', function () {
            if (q.classList.contains('done')) return;
            var co = q.querySelector('.rq-opt[data-ok="1"]');
            opts.forEach(function (x) { x.classList.remove('correct', 'wrong'); });
            if (co) co.classList.add('correct');
            lock(q);
            q._selected=co;showFb(true, rqFb(co), co.getAttribute('data-key'));
          });
        });
      });
    }

    function repaintQuizBtns() {
      document.querySelectorAll('.recall').forEach(function (quiz) {
        var start = recallStart(quiz);
        if (!start) return;
        start.textContent = quiz.classList.contains('show')
          ? tr('إخفاء الاختبار', 'Hide the quiz')
          : tr('💡 ابدأ الاختبار', '💡 Start the Quiz');
      });
    }

    document.addEventListener('langChange', repaintQuizBtns);

    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'list', 'element', 'twod', 'practice', 'recap'];
    window.addEventListener('keydown', function (e) {
      if (e.target.matches('input,textarea,select,button,[role=button]')) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var cur = -1;
      for (var i = 0; i < SECTIONS.length; i++) {
        var el = document.getElementById(SECTIONS[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) cur = i;
      }
      var n = cur + ((e.key === 'ArrowLeft') ? -1:1);
      if (n >= 0 && n < SECTIONS.length) document.getElementById(SECTIONS[n]).scrollIntoView({ behavior:'smooth' });
    });

    /* ============================================================
       MINI PYTHON INTERPRETER + EDITOR WIRING (verbatim reference)
       ============================================================ */
function pyRun(src, inputs, seeds) {
  var lineNo=1, budget=20000, env=Object.create(null), output='', queue=(inputs||[]).slice();
  function fail(kind,message){var e=new Error(message);e.kind=kind;throw e;}
  function tick(){if(--budget<0)fail('RuntimeError','Teaching limit:20,000 execution steps. Reduce the loop size.');}
  function V(t,v){if(t==='list'&&v.length>2000)fail('RuntimeError','Teaching limit:at most 2,000 list items.');if((t==='int'&&!Number.isSafeInteger(v))||(t==='float'&&!Number.isFinite(v)))fail('ValueError','Teaching limit:use small finite numbers.');if(t==='str'&&v.length>10000)fail('ValueError','Teaching limit:text is too long.');return {t:t,v:v};}
  function number(v,f){return V(f?'float':'int',v);}
  var none=V('none',null);
  function numeric(x){return x.t==='int'||x.t==='float'||x.t==='bool';}
  function asNumber(x){if(!numeric(x))fail('TypeError','A number is required.');return Number(x.v);}
  function truth(x){return x.t==='none'?false:x.t==='range'?x.v.items.length>0:x.t==='list'?x.v.length>0:!!x.v;}
  function reprString(value){
    var q=value.indexOf("'")!==-1&&value.indexOf('"')===-1?'"':"'";
    return q+Array.from(value).map(function(c){
      if(c==='\\')return '\\\\';
      if(c===q)return '\\'+q;
      if(c==='\n')return '\\n';
      if(c==='\r')return '\\r';
      if(c==='\t')return '\\t';
      var code=c.charCodeAt(0);
      if(code<32||code===127)return '\\x'+code.toString(16).padStart(2,'0');
      return c;
    }).join('')+q;
  }
  function text(x){tick();if(x.t==='none')return 'None';if(x.t==='bool')return x.v?'True':'False';if(x.t==='float')return Object.is(x.v,-0)?'-0.0':Number.isInteger(x.v)?x.v+'.0':String(x.v);if(x.t==='range')return x.v.repr;if(x.t==='list')return '['+x.v.map(function(v){return v.t==='str'?reprString(v.v):text(v);}).join(', ')+']';return String(x.v);}
  function lex(s){
    var ts=[],i=0;
    while(i<s.length){var c=s[i];if(/\s/.test(c)){i++;continue;}if(c==='#')break;
      var m=/^(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?/.exec(s.slice(i));
      if(m){ts.push({k:'lit',v:number(Number(m[0]),/[.eE]/.test(m[0]))});i+=m[0].length;continue;}
      if(c==='"'||c==="'"){var q=c,a='';i++;var closed=false;while(i<s.length){c=s[i++];if(c===q){closed=true;break;}if(c==='\\'){if(i>=s.length)break;var ec=s[i++],escapes={n:'\n',t:'\t',r:'\r',a:'\x07',b:'\b',f:'\f',v:'\v'};if(Object.prototype.hasOwnProperty.call(escapes,ec))a+=escapes[ec];else if(ec==='\\'||ec==='"'||ec==="'")a+=ec;else if(ec==='x'||ec==='u'||ec==='U'){var count=ec==='x'?2:ec==='u'?4:8,digits=s.slice(i,i+count);if(digits.length!==count||!/^[0-9a-fA-F]+$/.test(digits)||parseInt(digits,16)>0x10ffff)fail('SyntaxError','Invalid character escape.');a+=String.fromCodePoint(parseInt(digits,16));i+=count;}else if(/[0-7]/.test(ec)){var oct=ec;while(oct.length<3&&/[0-7]/.test(s[i]||'!'))oct+=s[i++];a+=String.fromCharCode(parseInt(oct,8));}else a+='\\'+ec;}else a+=c;}if(!closed)fail('SyntaxError','Unterminated string literal.');ts.push({k:'lit',v:V('str',a)});continue;}
      m=/^[A-Za-z_]\w*/.exec(s.slice(i));if(m){ts.push({k:'id',v:m[0]});i+=m[0].length;continue;}
      m=/^(?:==|!=|<=|>=|\/\/|\*\*|[+\-*\/%<>=(),:;\[\].])/.exec(s.slice(i));if(!m)fail('SyntaxError','Unexpected character:'+c);ts.push({k:'op',v:m[0]});i+=m[0].length;
    }ts.push({k:'eof',v:''});return ts;
  }
  function expression(ts){
    var pos=0;function peek(){return ts[pos]||{k:'eof',v:''};}function take(){return ts[pos++];}function need(v){if(peek().v!==v)fail('SyntaxError','Expected '+v);take();}
    var prec={'or':1,'and':2,'==':4,'!=':4,'<':4,'>':4,'<=':4,'>=':4,'+':5,'-':5,'*':6,'/':6,'//':6,'%':6,'**':8};
    function parse(min){tick();var t=take(),n;if(!t)fail('SyntaxError','Expression is incomplete.');
      if(t.k==='lit')n={k:'lit',v:t.v};
      else if(t.v==='+'||t.v==='-'||t.v==='not')n={k:'unary',op:t.v,a:parse(t.v==='not'?3:7)};
      else if(t.v==='('){n=parse(0);need(')');}
      else if(t.v==='['){var vals=[];if(peek().v!==']'){while(true){vals.push(parse(0));if(peek().v!==',')break;take();if(peek().v===']')break;}}need(']');n={k:'list',a:vals};}
      else if(t.k==='id')n={k:'name',v:t.v};else fail('SyntaxError','Expression is incomplete or invalid.');
      while(true){
        if(peek().v==='('){take();var args=[],kwargs=[],sawKeyword=false;if(peek().v!==')'){while(true){if(peek().k==='id'&&ts[pos+1]&&ts[pos+1].v==='='){var key=take().v;take();kwargs.push({name:key,node:parse(0)});sawKeyword=true;}else{if(sawKeyword)fail('SyntaxError','Positional argument after keyword argument.');args.push(parse(0));}if(peek().v!==',')break;take();if(peek().v===')')break;}}need(')');n={k:'call',fn:n,a:args,kw:kwargs};continue;}
        if(peek().v==='.') {take();var member=take();if(member.k!=='id')fail('SyntaxError','Expected a method name.');n={k:'member',a:n,name:member.v};continue;}
        if(peek().v==='['){take();var lo=null,hi=null,slice=false;if(peek().v!==':')lo=parse(0);if(peek().v===':'){slice=true;take();if(peek().v!==']')hi=parse(0);}need(']');n={k:'index',a:n,lo:lo,hi:hi,slice:slice};continue;}
        var op=peek().v,p=prec[op];if(p===undefined||p<min)break;take();var right=parse(op==='**'?p:p+1);
        if(p===4){var ops=[op],rights=[right];while(prec[peek().v]===4){ops.push(take().v);rights.push(parse(5));}n={k:'compare',a:n,ops:ops,rights:rights};}
        else n={k:'binary',op:op,a:n,b:right};
      }return n;
    }
    var result=parse(0);if(peek().k!=='eof')fail('SyntaxError','Unexpected text after expression.');return result;
  }
  function equal(a,b){tick();if(numeric(a)&&numeric(b))return Number(a.v)===Number(b.v);if(a.t!==b.t)return false;if(a.t==='list')return a.v.length===b.v.length&&a.v.every(function(x,i){return equal(x,b.v[i]);});return a.v===b.v;}
  function compare(op,a,b){if(op==='==')return equal(a,b);if(op==='!=')return !equal(a,b);if(!(numeric(a)&&numeric(b))&&!(a.t==='str'&&b.t==='str'))fail('TypeError','These values cannot be ordered.');return op==='<'?a.v<b.v:op==='>'?a.v>b.v:op==='<='?a.v<=b.v:a.v>=b.v;}
  function calc(op,a,b){
    if(op==='+'&&a.t==='list'&&b.t==='list')return V('list',a.v.concat(b.v));
    if(op==='+'&&a.t==='str'&&b.t==='str')return V('str',a.v+b.v);
    if(op==='*'&&((a.t==='str'&&b.t==='int')||(b.t==='str'&&a.t==='int'))){var s=a.t==='str'?a:b,n=a.t==='int'?a:b;if(n.v*s.v.length>10000)fail('ValueError','Teaching limit:text is too long.');return V('str',s.v.repeat(Math.max(0,n.v)));}
    var x=asNumber(a),y=asNumber(b),f=a.t==='float'||b.t==='float';
    if((op==='/'||op==='//'||op==='%')&&y===0)fail('ZeroDivisionError','Cannot divide by zero.');
    if(op==='+')return number(x+y,f);if(op==='-')return number(x-y,f);if(op==='*')return number(x*y,f);if(op==='/')return number(x/y,true);if(op==='//')return number(Math.floor(x/y),f);
    if(op==='%'){var r=x%y;if(r===0)r=y<0?-0:0;else if((r<0)!==(y<0))r+=y;return number(r,f);}
    if(op==='**'){if(x<0&&!Number.isInteger(y))fail('ValueError','Complex numbers are outside this teaching model.');if(x===0&&y<0)fail('ZeroDivisionError','Zero cannot have a negative power.');return number(Math.pow(x,y),f||y<0);}fail('SyntaxError','Unsupported operator.');
  }
  function call(name,args,kw){
    tick();
    if(name==='print'){var sep=' ',end='\n',seen=Object.create(null);kw.forEach(function(k){if(seen[k.name])fail('SyntaxError','Repeated keyword argument.');seen[k.name]=true;if(k.name!=='sep'&&k.name!=='end')fail('TypeError','Unknown print keyword.');if(k.value.t!=='str'&&k.value.t!=='none')fail('TypeError','print separators must be strings.');if(k.name==='sep')sep=k.value.t==='none'?' ':k.value.v;else end=k.value.t==='none'?'\n':k.value.v;});output+=args.map(text).join(sep)+end;if(output.length>100000)fail('RuntimeError','Teaching limit:output is too long.');return none;}
    if(kw.length)fail('TypeError','Keyword arguments are not supported for this function in the model.');
    if(name==='range'){
      if(args.length<1||args.length>3)fail('TypeError','range() needs one to three integer arguments.');
      args.forEach(function(a){if(a.t!=='int'&&a.t!=='bool')fail('TypeError','range() arguments must be integers.');});
      var a=args.length===1?0:Number(args[0].v),b=Number(args[args.length===1?0:1].v),step=args.length===3?Number(args[2].v):1;
      if(step===0)fail('ValueError','range() step must not be zero.');if(!Number.isSafeInteger(b-a))fail('ValueError','Teaching limit:range span is too large.');var count=Math.max(0,Math.ceil((b-a)/step));if(count>2000)fail('RuntimeError','Teaching limit:at most 2,000 values per range.');
      var values=[];for(var j=0;j<count;j++)values.push(number(a+j*step,false));
      return V('range',{items:values,repr:'range('+a+', '+b+(step===1?'':', '+step)+')'});
    }
    if(name==='input'){if(args.length>1)fail('TypeError','input() takes at most one argument.');return V('str',queue.length?String(queue.shift()):'');}
    if(name==='len'){if(args.length!==1)fail('TypeError','len() needs one argument.');var l=args[0];if(l.t==='str'||l.t==='list')return number(l.v.length,false);if(l.t==='range')return number(l.v.items.length,false);fail('TypeError','This value has no length.');}
    if(name==='type'){if(args.length!==1)fail('TypeError','type() needs one argument.');return V('type',"<class '"+(args[0].t==='none'?'NoneType':args[0].t)+"'>");}
    if(name==='str'||name==='bool'||name==='int'||name==='float'){
      if(args.length>1)fail('TypeError','This model accepts one argument.');var v=args[0]||none;
      if(name==='str')return V('str',args.length?text(v):'');if(name==='bool')return V('bool',truth(v));if(!args.length)return number(0,name==='float');
      if(numeric(v))return number(name==='int'?Math.trunc(Number(v.v)):Number(v.v),name==='float');
      if(v.t!=='str')fail('TypeError','A string or number is required.');var z=v.v.trim();if(name==='int'?!/^[+-]?\d+$/.test(z):!/^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/.test(z))fail('ValueError','Invalid numeric string.');return number(Number(z),name==='float');
    }
    fail('NameError','Function is not available in this lesson model:'+name);
  }
  function evaluate(n){tick();
    if(n.k==='lit')return n.v;if(n.k==='list')return V('list',n.a.map(evaluate));
    if(n.k==='name'){if(n.v==='True')return V('bool',true);if(n.v==='False')return V('bool',false);if(n.v==='None')return none;if(Object.prototype.hasOwnProperty.call(env,n.v))return env[n.v];fail('NameError','Name is not defined:'+n.v);}
    if(n.k==='unary'){var v=evaluate(n.a);return n.op==='not'?V('bool',!truth(v)):number((n.op==='-'?-1:1)*asNumber(v),v.t==='float');}
    if(n.k==='binary'){var a=evaluate(n.a);if(n.op==='and')return truth(a)?evaluate(n.b):a;if(n.op==='or')return truth(a)?a:evaluate(n.b);return calc(n.op,a,evaluate(n.b));}
    if(n.k==='compare'){var a=evaluate(n.a);for(var j=0;j<n.ops.length;j++){var b=evaluate(n.rights[j]);if(!compare(n.ops[j],a,b))return V('bool',false);a=b;}return V('bool',true);}
    if(n.k==='call'){var args=n.a.map(evaluate),kw=n.kw.map(function(k){return {name:k.name,value:evaluate(k.node)};});if(n.fn.k==='name'){if(Object.prototype.hasOwnProperty.call(env,n.fn.v))fail('TypeError','This value is not callable.');return call(n.fn.v,args,kw);}if(n.fn.k==='member'){var obj=evaluate(n.fn.a),method=n.fn.name;if(obj.t==='list'){if(method!=='append')fail('AttributeError','Only append is supported for lists in this lesson model.');if(kw.length||args.length!==1)fail('TypeError','append() needs exactly one positional argument.');if(obj.v.length>=2000)fail('RuntimeError','Teaching limit:at most 2,000 list items.');function contains(v,target,depth){tick();if(depth>40)fail('RuntimeError','Teaching limit:list nesting is too deep.');return v===target||(v.t==='list'&&v.v.some(function(x){return contains(x,target,depth+1);}));}if(contains(args[0],obj,0))fail('RuntimeError','Teaching limit:recursive lists are not supported.');obj.v.push(args[0]);return none;}if(obj.t!=='str')fail('AttributeError','This value has no supported methods.');if(kw.length)fail('TypeError','No keyword arguments here.');if(method==='upper'&&args.length===0)return V('str',obj.v.toUpperCase());if(method==='lower'&&args.length===0)return V('str',obj.v.toLowerCase());if(method==='count'&&args.length===1&&args[0].t==='str'){var sub=args[0].v;return number(sub===''?obj.v.length+1:obj.v.split(sub).length-1,false);}fail('AttributeError','Method is not available in this model.');}fail('TypeError','This value is not callable.');}
    if(n.k==='index'){var a=evaluate(n.a),values=a.t==='range'?a.v.items:a.v;if(a.t!=='str'&&a.t!=='list'&&a.t!=='range')fail('TypeError','This value cannot be indexed.');function idx(z,def){if(z===null)return def;var v=evaluate(z);if(v.t!=='int'&&v.t!=='bool')fail('TypeError','Index must be an integer.');var k=Number(v.v);return k<0?k+values.length:k;}var lo=idx(n.lo,0);if(n.slice){var hi=idx(n.hi,values.length);return V(a.t==='str'?'str':'list',values.slice(Math.max(0,lo),Math.max(0,hi)));}if(lo<0||lo>=values.length)fail('IndexError','Index is out of range.');return a.t==='str'?V('str',values[lo]):values[lo];}
    fail('SyntaxError','Unsupported expression in this model.');
  }
  try{
    src=String(src);if(src.length>50000)fail('RuntimeError','Teaching limit:source is too long.');Object.keys(seeds||{}).forEach(function(k){env[k]=V('str',String(seeds[k]));});
    var lines=[],pending=null,brackets=[];src.split('\n').forEach(function(raw,i){lineNo=i+1;raw=raw.replace(/\r$/,'');var prefix=/^[ \t]*/.exec(raw)[0],indent=0;for(var k=0;k<prefix.length;k++)indent=prefix[k]==='\t'?indent+8-indent%8:indent+1;var ts=lex(raw.slice(prefix.length)).slice(0,-1);if(!ts.length)return;if(!pending)pending={indent:indent,ts:[],line:i+1};ts.forEach(function(t){if(t.v==='('||t.v==='[')brackets.push(t.v);if(t.v===')'||t.v===']'){var open=brackets.pop();if(open!==(t.v===')'?'(':'['))fail('SyntaxError','Mismatched brackets.');}pending.ts.push(t);});if(!brackets.length){pending.ts.push({k:'eof',v:''});lines.push(pending);pending=null;}});if(pending)fail('SyntaxError','Unclosed bracket.');if(lines.length>1000)fail('RuntimeError','Teaching limit:too many source lines.');
    var cursor=0;
    function eof(ts){return ts.concat([{k:'eof',v:''}]);}
    function block(indent,depth){if(depth>40)fail('RuntimeError','Teaching limit:nesting is too deep.');var nodes=[];
      while(cursor<lines.length){var ln=lines[cursor];if(ln.indent<indent)break;lineNo=ln.line;if(ln.indent>indent)fail('IndentationError','Unexpected indentation.');var ts=ln.ts.slice(0,-1),word=ts[0].v;
        if(word==='elif'||word==='else')break;
        if(word==='if'||word==='for'){
          function branchBody(header){lineNo=header.line;cursor++;if(cursor>=lines.length||lines[cursor].indent<=indent)fail('IndentationError','Expected an indented block after the colon.');return block(lines[cursor].indent,depth+1);}
          function headerExpr(t,start){if(t[t.length-1].v!==':')fail('SyntaxError','Expected a colon and a new indented line.');return expression(eof(t.slice(start,-1)));}
          if(word==='for'){if(ts.length<5||ts[1].k!=='id'||['True','False','None'].indexOf(ts[1].v)!==-1||ts[2].v!=='in')fail('SyntaxError','Use for variable in range(...):');var iter=headerExpr(ts,3),name=ts[1].v,body=branchBody(ln);nodes.push({k:'for',name:name,iter:iter,body:body,line:ln.line});}
          else{var clauses=[{test:headerExpr(ts,1),body:branchBody(ln),line:ln.line}],otherwise=null;
            while(cursor<lines.length&&lines[cursor].indent===indent){var next=lines[cursor],t=next.ts.slice(0,-1);lineNo=next.line;if(t[0].v==='elif'){var cond=headerExpr(t,1);clauses.push({test:cond,body:branchBody(next),line:next.line});}else if(t[0].v==='else'){if(t.length!==2||t[1].v!==':')fail('SyntaxError','Use else:without a condition.');otherwise=branchBody(next);break;}else break;}
            nodes.push({k:'if',clauses:clauses,otherwise:otherwise,line:ln.line});
          }
        }else{
          var parts=[],part=[],depthCount=0;ts.forEach(function(t){if(t.v==='('||t.v==='[')depthCount++;if(t.v===')'||t.v===']')depthCount--;if(t.v===';'&&depthCount===0){parts.push(part);part=[];}else part.push(t);});if(part.length)parts.push(part);
          parts.forEach(function(t){lineNo=ln.line;if(t.length===0)fail('SyntaxError','Empty statement.');var eq=-1,assignDepth=0;t.forEach(function(x,j){if(x.v==='('||x.v==='[')assignDepth++;if(x.v===')'||x.v===']')assignDepth--;if(x.v==='='&&assignDepth===0&&eq===-1)eq=j;});if(eq!==-1){if(eq!==1||t[0].k!=='id'||['True','False','None'].indexOf(t[0].v)!==-1)fail('SyntaxError','Use a single variable on the left of =.');nodes.push({k:'assign',name:t[0].v,value:expression(eof(t.slice(2))),line:ln.line});}else nodes.push({k:'expr',value:expression(eof(t)),line:ln.line});});cursor++;
        }
      }return nodes;
    }
    var tree=block(0,0);if(cursor!==lines.length){lineNo=lines[cursor].line;fail('SyntaxError','elif or else has no matching if, or is out of order.');}
    function run(nodes){nodes.forEach(function(n){tick();lineNo=n.line;if(n.k==='assign')env[n.name]=evaluate(n.value);else if(n.k==='expr')evaluate(n.value);else if(n.k==='if'){var matched=false;for(var j=0;j<n.clauses.length;j++){lineNo=n.clauses[j].line;if(truth(evaluate(n.clauses[j].test))){run(n.clauses[j].body);matched=true;break;}}if(!matched&&n.otherwise)run(n.otherwise);}else if(n.k==='for'){var v=evaluate(n.iter),items;if(v.t==='range')items=v.v.items;else if(v.t==='list')items=v.v;else if(v.t==='str')items=v.v.split('').map(function(x){return V('str',x);});else fail('TypeError','This value is not iterable.');for(var loopIndex=0;loopIndex<items.length;loopIndex++){tick();env[n.name]=items[loopIndex];run(n.body);}}});}
    run(tree);if(output.endsWith('\n'))output=output.slice(0,-1);return {out:output===''?[]:output.split('\n'),err:null};
  }catch(e){return {out:[],err:{line:lineNo,msg:(e.kind||'SyntaxError')+': '+e.message}};}
}
window.pyRun=pyRun;
    /* ---------- editor wiring ---------- */
    function wireEditors() {
      document.querySelectorAll('.code-panel').forEach(function (panel) {
        var edit = panel.querySelector('.py-edit');
        if (!edit) return;
        if (!edit.getAttribute('data-src')) edit.setAttribute('data-src', edit.value);
        function grow() { edit.style.height = 'auto'; edit.style.height = (edit.scrollHeight + 2) + 'px'; }
        edit.addEventListener('input', grow);
        var term = panel.querySelector('.term'), errBox = panel.querySelector('.py-err');
        var ctl = panel.querySelector('.py-ctl');
        if (ctl) {
          var run = null, reset = null;
          ctl.querySelectorAll('button').forEach(function (b) {
            if (/إعادة|تصفير/.test(b.textContent)) reset = b;
            else if (!run) run = b;
          });
          function runIt() {
            var code = edit.value;
            var inputs = [];
            (panel.getAttribute('data-inputs') || edit.getAttribute('data-inputs') || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean).forEach(function (id) {
              var el = document.getElementById(id); inputs.push(el ? el.value:'');
            });
            var seeds = {};
            (panel.getAttribute('data-seed') || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean).forEach(function (pair) {
              var p = pair.split('='); if (p.length === 2) { var el = document.getElementById(p[1]); if (el) seeds[p[0]] = el.value; }
            });
            term.innerHTML = ''; errBox.innerHTML = ''; term.style.display = 'none'; errBox.style.display = 'none';
            var res = window.pyRun ? pyRun(code, inputs, seeds) : null;
            panel._lastError=res&&res.err?{error:res.err,code:code}:null;if (res && res.err) { errBox.appendChild(friendlyErr(res.err, code)); errBox.style.display = 'block'; }
            else if (res && res.out && res.out.length) {
              res.out.forEach(function (l) { var d = document.createElement('div'); d.className = 'out-line'; d.textContent = l; term.appendChild(d); });
              term.style.display = 'block';
            } else if (res) {
              var e = document.createElement('div'); e.className = 'out-line'; e.textContent = '✔';
              term.appendChild(e); term.style.display = 'block';
            }
          }
          if (run) run.addEventListener('click', runIt);
          if (reset) reset.addEventListener('click', function () { edit.value = edit.getAttribute('data-src'); grow(); runIt(); });
        }
        grow();
      });
      document.addEventListener('langChange',function(){document.querySelectorAll('.code-panel').forEach(function(panel){if(panel._lastError){var box=panel.querySelector('.py-err');box.textContent='';box.appendChild(friendlyErr(panel._lastError.error,panel._lastError.code));}});});
      function friendlyErr(er, codeSrc) {
        var lineN = er && er.line ? er.line:1;
        function lineSrc(n) { if (n < 1) return ''; var l = (codeSrc || '').split('\n'); return (n - 1 < l.length) ? l[n - 1].trim() : ''; }
        var msgTxt = String(er && er.msg ? er.msg:'Unknown error'), kind = 'SyntaxError', detail = msgTxt;
        var km = /^([A-Za-z]+(?:Error|Exception)):\s*/.exec(msgTxt);
        if (km) { kind = km[1]; detail = msgTxt.slice(km[0].length); }
        var hintAr = {
          NameError:'الاسم مش معرّف — لازم تعرّفه قبل ما تستخدمه (مثلاً: name = "يمني")',
          TypeError: 'نوع القيمة مش صح للعملية دي — مثلاً مينفعش تجمع نص مع رقم',
          ValueError: 'القيمة مش قابلة للتحويل للنوع المطلوب',
          ZeroDivisionError: 'مينفعش تقسم على صفر',
          IndexError: 'الفهرس خارج حدود القائمة أو النص. أول فهرس 0، والسالب يبدأ من الآخر.',
          IndentationError: 'راجع المسافات البادئة: جسم الحلقة أو الشرط لازم يكون داخل الكتلة.',
          RuntimeError: 'وصلت لحد النموذج التعليمي. صغّر حجم المثال أو عدد الخطوات.',
          AttributeError: 'الخاصية أو الميثود دي مش موجودة على القيمة',
          SyntaxError: 'فيه غلطة في الصياغة — راجع الأقواس أو علامات التنصيص'
        };
        var hintEn = {
          NameError:'The name is not defined — define it before using it (e.g. name = "Yumna")',
          TypeError: 'The type of the value is wrong for this operation — e.g. you can\'t add text and a number',
          ValueError: 'The value cannot be converted to the required type',
          ZeroDivisionError: 'You cannot divide by zero',
          IndexError: 'The index is outside the list or string. The first index is 0; negative indices count from the end.',
          IndentationError:'Check indentation: the loop or condition body must be indented.',
          RuntimeError: 'Teaching-model limit reached. Reduce the example size or number of steps.',
          AttributeError: 'This property or method doesn\'t exist on the value',
          SyntaxError: 'There is a syntax error — check the parentheses or the quotation marks'
        };
        var hints = window.currentLang === 'en' ? hintEn:hintAr;
        var locTxt = window.currentLang === 'en' ? 'Location:line ' : 'المكان: السطر ';
        var frag = document.createDocumentFragment();
        var tag = document.createElement('div'); tag.className = 'errtag';
        var badge = document.createElement('span'); badge.className = 'errbadge'; badge.textContent = kind;
        tag.appendChild(badge); frag.appendChild(tag);
        var main = document.createElement('div'); main.className = 'errmain'; main.textContent = /Teaching limit:/.test(detail)?(window.currentLang==='en'?'Teaching-model limit reached. Reduce the example size.':'وصلت لحد النموذج التعليمي. صغّر المثال.'):(hints[kind] || detail || msgTxt); frag.appendChild(main);
        var ctx = document.createElement('div'); ctx.className = 'errctx'; ctx.textContent = locTxt + lineN; frag.appendChild(ctx);
        var srcTxt = lineSrc(lineN);
        if (srcTxt) { var lr = document.createElement('div'); lr.className = 'errline'; var spn = document.createElement('span'); spn.className = 'ln'; spn.textContent = lineN; lr.appendChild(spn); lr.appendChild(document.createTextNode(srcTxt)); frag.appendChild(lr); }
        return frag;
      }
    }

    /* ---------- boot ---------- */
    document.addEventListener('DOMContentLoaded', function () {
      wireNav();
      wireReveal();
      wireOperators();
      wireVarBox();
      wireSeq();
      wireRevealBtns();
      wireEditors();
      wireRecall();
    });

    /* ---------- AR/EN toggle ---------- */
    document.addEventListener('DOMContentLoaded', function () {
      var langBtn = document.getElementById('langToggle');
      if (!langBtn) return;
      function refreshOperators(lang) {
        var g = document.getElementById('opGallery');
        if (!g) return; /* 'opGallery' removed by design - skip safely */
        if (!g) return;
        var active = g.querySelector('.op-chip.active');
        var activeIdx = active ? Array.prototype.indexOf.call(g.children, active) : -1;
        g.querySelectorAll('.op-chip .name').forEach(function (nm, i) {
          var o = OP_DATA[i];
          nm.textContent = (lang === 'en') ? o.nameEn:o.name;
        });
        if (activeIdx >= 0 && OP_DATA[activeIdx]) {
          paintOpDetail(OP_DATA[activeIdx]);
        }
      }
      function setLang(lang) {
        window.currentLang = lang;
        langBtn.setAttribute('data-current', lang);
        langBtn.textContent = (lang === 'ar') ? 'EN' : 'AR';
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
          var val = (lang === 'ar') ? el.getAttribute('data-ar') : el.getAttribute('data-en');
          if (val !== null) { el.innerHTML = val; el.setAttribute('data-lang', lang); }
        });
        refreshOperators(lang);
        document.dispatchEvent(new CustomEvent('langChange', { detail:{ lang: lang } }));
        localStorage.setItem('langPreference', lang);
      }
      var storedLang = localStorage.getItem('langPreference');
      if (!storedLang) storedLang = 'ar';
      setLang(storedLang);
      langBtn.addEventListener('click', function () {
        setLang(window.currentLang === 'ar' ? 'en' : 'ar');
      });

      // keep op-result in sync if a division-by-zero message was showing
      var resEl = document.getElementById('opResult');
      if (!resEl) return; /* 'opResult' removed by design - skip safely */
      if (resEl) {
        document.addEventListener('langChange', function (ev) {
          var txt = resEl.textContent.trim();
          if (txt === 'ممنوع القسمة على صفر' || txt === 'Cannot divide by zero') {
            resEl.innerHTML = '<span dir="ltr">' + divZeroMsg() + '</span>';
          }
        });
      }
    });

    /* ---------- option key boxes ---------- */
    function decorateOpts() {
      document.querySelectorAll('.ex-opt').forEach(function (o) {
        if (o.querySelector('.opt-key')) return;
        var t = o.innerHTML;
        var m = t.match(/^\s*((?:[A-Za-z]|[0-9]+|\[[0-9]+\]|[○×]))/);
        if (m) {
          o.innerHTML = '<span class="opt-key">' + m[1] + '</span>' + t.slice(m[0].length);
        }
      });
    }
    document.addEventListener('langChange', decorateOpts);
  

    document.addEventListener('DOMContentLoaded',function(){
      var list=[7,22,11,34,17],listResult=null,gridIndex=0,gridAnswer=null,targets=[[0,0],[1,2],[0,1],[1,0],[0,2],[1,1]],letters=[['A','B','C'],['D','E','F']];
      function el(id){return document.getElementById(id);}
      function paint(){paintSelfChecks();el('list-state').textContent='a = ['+list.join(', ')+']\n'+'len(a)'+' = '+list.length;var r=el('list-result');r.textContent=listResult?(listResult.kind==='index'?(listResult.error?'IndexError:'+tr('الفهرس خارج حدود القائمة.','index is out of range.'):listResult.text):listResult.kind==='append'?tr('اتضاف العنصر عند الفهرس ','Appended at index ')+listResult.index:listResult.kind==='limit'?tr('حد المعمل 12 عنصر. اعمل إعادة.','Lab limit: 12 items. Reset to continue.'):tr('استخدم عددًا صحيحًا صغيرًا.','Use a small integer.')):'';var t=targets[gridIndex];el('grid-target').textContent='a['+t[0]+']['+t[1]+'] = ?';el('grid-result').textContent=gridAnswer===null?'':(gridAnswer===letters[t[0]][t[1]]?tr('صح! ','Correct! '):tr('راجع الصف الأول وبعدين العمود. ','Check the row first, then the column. '))+'a['+t[0]+']['+t[1]+'] = '+letters[t[0]][t[1]];}
      el('list-reveal').addEventListener('click',function(){var raw=el('list-index').value,k=Number(raw);listResult=(!raw.trim()||!Number.isSafeInteger(k))?{kind:'invalid'}:{kind:'index',error:!(k>=-list.length&&k<list.length),text:k>=-list.length&&k<list.length?'a['+k+'] = '+list[k<0?k+list.length:k]:'IndexError: '+tr('الفهرس خارج حدود القائمة.','index is out of range.')};paint();});
      el('list-append').addEventListener('click',function(){var raw=el('list-add').value,n=Number(raw);if(!raw.trim()||!Number.isSafeInteger(n)||Math.abs(n)>1000000)listResult={kind:'invalid'};else if(list.length>=12)listResult={kind:'limit'};else{list.push(n);listResult={kind:'append',index:list.length-1};}paint();});
      ['list-index','list-add'].forEach(function(id){el(id).addEventListener('input',function(){listResult=null;paint();});});
      el('list-reset').addEventListener('click',function(){list=[7,22,11,34,17];el('list-index').value='0';el('list-add').value='9';listResult=null;paint();});
      letters.forEach(function(row,i){row.forEach(function(v,j){var b=document.createElement('button');b.textContent=v;b.setAttribute('aria-label','a['+i+']['+j+'] '+v);b.addEventListener('click',function(){gridAnswer=v;paint();});el('grid-cells').appendChild(b);});});
      el('grid-next').addEventListener('click',function(){gridIndex=(gridIndex+1)%targets.length;gridAnswer=null;paint();});
      var search=el('glossarySearch');search.addEventListener('input',function(){var q=search.value.trim().toLocaleLowerCase();document.querySelectorAll('.gl-term[data-search]').forEach(function(t){t.classList.toggle('hidden',!t.getAttribute('data-search').toLocaleLowerCase().includes(q));});});
      function pans(){document.querySelectorAll('.textbook-code,.py-edit').forEach(function(c){var cue=c.previousElementSibling;if(!cue||!cue.classList.contains('pan-cue')){cue=document.createElement('p');cue.className='pan-cue';c.before(cue);}cue.textContent=tr('اسحب الكود أفقيًا لقراءة السطر كامل.','Pan code horizontally to read the full line.');cue.classList.toggle('visible',c.scrollWidth>c.clientWidth+2);});}
      document.querySelectorAll('[data-self-check],.py-ctl button').forEach(function(b){b.addEventListener('click',function(){setTimeout(pans,0);});});document.querySelectorAll('.py-edit').forEach(function(t){t.setAttribute('wrap','off');t.addEventListener('input',pans);});
      document.addEventListener('langChange',function(){paint();pans();document.querySelectorAll('.rq.done .rq-fb.show').forEach(function(f){var q=f.closest('.rq'),picked=q._selected,state=q._feedback;if(picked&&state)f.textContent=(state.ok?'✅ ':'❌ ')+(state.key?tr('الإجابة الصحيحة ','The correct answer is ')+state.key+'. ':'')+rqFb(picked);});});window.addEventListener('resize',pans);paint();setTimeout(pans,100);
    });

    document.addEventListener('DOMContentLoaded',function(){
      var at=0,total=0,history=[],done=false,guess=null;
      function el(id){return document.getElementById(id);}
      function values(){return el('trace-data').value==='negative'?[-7,-22,-11,-34,-17]:[7,22,11,34,17];}
      function mode(){return el('trace-mode').value;}
      function paint(){var a=values(),m=mode();el('trace-state').textContent='a = ['+a.join(', ')+']\n'+'Step'+': '+at+' / '+a.length+'\n'+(m==='count'?'count':m)+' = '+total+(history.length?'\n'+history.join('\n'):'');el('trace-step').disabled=done;var feedback=el('trace-feedback');feedback.textContent=!done?'':guess===null?tr('انتهى المرور. النتيجة = ','Traversal complete. Result = '):(guess===total?tr('صح! النتيجة = ','Correct! Result = '):tr('راجع الخطوات. النتيجة = ','Review the steps. Result = '));if(done){var numericResult=document.createElement('bdi');numericResult.dir='ltr';numericResult.textContent=String(total);feedback.appendChild(numericResult);}}
      function reset(){at=0;history=[];done=false;guess=null;total=(mode()==='min'||mode()==='max')?values()[0]:0;paint();}
      el('trace-step').addEventListener('click',function(){if(done)return;var a=values(),v=a[at],m=mode();if(m==='sum')total+=v;else if(m==='min')total=Math.min(total,v);else if(m==='max')total=Math.max(total,v);else if(v>10)total++;history.push('i='+at+' | a[i]='+v+' | '+(m==='count'?'count':m)+'='+total);at++;if(at===a.length){done=true;var raw=el('trace-prediction').value.trim(),n=Number(raw);guess=raw!==''&&Number.isSafeInteger(n)?n:null;}paint();});
      ['trace-mode','trace-data'].forEach(function(id){el(id).addEventListener('change',reset);});el('trace-prediction').addEventListener('input',function(){if(done){var raw=this.value.trim(),n=Number(raw);guess=raw!==''&&Number.isSafeInteger(n)?n:null;paint();}});el('trace-reset').addEventListener('click',function(){el('trace-prediction').value='';reset();});document.addEventListener('langChange',paint);reset();
    });
  
