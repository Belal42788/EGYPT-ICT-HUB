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
    function wireRevealBtns() {
      normalizeExLabels();
      document.querySelectorAll('.ex-opt').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var item = opt.closest('.ex-item'); if (!item) return;
          item.querySelectorAll('.ex-opt').forEach(function (o) { o.classList.remove('picked'); });
          opt.classList.add('picked');
        });
      });
      document.querySelectorAll('[data-reveal]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.card'); if (!card) return;
          card.querySelectorAll('.ex-item').forEach(function (item) {
            item.querySelectorAll('.ex-opt').forEach(function (o) {
              o.classList.remove('correct', 'wrong');
              if (o.classList.contains('picked') && o.getAttribute('data-ok')) o.classList.add(o.getAttribute('data-ok') === '1' ? 'correct' : 'wrong');
            });
          });
          card.querySelectorAll('.ex-answer').forEach(function (a) { a.classList.add('show'); });
          var scored = 0, right = 0, noAns = 0;
          card.querySelectorAll('.ex-item').forEach(function (item) {
            if (!item.querySelector('.ex-opt[data-ok="1"]')) return;
            scored++;
            var picked = item.querySelector('.ex-opt.picked');
            if (!picked) { noAns++; return; }
            if (picked.getAttribute('data-ok') === '1') right++;
          });
          var s = card.querySelector('.ex-score');
          if (!s) { s = document.createElement('div'); s.className = 'ex-score'; card.appendChild(s); }
          var n = window.currentLang === 'en';
          s.innerHTML = n
            ? '✅ Your correct answers:<b>' + right + '</b> out of ' + scored
            + (noAns ? ' — <span style="color:var(--dim);font-weight:400">with ' + noAns + ' question(s) you still haven\'t answered</span>' : '')
            : '✅ إجاباتك الصحيحة: <b>' + right + '</b> من ' + scored
            + (noAns ? ' — <span style="color:var(--dim);font-weight:400">مع ' + noAns + ' سؤال لسه ما جاوبت عليه</span>' : '');
        });
      });
      document.querySelectorAll('[data-hide]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.card'); if (!card) return;
          card.querySelectorAll('.ex-answer').forEach(function (a) { a.classList.remove('show'); });
          card.querySelectorAll('.ex-opt').forEach(function (o) { o.classList.remove('correct', 'wrong'); });
          var s = card.querySelector('.ex-score'); if (s) s.remove();
        });
      });
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
            fb.classList.add('show');
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

    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'update', 'run', 'practice', 'recap'];;;;;;;;;;;
    window.addEventListener('keydown', function (e) {
      if (e.target.matches('input,textarea')) return;
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
    var PNone = { t:'none' };
    function PNum(v, f) { return { t:f ? 'float' : 'int', v: v }; }
    function PStr(v) { return { t:'str', v: String(v) }; }
    function PBool(v) { return { t:'bool', v: !!v }; }
    function PType(n) { return { t:'type', name: n }; }
    function isNum(x) { return x.t === 'int' || x.t === 'float'; }
    function pstr(x) {
      if (x.t === 'int') return String(x.v);
      if (x.t === 'float') { return Number.isInteger(x.v) ? x.v + '.0' : String(x.v); }
      if (x.t === 'str') return x.v;
      if (x.t === 'bool') return x.v ? 'True' : 'False';
      if (x.t === 'none') return 'None';
      if (x.t === 'type') return "<class '" + x.name + "'>";
      if (x.t === 'list') return '[' + x.v.map(function (e) { return e.t === 'str' ? "'" + e.v + "'" : pstr(e); }).join(', ') + ']';
      return '';
    }
    function ptype(x) { return x.t === 'int' ? 'int' : x.t === 'float' ? 'float' : x.t === 'str' ? 'str' : x.t === 'bool' ? 'bool' : x.t === 'none' ? 'NoneType' : x.t === 'list' ? 'list' : 'object'; }
    function truthy(x) { if (x.t === 'bool') return x.v; if (isNum(x)) return x.v !== 0; if (x.t === 'str') return x.v.length > 0; if (x.t === 'list') return x.v.length > 0; return false; }
    function pErr(msg) { var e = new Error(msg); e.msg = msg; return e; }

    function pyEscape(ch) { if (ch === 'n') return '\n'; if (ch === 't') return '\t'; if (ch === '\\') return '\\'; return ch; }
    function pyTokenize(code) {
      var toks = [], i = 0, n = code.length;
      while (i < n) {
        var c = code[i];
        if (/\s/.test(c)) { i++; continue; }
        if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(code[i + 1] || ''))) {
          var m = /^(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?/.exec(code.slice(i));
          var num = parseFloat(m[0]);
          toks.push({ k:'num', v: num, f: /[.eE]/.test(m[0]) }); i += m[0].length; continue;
        }
        if (c === 'f' && (code[i + 1] === '"' || code[i + 1] === "'")) {
          var q2 = code[i + 1], k = i + 2, s2 = '';
          while (k < n && code[k] !== q2) { if (code[k] === '\\' && k + 1 < n) { s2 += pyEscape(code[k + 1]); k += 2; } else { s2 += code[k]; k++; } }
          toks.push({ k:'fstr', v: s2 }); i = k + 1; continue;
        }
        if (c === '"' || c === "'") {
          var q = c, j = i + 1, s = '';
          while (j < n && code[j] !== q) { if (code[j] === '\\' && j + 1 < n) { s += pyEscape(code[j + 1]); j += 2; } else { s += code[j]; j++; } }
          toks.push({ k:'str', v: s }); i = j + 1; continue;
        }
        if (/[A-Za-z_]/.test(c)) {
          var m2 = /^[A-Za-z_][A-Za-z0-9_]*/.exec(code.slice(i));
          toks.push({ k:'id', v: m2[0] }); i += m2[0].length; continue;
        }
        var two = code.slice(i, i + 2);
        if (two === '//' || two === '**' || two === '>=' || two === '<=' || two === '==') { toks.push({ k:'op', v: two }); i += 2; continue; }
        if (c === '!') { toks.push({ k:'op', v: '!=' }); i += 2; continue; }
        if ('+-*/%()[].,:<>='.indexOf(c) >= 0) { toks.push({ k:'op', v: c }); i++; continue; }
        toks.push({ k:'op', v: c }); i++;
      }
      toks.push({ k:'eof', v: '' }); return toks;
    }

    function pyParse(code, env, out) {
      var toks = pyTokenize(code), i = 0;
      function peek() { return toks[i]; }
      function next() { return toks[i++]; }
      function binPrec(t) {
        if (t.k === 'id') { if (t.v === 'or') return 1; if (t.v === 'and') return 2; return null; }
        if (t.k === 'op') { var m = { '==': 4, '!=': 4, '<': 4, '>': 4, '<=': 4, '>=': 4, '+': 5, '-': 5, '*': 6, '/': 6, '//': 6, '%': 6, '**': 7 }; return m[t.v] !== undefined ? m[t.v] : null; }
        return null;
      }
      function parseFStr(raw) {
        var s = '', depth = 0, sub = '';
        for (var j = 0; j < raw.length; j++) {
          var c = raw[j];
          if (c === '{' && depth === 0) { depth = 1; sub = ''; continue; }
          if (depth > 0) {
            if (c === '{') depth++;
            else if (c === '}') { depth--; if (depth === 0) { var v = pyParse(sub, env, out).parseAll(); s += pstr(v); continue; } }
            sub += c; continue;
          }
          s += c;
        }
        return PStr(s);
      }
      function call(fn, args) {
        if (fn.k === 'fn') {
          var name = fn.name;
          if (name in __funcs) {
            var fdef = __funcs[name];
            var local = {};
            for (var p = 0; p < fdef.params.length; p++) local[fdef.params[p]] = args[p] !== undefined ? args[p] : PNone;
            var rr2 = __execStatements(fdef.body, local, out);
            return rr2.__isReturn ? rr2.value:PNone;
          }
          if (name === 'print') {
            var sep = ' ', end = '\n', vals = [];
            for (var a = 0; a < args.length; a++) {
              if (args[a].k === 'kw') { if (args[a].n === 'sep') sep = pstr(args[a].v); else if (args[a].n === 'end') end = pstr(args[a].v); }
              else vals.push(args[a]);
            }
            out.buf += vals.map(pstr).join(sep) + end; return PNone;
          }
          if (name === 'input') { var iv = out.inQ.length ? out.inQ.shift() : ''; return PStr(iv); }
          if (name === 'int') {
            var x = args[0];
            if (x.t === 'int') return x;
            if (x.t === 'float') return PNum(Math.trunc(x.v));
            if (x.t === 'bool') return PNum(x.v ? 1:0);
            if (x.t === 'str') { var s = x.v.trim(); if (/^[+-]?\d+$/.test(s)) return PNum(parseInt(s, 10)); if (/^[+-]?(\d+\.\d*|\.\d+|\d+)([eE][+-]?\d+)?$/.test(s)) return PNum(parseInt(parseFloat(s), 10)); throw pErr("ValueError:invalid literal"); }
            throw pErr("TypeError:int() argument must be a string or a number");
          }
          if (name === 'float') {
            var y = args[0];
            if (y.t === 'float') return y;
            if (y.t === 'int') return PNum(y.v, true);
            if (y.t === 'bool') return PNum(y.v ? 1:0, true);
            if (y.t === 'str') { var s2 = y.v.trim(); if (/^[+-]?(\d+\.\d*|\.\d+|\d+)([eE][+-]?\d+)?$/.test(s2)) return PNum(parseFloat(s2), true); throw pErr("ValueError:could not convert string to float: '" + y.v + "'"); }
            throw pErr("TypeError:float() argument must be a string or a number");
          }
          if (name === 'str') return PStr(pstr(args[0]));
          if (name === 'bool') return PBool(truthy(args[0]));
          if (name === 'len') { if (args[0].t === 'str') return PNum(args[0].v.length); if (args[0].t === 'list') return PNum(args[0].v.length); throw pErr("TypeError:object of type '" + ptype(args[0]) + "' has no len()"); }
          if (name === 'round') { var rv = args[0].v, nd = args.length > 1 ? args[1].v:null; var r = nd === null ? Math.round(rv) : Math.round(rv * Math.pow(10, nd)) / Math.pow(10, nd); return PNum(r, nd !== null); }
          if (name === 'type') return PType(ptype(args[0]));
          if (name === 'range') {
            var r0, r1, r2;
            if (args.length === 1) { r0 = 0; r1 = args[0].v; r2 = 1; }
            else { r0 = args[0].v; r1 = args[1].v; r2 = args.length > 2 ? args[2].v:1; }
            if (r2 === 0) throw pErr("ValueError:range() arg 3 must not be zero");
            var items = [];
            if (r2 > 0) { for (var vv = r0; vv < r1; vv += r2) items.push(PNum(vv)); }
            else { for (var ww = r0; ww > r1; ww += r2) items.push(PNum(ww)); }
            return { t:'list', v: items };
          }
          throw pErr("NameError:name '" + name + "' is not defined");
        }
        throw pErr("TypeError:'" + ptype(fn) + "' object is not callable");
      }
      function normIdx(v, len) { var i = v.v; return i < 0 ? i + len:i; }
      function index(x, a, b, hasColon) {
        if (x.t !== 'str' && x.t !== 'list') throw pErr("TypeError:'" + ptype(x) + "' object is not subscriptable");
        var s = x.v;
        if (hasColon) {
          if (x.t === 'list') throw pErr("TypeError:list indices must be integers or slices, not 'slice'");
          var st = a === null ? 0:normIdx(a, s.length), en = b === null ? s.length : normIdx(b, s.length);
          st = Math.max(0, Math.min(st, s.length)); en = Math.max(0, Math.min(en, s.length));
          return PStr(s.slice(st, en));
        }
        var idx = normIdx(a, s.length);
        if (idx < 0 || idx >= s.length) throw pErr("IndexError:list index out of range");
        return x.t === 'list' ? s[idx] : PStr(s[idx]);
      }
      function method(x, m, args) {
        if (x.t === 'list') {
          if (m === 'append') { if (!args.length) throw pErr("TypeError:append() takes exactly one argument (0 given)"); x.v.push(args[0]); return PNone; }
          if (m === 'pop') { var pi = args.length ? args[0].v:x.v.length - 1; if (pi < 0 || pi >= x.v.length) throw pErr("IndexError:pop index out of range"); return x.v.splice(pi, 1)[0]; }
          throw pErr("AttributeError:'list' object has no attribute '" + m + "'");
        }
        if (x.t !== 'str') throw pErr("AttributeError:'" + ptype(x) + "' object has no attribute '" + m + "'");
        if (m === 'upper') return PStr(x.v.toUpperCase());
        if (m === 'lower') return PStr(x.v.toLowerCase());
        if (m === 'count') { var sub = args.length ? pstr(args[0]) : ''; return PNum(x.v.split(sub).length - 1); }
        throw pErr("AttributeError:'str' object has no attribute '" + m + "'");
      }
      function parseList() {
        var items = [];
        if (peek().v !== ']') {
          for (;;) { items.push(parseExpr2(0)); if (peek().v !== ',') break; next(); }
        }
        if (peek().v === ']') next();
        return { t:'list', v: items };
      }
      function parsePrimary() {
        var t = next();
        if (t.k === 'num') return PNum(t.v, t.f);
        if (t.k === 'str') return PStr(t.v);
        if (t.k === 'fstr') return parseFStr(t.v);
        if (t.k === 'id') {
          if (t.v === 'True') return PBool(true);
          if (t.v === 'False') return PBool(false);
          if (t.v === 'None') return PNone;
          if (t.v in env) return env[t.v];
          var nt = peek();
          if (nt.k === 'op' && nt.v === '(') return { k:'fn', name: t.v };
          throw pErr("NameError:name '" + t.v + "' is not defined");
        }
        if (t.k === 'op' && t.v === '(') { var e = parseExpr2(0); if (peek().v === ')') next(); return e; }
        if (t.k === 'op' && t.v === '[') return parseList();
        var tk = (t.k === 'op' ? t.v:t.v);
        throw pErr("SyntaxError:unexpected token" + (tk ? (" '" + tk + "'") : " in the expression"));
      }
      function parsePostfix(x) {
        for (; ;) {
          var t = peek();
          if (t.k === 'op' && t.v === '(') {
            next(); var args = [];
            while (peek().v !== ')') {
              if (peek().k === 'id' && toks[i + 1] && toks[i + 1].k === 'op' && toks[i + 1].v === '=') { var kn = next().v; next(); args.push({ k:'kw', n: kn, v: parseExpr2(0) }); }
              else args.push(parseExpr2(0));
              if (peek().v === ',') next();
            }
            if (peek().v === ')') next();
            return call(x, args);
          }
          if (t.k === 'op' && t.v === '[') {
            next(); var a = null, b = null, hasColon = false;
            if (peek().v === ':') { next(); hasColon = true; if (peek().v !== ']') b = parseExpr2(0); }
            else { a = parseExpr2(0); if (peek().v === ':') { next(); hasColon = true; if (peek().v !== ']') b = parseExpr2(0); } }
            if (peek().v === ']') next();
            x = index(x, a, b, hasColon); continue;
          }
          if (t.k === 'op' && t.v === '.') {
            next(); var m = next();
            var args2 = [];
            if (peek().v === '(') {
              next();
              while (peek().v !== ')') {
                if (peek().k === 'id' && toks[i + 1] && toks[i + 1].k === 'op' && toks[i + 1].v === '=') { var kn2 = next().v; next(); args2.push({ k:'kw', n: kn2, v: parseExpr2(0) }); }
                else args2.push(parseExpr2(0));
                if (peek().v === ',') next();
              }
              if (peek().v === ')') next();
            }
            return parsePostfix(method(x, m.v, args2));
          }
          break;
        }
        return x;
      }
      function parsePrefix() {
        var t = peek();
        if (t.k === 'id' && t.v === 'not') { next(); return PBool(!truthy(parseExpr2(3))); }
        if (t.k === 'op' && t.v === '-') {
          next(); var v = parseExpr2(7);
          if (isNum(v)) return PNum(-v.v, v.t === 'float');
          if (v.t === 'bool') return PNum(v.v ? 1:0);
          throw pErr("TypeError:bad operand type for unary -: '" + ptype(v) + "'");
        }
        return parsePostfix(parsePrimary());
      }
      function binOp(t, a, b) {
        var op = t.k === 'id' ? t.v:t.v;
        if (op === 'and') return truthy(a) ? b:a;
        if (op === 'or') return truthy(a) ? a:b;
        if (op === '==' || op === '!=') {
          var eq = false;
          if (isNum(a) && isNum(b)) eq = a.v === b.v;
          else if (a.t === 'str' && b.t === 'str') eq = a.v === b.v;
          else if (a.t === 'bool' && b.t === 'bool') eq = a.v === b.v;
          else if (a.t === 'none' && b.t === 'none') eq = true;
          return PBool(op === '==' ? eq:!eq);
        }
        if (op === '<' || op === '>' || op === '<=' || op === '>=') { var r = op === '<' ? a.v < b.v:op === '>' ? a.v > b.v : op === '<=' ? a.v <= b.v : a.v >= b.v; return PBool(r); }
        if (op === '+') {
          if (a.t === 'str' && b.t === 'str') return PStr(a.v + b.v);
          if (a.t === 'str' || b.t === 'str') throw pErr("TypeError:can only concatenate str (not '" + ptype(isNum(a) ? b : a) + "') to str");
          return PNum(a.v + b.v, a.t === 'float' || b.t === 'float');
        }
        if (op === '*' && a.t === 'str' && b.t === 'int') return PStr(a.v.repeat(b.v));
        if (op === '*' && a.t === 'int' && b.t === 'str') return PStr(b.v.repeat(a.v));
        if (!isNum(a) || !isNum(b)) throw pErr("TypeError:unsupported operand type(s) for " + op + ": '" + ptype(a) + "' and '" + ptype(b) + "'");
        var x = a.v, y = b.v, fl = a.t === 'float' || b.t === 'float';
        if (op === '-') return PNum(x - y, fl);
        if (op === '*') return PNum(x * y, fl);
        if (op === '/') { if (y === 0) throw pErr("ZeroDivisionError:division by zero"); return PNum(x / y, true); }
        if (op === '//') { if (y === 0) throw pErr("ZeroDivisionError:integer division or modulo by zero"); return PNum(Math.floor(x / y), fl); }
        if (op === '%') { if (y === 0) throw pErr("ZeroDivisionError:integer division or modulo by zero"); return PNum(x % y, fl); }
        if (op === '**') return PNum(Math.pow(x, y), fl);
        throw pErr("SyntaxError:unknown operator " + op);
      }
      function parseExpr2(minPrec) {
        var left = parsePrefix();
        for (; ;) {
          var t = peek();
          var prec = binPrec(t);
          if (prec === null || prec < minPrec) break;
          next();
          var right = parseExprRight(prec, t);
          left = binOp(t, left, right);
        }
        return left;
      }
      function parseExprRight(prec, t) {
        var isPow = (t.k === 'op' && t.v === '**');
        return parseExpr2(isPow ? prec:prec + 1);
      }
      function parseExpr() { return { parseAll:function () { var v = parseExpr2(0); if (peek().k !== 'eof') throw pErr("SyntaxError:trailing tokens in expression"); return v; }, parseResult:function () { var v = parseExpr2(0); if (peek().k !== 'eof') throw pErr("SyntaxError:trailing tokens in expression"); return v; } }; }
      return parseExpr();
    }

    function pyStripComment(line) { var inStr = null; for (var i = 0; i < line.length; i++) { var c = line[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '#') return line.slice(0, i); } return line; }
    function pyTopColon(s) { var depth = 0, inStr = null; for (var i = 0; i < s.length; i++) { var c = s[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '(' || c === '[') depth++; if (c === ')' || c === ']') depth--; if (c === ':' && depth === 0) return i; } return -1; }
    function pyTopEq(s) { var depth = 0, inStr = null; for (var i = 0; i < s.length; i++) { var c = s[i]; if (inStr) { if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; continue; } if (c === '(' || c === '[') depth++; if (c === ')' || c === ']') depth--; if (c === '=' && depth === 0) { var pr = s[i - 1], nx = s[i + 1]; if (pr === '=' || pr === '>' || pr === '<' || pr === '!' || nx === '=') continue; return i; } } return -1; }
    function pySplitStmts(code) { var out = [], depth = 0, inStr = null, cur = ''; for (var i = 0; i < code.length; i++) { var c = code[i]; if (inStr) { cur += c; if (c === inStr) inStr = null; continue; } if (c === '"' || c === "'") { inStr = c; cur += c; continue; } if (c === '(' || c === '[') { depth++; cur += c; continue; } if (c === ')' || c === ']') { depth--; cur += c; continue; } if (c === ';' && depth === 0) { out.push(cur); cur = ''; continue; } cur += c; } if (cur.trim() !== '') out.push(cur); return out; }

    var __funcs = {}, __curLine = 0;
    function __execStatements(arr, env, out) {
      var ret = { __isReturn:false, value: null };
      var i = 0;
      while (i < arr.length) {
        var ln = arr[i];
        __curLine = ln.line;
        if (/^(if|elif|else)\b/.test(ln.code)) {
          var bi = ln.indent, clauses = [];
          while (i < arr.length) {
            var cur = arr[i];
            var cm = /^(if|elif|else)\b/.exec(cur.code);
            if (!cm || cur.indent !== bi) break;
            var colonIdx = pyTopColon(cur.code);
            var condSrc = cm[1] === 'else' ? '' : cur.code.slice(cm[0].length, colonIdx).trim();
            var tail = colonIdx >= 0 ? cur.code.slice(colonIdx + 1).trim() : '';
            var body = [];
            if (tail) body.push({ indent:bi + 1, code: tail, line: cur.line });
            var j = i + 1;
            while (j < arr.length && arr[j].indent > bi) { body.push(arr[j]); j++; }
            clauses.push({ kw:cm[1], cond: condSrc, body: body });
            i = j;
            var nl = arr[i];
            if (!(nl && /^(elif|else)\b/.test(nl.code) && nl.indent === bi)) break;
          }
          var matched = false;
          for (var c = 0; c < clauses.length; c++) {
            var cl = clauses[c];
            var runIt;
            if (cl.kw === 'else') runIt = !matched;
            else { runIt = !matched && truthy(pyParse(cl.cond, env, out).parseResult()); if (runIt) matched = true; }
            if (runIt) { var rr = __execStatements(cl.body, env, out); if (rr.__isReturn) return rr; }
          }
        } else if (/^for\b/.test(ln.code)) {
          var fm = /^for\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\s+(.+)$/.exec(ln.code.replace(/\s*:\s*$/, ''));
          var body2 = [];
          var j2 = i + 1;
          while (j2 < arr.length && arr[j2].indent > ln.indent) { body2.push(arr[j2]); j2++; }
          var iter = pyParse(fm[2], env, out).parseResult();
          var vals2;
          if (iter.t === 'list') vals2 = iter.v;
          else if (iter.t === 'str') vals2 = iter.v.split('');
          else throw pErr("TypeError:'" + ptype(iter) + "' object is not iterable");
          for (var k = 0; k < vals2.length; k++) { env[fm[1]] = vals2[k]; var r2 = __execStatements(body2, env, out); if (r2.__isReturn) return r2; }
          i = j2;
        } else if (/^def\b/.test(ln.code)) {
          var dm = /^def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*:/.exec(ln.code);
          var params = (dm[2] || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
          var fbody = [];
          var j3 = i + 1;
          while (j3 < arr.length && arr[j3].indent > ln.indent) { fbody.push(arr[j3]); j3++; }
          __funcs[dm[1]] = { params:params, body: fbody };
          i = j3;
        } else if (/^return\b/.test(ln.code)) {
          var rv = ln.code.replace(/^return\b/, '').trim();
          return { __isReturn:true, value: rv === '' ? PNone : pyParse(rv, env, out).parseResult() };
        } else {
          pySplitStmts(ln.code).forEach(function (st) {
            var eq = pyTopEq(st);
            if (eq > 0) {
              var name = st.slice(0, eq).trim();
              var rhs = st.slice(eq + 1).trim();
              if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) { env[name] = pyParse(rhs, env, out).parseResult(); return; }
            }
            pyParse(st, env, out).parseResult();
          });
          i++;
        }
      }
      return ret;
    }
    function pyRun(src, inputs, seeds) {
      var env = {}, curLine = 0;
      for (var s in seeds) env[s] = PStr(seeds[s]);
      var out = { buf:'', inQ: (inputs || []).slice() };
      __curLine = 0;
      __funcs = {};
      try {
        var raw = src.split('\n'), lines = [], pending = '';
        for (var r = 0; r < raw.length; r++) {
          var line = raw[r].replace(/\r$/, '');
          var stripped = pyStripComment(line);
          var indentMatch = /^[ \t]*/.exec(line)[0];
          var indent = indentMatch.replace(/\t/g, '    ').length;
          if (/\\\s*$/.test(stripped)) { pending += stripped.replace(/\\\s*$/, '').replace(/^[ \t]*/, '') + ' '; continue; }
          var code = (pending + stripped).trim(); pending = '';
          if (code === '') continue;
          lines.push({ indent:indent, code: code, line: r + 1 });
        }
        if (pending.trim() !== '') lines.push({ indent:0, code: pending.trim(), line: raw.length });
        __execStatements(lines, env, out);
        var text = out.buf;
        if (text.slice(-1) === '\n') text = text.slice(0, -1);
        return { out:(text === '' ? [] : text.split('\n')), err: null };
      } catch (e) {
        var msg = e && e.msg ? e.msg:String(e && e.message || e);
        return { out:[], err: { line: __curLine, msg: msg } };
      }
    }
    window.pyRun = pyRun;

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

    /* ---------- web playground runner (HTML/CSS) ---------- */
    function wireWebPanels() {
      document.querySelectorAll('.web-panel').forEach(function (panel) {
        var edit = panel.querySelector('.web-edit');
        if (!edit) return;
        if (!edit.getAttribute('data-src')) edit.setAttribute('data-src', edit.value);
        var frame = panel.querySelector('.web-frame');
        var errBox = panel.querySelector('.py-err');
        function grow() { edit.style.height = 'auto'; edit.style.height = (edit.scrollHeight + 2) + 'px'; }
        edit.addEventListener('input', grow);
        function runIt() {
          errBox.innerHTML = ''; errBox.style.display = 'none';
          try {
            frame.srcdoc = edit.value;
            frame.style.display = 'block';
          } catch (er) {
            errBox.textContent = er.message;
            errBox.style.display = 'block';
          }
        }
        var ctl = panel.querySelector('.py-ctl');
        if (ctl) {
          var run = null, reset = null;
          ctl.querySelectorAll('button').forEach(function (b) {
            if (/إعادة|تصفير/.test(b.textContent)) reset = b;
            else if (!run) run = b;
          });
          if (run) run.addEventListener('click', runIt);
          if (reset) reset.addEventListener('click', function () { edit.value = edit.getAttribute('data-src'); grow(); runIt(); });
        }
        grow();
      });
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
      wireWebPanels();
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

    /* ---------- glossary ---------- */
    (function () {
      var search = document.getElementById('glossarySearch');
      if (!search) return; /* 'glossarySearch' removed by design - skip safely */
      if (!search) return;
      var filters = document.querySelectorAll('.gl-filter');
      var terms = Array.prototype.slice.call(document.querySelectorAll('.gl-term'));
      var activeFilter = 'all';

      function applyFilters() {
        var q = search.value.trim().toLowerCase();
        terms.forEach(function (t) {
          var catOk = activeFilter === 'all' || t.getAttribute('data-cat') === activeFilter;
          var textOk = !q || (t.textContent.toLowerCase().indexOf(q) !== -1);
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
  
