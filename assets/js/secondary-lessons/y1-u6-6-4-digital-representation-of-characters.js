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
      var secs = ['intro', 'charcode', 'codesys', 'encoding', 'corrupt', 'font', 'practice', 'recap'];
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
    var SECTIONS = ['intro', 'charcode', 'codesys', 'encoding', 'corrupt', 'font', 'practice', 'recap'];
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
      charcode:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'chr', x: 60, y: 140, w: 180, h: 120 },
          { k:'code', x: 360, y: 140, w: 180, h: 120 },
          { k:'uniq', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ c1: { x: 240, y: 200 }, c2:{ x: 360, y: 200 }, c3:{ x: 540, y: 200 }, u:{ x: 660, y: 200 } },
        wires:[
          { from: 'c1', to: 'c2', k: 'w1' },
          { from:'c3', to: 'u', k: 'w2' }
        ],
        steps:[
          { arT: '1. الحرف (the character)', enT: '1. The Character', arD: 'بناخد حرف من الحروف — زي M الكبير — وده اللي عايزين نمثّله في الكمبيوتر.', enD: 'We take a character — like the capital letter M — and that is what we want to represent in the computer.', icon: '🔠', boxes: ['chr'], nodes: ['c1'], wires: [] },
          { arT:'2. رقم مخصوص (a unique number)', enT: '2. A Unique Number', arD: 'كل حرف بياخد رقم ثنائي أو ستعشري مخصوص بيه: M كوده 01001101(2) = 4D(16).', enD: 'Every character gets its own binary or hexadecimal number: M has the code 01001101(2) = 4D(16).', icon: '🔢', boxes: ['code'], nodes: ['c2'], wires: ['w1'] },
          { arT:'3. نفس الكود لنفس الحرف (the same code for the same character)', enT: '3. The Same Code for the Same Character', arD: 'حرف M بيتم تمثيله بنفس الكود دايماً في نفس النظام — مهما كان البرنامج أو الجهاز.', enD: 'The letter M is always represented by the same code in the same system — no matter the program or device.', icon: '🔗', boxes: ['uniq'], nodes: ['u'], wires: ['w2'] }
        ]
      },
      charcodesys:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'chars', x: 60, y: 140, w: 180, h: 120 },
          { k:'rules', x: 360, y: 140, w: 180, h: 120 },
          { k:'systems', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ a: { x: 240, y: 200 }, b:{ x: 360, y: 200 }, c:{ x: 540, y: 200 }, d:{ x: 660, y: 200 } },
        wires:[
          { from: 'a', to: 'b', k: 'w1' },
          { from:'c', to: 'd', k: 'w2' }
        ],
        steps:[
          { arT: '1. الحروف والرموز (characters and symbols)', enT: '1. Characters and Symbols', arD: 'نظام كود الحرف بيشتغل على مجموعة الحروف والرموز — زي الحروف A لـ Z والأرقام من 0 لـ 9.', enD: 'The character code system works on a set of characters and symbols — like the letters A to Z and the digits 0 to 9.', icon: '🔤', boxes: ['chars'], nodes: ['a'], wires: [] },
          { arT:'2. قاعدة الإسناد (the mapping rule)', enT: '2. The Mapping Rule', arD: 'النظام بيحدد قاعدة بتخصص كود ثابت لكل حرف — نفس الحرف بياخد نفس الرقم دايماً.', enD: 'The system sets a rule that assigns a fixed code to each character — the same character always gets the same number.', icon: '⚖️', boxes: ['rules'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. أنظمة: ASCII و Unicode (systems: ASCII and Unicode)', enT: '3. Systems: ASCII and Unicode', arD: 'من الأنظمة المعروفة اللي بتطبّق القاعدة دي: ASCII code للحروف الإنجليزية، و Unicode لكل لغات العالم.', enD: 'Well-known systems that apply this rule include: ASCII code for English characters, and Unicode for all world languages.', icon: '🗂️', boxes: ['systems'], nodes: ['d'], wires: ['w2'] }
        ]
      },
      ascii:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'eng', x: 60, y: 140, w: 180, h: 120 },
          { k:'one', x: 360, y: 140, w: 180, h: 120 },
          { k:'limit', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ e: { x: 240, y: 200 }, f:{ x: 360, y: 200 }, g:{ x: 540, y: 200 }, h:{ x: 660, y: 200 } },
        wires:[
          { from: 'e', to: 'f', k: 'w1' },
          { from:'g', to: 'h', k: 'w2' }
        ],
        steps:[
          { arT: '1. حروف وأرقام ورموز (letters, digits and symbols)', enT: '1. Letters, Digits and Symbols', arD: 'ASCII code بيمثل الحروف الأبجدية الإنجليزية والأرقام والرموز ورموز التحكم.', enD: 'ASCII code represents English alphabetic letters, digits, symbols and control characters.', icon: '🔡', boxes: ['eng'], nodes: ['e'], wires: [] },
          { arT:'2. بياخد 1 بايت (takes 1 byte)', enT: '2. Takes 1 Byte', arD: 'كل حرف ASCII بياخد 1 بايت (8 بتات) — وبكده بيقدر يمثل 256 نوع حرف في المبدأ.', enD: 'Each ASCII character takes 1 byte (8 bits) — so it can represent 256 character types in principle.', icon: '💾', boxes: ['one'], nodes: ['f'], wires: ['w1'] },
          { arT:'3. مفيش حروف لغات تانية (no other language characters)', enT: '3. No Other Language Characters', arD: 'الحد هنا: ASCII مافيهوش حروف اللغات التانية زي العربية — عشان كده ظهر Unicode.', enD: 'The limit here: ASCII has no characters of other languages like Arabic — that is why Unicode appeared.', icon: '🚫', boxes: ['limit'], nodes: ['h'], wires: ['w2'] }
        ]
      },
      unicode:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'world', x: 60, y: 140, w: 180, h: 120 },
          { k:'merge', x: 360, y: 140, w: 180, h: 120 },
          { k:'utf', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ i: { x: 240, y: 200 }, j:{ x: 360, y: 200 }, k:{ x: 540, y: 200 }, l:{ x: 660, y: 200 } },
        wires:[
          { from: 'i', to: 'j', k: 'w1' },
          { from:'k', to: 'l', k: 'w2' }
        ],
        steps:[
          { arT: '1. لغات العالم كلها (all world languages)', enT: '1. All World Languages', arD: 'Unicode بيجمع حروف لغات العالم كلها — العربية والإنجليزية واليابانية وغيرها.', enD: 'Unicode consolidates the characters of all world languages — Arabic, English, Japanese and more.', icon: '🌍', boxes: ['world'], nodes: ['i'], wires: [] },
          { arT:'2. نظام واحد موحد (one unified system)', enT: '2. One Unified System', arD: 'كل حرف من أي لغة ليه كود واحد موحّد — فبيقدروا يتعاملوا مع بعض في نفس الوقت.', enD: 'Every character from any language has one unified code — so they can all work together at the same time.', icon: '🤝', boxes: ['merge'], nodes: ['j'], wires: ['w1'] },
          { arT:'3. UTF-8 و UTF-16 (UTF-8 and UTF-16)', enT: '3. UTF-8 and UTF-16', arD: 'بسبب اختلافات إسناد الأكواد في اختلافات تطبيق زي UTF-8 و UTF-16.', enD: 'Due to differences in code assignment there are implementation variants like UTF-8 and UTF-16.', icon: '🧩', boxes: ['utf'], nodes: ['l'], wires: ['w2'] }
        ]
      },
      encoding:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'str', x: 60, y: 140, w: 180, h: 120 },
          { k:'each', x: 360, y: 140, w: 180, h: 120 },
          { k:'hex', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ m: { x: 240, y: 200 }, n:{ x: 360, y: 200 }, o:{ x: 540, y: 200 }, p:{ x: 660, y: 200 } },
        wires:[
          { from: 'm', to: 'n', k: 'w1' },
          { from:'o', to: 'p', k: 'w2' }
        ],
        steps:[
          { arT: '1. كلمة Hello (the word Hello)', enT: '1. The Word Hello', arD: 'الترميز بيمثل النص باستخدام أكواد الحروف — بناخد كلمة Hello كمثال.', enD: 'Encoding represents a string using character codes — we take the word Hello as an example.', icon: '📝', boxes: ['str'], nodes: ['m'], wires: [] },
          { arT:'2. كود كل حرف (the code of each character)', enT: '2. The Code of Each Character', arD: 'كل حرف ليه كود: H = 48، e = 65، l = 6C، l = 6C، o = 6F.', enD: 'Each character has a code: H = 48, e = 65, l = 6C, l = 6C, o = 6F.', icon: '🔢', boxes: ['each'], nodes: ['n'], wires: ['w1'] },
          { arT:'3. 48 65 6C 6C 6F (the combined hex code)', enT: '3. The Combined Hex Code', arD: 'بنضم الأكواد بالترتيب: كلمة Hello بتتكتب ستعشري 48656C6C6F(16).', enD: 'We join the codes in order: the word Hello is written in hex as 48656C6C6F(16).', icon: '🔗', boxes: ['hex'], nodes: ['p'], wires: ['w2'] }
        ]
      },
      corrupt:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'orig', x: 60, y: 140, w: 180, h: 120 },
          { k:'mismatch', x: 360, y: 140, w: 180, h: 120 },
          { k:'garb', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ q: { x: 240, y: 200 }, r:{ x: 360, y: 200 }, s:{ x: 540, y: 200 }, t:{ x: 660, y: 200 } },
        wires:[
          { from: 'q', to: 'r', k: 'w1' },
          { from:'s', to: 't', k: 'w2' }
        ],
        steps:[
          { arT: '1. النص الأصلي (the original text)', enT: '1. The Original Text', arD: 'عندنا نص اترمّز بنظام معين — يعني اتحوّل لأكواد بطريقة معينة.', enD: 'We have a text that was encoded with a certain system — it was turned into codes in a specific way.', icon: '📄', boxes: ['orig'], nodes: ['q'], wires: [] },
          { arT:'2. فك بطريقة مختلفة (decoding with a different method)', enT: '2. Decoding with a Different Method', arD: 'نفس الأكواد اتفتح بنظام مختلف عن اللي اترمّزت بيه — هنا بيحصل عدم التطابق.', enD: 'The same codes were decoded with a system different from the one used to encode — here the mismatch happens.', icon: '⚠️', boxes: ['mismatch'], nodes: ['r'], wires: ['w1'] },
          { arT:'3. حروف غريبة (strange characters)', enT: '3. Strange Characters', arD: 'النتيجة: حروف ورموز مبعثرة مالها معنى — دي ظاهرة فساد الحروف.', enD: 'The result: scattered characters and symbols with no meaning — that is the character corruption phenomenon.', icon: '💥', boxes: ['garb'], nodes: ['t'], wires: ['w2'] }
        ]
      },
      font:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'code', x: 60, y: 140, w: 180, h: 120 },
          { k:'shape', x: 360, y: 140, w: 180, h: 120 },
          { k:'fonts', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ u: { x: 240, y: 200 }, v:{ x: 360, y: 200 }, w:{ x: 540, y: 200 }, x:{ x: 660, y: 200 } },
        wires:[
          { from: 'u', to: 'v', k: 'w1' },
          { from:'w', to: 'x', k: 'w2' }
        ],
        steps:[
          { arT: '1. كود الحرف (the character code)', enT: '1. The Character Code', arD: 'عشان الحرف يظهر محتاجين كوده الأول — مثلاً حرف A كوده 41(16) = 01000001(2).', enD: 'To display a character we first need its code — for example the letter A has the code 41(16) = 01000001(2).', icon: '🔢', boxes: ['code'], nodes: ['u'], wires: [] },
          { arT:'2. بيانات الشكل (shape data)', enT: '2. Shape Data', arD: 'الكود بيقول «اكتب حرف A»، والخط بيقول «أكتبه بشكل إيه» — عريض ولا رفيع ولا زخرفي.', enD: 'The code says "write the letter A", and the font says "in what shape" — bold, thin or decorative.', icon: '🎨', boxes: ['shape'], nodes: ['v'], wires: ['w1'] },
          { arT:'3. Sans-serif · Serif (the font types)', enT: '3. Sans-serif · Serif', arD: 'من أنواع الخطوط: Sans-serif و Serif و Semi-cursive — وكلها بتغير شكل الحرف نفسه.', enD: 'Font types include Sans-serif, Serif and Semi-cursive — and they all change the shape of the same character.', icon: '✒️', boxes: ['fonts'], nodes: ['x'], wires: ['w2'] }
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
  
