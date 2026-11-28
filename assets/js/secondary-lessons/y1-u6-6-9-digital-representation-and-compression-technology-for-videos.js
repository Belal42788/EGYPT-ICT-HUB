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
      var secs = ['intro', 'video', 'amount', 'compress', 'loss', 'practice', 'recap'];
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
    var SECTIONS = ['intro', 'video', 'amount', 'compress', 'loss', 'practice', 'recap'];
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
      video:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'still', x: 60, y: 140, w: 180, h: 120 },
          { k:'seq', x: 360, y: 140, w: 180, h: 120 },
          { k:'move', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. سلسلة صور ثابتة (still images)', enT: '1. A Series of Still Images', arD: 'الفيديو بيتكون من صور ثابتة اسمها Frames — كل واحدة منها صورة لوحدها.', enD: 'A video is made of still images called Frames — each one is an image on its own.', icon: '🖼️', boxes: ['still'], nodes: ['a'], wires: [] },
          { arT:'2. بتتعرض متتابعة بسرعة (in succession)', enT: '2. Displayed in Succession Quickly', arD: 'الصور بتتعرض ورا بعض بسرعة كبيرة جداً — أسرع من ما العين تلحق تلاحظ.', enD: 'The images are displayed one after another very quickly — faster than the eye can notice.', icon: '⏩', boxes: ['seq'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. استمرار الرؤية → وهم الحركة (illusion of movement)', enT: '3. Afterimage → Illusion of Movement', arD: 'ظاهرة استمرار الرؤية بتخلي العين تشوف الحركة — مع إن الصور نفسها مش بتتحرك.', enD: 'The afterimage phenomenon makes the eye see movement — even though the images themselves do not move.', icon: '👁️', boxes: ['move'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      calc:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'frame', x: 60, y: 140, w: 180, h: 120 },
          { k:'mul', x: 360, y: 140, w: 180, h: 120 },
          { k:'total', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ e: { x: 240, y: 200 }, f:{ x: 360, y: 200 }, g:{ x: 540, y: 200 }, h:{ x: 660, y: 200 } },
        wires:[
          { from: 'e', to: 'f', k: 'w1' },
          { from:'g', to: 'h', k: 'w2' }
        ],
        steps:[
          { arT: '1. حجم الفريم الواحد (one frame)', enT: '1. One Frame', arD: '500 × 200 × 24 = 2,400,000 بت ÷ 8 = 300,000 بايت.', enD: '500 × 200 × 24 = 2,400,000 bits ÷ 8 = 300,000 bytes.', icon: '🖼️', boxes: ['frame'], nodes: ['e'], wires: [] },
          { arT:'2. نضرب في معدل الإطارات والزمن (× fps × time)', enT: '2. Multiply by Frame Rate and Time', arD: '300,000 × 30 fps × 10 ثواني = 90,000,000 بايت.', enD: '300,000 × 30 fps × 10 seconds = 90,000,000 bytes.', icon: '✖️', boxes: ['mul'], nodes: ['f'], wires: ['w1'] },
          { arT:'3. الناتج بالـ MB (the result in MB)', enT: '3. The Result in MB', arD: '90,000,000 ÷ 1000 ÷ 1000 = 90 MB.', enD: '90,000,000 ÷ 1000 ÷ 1000 = 90 MB.', icon: '📦', boxes: ['total'], nodes: ['h'], wires: ['w2'] }
        ]
      },
      compress:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'orig', x: 60, y: 140, w: 180, h: 120 },
          { k:'comp', x: 360, y: 140, w: 180, h: 120 },
          { k:'ratio', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ i: { x: 240, y: 200 }, j:{ x: 360, y: 200 }, k:{ x: 540, y: 200 }, l:{ x: 660, y: 200 } },
        wires:[
          { from: 'i', to: 'j', k: 'w1' },
          { from:'k', to: 'l', k: 'w2' }
        ],
        steps:[
          { arT: '1. البيانات الأصلية (original data)', enT: '1. The Original Data', arD: 'عندنا ملف حجمه 90 MB — ده الحجم الأصلي قبل أي ضغط.', enD: 'We have a file of 90 MB — that is the original size before any compression.', icon: '📦', boxes: ['orig'], nodes: ['i'], wires: [] },
          { arT:'2. بعد الضغط (after compression)', enT: '2. After Compression', arD: 'بنضغط البيانات فبقت 30 MB — مع الحفاظ على محتوى البيانات.', enD: 'We compress the data so it becomes 30 MB — while preserving the content.', icon: '🗜️', boxes: ['comp'], nodes: ['j'], wires: ['w1'] },
          { arT:'3. نسبة الضغط (compression ratio)', enT: '3. The Compression Ratio', arD: 'نسبة الضغط = 30 ÷ 90 × 100 = 33.3% ≈ 33%.', enD: 'The compression ratio = 30 ÷ 90 × 100 = 33.3% ≈ 33%.', icon: '📊', boxes: ['ratio'], nodes: ['l'], wires: ['w2'] }
        ]
      },
      loss:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'lossless', x: 60, y: 140, w: 180, h: 120 },
          { k:'lossy', x: 360, y: 140, w: 180, h: 120 },
          { k:'rle', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ m: { x: 240, y: 200 }, n:{ x: 360, y: 200 }, o:{ x: 540, y: 200 }, p:{ x: 660, y: 200 } },
        wires:[
          { from: 'm', to: 'n', k: 'w1' },
          { from:'o', to: 'p', k: 'w2' }
        ],
        steps:[
          { arT: '1. Lossless — استعادة كاملة (full restoration)', enT: '1. Lossless — Full Restoration', arD: 'بيسترجع البيانات الأصلية كاملة بالظبط — وبيستخدم مع النصوص وبيانات البرامج.', enD: 'It restores the original data completely — used with text and program data.', icon: '🔁', boxes: ['lossless'], nodes: ['m'], wires: [] },
          { arT:'2. Lossy — من غير استعادة كاملة (no full restoration)', enT: '2. Lossy — No Full Restoration', arD: 'مش بيسترجع البيانات كاملة — وبيستخدم مع الصوت والصور والفيديو اللي الإنسان مش بيلاحظ فرقها.', enD: 'It does not restore the data fully — used with audio, images, and video where humans do not notice the difference.', icon: '🌫️', boxes: ['lossy'], nodes: ['n'], wires: ['w1'] },
          { arT:'3. Run-length encoding (طريقة Lossless)', enT: '3. Run-length Encoding (a Lossless Method)', arD: 'بيستبدل تسلسل الرموز المتكررة برقم: AAAAA → A5. مثال: AAAAABBAAAABBBBBBBBAAAAAA → A5B2A4B8A6 ونسبة ضغط 40%.', enD: 'It replaces repeated symbol sequences with a number: AAAAA → A5. Example: AAAAABBAAAABBBBBBBBAAAAAA → A5B2A4B8A6 with a 40% ratio.', icon: '🔢', boxes: ['rle'], nodes: ['p'], wires: ['w2'] }
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
  
