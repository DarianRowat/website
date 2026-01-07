/*
  Shared layout bits ("static components") for the site:
  - header title
  - nav buttons (with active state)
  - footer

  This keeps your pages as plain HTML, but lets you change nav/footer once.
*/

(function () {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
    { href: 'tab_sys.html', label: 'Tracker' },
  ];

  const activePath = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const navEl = document.getElementById('site-nav');

  if (headerEl) {
    headerEl.innerHTML = `
      <header class="bg-panel/80 backdrop-blur border-b border-highlight/20">
        <div class="mx-auto max-w-5xl px-4 py-5 text-center">
          <h1 class="font-hacked text-4xl sm:text-5xl tracking-widest text-highlight">DARIAN ROWAT</h1>
        </div>
      </header>
    `;
  }

  if (navEl) {
    const links = pages
      .map((p) => {
        const isActive = p.href.toLowerCase() === activePath;
        const base =
          'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow ' +
          'transition focus:outline-none focus:ring-2 focus:ring-highlight/60 focus:ring-offset-2 focus:ring-offset-bg';
        const active = 'bg-highlight text-panel';
        const normal = 'bg-accent text-bg hover:bg-highlight hover:text-panel';
        return `<a href="${p.href}" class="${base} ${isActive ? active : normal}">${p.label}</a>`;
      })
      .join('');

    navEl.innerHTML = `
      <nav class="bg-panel/70 backdrop-blur border-b border-highlight/10">
        <div class="mx-auto max-w-5xl px-4 py-3">
          <div class="flex flex-wrap items-center justify-center gap-3">
            ${links}
          </div>
        </div>
      </nav>
    `;
  }

  if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.innerHTML = `
      <footer class="bg-panel/70 backdrop-blur border-t border-highlight/10">
        <div class="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-text/80">
          <p>&copy; ${year} Darian Rowat. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
})();
