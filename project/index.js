document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
        });
    });

    const carousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
        interval: 3000 
    });

    const toggleButton = document.querySelector('.btn-primary');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            this.classList.toggle('btn-primary-clicked');
        });
    }

});
