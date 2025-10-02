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


























<script>
  document.getElementById("promo-close").addEventListener("click", () => {
    document.getElementById("promo-overlay").classList.add("hidden");
  });

  // Example countdown timer (set to 2 hours)
  function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    const display = document.getElementById("promo-countdown");
    setInterval(() => {
      days = Math.floor(timer / (24*60*60));
      hours = Math.floor((timer % (24*60*60)) / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = Math.floor(timer % 60);

      display.textContent = 
        String(days).padStart(2, "0") + ":" +
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      if (--timer < 0) timer = 0;
    }, 1000);
  }

  // Start countdown for 2 hours (7200 seconds)
  startCountdown(7200);
</script>









