// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
      // Close mobile menu if open
      document.querySelector('nav').classList.remove('active');
  });
});