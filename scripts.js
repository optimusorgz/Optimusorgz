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
const navbar = document.getElementById('mainNavbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Optional: Close the mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// join us link 
  
const dynamicURL = "https://script.google.com/macros/s/AKfycbwozfJIemTBTOZbuHJHyiv7cSqXf98k1ZHN3NtAiRpxlic_1mj6uuR4DNpInsbf5T1MHg/exec"; // Change only this line
document.getElementById("dynamic-link").href = dynamicURL;
  
  

