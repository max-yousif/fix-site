document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Smooth scroll naar secties op dezelfde pagina (bv. #team, #specialisaties, #contact, #top)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // Sluit het mobiele menu na een klik, ongeacht welke link
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Praktijkruimte-carrousel
  const carousel = document.getElementById('gallery-carousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevBtn = carousel.querySelector('.carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.carousel-arrow.next');
    const dotsWrap = carousel.querySelector('.carousel-dots');
    let index = 0;
    let autoplayTimer = null;
    const AUTOPLAY_MS = 5000;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Foto ${i + 1} van ${slides.length}`);
      dot.addEventListener('click', () => goTo(i, true));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }

    function goTo(i, userInitiated) {
      index = (i + slides.length) % slides.length;
      render();
      if (userInitiated) restartAutoplay();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1, true));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1, true));

    function startAutoplay() {
      if (reduceMotion || slides.length < 2) return;
      autoplayTimer = window.setInterval(next, AUTOPLAY_MS);
    }
    function stopAutoplay() {
      if (autoplayTimer) window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoplay(); else startAutoplay();
    });

    // Swipe-ondersteuning voor touch
    let touchStartX = null;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (touchStartX === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        deltaX < 0 ? goTo(index + 1) : goTo(index - 1);
      }
      touchStartX = null;
      restartAutoplay();
    });

    render();
    startAutoplay();
  }
});
