/* Mobile-menu toggle — replaces the Astra theme JS the archive dropped.
   Astra's own CSS reveals the native mobile menu when the toggle's aria-expanded
   is "true", so we just flip that (plus a body hook) via event delegation. */
(function () {
  // Mobile menu toggle (Astra theme JS was lost).
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.main-header-menu-toggle, .menu-toggle');
    if (!t) return;
    e.preventDefault();
    var open = document.body.classList.toggle('psiapps-nav-open');
    document.querySelectorAll('.main-header-menu-toggle, .menu-toggle').forEach(function (b) {
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Case-study aside: wrap the index + download button so they stick together.
  function wrapAside() {
    var nav = document.querySelector('.elementor-widget-nav-menu');
    if (!nav || document.querySelector('.psiapps-sticky-aside')) return;
    var wrap = nav.parentElement;
    var btn = wrap && wrap.querySelector('.elementor-widget-button');
    if (!btn) return;
    var aside = document.createElement('div');
    aside.className = 'psiapps-sticky-aside';
    wrap.insertBefore(aside, nav);
    aside.appendChild(nav);
    aside.appendChild(btn);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wrapAside);
  } else {
    wrapAside();
  }
})();
