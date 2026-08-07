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
// 3D tilt — hero illustration stack
// ============================================
const heroVisual = document.querySelector('.hero-visual');
const heroStack = document.querySelector('.hero-stack');

if (heroVisual && heroStack && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height;    // 0 -> 1
    const rotateY = (x - 0.5) * 24;   // -12deg .. 12deg
    const rotateX = (0.5 - y) * 20;   // -10deg .. 10deg
    heroStack.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroVisual.addEventListener('mouseleave', () => {
    heroStack.style.transform = 'rotateX(6deg) rotateY(-8deg)';
  });
}

// ============================================
// 3D tilt — project cards
// ============================================
const tiltCards = document.querySelectorAll('.project-card');

if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 8;
      card.style.transform = `translateY(-4px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

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
