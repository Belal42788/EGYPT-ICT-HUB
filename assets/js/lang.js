/* Shared language toggle and translation for the landing pages. */
/* ===== Language toggle & translation ===== */
    var langBtn = document.getElementById('langToggle');
    var currentLang = 'ar';
    window.currentLang = currentLang;
    function setLang(lang) {
      window.currentLang = lang;
      var isArabic = lang === 'ar';
      langBtn.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to العربية');
      var langIcon = document.getElementById('langIcon');
      if (langIcon) langIcon.textContent = isArabic ? 'EN' : 'AR';
      document.documentElement.lang = lang;
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
      document.querySelectorAll('[data-ar], [data-en]').forEach(function (el) {
        var val = (lang === 'ar') ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        if (val !== null) {
          el.innerHTML = val;
          el.setAttribute('data-lang', lang);
        }
      });
      // refresh any live text like stage pills / counters that JS manages
      document.querySelectorAll('.stage-pill').forEach(function (sp) {
        var a = sp.getAttribute('data-ar'), e = sp.getAttribute('data-en');
        if (a && e) sp.textContent = (lang === 'ar') ? a : e;
      });
      document.querySelectorAll('.st.soon').forEach(function (el) {
        el.textContent = (lang === 'ar') ? 'قريباً' : 'Coming soon';
      });
      // update glossary search placeholder
      var searchInput = document.getElementById('glossarySearch');
      if (searchInput) {
        searchInput.placeholder = (lang === 'ar') ? searchInput.getAttribute('data-ar') : searchInput.getAttribute('data-en');
      }
      document.dispatchEvent(new CustomEvent('langChange', { detail: { lang: lang } }));
      // persist language preference
      try { localStorage.setItem('langPreference', lang); } catch (e) { }
    }
    // get stored language or default to Arabic
    var storedLang = null;
    try { storedLang = localStorage.getItem('langPreference'); } catch (e) { }
    if (!storedLang) storedLang = 'ar';
    setLang(storedLang);
    langBtn.addEventListener('click', function () {
      setLang(window.currentLang === 'ar' ? 'en' : 'ar');
    });
