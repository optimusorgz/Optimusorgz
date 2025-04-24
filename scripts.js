document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  }
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Initialize Swiper if it exists
  if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
    });
  }
});

  const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.mobile-menu'); // Select the mobile menu

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
    });

    // Optional: Close the mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

  
  
  