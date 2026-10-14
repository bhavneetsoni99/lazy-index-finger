// Instagram: auto-click next every 10s. Run again to stop.
(() => {
  if (window.__igNext) {
    clearInterval(window.__igNext);
    window.__igNext = null;
    return;
  }
  window.__igNext = setInterval(() => {
    if (document.hidden) return;
    const els = document.querySelectorAll(
      'body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div:nth-child(1) > div > div > div._aaqg._aaqh > button'
    );
    (els.length > 1 ? els[1] : els[0])?.click();
  }, 10000);
})();
