
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