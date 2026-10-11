document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Project Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 2. Dynamic Typing Simulation for Subheader
  const roles = [
    'Full-Stack Builder',
    'AI / ML Engineer',
    'Applied NLP Explorer',
    'Rapid Prototyper'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const roleElement = document.querySelector('.role-text');

  if (roleElement) {
    function typeLoop() {
      const currentRole = roles[roleIndex];
      let displayText = '';

      if (isDeleting) {
        displayText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        displayText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      roleElement.innerHTML = `${displayText}<span class="cursor">_</span>`;

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 1800; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400; // Pause before typing new word
      }

      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }

  // 3. Smooth active link tracking on scroll
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 100;
      if (window.scrollY >= secTop) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.style.color = 'var(--accent-mint)';
      }
    });
  });
});
