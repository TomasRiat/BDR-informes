
  // ----------- menu hamburguesa navbar ----------- //

    document.addEventListener('DOMContentLoaded', function() {
        let toggleBtn = document.getElementById('toggle-menu');
        let menuIcon = document.getElementById('menu-icon');
        let nav = document.getElementById('navbar__navigation');
    
        toggleBtn.addEventListener('click', function() {
            nav.classList.toggle('visible');
        
            if (nav.classList.contains('visible')) {
                menuIcon.src = './assets/img/close.svg';
            } else {
                menuIcon.src = './assets/img/open.svg';
            }
        });
    });


    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    
      slides[n].classList.add('active');
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // Cambia automáticamente las diapositivas cada 5 segundos (5000 milisegundos)
    setInterval(nextSlide, 5000);