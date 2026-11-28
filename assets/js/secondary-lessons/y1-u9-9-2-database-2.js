    'use strict';
    var lang = localStorage.getItem('langPreference') || 'ar';
    var currentLang = lang;

    function L() {
      return currentLang;
    }

    function tr(ar, en) {
      return currentLang === 'en' ? en:ar;
    }

    function byId(id) {
      return document.querySelector('[data-id="' + id + '"]') || document.getElementById(id);
    }

    /* ---------- particles ---------- */
    (function () {
      var box = document.getElementById('particles');
      if (!box) return; /* 'particles' removed by design - skip safely */
      if (!box) return;
      var frag = document.createDocumentFragment();
      for (var i = 0; i < 28; i++) {
        var s = document.createElement('i');
        s.style.left = (Math.random() * 100) + 'vw';
        s.style.animationDuration = (14 + Math.random() * 14) + 's';
        s.style.animationDelay = (Math.random() * 12) + 's';
        s.style.width = s.style.height = (2 + Math.random() * 4) + 'px';
        if (Math.random() > .65) s.style.background = 'var(--accent)';
        frag.appendChild(s);
      }
      box.appendChild(frag);
    })();

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
      var secs = ['intro', 'rdb', 'table', 'sql', 'ops', 'practice', 'recap'];
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
    function wireReveal() {
      var els = document.querySelectorAll('.section-inner');
      if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('visible'); }); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
        });
      }, { threshold:.08 });
      els.forEach(function (e) { io.observe(e); });
    }

    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'rdb', 'table', 'sql', 'ops', 'practice', 'recap'];
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
      rdb:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'rdbdef', x: 60, y: 140, w: 180, h: 120 },
          { k:'rdbparts', x: 360, y: 140, w: 180, h: 120 },
          { k:'rdbrel', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. التعريف', enT: '1. The Definition', arD: 'بيانات منظمة ومدارة عبر جداول متعددة.', enD: 'Data organized and managed across multiple tables.', icon: '📊', boxes: ['rdbdef'], nodes: ['a'], wires: [] },
          { arT:'2. الأجزاء', enT: '2. The Parts', arD: 'صفوف تسمى سجلات وأعمدة تسمى حقول.', enD: 'Rows called records and columns called fields.', icon: '📋', boxes: ['rdbparts'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. العلاقات', enT: '3. The Relationships', arD: 'بتحذف البيانات المكررة وتخلي التعامل بسلامة.', enD: 'They eliminate duplicate data and ensure integrity.', icon: '🔗', boxes: ['rdbrel'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      table:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'tbdef', x: 60, y: 140, w: 180, h: 120 },
          { k:'tbrec', x: 360, y: 140, w: 180, h: 120 },
          { k:'tbcol', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. الجدول', enT: '1. The Table', arD: 'بيتكون من صفوف وأعمدة.', enD: 'It consists of rows and columns.', icon: '🗂️', boxes: ['tbdef'], nodes: ['a'], wires: [] },
          { arT:'2. الصف Row', enT: '2. The Row', arD: 'الصف بيحمل سجل Record كامل.', enD: 'A row holds a complete record.', icon: '↔️', boxes: ['tbrec'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. العمود Column', enT: '3. The Column', arD: 'العمود بيحمل حقل Field واحد.', enD: 'A column holds one field.', icon: '↕️', boxes: ['tbcol'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      sql:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'sqdef', x: 60, y: 140, w: 180, h: 120 },
          { k:'squse', x: 360, y: 140, w: 180, h: 120 },
          { k:'sqrdb', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. التعريف', enT: '1. The Definition', arD: 'لغة بتستخدم في القواعد العلائقية لتشغيل البيانات.', enD: 'A language used in relational databases to manipulate data.', icon: '💻', boxes: ['sqdef'], nodes: ['a'], wires: [] },
          { arT:'2. عملياتها', enT: '2. Its Operations', arD: 'تسجيل وإدخال واسترجاع وحذف البيانات.', enD: 'Register, insert, retrieve, and delete data.', icon: '📝', boxes: ['squse'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. استخدامها', enT: '3. Its Use', arD: 'بتستخدم مع قواعد البيانات العلائقية.', enD: 'Used with relational databases.', icon: '🔗', boxes: ['sqrdb'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      ops:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'opsel', x: 60, y: 140, w: 180, h: 120 },
          { k:'opproj', x: 360, y: 140, w: 180, h: 120 },
          { k:'opjoin', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. الاختيار Selection', enT: '1. Selection', arD: 'استخراج وعرض الصفوف اللي بتحقق شروط معينة.', enD: 'Extract and display only the rows meeting given conditions.', icon: '🔍', boxes: ['opsel'], nodes: ['a'], wires: [] },
          { arT:'2. الإسقاط Projection', enT: '2. Projection', arD: 'عرض أعمدة محددة فقط من الجدول.', enD: 'Displaying only certain columns from a table.', icon: '🎯', boxes: ['opproj'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. الدمج Join', enT: '3. Join', arD: 'ربط البيانات من جداول متعددة في جدول واحد.', enD: 'Linking data from multiple tables into a single table.', icon: '🔗', boxes: ['opjoin'], nodes: ['d'], wires: ['w2'] }
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
  
