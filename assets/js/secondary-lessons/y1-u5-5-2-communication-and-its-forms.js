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
      var secs = ['intro', 'comm', 'o2o', 'o2m', 'm2o', 'm2m', 'classify', 'practice', 'recap', 'glossary'];
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
    var SECTIONS = ['intro', 'comm', 'o2o', 'o2m', 'm2o', 'm2m', 'classify', 'practice', 'recap', 'glossary'];
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
      comm:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'sender', x: 60, y: 140, w: 180, h: 120 },
          { k:'channel', x: 360, y: 140, w: 180, h: 120 },
          { k:'receiver', x: 660, y: 140, w: 180, h: 120 }
        ],
        nodes:{ s: { x: 240, y: 200 }, c1:{ x: 360, y: 200 }, c2:{ x: 540, y: 200 }, r:{ x: 660, y: 200 } },
        wires:[
          { from: 's', to: 'c1', k: 'w1' },
          { from:'c2', to: 'r', k: 'w2' }
        ],
        steps:[
          { arT: '1. المرسل (Sender)', enT: '1. The Sender', arD: 'شخص عنده معلومة أو فكرة عايز يوصلها لشخص تاني — ده هو المرسل، وده نقطة بداية أي عملية اتصال.', enD: 'A person has information or an idea they want to get across to someone else — that is the sender, the starting point of any communication.', icon: '👤', boxes: ['sender'], nodes: ['s'], wires: [] },
          { arT:'2. القناة (Channel)', enT: '2. The Channel', arD: 'المعلومة بتنتقل عبر وسيلة اتصال — صوت في الهوا، نص على ورق، إشارة عبر الإنترنت — ده اللي بنسميه القناة.', enD: 'The information travels through a communication medium — sound in the air, text on paper, a signal over the internet — this is what we call the channel.', icon: '📡', boxes: ['channel'], nodes: ['c1', 'c2'], wires: ['w1'] },
          { arT:'3. المستقبل (Receiver)', enT: '3. The Receiver', arD: 'الشخص التاني بيستقبل المعلومة ويفهمها — من غير مستقبل مفيش اتصال، فالاستقبال جزء أساسي زي الإرسال.', enD: 'The other person receives the information and understands it — without a receiver there is no communication, so receiving is as essential as sending.', icon: '👂', boxes: ['receiver'], nodes: ['r'], wires: ['w2'] },
          { arT:'4. التبادل (Exchange)', enT: '4. The Exchange', arD: 'الأدوار ممكن تنعكس — المرسل يبقى مستقبل والمستقبل يبعت — عشان كده بنقول الاتصال عملية استقبال وتبادل معلومات.', enD: 'The roles can flip — the sender becomes a receiver and the receiver sends back — that is why we call communication the process of receiving and exchanging information.', icon: '🔄', boxes: ['sender', 'receiver'], nodes: ['s', 'r'], wires: ['w1', 'w2'] }
        ]
      },
      o2o:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'a', x: 100, y: 140, w: 200, h: 120 },
          { k:'b', x: 600, y: 140, w: 200, h: 120 }
        ],
        nodes:{ a: { x: 300, y: 200 }, b:{ x: 600, y: 200 } },
        wires:[{ from: 'a', to: 'b', k: 'w1', both: true }],
        steps:[
          { arT: '1. مرسل واحد (One sender)', enT: '1. One Sender', arD: 'شخص واحد بيبعت المعلومة — في النوع ده المرسل واحد، مفيش حد تاني بيبعت في نفس الوقت من جهة واحدة.', enD: 'One person sends the information — in this type the sender is one, nobody else is sending at the same time from one side.', icon: '👤', boxes: ['a'], nodes: ['a'], wires: ['w1'] },
          { arT:'2. مستقبل واحد (One receiver)', enT: '2. One Receiver', arD: 'المعلومة بتوصل لشخص واحد بس — مش لعدد كبير، ده اللي بيفرق النوع ده عن البث الجماهيري.', enD: 'The information reaches only one person — not a large number, which is what distinguishes this type from mass broadcasting.', icon: '👂', boxes: ['b'], nodes: ['b'], wires: ['w1'] },
          { arT:'3. تبادل ثنائي (Two-way)', enT: '3. Two-Way Exchange', arD: 'الاتنين بيتبادلوا — كل واحد مرسل ومستقبل في نفس الوقت. أمثلة: خطابات، مكالمات تليفون.', enD: 'Both exchange — each one is a sender and a receiver at the same time. Examples: letters, phone calls.', icon: '🔄', boxes: ['a', 'b'], nodes: ['a', 'b'], wires: ['w1'] }
        ]
      },
      o2m:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'sender', x: 60, y: 140, w: 180, h: 120 },
          { k:'r1', x: 640, y: 30, w: 200, h: 60 },
          { k:'r2', x: 640, y: 170, w: 200, h: 60 },
          { k:'r3', x: 640, y: 310, w: 200, h: 60 }
        ],
        nodes:{ s: { x: 240, y: 200 }, r1:{ x: 640, y: 60 }, r2:{ x: 640, y: 200 }, r3:{ x: 640, y: 340 } },
        wires:[
          { from: 's', to: 'r1', k: 'w1' },
          { from:'s', to: 'r2', k: 'w2' },
          { from:'s', to: 'r3', k: 'w3' }
        ],
        steps:[
          { arT: '1. مرسل واحد (One sender)', enT: '1. One Sender', arD: 'مرسل واحد بيجهّز المعلومة — محطة، ناشر، أو موقع — وده اللي بيحدد الرسالة.', enD: 'One sender prepares the information — a station, a publisher, or a site — and it is the one deciding the message.', icon: '🏢', boxes: ['sender'], nodes: ['s'], wires: [] },
          { arT:'2. التوزيع (Distribution)', enT: '2. Distribution', arD: 'الرسالة بتتوزع على عدد كبير من المستقبلين في نفس الوقت — مفيش مخاطبة فردية هنا، الكل بياخد نفس النسخة.', enD: 'The message is distributed to a large number of receivers at the same time — no individual addressing here, everyone gets the same copy.', icon: '📡', boxes: [], nodes: ['r1', 'r2', 'r3'], wires: ['w1', 'w2', 'w3'] },
          { arT:'3. مستقبلين كتير (Many receivers)', enT: '3. Many Receivers', arD: 'عدد كبير من المستقبلين بياخدوا المعلومة — جرايد، راديو، تلفزيون، صفحات ويب. ده اللي بنسميه Mass media.', enD: 'A large number of receivers take the information — newspapers, radio, television, web pages. This is what we call mass media.', icon: '📣', boxes: ['r1', 'r2', 'r3'], nodes: ['r1', 'r2', 'r3'], wires: ['w1', 'w2', 'w3'] }
        ]
      },
      m2o:{
        vb: '0 0 900 400',
        boxes: [
          { k: 's1', x: 60, y: 30, w: 180, h: 60 },
          { k:'s2', x: 60, y: 170, w: 180, h: 60 },
          { k:'s3', x: 60, y: 310, w: 180, h: 60 },
          { k:'rec', x: 640, y: 140, w: 200, h: 120 }
        ],
        nodes:{ s1: { x: 240, y: 60 }, s2:{ x: 240, y: 200 }, s3:{ x: 240, y: 340 }, rec:{ x: 640, y: 200 } },
        wires:[
          { from: 's1', to: 'rec', k: 'w1' },
          { from:'s2', to: 'rec', k: 'w2' },
          { from:'s3', to: 'rec', k: 'w3' }
        ],
        steps:[
          { arT: '1. مرسلين كتير (Many senders)', enT: '1. Many Senders', arD: 'عدد كبير من المرسلين بيبعتوا معلومات من اتجاهات مختلفة — كل واحد عنده إجابة أو رأي.', enD: 'A large number of senders send information from different directions — each one has an answer or an opinion.', icon: '👥', boxes: ['s1', 's2', 's3'], nodes: ['s1', 's2', 's3'], wires: ['w1', 'w2', 'w3'] },
          { arT:'2. التجميع (Gathering)', enT: '2. Gathering', arD: 'كل المعلومات بتتجمع عند طرف واحد — بيتجمع الكلام من الكل في نقطة واحدة.', enD: 'All the information gathers at one side — the input from everyone collects at a single point.', icon: '🧲', boxes: [], nodes: ['rec'], wires: ['w1', 'w2', 'w3'] },
          { arT:'3. مستقبل واحد (One recipient)', enT: '3. One Recipient', arD: 'مستقبل واحد بياخد كل المدخلات — استبيانات، استعلامات، اقتراحات. ده اللي بنسميه Reverse mass media.', enD: 'One recipient receives all the inputs — surveys, inquiries, suggestions. This is what we call reverse mass media.', icon: '🗳️', boxes: ['rec'], nodes: ['rec'], wires: ['w1', 'w2', 'w3'] }
        ]
      },
      m2m:{
        vb: '0 0 900 400',
        boxes: [
          { k: 'p1', x: 60, y: 30, w: 180, h: 60 },
          { k:'p2', x: 60, y: 170, w: 180, h: 60 },
          { k:'p3', x: 60, y: 310, w: 180, h: 60 },
          { k:'hub', x: 360, y: 140, w: 180, h: 120 },
          { k:'q1', x: 660, y: 30, w: 180, h: 60 },
          { k:'q2', x: 660, y: 170, w: 180, h: 60 },
          { k:'q3', x: 660, y: 310, w: 180, h: 60 }
        ],
        nodes:{
          p1: { x: 240, y: 60 }, p2:{ x: 240, y: 200 }, p3:{ x: 240, y: 340 },
          h1:{ x: 360, y: 200 }, h2:{ x: 540, y: 200 },
          q1:{ x: 660, y: 60 }, q2:{ x: 660, y: 200 }, q3:{ x: 660, y: 340 }
        },
        wires:[
          { from: 'p1', to: 'h1', k: 'w1', both: true },
          { from:'p2', to: 'h1', k: 'w2', both: true },
          { from:'p3', to: 'h1', k: 'w3', both: true },
          { from:'h2', to: 'q1', k: 'w4', both: true },
          { from:'h2', to: 'q2', k: 'w5', both: true },
          { from:'h2', to: 'q3', k: 'w6', both: true }
        ],
        steps:[
          { arT: '1. الكل مرسل (All are senders)', enT: '1. All Are Senders', arD: 'كل المشاركين بيبعتوا — كل واحد عنده حاجة يشاركها مع الباقيين.', enD: 'Every participant sends — each one has something to share with the others.', icon: '📤', boxes: ['p1', 'p2', 'p3'], nodes: ['p1', 'p2', 'p3'], wires: ['w1', 'w2', 'w3'] },
          { arT:'2. الحوار المشترك (Shared channel)', enT: '2. Shared Channel', arD: 'القناة بتوزع كلام الجميع على الكل — اجتماع، مؤتمر، أو جروب بين الكل.', enD: 'The channel distributes everyone\'s words to everyone — a meeting, a conference, or a group between all.', icon: '🏛️', boxes: ['hub'], nodes: ['h1', 'h2'], wires: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'] },
          { arT:'3. الكل مستقبل (All are receivers)', enT: '3. All Are Receivers', arD: 'كل مشارك بياخد حصة من كلام الكل — فيديو كونفرانس، جروب كول، سوشيال ميديا.', enD: 'Every participant gets a share of everyone\'s words — video conferencing, group calls, social media.', icon: '📥', boxes: ['q1', 'q2', 'q3'], nodes: ['q1', 'q2', 'q3'], wires: ['w4', 'w5', 'w6'] }
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
          var scored = 0, right = 0;
          card.querySelectorAll('.ex-item').forEach(function (item) {
            var picks = [];
            item.querySelectorAll('.ex-opt.picked').forEach(function (p) { picks.push(p); });
            item.querySelectorAll('.ex-opt').forEach(function (o) {
              o.classList.remove('correct', 'wrong', 'picked');
              if (o.getAttribute('data-ok')) o.classList.add('correct');
              else o.classList.add('wrong');
            });
            var okOpts = item.querySelectorAll('.ex-opt[data-ok]');
            if (!okOpts.length) return;
            if (item.hasAttribute('data-multi')) {
              scored += okOpts.length;
              okOpts.forEach(function (o) {
                if (picks.indexOf(o) > -1) right++;
              });
              return;
            }
            scored++;
            if (picks.length && picks[0] === okOpts[0]) right++;
          });
          card.querySelectorAll('.ex-answer').forEach(function (a) { a.classList.add('show'); });
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
        var start = quiz.previousElementSibling && quiz.previousElementSibling.hasAttribute('data-start')
          ? quiz.previousElementSibling:quiz.querySelector('[data-start]');
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
        if (val !== null && val !== undefined) {
          if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) el.setAttribute('placeholder', val);
          else el.innerHTML = val;
        }
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
        var start = quiz.previousElementSibling && quiz.previousElementSibling.hasAttribute('data-start')
          ? quiz.previousElementSibling:quiz.querySelector('[data-start]');
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
  
