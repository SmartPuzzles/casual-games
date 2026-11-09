(() => {
  const root = document.documentElement;
  let selected = 'dark';
  try { const saved = localStorage.getItem('casual-games-theme'); if (saved === 'light' || saved === 'dark') selected = saved; } catch (_) {}
  root.dataset.theme = selected;
  function ready() {
    const controls = document.querySelectorAll('[data-theme-toggle]');
    function update() {
      for (const button of controls) {
        const light = root.dataset.theme === 'light';
        button.hidden = false;
        button.textContent = light ? 'Dark mode' : 'Light mode';
        button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
        button.setAttribute('aria-pressed', String(light));
      }
    }
    for (const button of controls) button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('casual-games-theme', root.dataset.theme); } catch (_) {}
      update();
    });
    update();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
