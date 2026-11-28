/* Shared page script, moved verbatim out of the inline <script> blocks. */
document.addEventListener('DOMContentLoaded', function () {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
      }, { threshold:.05 });
      document.querySelectorAll('.section-inner').forEach(function (el) { obs.observe(el); });
      document.addEventListener('keydown', function (ev) {
        if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
        if (ev.key === 'ArrowRight') { goSection(1); }
        else if (ev.key === 'ArrowLeft') { goSection(-1); }
      });
      var order = ['home', 'units'];
      function goSection(dir) {
        var current = 'home'; var pos = window.scrollY + 120;
        order.forEach(function (id) {
          var el = document.getElementById(id);
          if (el && el.offsetTop <= pos) current = id;
        });
        var el = document.getElementById(order[(order.indexOf(current) + dir + order.length) % order.length]);
        if (el) el.scrollIntoView({ behavior:'smooth' });
      }
    });
