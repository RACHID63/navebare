var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.classList.remove('active');
});
// Parcourez les liens et ajoutez un écouteur d'événement au clic
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Supprimez la classe "active" de tous les liens
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Ajoutez la classe "active" au lien cliqué
        this.classList.add('active');
    });
});