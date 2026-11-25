/* Shared site header behaviour: slide in on scroll and active link.
   Each page sets <nav id="topnav" data-sections="id1,id2"> to say which sections drive the active link. */
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('topnav') || document.querySelector('body > nav');
  if (!nav) return;
  var secAttr = nav.getAttribute('data-sections');
  var sections = (secAttr || 'home').split(',');
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  function onScroll() {
    nav.classList.toggle('show', window.scrollY > 100);
    if (!secAttr) return; /* lesson pages drive the active link themselves */
    var pos = window.scrollY + 120;
    var cur = 'home';
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= pos) cur = id;
    });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
