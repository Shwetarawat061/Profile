// ============================================
// Typed hero line
// ============================================
const typedEl = document.getElementById('typed-text');
const phrases = [
  'AI/ML Developer.',
  'Full-Stack Builder.',
  'Problem Solver.'
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeLoop() {
  if (!typedEl) return;

  if (prefersReducedMotion) {
    typedEl.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 35 : 70);
  }

  tick();
}

typeLoop();

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-links-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Reveal-on-scroll for section headers and cards
// ============================================
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealEls = document.querySelectorAll('.project-card, .section-head, .about-block, .skills-row');
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}
