document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour changer de page
    function changePage(targetId) {
        // Cache toutes les pages
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
            page.classList.remove('active');
        });

        // Affiche la page ciblée
        const targetPage = document.getElementById(targetId);
        setTimeout(() => {
            targetPage.style.display = 'block';
            setTimeout(() => targetPage.classList.add('active'), 10); // Léger délai pour la transition CSS
        }, 10);
    }

    // Ajoute des écouteurs d'événements aux boutons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            changePage(targetId);
        });
    });

    // Initialise la première page comme active
    changePage('page1');
});
