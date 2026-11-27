/* Shared page script, moved verbatim out of the inline <script> blocks. */
/* ===== Lesson search + "opened" marks + continue ===== */
    (function () {
      var KEY_SEEN = 'ictHub:seen', KEY_LAST = 'ictHub:last';
      var grid = document.getElementById('unitsGrid');
      var input = document.getElementById('lessonSearch');
      var bar = document.getElementById('continueBar');
      var barName = document.getElementById('continueName');
      var progress = document.getElementById('progressText');
      var empty = document.getElementById('noResults');
      var cards = Array.prototype.slice.call(grid.querySelectorAll('.unit-card'));
      var links = Array.prototype.slice.call(grid.querySelectorAll('.lesson-link'));
      var total = links.length;

      function read(k, fallback) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } }
      function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
      var seen = read(KEY_SEEN, []);
      if (!Array.isArray(seen)) seen = [];
      var last = read(KEY_LAST, null);

      function lang() { return window.currentLang === 'en' ? 'en' : 'ar'; }
      function norm(s) {
        return String(s || '').toLowerCase()
          .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
          .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
          .replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); })
          .replace(/\s+/g, ' ').trim();
      }

      function render() {
        var L = lang();
        links.forEach(function (a) { a.classList.toggle('seen', seen.indexOf(a.getAttribute('data-lesson')) !== -1); });
        var n = seen.filter(function (id) { return links.some(function (a) { return a.getAttribute('data-lesson') === id; }); }).length;
        progress.textContent = n === 0
          ? (L === 'ar' ? total + ' درس جاهزين' : total + ' lessons ready')
          : (L === 'ar' ? 'فتحت ' + n + ' من ' + total + ' درس' : 'Opened ' + n + ' of ' + total + ' lessons');
        input.placeholder = L === 'ar' ? 'ابحث عن درس… (مثلاً: شبكات أو 8-2)' : 'Search lessons… (e.g. network or 8-2)';
        var lastLink = last && links.filter(function (a) { return a.getAttribute('data-lesson') === last; })[0];
        if (lastLink) {
          bar.hidden = false;
          bar.href = lastLink.getAttribute('href');
          barName.textContent = lastLink.getAttribute('data-lesson') + ' · ' + lastLink.querySelector('.lt-main').textContent;
        } else { bar.hidden = true; }
      }

      function filter() {
        var terms = norm(input.value).split(' ').filter(Boolean), shown = 0;
        cards.forEach(function (c) {
          var unitText = c.getAttribute('data-search'), any = false;
          c.querySelectorAll('.lesson-link').forEach(function (a) {
            var hay = norm(unitText + ' ' + a.getAttribute('data-search'));
            var ok = terms.every(function (t) { return hay.indexOf(t) !== -1; });
            a.hidden = !ok; if (ok) any = true;
          });
          c.hidden = !any; if (any) shown++;
        });
        empty.hidden = shown !== 0;
      }

      function mark(e) {
        var a = e.target.closest && e.target.closest('.lesson-link');
        if (!a) return;
        var id = a.getAttribute('data-lesson');
        if (seen.indexOf(id) === -1) seen.push(id);
        last = id; write(KEY_SEEN, seen); write(KEY_LAST, id);
        render();
      }

      input.addEventListener('input', filter);
      grid.addEventListener('click', mark);
      grid.addEventListener('auxclick', mark);
      document.addEventListener('langChange', render);
      render();
    })();
