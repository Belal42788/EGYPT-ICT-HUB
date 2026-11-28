    document.addEventListener('DOMContentLoaded', function () {

      /* ===== Recall quiz scaffold (contract: recallStart / wireRecall) ===== */
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
      wireRecall();
/* ===== Scroll reveal ===== */
      var revealEls = document.querySelectorAll('.section-inner');
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold:0.05 });
      revealEls.forEach(function (el) { revealObserver.observe(el); });

      function checkVisibility() {
        revealEls.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
        });
      }
      window.addEventListener('scroll', checkVisibility);
      checkVisibility();

      /* ===== Sticky nav ===== */
      var topNav = document.getElementById('topNav');
      /* header slide-in:assets/js/nav.js */

      var navLinks = document.querySelectorAll('.nav-links a');
      function setActiveNav() {
        var pos = window.scrollY + 120;
        var current = null;
        navLinks.forEach(function (a) {
          var target = document.querySelector(a.getAttribute('href'));
          if (target && target.offsetTop <= pos) current = a;
        });
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        if (current) current.classList.add('active');
      }
      window.addEventListener('scroll', setActiveNav);

      document.querySelector('[data-action="scroll-to-sections"]').addEventListener('click', function () {
        var s1 = document.getElementById('s1');
        s1.scrollIntoView({ behavior:'smooth' });
      });

      /* ===== Step containers (generic) ===== */
      document.querySelectorAll('.step-container').forEach(function (container) {
        if (container.getAttribute('data-id') === 'journey-steps') return;
        var cards = container.querySelectorAll('.step-card');
        var counter = container.querySelector('.step-counter');
        var grid = container.closest('.activity-grid');
        var demoPanel = grid ? grid.querySelector('.demo-panel') : null;
        var stagePill = container.querySelector('.stage-pill') || (demoPanel ? demoPanel.querySelector('.stage-pill') : null);
        var pyramid = container.querySelector('.pyramid-svg') || (demoPanel ? demoPanel.querySelector('.pyramid-svg') : null);
        var demoStages = demoPanel ? demoPanel.querySelectorAll('.demo-stage') : container.querySelectorAll('.demo-stage');
        var idx = 0;
        var total = cards.length;

        var stageLabels = [];
        if (stagePill) {
          for (var s = 0; s < total; s++) {
            stageLabels.push({
              ar:stagePill.getAttribute('data-stage-' + (s + 1) + '-ar') || 'المرحلة ' + (s + 1),
              en: stagePill.getAttribute('data-stage-' + (s + 1) + '-en') || 'Stage ' + (s + 1)
            });
          }
        }

        function render() {
          cards.forEach(function (c, i) {
            c.classList.toggle('active', i === idx);
          });
          if (counter) counter.textContent = (idx + 1) + ' / ' + total;
          if (pyramid) {
            var levels = pyramid.querySelectorAll('.pyr-level');
            levels.forEach(function (lv, i) {
              lv.classList.remove('lit', 'inactive');
              if (i === idx) lv.classList.add('lit');
              else lv.classList.add('inactive');
            });
          }
          if (demoStages.length) {
            demoStages.forEach(function (ds) {
              ds.style.display = (parseInt(ds.getAttribute('data-stage'), 10) === idx + 1) ? '' : 'none';
            });
          }
          if (stagePill && stageLabels[idx]) {
            stagePill.setAttribute('data-ar', stageLabels[idx].ar);
            stagePill.setAttribute('data-en', stageLabels[idx].en);
            stagePill.textContent = (window.currentLang === 'en') ? stageLabels[idx].en:stageLabels[idx].ar;
          }
        }

        function stepDir(dir) {
          idx = Math.min(Math.max(idx + dir, 0), total - 1);
          render();
        }
        function resetSteps() { idx = 0; render(); }

        var prevBtn = container.querySelector('[data-action="prev"]');
        var nextBtn = container.querySelector('[data-action="next"]');
        var replayBtn = container.querySelector('[data-action="replay"]');
        if (prevBtn) prevBtn.addEventListener('click', function () { stepDir(-1); });
        if (nextBtn) nextBtn.addEventListener('click', function () { stepDir(1); });
        if (replayBtn) replayBtn.addEventListener('click', resetSteps);
        render();
      });

      /* ===== Quizzes (generic) ===== */
      document.querySelectorAll('.quiz-box').forEach(function (box) {
        var questions = box.querySelectorAll('.quiz-q');
        var revealBtn = box.querySelector('[data-action="reveal-quiz"]');
        var skipBtn = box.querySelector('[data-action="skip-quiz"]');
        var resetBtn = box.querySelector('[data-action="reset-quiz"]');

        function resetQuiz() {
          questions.forEach(function (q) {
            q.querySelectorAll('.quiz-opt').forEach(function (opt) {
              opt.classList.remove('correct', 'wrong', 'disabled');
            });
            var fb = q.querySelector('.quiz-feedback');
            if (fb) fb.classList.remove('show');
          });
        }

        questions.forEach(function (q) {
          var answer = q.getAttribute('data-answer');
          var opts = q.querySelectorAll('.quiz-opt');
          var fb = q.querySelector('.quiz-feedback');
          opts.forEach(function (opt) {
            opt.addEventListener('click', function () {
              if (opt.classList.contains('disabled')) return;
              var chosen = opt.getAttribute('data-opt');
              opts.forEach(function (o) { o.classList.add('disabled'); });
              if (chosen === answer) {
                opt.classList.add('correct');
                if (fb) {
                  var fbC = fb.querySelector('.fb-correct');
                  var fbW = fb.querySelector('.fb-wrong');
                  fbW.style.display = 'none';
                  if (fbC) fbC.style.display = '';
                  fb.classList.add('show');
                }
              } else {
                opt.classList.add('wrong');
                // Highlight the correct option
                opts.forEach(function (o) {
                  if (o.getAttribute('data-opt') === answer) {
                    o.classList.add('correct');
                  }
                });
                if (fb) {
                  var fbW2 = fb.querySelector('.fb-wrong');
                  var fbC2 = fb.querySelector('.fb-correct');
                  fbC2.style.display = 'none';
                  if (fbW2) fbW2.style.display = '';
                  fb.classList.add('show');
                }
              }
            });
          });
        });

        if (revealBtn) revealBtn.addEventListener('click', function () {
          box.classList.remove('quiz-hidden');
        });
        if (skipBtn) skipBtn.addEventListener('click', function () {
          box.classList.add('quiz-hidden');
          resetQuiz();
        });
        if (resetBtn) resetBtn.addEventListener('click', function () {
          resetQuiz();
        });
      });

      /* ===== Timeline simulation (Section 2) ===== */
      (function () {
        var sim = document.querySelector('[data-id="char-timeline"]');
        if (!sim) return;
        var photo = sim.querySelector('.tl-photo');
        var scrub = sim.querySelector('.tl-scrub');
        var zones = sim.querySelectorAll('.tl-zone');
        var statusHead = document.getElementById('charStatus').querySelector('.tl-status-head');
        var statusBody = document.getElementById('charStatus').querySelector('.tl-status-body');
        var playBtn = sim.querySelector('[data-action="tl-play"]');
        var replayBtn = sim.querySelector('[data-action="tl-replay"]');
        var playing = false, timer = null;

        var states = [
          {
            arH:'صورة اتحذفت لكن رجعت تاني!',
            enH: 'A photo was deleted but came back!',
            arB: 'لما تمسح صورة من التليفون، ممكن تتلاقى في الحاجة الضايعة أو سحابة نسخ احتياطي. المعلومة اللي اتخلقت مرة عمرها ما بتمسح نهائي.',
            enB: 'When you delete a photo from your phone, it can still be found in trash or cloud backup. Information, once created, can never be completely erased.'
          },
          {
            arH:'الصورة اتنسخت 1000 نسخة بنفس الجودة!',
            enH: 'The photo was copied 1000 times at the same quality!',
            arB: 'كل نسخة مطابقة للأصل بالظبط. المعلومة الرقمية بتتنسخ بكميات كبيرة من غير أي فقدان في الجودة.',
            enB: 'Every copy is identical to the original. Digital information copies in large quantities with zero loss of quality.'
          },
          {
            arH:'تويت فيروسي انتشر لملايين الناس!',
            enH: 'A viral tweet spread to millions!',
            arB: 'من خلال وسائل الإعلام الجماهيرية (Mass Media) والإنترنت، المعلومة بتنتشر في ثواني لجمهور ضخم جدًا.',
            enB: 'Through mass media and the internet, information spreads in seconds to a massive audience.'
          }
        ];
        var zoneClasses = ['active-persist', 'active-repro', 'active-propag'];

        function renderState() {
          var v = parseInt(scrub.value, 10);
          var track = sim.querySelector('.tl-track');
          var trackW = track.clientWidth - photo.offsetWidth - 6;
          photo.style.left = (6 + (trackW * v / 100)) + 'px';
          var seg = v < 33 ? 0:(v < 66 ? 1 : 2);
          zones.forEach(function (z, i) {
            z.classList.toggle(zoneClasses[i], i === seg);
          });
          var s = states[seg];
          var lang = window.currentLang === 'en' ? 'en' : 'ar';
          statusHead.setAttribute('data-ar', s.arH);
          statusHead.setAttribute('data-en', s.enH);
          statusBody.setAttribute('data-ar', s.arB);
          statusBody.setAttribute('data-en', s.enB);
          statusHead.textContent = lang === 'en' ? s.enH:s.arH;
          statusBody.textContent = lang === 'en' ? s.enB:s.arB;
        }

        function stop() {
          playing = false;
          if (timer) { clearInterval(timer); timer = null; }
          playBtn.textContent = '▶ تشغيل';
        }

        function play() {
          if (playing) { stop(); return; }
          playing = true;
          playBtn.textContent = '⏸ إيقاف';
          timer = setInterval(function () {
            var v = parseInt(scrub.value, 10) + 1;
            if (v > 100) v = 0;
            scrub.value = v;
            renderState();
          }, 90);
        }

        function replay() {
          stop();
          scrub.value = 0;
          renderState();
        }

        playBtn.addEventListener('click', play);
        replayBtn.addEventListener('click', replay);
        scrub.addEventListener('input', function () { stop(); renderState(); });
        window.addEventListener('resize', renderState);
        renderState();

        document.addEventListener('langChange', function () { renderState(); });
      })();

      /* ===== Cross-check simulator (Section 3) ===== */
      (function () {
        var sim = document.querySelector('[data-id="crosscheck-sim"]');
        if (!sim) return;
        var sources = Array.prototype.slice.call(sim.querySelectorAll('.cc-source'));
        var counter = document.getElementById('ccCounter');
        var result = document.getElementById('ccResult');
        var bars = document.getElementById('ccBars');
        var verdict = document.getElementById('ccVerdict');
        var checkBtn = sim.querySelector('[data-action="cc-check"]');
        var replayBtn = sim.querySelector('[data-action="cc-replay"]');
        var selected = [];

        var names = {
          'src-official': { ar:'موقع جامعة', en: 'University site' },
          'src-news': { ar:'جريدة محترمة', en: 'Reputable newspaper' },
          'src-wiki': { ar:'ويكيبيديا', en: 'Wikipedia' },
          'src-blog': { ar:'مدونة شخصية', en: 'Personal blog' },
          'src-social': { ar:'بوست فيسبوك', en: 'Facebook post' },
          'src-experiment': { ar:'تجربتك الخاصة', en: 'Your own experiment' }
        };

        function reset() {
          selected = [];
          sources.forEach(function (s) {
            s.classList.remove('selected', 'picked');
          });
          counter.textContent = '0 / 3';
          result.style.display = 'none';
          checkBtn.disabled = true;
        }

        sources.forEach(function (s) {
          s.addEventListener('click', function () {
            if (s.classList.contains('picked')) return;
            if (s.classList.contains('selected')) {
              s.classList.remove('selected');
              selected = selected.filter(function (id) { return id !== s.getAttribute('data-id'); });
            } else if (selected.length < 3) {
              s.classList.add('selected');
              selected.push(s.getAttribute('data-id'));
            }
            counter.textContent = selected.length + ' / 3';
            checkBtn.disabled = selected.length !== 3;
          });
        });

        checkBtn.addEventListener('click', function () {
          if (selected.length !== 3) return;
          sources.forEach(function (s) {
            if (selected.indexOf(s.getAttribute('data-id')) !== -1) s.classList.add('picked');
            s.classList.remove('selected');
          });
          bars.innerHTML = '';
          var avg = 0;
          selected.forEach(function (id, i) {
            var src = sources.find(function (s) { return s.getAttribute('data-id') === id; });
            var score = parseInt(src.getAttribute('data-score'), 10);
            avg += score;
            var row = document.createElement('div');
            row.className = 'cc-bar-row';
            row.setAttribute('data-id', id);
            var name = document.createElement('span');
            name.className = 'cc-bar-name';
            var lang = window.currentLang === 'en' ? 'en' : 'ar';
            name.textContent = names[id][lang];
            var track = document.createElement('div');
            track.className = 'cc-bar-track';
            var fill = document.createElement('div');
            fill.className = 'cc-bar-fill ' + (score >= 70 ? 'good' : (score >= 40 ? 'mid' : 'bad'));
            var val = document.createElement('span');
            val.className = 'cc-bar-val';
            val.textContent = score;
            track.appendChild(fill);
            row.appendChild(name);
            row.appendChild(track);
            row.appendChild(val);
            bars.appendChild(row);
            setTimeout(function () { fill.style.width = score + '%'; }, i * 120);
          });
          avg = Math.round(avg / 3);
          result.style.display = 'block';
          var strong = avg >= 65;
          verdict.className = 'cc-verdict ' + (strong ? 'strong' : 'weak');
          var lang = window.currentLang === 'en' ? 'en' : 'ar';
          verdict.setAttribute('data-ar', strong
            ? '✅ مصادرك قوية! متوسط الموثوقية ' + avg + '/100 — الأداء كويس، بس دايماً راجع أكثر من مصدر.'
            : '⚠️ مصادرك ضعيفة! متوسط الموثوقية ' + avg + '/100 — محتاج مصدر أولي أو ثانوي موثوق عشان تقدر تصدق الادعاء.');
          verdict.setAttribute('data-en', strong
            ? '✅ Strong sources! Average credibility ' + avg + '/100 — good job, but always check more than one source.'
            : '⚠️ Weak sources! Average credibility ' + avg + '/100 — you need a primary or trustworthy secondary source to believe the claim.');
          verdict.textContent = lang === 'en'
            ? (strong ? '✅ Strong sources! Average credibility ' + avg + '/100 — good job, but always check more than one source.' : '⚠️ Weak sources! Average credibility ' + avg + '/100 — you need a primary or trustworthy secondary source to believe the claim.')
            : (strong ? '✅ مصادرك قوية! متوسط الموثوقية ' + avg + '/100 — الأداء كويس، بس دايماً راجع أكثر من مصدر.' : '⚠️ مصادرك ضعيفة! متوسط الموثوقية ' + avg + '/100 — محتاج مصدر أولي أو ثانوي موثوق عشان تقدر تصدق الادعاء.');
        });

        replayBtn.addEventListener('click', reset);
        reset();
        document.addEventListener('langChange', function () {
          if (result.style.display === 'block') {
            var rows = bars.querySelectorAll('.cc-bar-row');
            rows.forEach(function (r) {
              var nm = r.querySelector('.cc-bar-name');
              var id = r.getAttribute('data-id');
              var lang = window.currentLang === 'en' ? 'en' : 'ar';
              if (nm && id && names[id]) nm.textContent = names[id][lang];
            });
          }
        });
      })();

      /* ===== Message journey (Section 4) ===== */
      (function () {
        var stepsBox = document.querySelector('[data-id="journey-steps"]');
        if (!stepsBox) return;
        var cards = stepsBox.querySelectorAll('.step-card');
        var track = document.querySelector('[data-id="journey-track"]');
        var msg = track.querySelector('.jt-msg');
        var nodes = track.querySelectorAll('.jt-node');
        var stagePill = document.getElementById('journeyStagePill');
        var statusHead = document.getElementById('journeyStatus').querySelector('.jt-status-head');
        var statusBody = document.getElementById('journeyStatus').querySelector('.jt-status-body');
        var controls = track.closest('.demo-panel').querySelectorAll('.step-controls');
        var counter = track.closest('.demo-panel').querySelector('.step-counter');
        var idx = 0, total = cards.length;

        var labels = [
          { ar:'المعلومة بتتعمل', en: 'The info is created' },
          { ar:'المعلومة بتتوصّل', en: 'The info is transmitted' },
          { ar:'المعلومة بتتخزن', en: 'The info is recorded' }
        ];
        var heads = [
          { ar:'بتكتب رسالة على تليفونك', en: 'You type a message on your phone' },
          { ar:'الرسالة بتنقل عبر الإنترنت', en: 'The message travels over the internet' },
          { ar:'الرسالة بتتحفظ في السحابة', en: 'The message is saved in the cloud' }
        ];
        var bodies = [
          { ar:'النص اللي كتبته ده تعبير عن الفكرة — وسائط التعبير.', en: 'The text you typed is an expression of the idea — expression media.' },
          { ar:'الإنترنت أو شبكة التليفون بتوصل الرسالة — وسائط الإرسال/النقل.', en: 'The internet or phone network delivers the message — transmission media.' },
          { ar:'التخزين في السحابة أو الذاكرة — وسائط التسجيل.', en: 'Saving in the cloud or memory — recording media.' }
        ];

        function render() {
          cards.forEach(function (c, i) { c.classList.toggle('active', i === idx); });
          if (counter) counter.textContent = (idx + 1) + ' / ' + total;
          nodes.forEach(function (n, i) { n.classList.toggle('active', i === idx); });
          var positions = [8, 44, 80];
          msg.style.left = positions[idx] + '%';
          var lang = window.currentLang === 'en' ? 'en' : 'ar';
          stagePill.textContent = labels[idx][lang];
          stagePill.setAttribute('data-ar', labels[idx].ar);
          stagePill.setAttribute('data-en', labels[idx].en);
          statusHead.textContent = heads[idx][lang];
          statusHead.setAttribute('data-ar', heads[idx].ar);
          statusHead.setAttribute('data-en', heads[idx].en);
          statusBody.textContent = bodies[idx][lang];
          statusBody.setAttribute('data-ar', bodies[idx].ar);
          statusBody.setAttribute('data-en', bodies[idx].en);
        }

        function stepDir(dir) {
          idx = Math.min(Math.max(idx + dir, 0), total - 1);
          render();
        }

        controls.forEach(function (c) {
          c.querySelector('[data-action="prev"]').addEventListener('click', function () { stepDir(-1); });
          c.querySelector('[data-action="next"]').addEventListener('click', function () { stepDir(1); });
          c.querySelector('[data-action="replay"]').addEventListener('click', function () { idx = 0; render(); });
        });
        render();

        document.addEventListener('langChange', function () { render(); });
      })();

      /* ===== Credibility checklist (Section 5) ===== */
      (function () {
        var sim = document.querySelector('[data-id="lit-sim"]');
        if (!sim) return;
        var posts = Array.prototype.slice.call(sim.querySelectorAll('.lit-post'));
        var revealBtn = sim.querySelector('[data-action="lit-reveal"]');
        var replayBtn = sim.querySelector('[data-action="lit-replay"]');
        var result = document.getElementById('litResult');
        var bars = document.getElementById('litBars');
        var conclusion = document.getElementById('litConclusion');
        var allMarked = false;

        var titles = {
          'lit-': { ar:'دراسة محكمة', en: 'Peer-reviewed study' },
          'lit-': { ar:'بوست فيسبوك', en: 'Facebook post' },
          'lit-': { ar:'إعلان ممول', en: 'Sponsored ad' },
          'lit-': { ar:'خبر جريدة', en: 'Newspaper story' },
          'lit-': { ar:'منشن في جروب', en: 'Group message' }
        };

        function checkAllMarked() {
          allMarked = true;
          posts.forEach(function (p) {
            p.querySelectorAll('.lit-criterion').forEach(function (cr) {
              if (!cr.classList.contains('marked-yes') && !cr.classList.contains('marked-no')) allMarked = false;
            });
          });
          revealBtn.disabled = !allMarked;
        }

        posts.forEach(function (p) {
          p.querySelectorAll('.lit-c-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
              var cr = btn.closest('.lit-criterion');
              var action = btn.getAttribute('data-action');
              cr.classList.remove('marked-yes', 'marked-no');
              cr.classList.add(action === 'set-yes' ? 'marked-yes' : 'marked-no');
              checkAllMarked();
            });
          });
        });

        revealBtn.addEventListener('click', function () {
          if (!allMarked) return;
          bars.innerHTML = '';
          var totalCorrect = 0, totalCriterions = 0;
          posts.forEach(function (p, i) {
            var correct = 0, n = 0;
            p.querySelectorAll('.lit-criterion').forEach(function (cr) {
              n++;
              var userCorrect = (cr.getAttribute('data-correct') === 'true');
              var userYes = cr.classList.contains('marked-yes');
              var ok = (userCorrect === userYes);
              if (ok) correct++;
              cr.classList.add(ok ? 'correct-mark' : 'wrong-mark');
              totalCorrect += ok ? 1:0;
            });
            totalCriterions += n;
            p.classList.add('revealed');
            var pct = Math.round(correct / n * 100);
            p.classList.add(pct >= 70 ? 'good' : (pct >= 40 ? 'mid' : 'bad'));

            var row = document.createElement('div');
            row.className = 'lit-bar-row';
            var nm = document.createElement('span');
            nm.className = 'lit-bar-name';
            nm.textContent = titles[p.getAttribute('data-id')][window.currentLang === 'en' ? 'en' : 'ar'];
            var track = document.createElement('div');
            track.className = 'lit-bar-track';
            var fill = document.createElement('div');
            fill.className = 'lit-bar-fill ' + (pct >= 70 ? 'good' : (pct >= 40 ? 'mid' : 'bad'));
            var val = document.createElement('span');
            val.className = 'lit-bar-val';
            val.textContent = pct;
            track.appendChild(fill);
            row.appendChild(nm);
            row.appendChild(track);
            row.appendChild(val);
            bars.appendChild(row);
            setTimeout(function () { fill.style.width = pct + '%'; }, i * 120);
          });
          result.style.display = 'block';
          var overall = Math.round(totalCorrect / totalCriterions * 100);
          var lang = window.currentLang === 'en' ? 'en' : 'ar';
          var txt = (overall >= 70)
            ? (lang === 'ar' ? '✅ أداء ممتاز! بتفكر كمحترف في المصداقية — دايماً المصدر والدليل والتأكيد.' : '✅ Excellent! You think like a pro about credibility — always source, evidence, and corroboration.')
            : (lang === 'ar' ? '⚠️ ركّز أكتر — المصداقية مش من الشهرة، من المصدر والدليل والتأكيد من مصادر تانية.' : '⚠️ Focus more — credibility is not from fame, but from source, evidence, and corroboration.');
          conclusion.textContent = txt;
          conclusion.setAttribute('data-ar', '');
          conclusion.setAttribute('data-en', '');
        });

        replayBtn.addEventListener('click', function () {
          posts.forEach(function (p) {
            p.classList.remove('revealed', 'good', 'mid', 'bad');
            p.querySelectorAll('.lit-criterion').forEach(function (cr) {
              cr.classList.remove('marked-yes', 'marked-no', 'correct-mark', 'wrong-mark');
            });
          });
          result.style.display = 'none';
          bars.innerHTML = '';
          checkAllMarked();
        });
        checkAllMarked();
      })();

      /* ===== Book MCQs (Section 6, activity pattern) ===== */
      (function () {
        var box = document.querySelector('[data-id="book-mcq"]');
        if (!box) return;
        var questions = box.querySelectorAll('.mcq-q');
        var revealBtn = box.querySelector('[data-action="mcq-reveal"]');
        var replayBtn = box.querySelector('[data-action="mcq-replay"]');
        var scoreEl = document.getElementById('mcqScore');
        var revealed = false;


        function updateRevealState() {
          if (revealed) return;
          revealBtn.disabled = false;
        }

        questions.forEach(function (q) {
          var opts = q.querySelectorAll('.mcq-opt');
          opts.forEach(function (opt) {
            opt.addEventListener('click', function () {
              if (revealed) return;
              opts.forEach(function (o) { o.classList.remove('selected'); });
              opt.classList.add('selected');
              updateRevealState();
            });
          });
        });

        revealBtn.addEventListener('click', function () {
          if (revealed) return;
          revealed = true;
          var correct = 0;
          questions.forEach(function (q) {
            var answer = q.getAttribute('data-answer');
            var chosen = null;
            var opts = q.querySelectorAll('.mcq-opt');
            opts.forEach(function (o) {
              var isCorrect = o.getAttribute('data-opt') === answer;
              if (o.classList.contains('selected')) chosen = o;
              if (isCorrect) {
                o.classList.add('revealed-correct');
                if (!o.classList.contains('selected')) o.classList.add('dimmed');
              } else if (o.classList.contains('selected')) {
                o.classList.add('revealed-wrong');
              }
            });
            if (chosen && chosen.getAttribute('data-opt') === answer) correct++;
            var exp = q.querySelector('.mcq-explanation');
            if (exp) exp.classList.add('show');
          });
          scoreEl.style.display = '';
          var lang = window.currentLang === 'en' ? 'en' : 'ar';
          var total = questions.length;
          scoreEl.textContent = lang === 'ar'
            ? 'نصيبك:' + correct + ' من ' + total
            : 'Your score: ' + correct + ' of ' + total;
        });

        replayBtn.addEventListener('click', function () {
          revealed = false;
          questions.forEach(function (q) {
            q.querySelectorAll('.mcq-opt').forEach(function (o) {
              o.classList.remove('selected', 'revealed-correct', 'revealed-wrong', 'dimmed');
            });
            var exp = q.querySelector('.mcq-explanation');
            if (exp) exp.classList.remove('show');
          });
          scoreEl.style.display = 'none';
          updateRevealState();
        });

        updateRevealState();
      })();

      /* ===== Glossary (search + filter) ===== */
      (function () {
        var search = document.getElementById('glossarySearch');
        var filters = document.querySelectorAll('.gl-filter');
        var terms = Array.prototype.slice.call(document.querySelectorAll('.gl-term'));
        if (!search) return;
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
      })();

      /* ===== AR/EN toggle ===== */
      var langBtn = document.getElementById('langToggle');
      function setLang(lang) {
        window.currentLang = lang;
        langBtn.setAttribute('data-current', lang);
        langBtn.textContent = (lang === 'ar') ? 'EN' : 'AR';
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        document.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
          var val = (lang === 'ar') ? el.getAttribute('data-ar') : el.getAttribute('data-en');
          if (val !== null) {
            el.innerHTML = val;
            el.setAttribute('data-lang', lang);
          }
        });
        // refresh any live text like stage pills / counters that JS manages
        document.querySelectorAll('.stage-pill').forEach(function (sp) {
          var a = sp.getAttribute('data-ar'), e = sp.getAttribute('data-en');
          if (a && e) sp.textContent = (lang === 'ar') ? a:e;
        });
        // update glossary search placeholder
        var searchInput = document.getElementById('glossarySearch');
        if (searchInput) {
          searchInput.placeholder = (lang === 'ar') ? searchInput.getAttribute('data-ar') : searchInput.getAttribute('data-en');
        }
        document.dispatchEvent(new CustomEvent('langChange', { detail:{ lang: lang } }));
        // persist language preference
        try { localStorage.setItem('langPreference', lang); } catch (e) { }
      }
      // get stored language or default to Arabic
      var storedLang = null; try { storedLang = localStorage.getItem('langPreference'); } catch (e) { }
      if (!storedLang) storedLang = 'ar';
      setLang(storedLang);
      langBtn.addEventListener('click', function () {
        setLang(window.currentLang === 'ar' ? 'en' : 'ar');
      });

      /* ===== Keyboard nav between sections (left/right) ===== */
      window.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
        var sections = Array.prototype.slice.call(document.querySelectorAll('.lesson-section'));
        var current = null, best = -1;
        sections.forEach(function (sec) {
          var r = sec.getBoundingClientRect();
          if (r.top <= window.innerHeight / 2) {
            if (r.top > best) { best = r.top; current = sec; }
          }
        });
        if (!current) current = sections[0];
        var idx = sections.indexOf(current);
        if (e.key === 'ArrowRight') idx = Math.min(idx + 1, sections.length - 1);
        else idx = Math.max(idx - 1, 0);
        sections[idx].scrollIntoView({ behavior:'smooth' });
      });
    });
  
