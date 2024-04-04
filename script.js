document.addEventListener('DOMContentLoaded', function() {
    let currentPageIndex = 1;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetIndex = parseInt(this.getAttribute('data-target'), 10);
            changePage(targetIndex);
        });
    });

    function changePage(targetIndex) {
        const currentPage = document.querySelector('.page.active');
        const targetPage = document.querySelector(`.page[data-index="${targetIndex}"]`);

        // Assurez-vous que la page ciblée est initialement masquée et prête pour l'animation
        targetPage.style.display = 'block';

        // Choix de l'animation basé sur l'index de la page
        const slideOutClass = targetIndex > currentPageIndex ? 'slide-out-left' : 'slide-out-right';
        const slideInClass = targetIndex > currentPageIndex ? 'slide-in-from-right' : 'slide-in-from-left';

        // Application des classes pour l'animation
        currentPage.classList.add(slideOutClass);
        targetPage.classList.add(slideInClass, 'active');

        // Mise à jour de l'index de la page courante
        currentPageIndex = targetIndex;

        // Nettoyage après l'animation
        currentPage.addEventListener('animationend', () => {
            currentPage.classList.remove('active', slideOutClass);
            currentPage.style.display = 'none';
        }, { once: true });

        targetPage.addEventListener('animationend', () => {
            targetPage.classList.remove(slideInClass);
        }, { once: true });
    }

    // Masquez toutes les pages sauf la page active au chargement
    document.querySelectorAll('.page:not(.active)').forEach(page => {
        page.style.display = 'none';
    });
});
