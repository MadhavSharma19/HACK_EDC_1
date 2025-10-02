/* Navigation toggles & particles
   Works for both index and other pages.
*/
document.addEventListener('DOMContentLoaded', () => {
  // Menu toggles (there are two headers used across pages)
  const togglePairs = [
    {btnId: 'nav-toggle', menuId: 'mobile-nav'},
    {btnId: 'nav-toggle-2', menuId: 'mobile-nav-2'}
  ];

  togglePairs.forEach(pair => {
    const btn = document.getElementById(pair.btnId);
    const menu = document.getElementById(pair.menuId);
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  // Particles generator (subtle, lightweight)
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const colors = ['#ff7a59', '#ffb86b', '#7ce3c5', '#6dd3ff'];
    const num = Math.min(Math.round(window.innerWidth / 80), 24);
    for (let i = 0; i < num; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle-dot';
      const size = Math.random() * 18 + 6;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.opacity = (Math.random() * 0.25 + 0.06).toString();
      dot.style.transform = `translate(-50%, -50%)`;
      dot.style.animation = `float ${(5 + Math.random() * 8).toFixed(2)}s ease-in-out ${Math.random() * 3}s infinite`;
      particlesContainer.appendChild(dot);
    }
  }

  // Simple animation helper to add fade-up on load
  document.querySelectorAll('.fade-up').forEach((el, idx) => {
    el.style.animationDelay = `${idx * 120}ms`;
    el.classList.add('visible');
  });

  // small console confirmation
  console.log('UI enhancements loaded');
});

























//LIMITED
// Promo countdown + dismiss (place inside DOMContentLoaded area)
<script>
// LIMITED Promo countdown + dismiss
(function setupPromo(){
  const targetDate = new Date(2025, 9, 5, 23, 59, 59); // <-- set deadline

  // elements (popup or banner)
  const overlay = document.getElementById('promo-overlay');
  const banner  = document.getElementById('promo-banner');
  const cdEl    = document.getElementById('promo-countdown');
  const closeBtn= document.getElementById('promo-close');

  if (!cdEl) return; // no promo on this page

  // check session storage (dismissed once)
  if (sessionStorage.getItem('promoDismissed')) {
    if (overlay) overlay.style.display = 'none';
    if (banner) banner.style.display = 'none';
    return;
  }

  // countdown function
  function fmt(n){ return String(n).padStart(2,'0'); }
  function update() {
    const now = new Date();
    let diff = Math.max(0, Math.floor((targetDate - now) / 1000));
    if (diff <= 0) {
      cdEl.textContent = 'Offer ended';
      setTimeout(()=> {
        if (overlay) overlay.style.display = 'none';
        if (banner) banner.style.display = 'none';
      }, 3000);
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff / 86400); diff %= 86400;
    const hours = Math.floor(diff / 3600); diff %= 3600;
    const minutes = Math.floor(diff / 60); const seconds = diff % 60;
    cdEl.textContent = `${fmt(days)}d ${fmt(hours)}h ${fmt(minutes)}m ${fmt(seconds)}s`;
  }

  update();
  const timer = setInterval(update, 1000);

  // dismiss handler
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (overlay) overlay.style.display = 'none';
      if (banner) banner.style.display = 'none';
      sessionStorage.setItem('promoDismissed', '1');
    });
  }

  // AUTO-SHOW popup (only for index.html where overlay exists)
  if (overlay) {
    setTimeout(() => overlay.classList.remove('hidden'), 1500);
  }
})();
</script>











