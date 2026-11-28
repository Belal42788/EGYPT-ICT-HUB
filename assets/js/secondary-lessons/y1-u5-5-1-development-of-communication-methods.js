    /* ============================================================
       Interactive Explainer JS — Development of Communication Methods
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

    /* ---------- timeline steppers ---------- */
    function wireSteppers() {
      document.querySelectorAll('.tl').forEach(function (tl) {
        var steps = tl.querySelectorAll('.tl-step');
        var dots = tl.querySelectorAll('.tl-dot');
        var count = tl.querySelector('.tl-count');
        var i = 0;
        function show(n) {
          i = ((n % steps.length) + steps.length) % steps.length;
          steps.forEach(function (s, k) { s.classList.toggle('active', k === i); });
          dots.forEach(function (d, k) { d.classList.toggle('done', k <= i); });
          if (count) count.textContent = (i + 1) + ' / ' + steps.length;
        }
        var prev = tl.querySelector('[data-id$="Prev"]'), next = tl.querySelector('[data-id$="Next"]'), replay = tl.querySelector('[data-id$="Replay"]');
        if (prev) prev.addEventListener('click', function () { show(i - 1); });
        if (next) next.addEventListener('click', function () { show(i + 1); });
        if (replay) replay.addEventListener('click', function () { show(0); });
      });
    }

    /* ---------- morse signal ---------- */
    function wireSig() {
      var cells = document.querySelectorAll('.sig-cell');
      var run = document.querySelector('[data-id="sigRun"]'), reset = document.querySelector('[data-id="sigReplay"]');
      var out = document.getElementById('sigOut');
      if (!cells.length || !run) return;
      var t = null;
      var actx = null;
      function beep(ms) {
        try {
          if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
          if (actx.state === 'suspended') actx.resume();
          var osc = actx.createOscillator();
          var gain = actx.createGain();
          osc.type = 'square';
          osc.frequency.value = 700;
          gain.gain.setValueAtTime(0.0001, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.25, actx.currentTime + 0.01);
          gain.gain.setValueAtTime(0.25, actx.currentTime + (ms - 20) / 1000);
          gain.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + ms / 1000);
          osc.connect(gain); gain.connect(actx.destination);
          osc.start(actx.currentTime + 0.01);
          osc.stop(actx.currentTime + ms / 1000);
        } catch (e) { }
      }
      function clearAll() { clearInterval(t); cells.forEach(function (c) { c.classList.remove('lit'); }); if (out) out.textContent = ''; }
      run.addEventListener('click', function () {
        clearInterval(t); clearAll();
        var i = 0;
        t = setInterval(function () {
          if (i >= cells.length) {
            clearInterval(t);
            if (out) out.textContent = (window.currentLang === 'en') ? 'Received:SOS' : 'استقبلنا: SOS';
            return;
          }
          cells[i].classList.add('lit');
          beep(cells[i].classList.contains('long') ? 260:120);
          i++;
        }, 300);
      });
      if (reset) reset.addEventListener('click', function () { clearInterval(t); clearAll(); });
    }

    /* ---------- network ---------- */
    function wireNet() {
      var nodes = document.querySelectorAll('.net-node');
      var run = document.querySelector('[data-id="netRun"]'), reset = document.querySelector('[data-id="netReplay"]');
      if (!nodes.length || !run) return;
      var order = ['b', 'a', 'c']; var t = null;
      function clearAll() { nodes.forEach(function (n) { n.classList.remove('lit'); }); }
      run.addEventListener('click', function () {
        clearInterval(t); clearAll(); var i = 0;
        t = setInterval(function () {
          if (i > 0) { var prev = document.querySelector('.net-node[data-node="' + order[i - 1] + '"]'); if (prev) prev.classList.remove('lit'); }
          if (i >= order.length) { clearInterval(t); return; }
          var cur = document.querySelector('.net-node[data-node="' + order[i] + '"]');
          if (cur) cur.classList.add('lit');
          i++;
        }, 650);
      });
      if (reset) reset.addEventListener('click', function () { clearInterval(t); clearAll(); });
    }

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

    /* ---------- recap quiz ---------- */
    function wireQuiz() {
      var start = document.querySelector('[data-id="quizStart"]');
      if (!start) return;
      var qs = document.querySelectorAll('.quiz-q');
      start.addEventListener('click', function () {
        start.style.display = 'none';
        var q = document.querySelector('.quiz');
        if (q) q.classList.remove('quiz-idle');
      });
      qs.forEach(function (q) {
        var opts = q.querySelectorAll('.quiz-opt');
        var why = q.querySelector('.quiz-why');
        opts.forEach(function (o) {
          o.addEventListener('click', function () {
            if (q.classList.contains('answered')) return;
            q.classList.add('answered');
            opts.forEach(function (x) { x.classList.remove('right', 'wrong'); });
            if (o.getAttribute('data-ok') === '1') o.classList.add('right');
            else {
              o.classList.add('wrong');
              var right = q.querySelector('.quiz-opt[data-ok="1"]');
              if (right) right.classList.add('right');
            }
            if (why) why.classList.add('show');
          });
        });
        var skip = q.querySelector('[data-skip]');
        if (skip) skip.addEventListener('click', function () {
          if (q.classList.contains('answered')) return;
          q.classList.add('answered');
          opts.forEach(function (x) { x.classList.remove('right', 'wrong'); });
          var right = q.querySelector('.quiz-opt[data-ok="1"]');
          if (right) right.classList.add('right');
          if (why) why.classList.add('show');
        });
      });
    }

    /* ---------- fill-the-blank drills ---------- */
    function optText(o) {
      return window.currentLang === 'en' && o.getAttribute('data-en') ? o.getAttribute('data-en') : (o.getAttribute('data-ar') || o.textContent);
    }

    function renderSlot(slot) {
      var st = slot.getAttribute('data-state');
      if (st === 'correct') {
        slot.textContent = slot.getAttribute('data-v');
        slot.className = 'slot correct';
      } else if (st === 'wrong') {
        slot.textContent = slot.getAttribute('data-v') + ' ✗';
        slot.className = 'slot wrong';
      } else {
        slot.textContent = slot.getAttribute('data-v') ? slot.getAttribute('data-v') : '[' + slot.getAttribute('data-n') + ']';
        slot.className = 'slot' + (slot.classList.contains('sel') ? ' sel' : '') + (slot.getAttribute('data-v') ? ' filled' : '');
      }
    }

    function refreshAllFills() {
      var slots = document.querySelectorAll('.fill .slot');
      for (var i = 0; i < slots.length; i++) renderSlot(slots[i]);
      var opts = document.querySelectorAll('.fill .fill-opt');
      for (var j = 0; j < opts.length; j++) {
        opts[j].innerHTML = optText(opts[j]);
        opts[j].className = 'fill-opt' + (opts[j].hasAttribute('data-used') ? ' used' : '');
      }
    }

    function fillScore(fill) {
      var slots = fill.querySelectorAll('.slot[data-v]');
      var right = 0;
      for (var i = 0; i < slots.length; i++) {
        if (slots[i].getAttribute('data-v') === slots[i].getAttribute('data-key-v')) right++;
      }
      return right;
    }

    function wireFill() {
      var fills = document.querySelectorAll('.fill');
      var selected = null;
      var checkedFills = {};

      function updateScore(fill) {
        var box = fill.querySelector('.fill-score');
        if (!box) {
          box = document.createElement('div');
          box.className = 'fill-score';
          fill.appendChild(box);
        }
        var total = fill.querySelectorAll('.slot[data-key-v]').length;
        var right = fillScore(fill);
        box.className = 'fill-score ' + (right === total ? 'all' : 'partial');
        if (window.currentLang === 'en') {
          box.textContent = 'Score:' + right + ' / ' + total;
        } else {
          box.textContent = 'نتيجتك:' + right + ' / ' + total;
        }
      }

      for (var i = 0; i < fills.length; i++) {
        (function (fill) {
          var slots = fill.querySelectorAll('.slot');
          var opts = fill.querySelectorAll('.fill-opt');

          function renderOption(opt) {
            opt.innerHTML = optText(opt);
            opt.className = 'fill-opt' + (opt.hasAttribute('data-used') ? ' used' : '');
          }

          function unplace(slot) {
            var v = slot.getAttribute('data-v');
            if (v) {
              for (var k = 0; k < opts.length; k++) {
                if (opts[k].getAttribute('data-v') === v && opts[k].hasAttribute('data-used')) {
                  opts[k].removeAttribute('data-used');
                  renderOption(opts[k]);
                  break;
                }
              }
            }
            slot.removeAttribute('data-v');
            slot.removeAttribute('data-key-v');
            delete slot.dataset.state;
            renderSlot(slot);
            if (checkedFills[fill.getAttribute('data-id')]) updateScore(fill);
          }

          for (var s = 0; s < slots.length; s++) {
            (function (slot) {
              slot.addEventListener('click', function () {
                if (slot.classList.contains('sel')) return;
                var prev = fill.querySelector('.slot.sel');
                if (prev) prev.classList.remove('sel');
                if (slot.getAttribute('data-v')) unplace(slot);
                slot.classList.add('sel');
                selected = slot;
              });
            })(slots[s]);
          }
          for (var o = 0; o < opts.length; o++) {
            (function (opt) {
              opt.addEventListener('click', function () {
                if (opt.hasAttribute('data-used')) return;
                if (!selected || !fill.contains(selected)) {
                  selected = null;
                  return;
                }
                if (selected.getAttribute('data-v')) return;
                var key = opt.getAttribute('data-v');
                var order = fill.getAttribute('data-key').trim().split(/\s+/);
                var expected = order[parseInt(selected.getAttribute('data-n'), 10) - 1];
                selected.setAttribute('data-v', key);
                selected.setAttribute('data-key-v', expected);
                delete selected.dataset.state;
                opt.setAttribute('data-used', '1');
                renderOption(opt);
                selected.classList.remove('sel');
                renderSlot(selected);
                selected = null;
                if (checkedFills[fill.getAttribute('data-id')]) updateScore(fill);
              });
            })(opts[o]);
          }
          var check = fill.querySelector('[data-action="check"]');
          check.addEventListener('click', function () {
            var all = fill.querySelectorAll('.slot[data-v]');
            for (var c = 0; c < all.length; c++) {
              var v = all[c].getAttribute('data-v');
              var kv = all[c].getAttribute('data-key-v');
              all[c].setAttribute('data-state', v === kv ? 'correct' : 'wrong');
              renderSlot(all[c]);
            }
            checkedFills[fill.getAttribute('data-id')] = true;
            updateScore(fill);
            var total = fill.querySelectorAll('.slot[data-key-v]').length;
            if (fillScore(fill) === total) {
              var box = fill.querySelector('.fill-score');
              if (window.currentLang === 'en') box.textContent = '🎉 Perfect! All blanks are correct.';
              else box.textContent = '🎉 ممتاز! كل الفراغات صحيحة.';
            }
          });
          var reveal = fill.querySelector('[data-action="reveal"]');
          reveal.addEventListener('click', function () {
            var slots2 = fill.querySelectorAll('.slot');
            var order = fill.getAttribute('data-key').trim().split(/\s+/);
            for (var r = 0; r < slots2.length; r++) {
              var exp = order[parseInt(slots2[r].getAttribute('data-n'), 10) - 1];
              slots2[r].setAttribute('data-v', exp);
              slots2[r].setAttribute('data-key-v', exp);
              delete slots2[r].dataset.state;
              renderSlot(slots2[r]);
            }
            var opts2 = fill.querySelectorAll('.fill-opt');
            for (var o2 = 0; o2 < opts2.length; o2++) opts2[o2].setAttribute('data-used', '1');
            selected = null;
            if (checkedFills[fill.getAttribute('data-id')]) updateScore(fill);
            refreshAllFills();
          });
          var reset = fill.querySelector('[data-action="reset"]');
          reset.addEventListener('click', function () {
            var slots3 = fill.querySelectorAll('.slot');
            for (var r2 = 0; r2 < slots3.length; r2++) {
              slots3[r2].removeAttribute('data-v');
              slots3[r2].removeAttribute('data-key-v');
              delete slots3[r2].dataset.state;
              renderSlot(slots3[r2]);
            }
            var opts3 = fill.querySelectorAll('.fill-opt');
            for (var o3 = 0; o3 < opts3.length; o3++) opts3[o3].removeAttribute('data-used');
            delete checkedFills[fill.getAttribute('data-id')];
            var box2 = fill.querySelector('.fill-score');
            if (box2) box2.remove();
            selected = null;
            refreshAllFills();
          });
        })(fills[i]);
      }

      document.addEventListener('langChange', function () {
        refreshAllFills();
      });
    }

    /* ---------- keyboard navigation ---------- */
    var SECTIONS = ['intro', 'before-tel', 'begin-tel', 'masscomm', 'internet', 'practice', 'recap'];
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

    /* ---------- boot ---------- */
    document.addEventListener('DOMContentLoaded', function () {
      /* ===== Recall quiz scaffold (contract:tr/recallStart/wireRecall) ===== */
      function tr(ar, en) {
        return (window.currentLang === 'en') ? en : ar;
      }
      function rqFb(el) {
        return tr(el.getAttribute('data-fb-ar'), el.getAttribute('data-fb-en'));
      }
      function recallStart(quiz) {
        var s = quiz.querySelector('[data-start]');
        if (!s) { var p = quiz.previousElementSibling; if (p && p.hasAttribute('data-start')) s = p; }
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
          if (start) start.addEventListener('click', function () { quiz.classList.toggle('show'); paintQuizBtn(); });
          quiz.querySelectorAll('.rq').forEach(function (q) {
            var opts = q.querySelectorAll('.rq-opt');
            var skip = q.querySelector('.rq-skip');
            var fb = q.querySelector('.rq-fb');
            function lock(qq) { qq.classList.add('done'); opts.forEach(function (o){o.classList.add('disabled');}); if (skip) skip.style.display='none'; }
            function showFb(ok, text, correctKey) {
              fb.classList.add('show'); fb.classList.toggle('ok', ok); fb.classList.toggle('no', !ok);
              fb.textContent = (ok ? '✅ ' : '❌ ') + (correctKey ? ((window.currentLang==='en'?'The correct answer is '+correctKey+'. ':'الإجابة الصحيحة '+correctKey+'. ')) : '') + text;
            }
            opts.forEach(function (o) {
              o.addEventListener('click', function () {
                if (q.classList.contains('done')) return;
                var ok = o.getAttribute('data-ok') === '1';
                opts.forEach(function (x){x.classList.remove('correct','wrong');});
                if (ok) o.classList.add('correct');
                else { o.classList.add('wrong'); var co=q.querySelector('.rq-opt[data-ok="1"]'); if(co) co.classList.add('correct'); }
                lock(q);
                showFb(ok, rqFb(o), ok ? null:(q.querySelector('.rq-opt[data-ok="1"]').getAttribute('data-key')));
              });
            });
            if (skip) skip.addEventListener('click', function () {
              if (q.classList.contains('done')) return;
              var co=q.querySelector('.rq-opt[data-ok="1"]'); opts.forEach(function(x){x.classList.remove('correct','wrong');}); if(co) co.classList.add('correct'); lock(q);
              showFb(true, rqFb(co), co.getAttribute('data-key'));
            });
          });
        });
      }
      wireRecall();

      wireNav();
      wireReveal();
      wireSteppers();
      wireSig();
      wireNet();
      wireRevealBtns();
      wireQuiz();
      wireFill();
    });

    /* ---------- AR/EN toggle ---------- */
    document.addEventListener('DOMContentLoaded', function () {
      var langBtn = document.getElementById('langToggle');
      if (!langBtn) return;
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
        document.dispatchEvent(new CustomEvent('langChange', { detail:{ lang: lang } }));
        localStorage.setItem('langPreference', lang);
      }
      var storedLang = localStorage.getItem('langPreference');
      if (!storedLang) storedLang = 'ar';
      setLang(storedLang);
      langBtn.addEventListener('click', function () {
        setLang(window.currentLang === 'ar' ? 'en' : 'ar');
      });
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
  
