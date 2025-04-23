AOS.init();
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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

  
  
  