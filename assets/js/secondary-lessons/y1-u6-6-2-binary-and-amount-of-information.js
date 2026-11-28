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
      var secs = ['intro', 'bit', 'byte', 'decimal', 'binary', 'convert', 'practice', 'recap', 'glossary'];
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
    var SECTIONS = ['intro', 'bit', 'byte', 'decimal', 'binary', 'convert', 'practice', 'recap', 'glossary'];
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
      bit:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'sw', x: 60, y: 140, w: 180, h: 120 },
          { k:'bitcell', x: 360, y: 140, w: 180, h: 120 },
          { k:'info', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ s: { x: 240, y: 200 }, b1:{ x: 360, y: 200 }, b2:{ x: 540, y: 200 }, i:{ x: 660, y: 200 } },
        wires:[
          { from: 's', to: 'b1', k: 'w1' },
          { from:'b2', to: 'i', k: 'w2' }
        ],
        steps:[
          { arT: '1. الحالة (The state)', enT: '1. The State', arD: 'أي حاجة في الكمبيوتر ليها حالتين بس — لمبة شغالة أو مطفية، كهرباء موجودة أو مفيش. مفيش حالة تالتة.', enD: 'Everything in the computer has only two states — a bulb on or off, electricity present or absent. There is no third state.', icon: '🔘', boxes: ['sw'], nodes: ['s'], wires: [] },
          { arT:'2. البت (The bit)', enT: '2. The Bit', arD: 'كل حالة بنمثلها برقم واحد: 0 أو 1. الرقم ده هو البت — أصغر وحدة معلومات في الكمبيوتر.', enD: 'We represent each state with one digit: 0 or 1. That digit is the bit — the smallest unit of information in a computer.', icon: '🔢', boxes: ['bitcell'], nodes: ['b1'], wires: ['w1'] },
          { arT:'3. عدد الاحتمالات (The possibilities)', enT: '3. The Possibilities', arD: 'بشكل عام، n بتات بتمثل 2 أس n احتمال. بت واحد = 2 احتمالات، بتتين = 4، و3 بتات = 8.', enD: 'In general, n bits represent 2 to the power of n possibilities. 1 bit = 2, 2 bits = 4, and 3 bits = 8.', icon: '📈', boxes: ['info'], nodes: ['i'], wires: ['w2'] }
        ]
      },
      byte:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'bits8', x: 60, y: 140, w: 180, h: 120 },
          { k:'bytecell', x: 360, y: 140, w: 180, h: 120 },
          { k:'units', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ b: { x: 240, y: 200 }, y1:{ x: 360, y: 200 }, y2:{ x: 540, y: 200 }, u:{ x: 660, y: 200 } },
        wires:[
          { from: 'b', to: 'y1', k: 'w1' },
          { from:'y2', to: 'u', k: 'w2' }
        ],
        steps:[
          { arT: '1. 8 بتات (8 bits)', enT: '1. 8 Bits', arD: 'البت الواحد صغير جداً، فبنجمع 8 بتات مع بعض عشان نحصل على وحدة أكبر وأسهل في الاستخدام.', enD: 'One bit is very small, so we grou bits together to get a larger, easier-to-use unit.', icon: '🔢', boxes: ['bits8'], nodes: ['b'], wires: [] },
          { arT:'2. البايت (The byte)', enT: '2. The Byte', arD: 'المجموعة من 8 بتات اسمها بايت واحد، وبنرمز لها بالرمز 1 B. البايت بيمثل 256 احتمال لأن 2 أس 8 = 256.', enD: 'A group of 8 bits is called one byte, written as 1 B. The byte represents 256 possibilities because 2^8 = 256.', icon: '📦', boxes: ['bytecell'], nodes: ['y1'], wires: ['w1'] },
          { arT:'3. الوحدات (The units)', enT: '3. The Units', arD: 'الوحدات بتكبر كل 2 أس 10 = 1024 مرة: 1 كيلوبايت = 1024 بايت، و1 ميجابايت = 1024 كيلوبايت، وهكذا لحد التيرابايت.', enD: 'The units grow by 2^10 = 1024 each time: 1 KB = 1024 B, 1 MB = 1024 KB, and so on up to the terabyte.', icon: '📊', boxes: ['units'], nodes: ['u'], wires: ['w2'] }
        ]
      },
      decimal:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'daily', x: 60, y: 140, w: 180, h: 120 },
          { k:'ten', x: 360, y: 140, w: 180, h: 120 },
          { k:'value', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ d: { x: 240, y: 200 }, t1:{ x: 360, y: 200 }, t2:{ x: 540, y: 200 }, v:{ x: 660, y: 200 } },
        wires:[
          { from: 'd', to: 't1', k: 'w1' },
          { from:'t2', to: 'v', k: 'w2' }
        ],
        steps:[
          { arT: '1. أرقامنا اليومية (Our daily numbers)', enT: '1. Our Daily Numbers', arD: 'كل الأرقام اللي بنستخدمها كل يوم — سعر، عمر، رقم تليفون — دي أرقام عشرية.', enD: 'All the numbers we use every day — prices, ages, phone numbers — are decimal numbers.', icon: '🔟', boxes: ['daily'], nodes: ['d'], wires: [] },
          { arT:'2. عشرة أرقام (Ten digits)', enT: '2. Ten Digits', arD: 'النظام العشري بيستخدم عشرة أرقام من 0 لـ 9. عشان كده اسمه عشري — أساسه الرقم 10.', enD: 'The decimal system uses ten digits from 0 to 9. That is why it is called decimal — it is based on 10.', icon: '🔢', boxes: ['ten'], nodes: ['t1'], wires: ['w1'] },
          { arT:'3. المنازل (Place values)', enT: '3. Place Values', arD: 'قيمة الرقم بتتحدد بمكانه: آحاد، ثم عشرات، ثم مئات — وكل منزلة = 10 أضعاف اللي قبلها.', enD: 'A digit\'s value is set by its place: units, then tens, then hundreds — each place = 10 times the previous one.', icon: '📏', boxes: ['value'], nodes: ['v'], wires: ['w2'] }
        ]
      },
      binary:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'two', x: 60, y: 140, w: 180, h: 120 },
          { k:'sys', x: 360, y: 140, w: 180, h: 120 },
          { k:'sub', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ t: { x: 240, y: 200 }, s1:{ x: 360, y: 200 }, s2:{ x: 540, y: 200 }, su:{ x: 660, y: 200 } },
        wires:[
          { from: 't', to: 's1', k: 'w1' },
          { from:'s2', to: 'su', k: 'w2' }
        ],
        steps:[
          { arT: '1. الرقمين 0 و1 (The digits 0 and 1)', enT: '1. The Digits 0 and 1', arD: 'النظام الثنائي بيستخدم رقمين بس: 0 و1. الرقم 1 يعني في كهرباء، والرقم 0 يعني مفيش كهرباء.', enD: 'The binary system uses only two digits: 0 and 1. The digit 1 means electricity, and 0 means no electricity.', icon: '⚡', boxes: ['two'], nodes: ['t'], wires: [] },
          { arT:'2. نظام الكمبيوتر (The computer\'s system)', enT: '2. The Computer\'s System', arD: 'الكمبيوتر بيفهم النظام الثنائي بس — لأن دوائره الإلكترونية ليها حالتين فقط: في كهرباء أو مفيش.', enD: 'The computer only understands the binary system — because its electronic circuits have only two states: electricity or no electricity.', icon: '💻', boxes: ['sys'], nodes: ['s1'], wires: ['w1'] },
          { arT:'3. علامة (2) (The subscript (2))', enT: '3. The Subscript (2)', arD: 'عشان نفرّق الرقم الثنائي عن العشري، بنكتب علامة (2) تحت الرقم من ناحية اليمين — مثل 1011(2).', enD: 'To distinguish a binary number from a decimal one, we write a subscript (2) at the bottom right — like 1011(2).', icon: '📝', boxes: ['sub'], nodes: ['su'], wires: ['w2'] }
        ]
      },
      convert:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'bin', x: 60, y: 140, w: 180, h: 120 },
          { k:'weights', x: 360, y: 140, w: 180, h: 120 },
          { k:'sum', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ b: { x: 240, y: 200 }, w1:{ x: 360, y: 200 }, w2:{ x: 540, y: 200 }, s:{ x: 660, y: 200 } },
        wires:[
          { from: 'b', to: 'w1', k: 'w1' },
          { from:'w2', to: 's', k: 'w2' }
        ],
        steps:[
          { arT: '1. الرقم الثنائي (The binary number)', enT: '1. The Binary Number', arD: 'بنبدأ برقم ثنائي زي 1011(2) — عايزين نحوّله لرقم عشري يفهمه أي حد.', enD: 'We start with a binary number like 1011(2) — we want to convert it into a decimal number anyone can read.', icon: '🔢', boxes: ['bin'], nodes: ['b'], wires: [] },
          { arT:'2. الأوزان (The weights)', enT: '2. The Weights', arD: 'من أقصى اليمين، بنضرب كل خانة في 1 ثم 2 ثم 4 ثم 8 ثم 16 ... بالترتيب.', enD: 'From the rightmost digit, we multiply each digit by 1, then 2, then 4, then 8, then 16 ... in order.', icon: '✖️', boxes: ['weights'], nodes: ['w1'], wires: ['w1'] },
          { arT:'3. الجمع (The sum)', enT: '3. The Sum', arD: 'بعدين نجمع النتائج كلها فنجد إن 1011(2) = 1 + 2 + 0 + 8 = 11.', enD: 'Then we add all the results and find that 1011(2) = 1 + 2 + 0 + 8 = 11.', icon: '➕', boxes: ['sum'], nodes: ['s'], wires: ['w2'] }
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
  
