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
      var secs = ['intro', 'software', 'system', 'os', 'application', 'driver', 'practice', 'recap'];
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
    var SECTIONS = ['intro', 'software', 'system', 'os', 'application', 'driver', 'practice', 'recap'];
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
      software:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'hw', x: 60, y: 140, w: 180, h: 120 },
          { k:'sw', x: 360, y: 140, w: 180, h: 120 },
          { k:'run', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. العتاد Hardware', enT: '1. The Hardware', arD: 'هو الأجهزة زي وحدة الكمبيوتر الرئيسية والأجهزة الطرفية — من أمثلته الـ CPU والذاكرة والتخزين.', enD: 'It is the devices such as the main computer unit and peripheral devices — examples include the CPU, memory, and storage.', icon: '🖥️', boxes: ['hw'], nodes: ['a'], wires: [] },
          { arT:'2. البرمجيات Software', enT: '2. The Software', arD: 'هي البرامج والبيانات اللي بتشتغل على العتاد — وبدونها مش هيحصل أي شغل.', enD: 'It is the programs and data that operate on the hardware — without it nothing happens.', icon: '💻', boxes: ['sw'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. الجهاز بيشتغل', enT: '3. The Device Works', arD: 'لما العتاد والبرمجيات يجتمعوا، الكمبيوتر بيشتغل ويؤدي المهام اللي عايزينها.', enD: 'When hardware and software come together, the computer works and performs the tasks we want.', icon: '⚡', boxes: ['run'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      system:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'ssw', x: 60, y: 140, w: 180, h: 120 },
          { k:'sos', x: 360, y: 140, w: 180, h: 120 },
          { k:'shw', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ e: { x: 240, y: 200 }, f:{ x: 360, y: 200 }, g:{ x: 540, y: 200 }, h:{ x: 660, y: 200 } },
        wires:[
          { from: 'e', to: 'f', k: 'w1' },
          { from:'g', to: 'h', k: 'w2' }
        ],
        steps:[
          { arT: '1. برمجيات النظام', enT: '1. System Software', arD: 'هي البرمجيات اللي بنحتاجها عشان العتاد يشتغل — من غيرها الجهاز مش هيقدر يفتح.', enD: 'It is the software we need for the hardware to work — without it the device cannot turn on.', icon: '🧰', boxes: ['ssw'], nodes: ['e'], wires: [] },
          { arT:'2. نظام التشغيل OS', enT: '2. The Operating System OS', arD: 'هو نوع من برمجيات النظام مسؤول عن الوظائف الأساسية للكمبيوتر.', enD: 'It is a type of system software responsible for the basic functions of a computer.', icon: '🪟', boxes: ['sos'], nodes: ['f'], wires: ['w1'] },
          { arT:'3. العتاد بيشتغل', enT: '3. The Hardware Runs', arD: 'برمجيات النظام هي اللي بتشغّل العتاد وتخليه يشتغل بشكل صحيح.', enD: 'System software is what runs the hardware and makes it work correctly.', icon: '🔌', boxes: ['shw'], nodes: ['h'], wires: ['w2'] }
        ]
      },
      os:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'task', x: 60, y: 140, w: 180, h: 120 },
          { k:'mem', x: 360, y: 140, w: 180, h: 120 },
          { k:'file', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ i: { x: 240, y: 200 }, j:{ x: 360, y: 200 }, k:{ x: 540, y: 200 }, l:{ x: 660, y: 200 } },
        wires:[
          { from: 'i', to: 'j', k: 'w1' },
          { from:'k', to: 'l', k: 'w2' }
        ],
        steps:[
          { arT: '1. إدارة المهام', enT: '1. Task Management', arD: 'نظام التشغيل بيدير المهام اللي شغالة على الجهاز.', enD: 'The OS manages the tasks running on the device.', icon: '📋', boxes: ['task'], nodes: ['i'], wires: [] },
          { arT:'2. إدارة الذاكرة', enT: '2. Memory Management', arD: 'بيدير الذاكرة ويعرف يوزّعها بين البرامج اللي شغالة.', enD: 'It manages the memory and allocates it among running programs.', icon: '🧠', boxes: ['mem'], nodes: ['j'], wires: ['w1'] },
          { arT:'3. إدارة الملفات', enT: '3. File Management', arD: 'بيدير الملفات والمستندات — حفظ وفتح وترتيب.', enD: 'It manages files and documents — saving, opening, and organizing.', icon: '🗂️', boxes: ['file'], nodes: ['l'], wires: ['w2'] }
        ]
      },
      application:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'sos', x: 60, y: 140, w: 180, h: 120 },
          { k:'app', x: 360, y: 140, w: 180, h: 120 },
          { k:'use', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ m: { x: 240, y: 200 }, n:{ x: 360, y: 200 }, o:{ x: 540, y: 200 }, p:{ x: 660, y: 200 } },
        wires:[
          { from: 'm', to: 'n', k: 'w1' },
          { from:'o', to: 'p', k: 'w2' }
        ],
        steps:[
          { arT: '1. برمجيات النظام ونظام التشغيل', enT: '1. System Software and the OS', arD: 'دي هي الأساس اللي فوقه كل البرمجيات التانية بتشتغل.', enD: 'This is the foundation that all other software runs on top of.', icon: '🪟', boxes: ['sos'], nodes: ['m'], wires: [] },
          { arT:'2. برمجيات التطبيقات', enT: '2. Application Software', arD: 'هي برمجيات بتشتغل فوق برمجيات النظام — وبتساعدنا نعمل مهام محددة.', enD: 'It is software that operates on top of system software — helping us perform specific tasks.', icon: '📊', boxes: ['app'], nodes: ['n'], wires: ['w1'] },
          { arT:'3. المستخدم بيستخدمها', enT: '3. The User Uses Them', arD: 'المستخدم بيستخدم برمجيات التطبيقات لأداء مهام زي الكتابة والجداول الإلكترونية.', enD: 'The user uses application software to do tasks like writing and spreadsheets.', icon: '👨‍💻', boxes: ['use'], nodes: ['p'], wires: ['w2'] }
        ]
      },
      driver:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'dev', x: 60, y: 140, w: 180, h: 120 },
          { k:'drv', x: 360, y: 140, w: 180, h: 120 },
          { k:'soft', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ q: { x: 240, y: 200 }, r:{ x: 360, y: 200 }, s:{ x: 540, y: 200 }, t:{ x: 660, y: 200 } },
        wires:[
          { from: 'q', to: 'r', k: 'w1' },
          { from:'s', to: 't', k: 'w2' }
        ],
        steps:[
          { arT: '1. جهاز متصل', enT: '1. A Connected Device', arD: 'عندنا جهاز زي طابعة أو كيبورد متصل بالكمبيوتر.', enD: 'We have a device like a printer or keyboard connected to the computer.', icon: '🖨️', boxes: ['dev'], nodes: ['q'], wires: [] },
          { arT:'2. برنامج التحكم driver', enT: '2. The Device Driver', arD: 'هو برنامج بيسيطر على التواصل بين الجهاز المتصل والبرمجيات على الكمبيوتر.', enD: 'It is a program that controls communication between the connected device and the software on the computer.', icon: '🔧', boxes: ['drv'], nodes: ['r'], wires: ['w1'] },
          { arT:'3. البرمجيات على الكمبيوتر', enT: '3. The Software on the Computer', arD: 'برنامج التحكم بيخلّي الجهاز والبرمجيات يفهموا بعض ويشتغلوا معاً.', enD: 'The driver makes the device and the software understand each other and work together.', icon: '💻', boxes: ['soft'], nodes: ['t'], wires: ['w2'] }
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
  
