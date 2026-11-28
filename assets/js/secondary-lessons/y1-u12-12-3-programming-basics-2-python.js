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
      }, { threshold:0.05 });
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
    function normalizeExLabels() {
      document.querySelectorAll('.ex-opt').forEach(function (o) {
        if (o.querySelector('.ex-key')) return;
        var txt = o.textContent.replace(/\u00a0/g, ' ').trim();
        var m = /^(\[(?:[0-9]+)\]|[A-E])\s+([\s\S]*)$/.exec(txt);
        if (!m) return;
        var label = m[1];
        var rest = m[2].replace(/^\s+/, '');
        var nm = /^\[([0-9]+)\]$/.exec(label);
        if (nm) label = String.fromCharCode(64 + parseInt(nm[1], 10));
        o.textContent = '';
        var k = document.createElement('span'); k.className = 'ex-key'; k.textContent = label;
        var b = document.createElement('span'); b.className = 'ex-body'; b.textContent = rest;
        o.appendChild(k); o.appendChild(b);
      });
    }
    function gradeExercises(card) {
      card.setAttribute('data-reviewed','1');
      var scored=0,right=0,unanswered=0;
      card.querySelectorAll('.ex-item').forEach(function(item) {
        var correct=item.querySelector('.ex-opt[data-ok="1"]');
        if (!correct) return;
        scored++;
        var picked=item.querySelector('.ex-opt.picked');
        item.querySelectorAll('.ex-opt').forEach(function(o){o.classList.remove('correct','wrong');});
        if (!picked) unanswered++;
        else { var ok=picked.getAttribute('data-ok')==='1';if(ok)right++;picked.classList.add(ok?'correct':'wrong'); }
      });
      card.querySelectorAll('.ex-answer').forEach(function(a){a.classList.add('show');});
      var score=card.querySelector('.ex-score');
      if(!score){score=document.createElement('div');score.className='ex-score';card.appendChild(score);}
      score.textContent=window.currentLang==='en'?'Correct:'+right+' / '+scored+'. Unanswered: '+unanswered+'. Fill-in questions are self-checked.':'الصحيح: '+right+' / '+scored+'. بدون إجابة: '+unanswered+'. أسئلة الفراغات مراجعتها ذاتية.';
    }
    function wireRevealBtns() {
      normalizeExLabels();
      document.querySelectorAll('.ex-opt[data-key]').forEach(function(opt){
        function pick(){var item=opt.closest('.ex-item');item.querySelectorAll('.ex-opt').forEach(function(o){o.classList.remove('picked');o.setAttribute('aria-pressed','false');});opt.classList.add('picked');opt.setAttribute('aria-pressed','true');var card=opt.closest('.card');if(card.hasAttribute('data-reviewed'))gradeExercises(card);}
        opt.setAttribute('aria-pressed','false');
        opt.addEventListener('click',pick);
        opt.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
      });
      document.querySelectorAll('[data-reveal]').forEach(function(btn){btn.addEventListener('click',function(){gradeExercises(btn.closest('.card'));});});
      document.querySelectorAll('[data-hide]').forEach(function(btn){btn.addEventListener('click',function(){var card=btn.closest('.card');card.removeAttribute('data-reviewed');card.querySelectorAll('.ex-answer').forEach(function(a){a.classList.remove('show');});card.querySelectorAll('.ex-opt').forEach(function(o){o.classList.remove('correct','wrong');});var score=card.querySelector('.ex-score');if(score)score.remove();});});
      document.addEventListener('langChange',function(){document.querySelectorAll('[data-reviewed]').forEach(gradeExercises);});
    }

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
            fb.classList.add('show');fb.setAttribute('data-correct-key',correctKey || '');
            fb.classList.toggle('ok', ok);
            fb.classList.toggle('no', !ok);
            fb.textContent = (ok ? '✅ ' : '❌ ') +
              (correctKey ? (window.currentLang === 'en' ? 'The correct answer is ' + correctKey + '. ' : 'الإجابة الصحيحة ' + correctKey + '. ') : '') + text;
          }
          opts.forEach(function (o) {
            o.addEventListener('click', function () {
              if (q.classList.contains('done')) return;
              var ok = o.getAttribute('data-ok') === '1';
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
            showFb(true, rqFb(co), co.getAttribute('data-key'));
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
    document.addEventListener('langChange',function(){
      document.querySelectorAll('.rq.done').forEach(function(q){
        var fb=q.querySelector('.rq-fb'),source=q.querySelector('.rq-opt.wrong')||q.querySelector('.rq-opt.correct');
        if(!fb||!source)return;
        var key=fb.getAttribute('data-correct-key'),ok=fb.classList.contains('ok');
        fb.textContent=(ok?'✅ ':'❌ ')+(key?(window.currentLang==='en'?'The correct answer is '+key+'. ':'الإجابة الصحيحة '+key+'. '):'')+rqFb(source);
      });
    });


    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'loop', 'comparison', 'branching', 'practice', 'recap'];
    window.addEventListener('keydown', function (e) {
      if (e.target.matches('input,textarea,select,button,[role="button"]')) return;
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
       BOUNDED LESSON MODEL + EDITOR WIRING
       ============================================================ */
/* Bounded model for this lesson. No eval, network, imports or host objects. */
function pyRun(src, inputs, seeds) {
  var lineNo=1, budget=20000, env=Object.create(null), output='', queue=(inputs||[]).slice();
  function fail(kind,message){var e=new Error(message);e.kind=kind;throw e;}
  function tick(){if(--budget<0)fail('RuntimeError','Teaching limit:20,000 execution steps. Reduce the loop size.');}
  function V(t,v){if((t==='int'&&!Number.isSafeInteger(v))||(t==='float'&&!Number.isFinite(v)))fail('ValueError','Teaching limit:use small finite numbers.');if(t==='str'&&v.length>10000)fail('ValueError','Teaching limit:text is too long.');return {t:t,v:v};}
  function number(v,f){return V(f?'float':'int',v);}
  var none=V('none',null);
  function numeric(x){return x.t==='int'||x.t==='float'||x.t==='bool';}
  function asNumber(x){if(!numeric(x))fail('TypeError','A number is required.');return Number(x.v);}
  function truth(x){return x.t==='none'?false:x.t==='range'?x.v.items.length>0:x.t==='list'?x.v.length>0:!!x.v;}
  function text(x){if(x.t==='none')return 'None';if(x.t==='bool')return x.v?'True':'False';if(x.t==='float')return Object.is(x.v,-0)?'-0.0':Number.isInteger(x.v)?x.v+'.0':String(x.v);if(x.t==='range')return x.v.repr;if(x.t==='list')return '['+x.v.map(function(v){return v.t==='str'?"'"+v.v+"'":text(v);}).join(', ')+']';return String(x.v);}
  function lex(s){
    var ts=[],i=0;
    while(i<s.length){var c=s[i];if(/\s/.test(c)){i++;continue;}if(c==='#')break;
      var m=/^(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?/.exec(s.slice(i));
      if(m){ts.push({k:'lit',v:number(Number(m[0]),/[.eE]/.test(m[0]))});i+=m[0].length;continue;}
      if(c==='"'||c==="'"){var q=c,a='';i++;var closed=false;while(i<s.length){c=s[i++];if(c===q){closed=true;break;}if(c==='\\'){if(i>=s.length)break;var ec=s[i++];a+=ec==='n'?'\n':ec==='t'?'\t':ec==='r'?'\r':ec;}else a+=c;}if(!closed)fail('SyntaxError','Unterminated string literal.');ts.push({k:'lit',v:V('str',a)});continue;}
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
  function equal(a,b){if(numeric(a)&&numeric(b))return Number(a.v)===Number(b.v);if(a.t!==b.t)return false;return a.v===b.v;}
  function compare(op,a,b){if(op==='==')return equal(a,b);if(op==='!=')return !equal(a,b);if(!(numeric(a)&&numeric(b))&&!(a.t==='str'&&b.t==='str'))fail('TypeError','These values cannot be ordered.');return op==='<'?a.v<b.v:op==='>'?a.v>b.v:op==='<='?a.v<=b.v:a.v>=b.v;}
  function calc(op,a,b){
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
    if(n.k==='call'){var args=n.a.map(evaluate),kw=n.kw.map(function(k){return {name:k.name,value:evaluate(k.node)};});if(n.fn.k==='name'){if(Object.prototype.hasOwnProperty.call(env,n.fn.v))fail('TypeError','This value is not callable.');return call(n.fn.v,args,kw);}if(n.fn.k==='member'){var obj=evaluate(n.fn.a),method=n.fn.name;if(obj.t!=='str')fail('AttributeError','Only basic string methods are supported in this model.');if(kw.length)fail('TypeError','No keyword arguments here.');if(method==='upper'&&args.length===0)return V('str',obj.v.toUpperCase());if(method==='lower'&&args.length===0)return V('str',obj.v.toLowerCase());if(method==='count'&&args.length===1&&args[0].t==='str'){var sub=args[0].v;return number(sub===''?obj.v.length+1:obj.v.split(sub).length-1,false);}fail('AttributeError','Method is not available in this model.');}fail('TypeError','This value is not callable.');}
    if(n.k==='index'){var a=evaluate(n.a),values=a.t==='range'?a.v.items:a.v;if(a.t!=='str'&&a.t!=='list'&&a.t!=='range')fail('TypeError','This value cannot be indexed.');function idx(z,def){if(z===null)return def;var v=evaluate(z);if(v.t!=='int'&&v.t!=='bool')fail('TypeError','Index must be an integer.');var k=Number(v.v);return k<0?k+values.length:k;}var lo=idx(n.lo,0);if(n.slice){var hi=idx(n.hi,values.length);return V(a.t==='str'?'str':'list',values.slice(Math.max(0,lo),Math.max(0,hi)));}if(lo<0||lo>=values.length)fail('IndexError','Index is out of range.');return a.t==='str'?V('str',values[lo]):values[lo];}
    fail('SyntaxError','Unsupported expression in this model.');
  }
  try{
    src=String(src);if(src.length>50000)fail('RuntimeError','Teaching limit:source is too long.');Object.keys(seeds||{}).forEach(function(k){env[k]=V('str',String(seeds[k]));});
    var lines=[];src.split('\n').forEach(function(raw,i){lineNo=i+1;raw=raw.replace(/\r$/,'');var prefix=/^[ \t]*/.exec(raw)[0],indent=0;for(var k=0;k<prefix.length;k++)indent=prefix[k]==='\t'?indent+8-indent%8:indent+1;var ts=lex(raw.slice(prefix.length));if(ts[0].k!=='eof')lines.push({indent:indent,ts:ts,line:i+1});});if(lines.length>1000)fail('RuntimeError','Teaching limit:too many source lines.');
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
    function run(nodes){nodes.forEach(function(n){tick();lineNo=n.line;if(n.k==='assign')env[n.name]=evaluate(n.value);else if(n.k==='expr')evaluate(n.value);else if(n.k==='if'){var matched=false;for(var j=0;j<n.clauses.length;j++){lineNo=n.clauses[j].line;if(truth(evaluate(n.clauses[j].test))){run(n.clauses[j].body);matched=true;break;}}if(!matched&&n.otherwise)run(n.otherwise);}else if(n.k==='for'){var v=evaluate(n.iter),items;if(v.t==='range')items=v.v.items;else if(v.t==='list')items=v.v;else if(v.t==='str')items=v.v.split('').map(function(x){return V('str',x);});else fail('TypeError','This value is not iterable.');items.forEach(function(item){tick();env[n.name]=item;run(n.body);});}});}
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
            var code = edit.value;panel._lastRunCode=code;
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
            if (res && res.err) { errBox.appendChild(friendlyErr(res.err, code)); errBox.style.display = 'block'; }
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
        document.addEventListener('langChange',function(){if(panel._lastRunCode===edit.value&&errBox.style.display==='block')runIt();});
        grow();
      });
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
          IndexError: 'المؤشر برّه حدود النص — الترقيم بيبدأ من صفر',
          AttributeError: 'الخاصية أو الميثود دي مش موجودة على القيمة',
          SyntaxError: 'فيه غلطة في الصياغة — راجع الأقواس أو علامات التنصيص'
        };
        var hintEn = {
          NameError:'The name is not defined — define it before using it (e.g. name = "Yumna")',
          TypeError: 'The type of the value is wrong for this operation — e.g. you can\'t add text and a number',
          ValueError: 'The value cannot be converted to the required type',
          ZeroDivisionError: 'You cannot divide by zero',
          IndexError: 'The index is out of range — the numbering starts from zero',
          AttributeError: 'This property or method doesn\'t exist on the value',
          SyntaxError: 'There is a syntax error — check the parentheses or the quotation marks'
        };
        hintAr.IndentationError='راجع المسافات البادئة:جسم الحلقة أو الفرع لازم يكون للداخل، وباقي السطور في نفس المستوى.';hintEn.IndentationError='Check indentation:a loop or branch body must be indented consistently.';hintAr.RuntimeError='وصلت للحد التعليمي للحماية. قلّل حجم الحلقات أو الناتج.';hintEn.RuntimeError='The teaching safety limit was reached. Reduce the loops or output.';
        if(kind==='ValueError'&&/step/.test(detail)){hintAr.ValueError='خطوة range لا يمكن أن تكون 0.';hintEn.ValueError='The range step cannot be zero.';}
        else if(kind==='ValueError'&&/Teaching limit/.test(detail)){hintAr.ValueError='القيمة خارج حدود النموذج التعليمي. استخدم أعداداً أو نصوصاً أصغر.';hintEn.ValueError='This value exceeds the teaching model limits. Use smaller values.';}
        if(kind==='TypeError'&&/range/.test(detail)){hintAr.TypeError='range تحتاج من وسيط واحد إلى ثلاثة وسائط صحيحة، وليست نصوصاً أو أعداداً عشرية.';hintEn.TypeError='range needs one to three integer arguments, not strings or floats.';}
        var hints = window.currentLang === 'en' ? hintEn:hintAr;
        var locTxt = window.currentLang === 'en' ? 'Location:line ' : 'المكان: السطر ';
        var frag = document.createDocumentFragment();
        var tag = document.createElement('div'); tag.className = 'errtag';
        var badge = document.createElement('span'); badge.className = 'errbadge'; badge.textContent = kind;
        tag.appendChild(badge); frag.appendChild(tag);
        var main = document.createElement('div'); main.className = 'errmain'; main.textContent = hints[kind] || detail || msgTxt; frag.appendChild(main);
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
          if (val !== null) { if(el.tagName==='INPUT')el.placeholder=val;else el.innerHTML=val;el.setAttribute('data-lang',lang); }
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

    /* ---------- glossary ---------- */
    (function () {
      var search = document.getElementById('glossarySearch');
      if (!search) return;
      var filters = document.querySelectorAll('.gl-filter');
      var terms = Array.prototype.slice.call(document.querySelectorAll('.gl-term'));
      var activeFilter = 'all';

      function applyFilters() {
        var q = search.value.trim().toLowerCase();
        terms.forEach(function (t) {
          var catOk = activeFilter === 'all' || t.getAttribute('data-cat') === activeFilter;
          var searchable=t.textContent+' '+Array.prototype.map.call(t.querySelectorAll('[data-ar][data-en]'),function(el){return el.getAttribute('data-ar')+' '+el.getAttribute('data-en');}).join(' ');var textOk=!q||searchable.toLowerCase().indexOf(q)!==-1;
          t.classList.toggle('hidden', !(catOk && textOk));
        });
      }

      filters.forEach(function (f) {
        f.addEventListener('click', function () {
          filters.forEach(function (x) { x.classList.remove('active'); });
          f.classList.add('active');
          activeFilter = f.getAttribute('data-filter');
          applyFilters();
        });
      });

      search.addEventListener('input', applyFilters);

      document.addEventListener('langChange', function () {
        search.placeholder = (window.currentLang === 'ar') ? search.getAttribute('data-ar') : search.getAttribute('data-en');
      });
    })();

document.addEventListener('DOMContentLoaded',function(){
  var ops=[['==','يساوي','Equal'],['!=','لا يساوي','Not equal'],['<','أصغر من','Less than'],['>','أكبر من','Greater than'],['<=','أصغر من أو يساوي','Less than or equal to'],['>=','أكبر من أو يساوي','Greater than or equal to']];
  function en(){return window.currentLang==='en';}
  function say(ar,english){return en()?english:ar;}
  function ints(ids){var values=ids.map(function(id){var field=document.getElementById(id);return field.value.trim()===''?NaN:Number(field.value);});return values.every(function(v){return Number.isSafeInteger(v)&&Math.abs(v)<=10000;})?values:null;}
  var rangeShown=false,rangeResult=document.getElementById('range-result');
  function rangePaint(){rangeResult.textContent='';if(!rangeShown)return;var v=ints(['range-start','range-stop','range-step']);if(!v){rangeResult.textContent=say('اكتب أعداداً صحيحة بين -10000 و10000.','Enter integers between -10000 and10000.');return;}if(v[2]===0){rangeResult.textContent=say('ValueError:الخطوة 0 غير مسموحة.','ValueError: a zero step is invalid.');return;}var n=Math.max(0,Math.ceil((v[1]-v[0])/v[2]));if(n>50){rangeResult.textContent=say('حد العرض 50 قيمة. قرّب النهاية أو كبّر مقدار الخطوة.','Display limit:50 values. Use a nearer stop or a larger step.');return;}var vals=[];for(var i=0;i<n;i++)vals.push(v[0]+i*v[2]);var sequence=document.createElement('div');sequence.dir='ltr';sequence.textContent='range('+v.join(', ')+') → ['+vals.join(', ')+']';rangeResult.appendChild(sequence);var note=document.createElement('p');note.textContent=n?say('آخر قيمة:','Last value: ')+vals[vals.length-1]+say('. النهاية غير مشمولة.','. The stop is excluded.'):say('مدى فارغ: لا توجد قيمة في اتجاه الخطوة قبل الوصول للنهاية.','Empty range: no values fit the step direction before the stop.');rangeResult.appendChild(note);}
  ['range-start','range-stop','range-step'].forEach(function(id){document.getElementById(id).addEventListener('input',function(){rangeShown=false;rangePaint();});});
  document.getElementById('range-reveal').addEventListener('click',function(){rangeShown=true;rangePaint();});
  document.getElementById('range-down').addEventListener('click',function(){document.getElementById('range-start').value='5';document.getElementById('range-stop').value='-1';document.getElementById('range-step').value='-1';rangeShown=false;rangePaint();document.getElementById('range-reveal').focus();});
  var choice=null,select=document.getElementById('compare-op'),result=document.getElementById('compare-result');
  function comparisonPaint(){var op=select.value,idx=ops.findIndex(function(x){return x[0]===op;}),data=ops[idx],v=ints(['compare-x','compare-y']);var meaning=document.getElementById('compare-meaning');meaning.textContent='';var count=document.createElement('bdi');count.dir='ltr';count.textContent=(idx+1)+' / 6';meaning.appendChild(count);meaning.appendChild(document.createTextNode(' · '+(en()?data[2]:data[1])));document.getElementById('compare-expression').textContent=v?v[0]+' '+op+' '+v[1]:'? '+op+' ?';result.textContent='';if(choice===null)return;if(!v){result.textContent=say('اكتب عددين صحيحين بين -10000 و10000.','Enter two integers between -10000 and10000.');return;}var a=v[0],b=v[1],actual=op==='=='?a===b:op==='!='?a!==b:op==='<'?a<b:op==='>'?a>b:op==='<='?a<=b:a>=b,correct=choice===actual;result.textContent=(correct?say('صحيح:','Correct: '):say('راجع العامل. النتيجة: ','Check the operator. Result: '))+(actual?'True':'False');result.setAttribute('data-correct',String(correct));}
  ['compare-x','compare-y'].forEach(function(id){document.getElementById(id).addEventListener('input',function(){choice=null;comparisonPaint();});});select.addEventListener('change',function(){choice=null;comparisonPaint();});document.querySelectorAll('[data-guess]').forEach(function(b){b.addEventListener('click',function(){choice=b.getAttribute('data-guess')==='true';comparisonPaint();});});document.getElementById('compare-next').addEventListener('click',function(){select.selectedIndex=(select.selectedIndex+1)%6;choice=null;comparisonPaint();});document.addEventListener('langChange',function(){rangePaint();comparisonPaint();});comparisonPaint();
});

document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.rq-opt').forEach(function(o){o.setAttribute('role','button');o.setAttribute('tabindex','0');o.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();o.click();}});});});

/* Show a mobile pan cue only for code that actually overflows its own box. */
document.addEventListener('DOMContentLoaded',function(){
 function paintCodePan(){document.querySelectorAll('#practice .ex-item').forEach(function(item){var note=item.querySelector(':scope > .code-pan-note');if(!note){note=document.createElement('p');note.className='code-pan-note';item.querySelector('.q').after(note);}var overflow=Array.prototype.some.call(item.querySelectorAll('.textbook-code,.ex-body'),function(code){return code.clientWidth>0&&code.scrollWidth>code.clientWidth+1;});note.hidden=!overflow;note.textContent=window.currentLang==='en'?'↔ Scroll code sideways to read each full line.':'↔ اسحب الكود أفقياً لقراءة كل سطر كاملاً.';});}
 paintCodePan();window.addEventListener('resize',paintCodePan);document.addEventListener('langChange',function(){requestAnimationFrame(paintCodePan);});if(document.fonts)document.fonts.ready.then(paintCodePan);
});
