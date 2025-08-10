
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Mobile nav toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // CTA ripple effect
    document.getElementById('ctaButton').addEventListener('click', function(e) {
      e.preventDefault();
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size/2;
      const y = e.clientY - rect.top - size/2;
      ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);width:${size}px;height:${size}px;left:${x}px;top:${y}px;transform:scale(0);animation:ripple 0.6s linear;pointer-events:none;`;
      this.append(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
    const style = document.createElement('style');
    style.textContent = '@keyframes ripple { to { transform: scale(2); opacity: 0; } }';
    document.head.append(style);
  