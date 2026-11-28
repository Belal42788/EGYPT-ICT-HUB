        (function () {
          var sec = document.getElementById('messaging');
          if (!sec) return;
          var rows = sec.querySelectorAll('.chat-row');
          var steps = sec.querySelectorAll('.tl-step');
          var n = steps.length;
          var step = 0;
          function show(i) {
            if (i < 0) i = n - 1;
            if (i >= n) i = 0;
            step = i;
            steps.forEach(function (s, idx) { s.classList.toggle('active', idx === i); });
            var target = steps[i].getAttribute('data-f');
            rows.forEach(function (r) {
              var on = target === 'all' || r.getAttribute('data-f') === target;
              r.classList.toggle('on', on);
              r.classList.toggle('dim', !on);
            });
            var counter = document.getElementById('messagingCounter');
            if (counter) counter.textContent = (i + 1) + ' / ' + n;
            var badge = steps[i].querySelector('.tl-year-badge');
            if (badge) badge.textContent = (i + 1) + ' / ' + n;
          }
          var prev = document.querySelector('[data-id="messagingPrev"]');
          var next = document.querySelector('[data-id="messagingNext"]');
          var replay = document.querySelector('[data-id="messagingReplay"]');
          if (prev) prev.addEventListener('click', function () { show(step - 1); });
          if (next) next.addEventListener('click', function () { show(step + 1); });
          if (replay) replay.addEventListener('click', function () { show(0); });
        })();
      
