// Instagram: hide the overlay that blocks right-click so images can be saved.
(() => {
  const style = document.createElement('style');
  style.innerHTML = '._aagu > *:not(._aagv){ display: none !important; }';
  document.head.appendChild(style);
})();
