document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
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
