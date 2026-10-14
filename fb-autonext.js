// Facebook: auto-click "Next photo" every 15s. Run again to stop.
(() => {
  if (window.__fbNext) {
    clearInterval(window.__fbNext);
    window.__fbNext = null;
    return;
  }
  window.__fbNext = setInterval(() => {
    if (document.hidden) return;
    const els = document.querySelectorAll('[aria-label="Next photo"]');
    (els.length > 1 ? els[1] : els[0])?.click();
  }, 15000);
})();
