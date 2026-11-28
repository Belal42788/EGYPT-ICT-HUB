    'use strict';
    var lang = localStorage.getItem('langPreference') || 'ar';
    var currentLang = lang;

    function L() {
      return currentLang;
    }

    function tr(ar, en) {
      return currentLang === 'en' ? en:ar;
    }


    /* ---------- particles ---------- */

    /* ---------- nav ---------- */
    var nav = document.getElementById('topnav');
    var scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', function () {
      /* header slide-in:assets/js/nav.js */
      if (window.scrollY > 500) scrollBtn.classList.add('show');
      else scrollBtn.classList.remove('show');
    }, { passive:true });
    if (scrollBtn) scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top:0, behavior: 'smooth' });
    });

    function wireNav() {
      var links = Array.prototype.slice.call(document.querySelectorAll('#navLinks a'));
      var secs = ['intro', 'hex', 'practice', 'recap'];
      if (!('IntersectionObserver' in window)) return;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var id = en.target.id;
            links.forEach(function (a) {
              a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
          }
        });
      }, { rootMargin:'-45% 0px -50% 0px' });
      secs.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }

    /* ---------- reveal on scroll ---------- */

    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'hex', 'practice', 'recap'];
    window.addEventListener('keydown', function (e) {
      if (e.target.matches('input,textarea')) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var cur = -1;
      for (var i = 0; i < SECTIONS.length; i++) {
        var el = document.getElementById(SECTIONS[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * .5) cur = i;
      }
      var n = cur + (e.key === 'ArrowLeft' ? -1:1);
      if (n >= 0 && n < SECTIONS.length) {
        document.getElementById(SECTIONS[n]).scrollIntoView({ behavior:'smooth' });
      }
    });

    /* ================= FLOW ENGINE (sender→receiver diagrams) ================= */
var FLOWS = {
      hexSys:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'digits', x: 60, y: 140, w: 180, h: 120 },
          { k:'letters', x: 360, y: 140, w: 180, h: 120 },
          { k:'sub', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ d: { x: 240, y: 200 }, l1:{ x: 360, y: 200 }, l2:{ x: 540, y: 200 }, s:{ x: 660, y: 200 } },
        wires:[
          { from: 'd', to: 'l1', k: 'w1' },
          { from:'l2', to: 's', k: 'w2' }
        ],
        steps:[
          { arT: '1. الأرقام من 0 لـ 9 (the digits 0 to 9)', enT: '1. The Digits 0 to 9', arD: 'النظام الستعشري بيبدأ بنفس الأرقام اللي بنعرفها: من 0 لـ 9، وبنستخدمها زي ما هي.', enD: 'The hexadecimal system starts with the same digits we know: from 0 to 9, and we use them as they are.', icon: '🔢', boxes: ['digits'], nodes: ['d'], wires: [] },
          { arT:'2. الحروف A لـ F (the letters A to F)', enT: '2. The Letters A to F', arD: 'ولما الأرقام تخلص (9)، بنكمل بالحروف: A = 10، B = 11، C = 12، D = 13، E = 14، F = 15.', enD: 'When the digits run out (9), we continue with letters: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.', icon: '🔤', boxes: ['letters'], nodes: ['l1'], wires: ['w1'] },
          { arT:'3. علامة (16) (the subscript (16))', enT: '3. The Subscript (16)', arD: 'عشان نفرّق الرقم الستعشري عن العشري، بنكتب علامة (16) تحت الرقم من ناحية اليمين.', enD: 'To distinguish a hexadecimal number from a decimal one, we write a subscript (16) at the bottom right of the number.', icon: '📝', boxes: ['sub'], nodes: ['s'], wires: ['w2'] }
        ]
      },
      bin2hex:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'bin', x: 60, y: 140, w: 180, h: 120 },
          { k:'groups', x: 360, y: 140, w: 180, h: 120 },
          { k:'hexOut', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ b: { x: 240, y: 200 }, g1:{ x: 360, y: 200 }, g2:{ x: 540, y: 200 }, h:{ x: 660, y: 200 } },
        wires:[
          { from: 'b', to: 'g1', k: 'w1' },
          { from:'g2', to: 'h', k: 'w2' }
        ],
        steps:[
          { arT: '1. الرقم الثنائي (the binary number)', enT: '1. The Binary Number', arD: 'بنبدأ برقم ثنائي زي 10011010(2) — عايزين نحوّله لستعشري.', enD: 'We start with a binary number like 10011010(2) — we want to convert it to hexadecimal.', icon: '🔢', boxes: ['bin'], nodes: ['b'], wires: [] },
          { arT:'2. فرّز لمجموعات من 4 (group into fours)', enT: '2. Group by Fours', arD: 'من أقصى يمين الرقم، بنقسّم الثنائي لمجموعات من 4 خانات: 1001/1010(2).', enD: 'From the rightmost digit, we split the binary number into groups of four: 1001/1010(2).', icon: '✂️', boxes: ['groups'], nodes: ['g1'], wires: ['w1'] },
          { arT:'3. النتيجة الستعشرية (the hex result)', enT: '3. The Hex Result', arD: 'كل مجموعة بتتحول لرقم ستعشري: 1001 = 9، و1010 = A، فـ 10011010(2) = 9A(16).', enD: 'Each group converts to a hex digit: 1001 = 9, and 1010 = A, so 10011010(2) = 9A(16).', icon: '⚡', boxes: ['hexOut'], nodes: ['h'], wires: ['w2'] }
        ]
      },
      hex2bin:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'hexNum', x: 60, y: 140, w: 180, h: 120 },
          { k:'digit4', x: 360, y: 140, w: 180, h: 120 },
          { k:'binOut', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ h: { x: 240, y: 200 }, d1:{ x: 360, y: 200 }, d2:{ x: 540, y: 200 }, b:{ x: 660, y: 200 } },
        wires:[
          { from: 'h', to: 'd1', k: 'w1' },
          { from:'d2', to: 'b', k: 'w2' }
        ],
        steps:[
          { arT: '1. الرقم الستعشري (the hex number)', enT: '1. The Hexadecimal Number', arD: 'بنبدأ برقم ستعشري زي A4(16) — عايزين نحوّله لثنائي.', enD: 'We start with a hex number like A4(16) — we want to convert it to binary.', icon: '🔤', boxes: ['hexNum'], nodes: ['h'], wires: [] },
          { arT:'2. كل رقم = 4 خانات (each digit = four bits)', enT: '2. Each Digit = Four Bits', arD: 'كل رقم ستعشري بيتحوّل لرقم ثنائي من 4 خانات: A = 1010، و4 = 0100.', enD: 'Each hex digit converts to a 4-bit binary number: A = 1010, and 4 = 0100.', icon: '🔢', boxes: ['digit4'], nodes: ['d1'], wires: ['w1'] },
          { arT:'3. النتيجة الثنائية (the binary result)', enT: '3. The Binary Result', arD: 'بنضم النتايج بالترتيب: A4(16) = 10100100(2).', enD: 'We join the results in order: A4(16) = 10100100(2).', icon: '🔗', boxes: ['binOut'], nodes: ['b'], wires: ['w2'] }
        ]
      },
      hex2dec:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'hexIn', x: 60, y: 140, w: 180, h: 120 },
          { k:'binMid', x: 360, y: 140, w: 180, h: 120 },
          { k:'decOut', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ h: { x: 240, y: 200 }, m1:{ x: 360, y: 200 }, m2:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'h', to: 'm1', k: 'w1' },
          { from:'m2', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. ستعشري → ثنائي (hex to binary)', enT: '1. Hexadecimal to Binary', arD: 'الأول بنحوّل الستعشري لثنائي: C = 1100، و6 = 0110، فـ C6(16) = 11000110(2).', enD: 'First we convert the hex to binary: C = 1100, and 6 = 0110, so C6(16) = 11000110(2).', icon: '🔄', boxes: ['hexIn'], nodes: ['h'], wires: [] },
          { arT:'2. ثنائي → عشري (binary to decimal)', enT: '2. Binary to Decimal', arD: 'بعدين بنحوّل الثنائي لعشري: من أقصى اليمين، كل خانة بتتضرب في 1 ثم 2 ثم 4 ثم 8 ثم 16...', enD: 'Then we convert the binary to decimal: from the rightmost bit, each digit is multiplied by 1, then 2, then 4, then 8, then 16...', icon: '✖️', boxes: ['binMid'], nodes: ['m1'], wires: ['w1'] },
          { arT:'3. النتيجة العشرية (the decimal result)', enT: '3. The Decimal Result', arD: 'نجمع النتايج: 0×1 + 1×2 + 1×4 + 0×8 + 0×16 + 0×32 + 1×64 + 1×128 = 198.', enD: 'We add the results: 0×1 + 1×2 + 1×4 + 0×8 + 0×16 + 0×32 + 1×64 + 1×128 = 198.', icon: '➕', boxes: ['decOut'], nodes: ['d'], wires: ['w2'] }
        ]
      }
    };

    var FLOW_STATE = {};
    document.querySelectorAll('.flow-card').forEach(function () {});

    function boxCenter(cfg, k) {
      for (var i = 0; i < cfg.boxes.length; i++) {
        if (cfg.boxes[i].k === k) {
          var b = cfg.boxes[i];
          return { x:b.x + b.w / 2, y: b.y + b.h / 2 };
        }
      }
      return { x:450, y: 200 };
    }

    function buildFlow(id) {
      var cfg = FLOWS[id];
      if (!cfg) return;
      var card = document.querySelector('.flow-card[data-id="' + id + '"]');
      if (!card) return;
      var svg = card.querySelector('.svg-main');
      var ns = 'http://www.w3.org/2000/svg';
      function mk(tag, attrs) {
        var e = document.createElementNS(ns, tag);
        for (var k in attrs) e.setAttribute(k, attrs[k]);
        return e;
      }
      svg.innerHTML = '';
      var gWires = mk('g', {}), gArrows = mk('g', {}), gBoxes = mk('g', {}), gPorts = mk('g', {});
      cfg.wires.forEach(function (w) {
        var a = cfg.nodes[w.from], b = cfg.nodes[w.to];
        gWires.appendChild(mk('line', { x1:a.x, y1: a.y, x2: b.x, y2: b.y, class: 'flow-wire', 'data-w': w.k }));
        var ang = Math.atan2(b.y - a.y, b.x - a.x);
        function arrow(tip) {
          var bx = tip.x - 12 * Math.cos(ang), by = tip.y - 12 * Math.sin(ang);
          return mk('polygon', {
            points:[tip.x, tip.y, bx + 7 * Math.cos(ang + 2.6), by + 7 * Math.sin(ang + 2.6), bx + 7 * Math.cos(ang - 2.6), by + 7 * Math.sin(ang - 2.6)].join(','),
            class: 'wire-arrow', 'data-w': w.k
          });
        }
        gArrows.appendChild(arrow(b));
        if (w.both) gArrows.appendChild(arrow(a));
      });
      cfg.boxes.forEach(function (b) {
        gBoxes.appendChild(mk('rect', { x:b.x, y: b.y, width: b.w, height: b.h, rx: 18, class: 'flow-box', 'data-b': b.k }));
      });
      Object.keys(cfg.nodes).forEach(function (k) {
        gPorts.appendChild(mk('circle', { cx:cfg.nodes[k].x, cy: cfg.nodes[k].y, r: 6, class: 'flow-port', 'data-p': k }));
      });
      svg.appendChild(gWires);
      svg.appendChild(gArrows);
      svg.appendChild(gBoxes);
      svg.appendChild(gPorts);

      card.querySelectorAll('.svg-label[data-fbox]').forEach(function (lab) {
        var k = lab.getAttribute('data-fbox');
        var c = boxCenter(cfg, k);
        lab.style.left = (c.x / 900 * 100) + '%';
        lab.style.top = (c.y / 400 * 100) + '%';
      });

      var stepsBox = card.querySelector('.flow-steps');
      stepsBox.innerHTML = '';
      cfg.steps.forEach(function (st, i) {
        var s = document.createElement('div');
        s.className = 'tl-step';
        s.innerHTML =
          '<div class="tl-icon emoji-pulse">' + st.icon + '</div>' +
          '<div class="tl-year-badge">' + (i + 1) + ' / ' + cfg.steps.length + '</div>' +
          '<div class="tl-title">' + st[L() + 'T'] + '</div>' +
          '<div class="tl-desc">' + st[L() + 'D'] + '</div>';
        stepsBox.appendChild(s);
      });
      FLOW_STATE[id] = FLOW_STATE[id] || { cur:0 };
      showFlowStep(id, FLOW_STATE[id].cur);
    }

    function showFlowStep(id, idx) {
      var cfg = FLOWS[id];
      var card = document.querySelector('.flow-card[data-id="' + id + '"]');
      if (!cfg || !card) return;
      var n = cfg.steps.length;
      if (idx < 0) idx = n - 1;
      if (idx >= n) idx = 0;
      FLOW_STATE[id].cur = idx;
      var st = cfg.steps[idx];
      card.querySelectorAll('.flow-step-active').forEach(function () { });
      card.querySelectorAll('.tl-step').forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      card.querySelectorAll('.flow-box').forEach(function (b) {
        b.classList.toggle('on', st.boxes.indexOf(b.getAttribute('data-b')) > -1);
      });
      card.querySelectorAll('.flow-port').forEach(function (p) {
        p.classList.toggle('on', st.nodes.indexOf(p.getAttribute('data-p')) > -1);
      });
      card.querySelectorAll('.flow-wire').forEach(function (w) {
        w.classList.toggle('on', st.wires.indexOf(w.getAttribute('data-w')) > -1);
      });
      card.querySelectorAll('.wire-arrow').forEach(function (a) {
        a.classList.toggle('on', st.wires.indexOf(a.getAttribute('data-w')) > -1);
      });
      var counter = document.getElementById(id + 'Counter');
      if (counter) counter.textContent = (idx + 1) + ' / ' + n;
    }

    function wireFlows() {
      Object.keys(FLOWS).forEach(function (id) {
        var prev = byId(id + 'Prev');
        var next = byId(id + 'Next');
        var replay = byId(id + 'Replay');
        if (prev) prev.addEventListener('click', function () { showFlowStep(id, FLOW_STATE[id].cur - 1); });
        if (next) next.addEventListener('click', function () { showFlowStep(id, FLOW_STATE[id].cur + 1); });
        if (replay) replay.addEventListener('click', function () { showFlowStep(id, 0); });
        buildFlow(id);
      });
    }

    /* ---------- exercises (self-work then reveal) ---------- */
    function normalizeExLabels() {
      document.querySelectorAll('.ex-opt').forEach(function (o) {
        if (o.querySelector('.ex-key')) return;
        var txt = o.textContent.replace(/\u00a0/g, ' ').trim();
        var m = /^([A-E])\s+([\s\S]*)$/.exec(txt);
        if (!m) return;
        o.textContent = '';
        var k = document.createElement('span');
        k.className = 'ex-key';
        k.textContent = m[1];
        var b = document.createElement('span');
        b.className = 'ex-body';
        b.textContent = m[2];
        o.appendChild(k);
        o.appendChild(b);
      });
    }

    function wireRevealBtns() {
      normalizeExLabels();
      document.querySelectorAll('.ex-opt').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var item = opt.closest('.ex-item');
          if (!item) return;
          if (item.hasAttribute('data-multi')) {
            opt.classList.toggle('picked');
            return;
          }
          item.querySelectorAll('.ex-opt').forEach(function (o) { o.classList.remove('picked'); });
          opt.classList.add('picked');
        });
      });
      document.querySelectorAll('[data-reveal]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.card');
          if (!card) return;
          card.querySelectorAll('.ex-item').forEach(function (item) {
            item.querySelectorAll('.ex-opt').forEach(function (o) {
              o.classList.remove('correct', 'wrong');
              if (o.getAttribute('data-ok')) o.classList.add('correct');
              else o.classList.add('wrong');
            });
          });
          card.querySelectorAll('.ex-answer').forEach(function (a) { a.classList.add('show'); });
          var scored = 0, right = 0;
          card.querySelectorAll('.ex-item').forEach(function (item) {
            var okOpts = item.querySelectorAll('.ex-opt[data-ok]');
            if (!okOpts.length) return;
            if (item.hasAttribute('data-multi')) {
              scored += okOpts.length;
              okOpts.forEach(function (o) {
                if (o.classList.contains('picked')) right++;
              });
              return;
            }
            scored++;
            var picked = item.querySelector('.ex-opt.picked');
            if (picked && okOpts[0] && picked === okOpts[0]) right++;
          });
          var s = card.querySelector('.ex-score');
          if (!s) {
            s = document.createElement('div');
            s.className = 'ex-score';
            card.appendChild(s);
          }
          var rawAr = '✅ إجاباتك الصحيحة:' + right + ' من ' + scored;
          var rawEn = '✅ Your correct answers:' + right + ' of ' + scored;
          s.dataset.rawAr = rawAr;
          s.dataset.rawEn = rawEn;
          s.textContent = tr(rawAr, rawEn);
        });
      });
      document.querySelectorAll('[data-hide]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var card = btn.closest('.card');
          if (!card) return;
          card.querySelectorAll('.ex-answer').forEach(function (a) { a.classList.remove('show'); });
          card.querySelectorAll('.ex-opt').forEach(function (o) { o.classList.remove('correct', 'wrong', 'picked'); });
          var s = card.querySelector('.ex-score');
          if (s) s.remove();
        });
      });
    }

    /* ---------- recall quiz ---------- */
    function rqFb(el) {
      return tr(el.getAttribute('data-fb-ar'), el.getAttribute('data-fb-en'));
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
              (correctKey ? (L() === 'en' ? 'The correct answer is ' + correctKey + '. ' : 'الإجابة الصحيحة ' + correctKey + '. ') : '') + text;
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

    /* ---------- language toggle ---------- */
    function setLang(l) {
      currentLang = l;
      document.documentElement.setAttribute('lang', l);
      document.documentElement.setAttribute('dir', l === 'en' ? 'ltr' : 'rtl');
      var btn = document.getElementById('langToggle');
      if (btn) btn.textContent = l === 'en' ? 'ع' : 'EN';
      document.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
        if (el.hasAttribute('data-lang-keep')) return;
        var val = (l === 'en') ? el.getAttribute('data-en') : el.getAttribute('data-ar');
        if (val !== null && val !== undefined) el.innerHTML = val;
      });
      Object.keys(FLOWS).forEach(function (id) { buildFlow(id); });
      normalizeExLabels();
      repaintScores();
      repaintQuizBtns();
      localStorage.setItem('langPreference', l);
    }

    function repaintScores() {
      document.querySelectorAll('.ex-score').forEach(function (s) {
        if (s.dataset.raw) s.textContent = tr(s.dataset.rawAr, s.dataset.rawEn);
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

    /* ---------- boot ---------- */
    document.addEventListener('DOMContentLoaded', function () {
      setLang(currentLang);
      wireNav();
      wireReveal();
      wireFlows();
      wireRevealBtns();
      wireRecall();
      byId('langToggle').addEventListener('click', function () {
        setLang(currentLang === 'ar' ? 'en' : 'ar');
      });
    });

    /* ---------- glossary ---------- */
  
