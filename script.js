document.addEventListener('DOMContentLoaded', function() {
    function changePage(targetId) {
        const currentPage = document.querySelector('.page.active');
        const targetPage = document.getElementById(targetId);

        // Assure que la page cible est prête pour l'animation (positionnée hors écran à gauche)
        targetPage.style.display = 'block';
        targetPage.classList.add('pre-active');

        if (currentPage) {
            currentPage.classList.add('slide-out');
            currentPage.addEventListener('animationend', function() {
                this.style.display = 'none';
                this.classList.remove('active', 'slide-out');

                // Initie l'animation d'entrée après que la page actuelle est complètement cachée
                targetPage.classList.remove('pre-active');
                targetPage.classList.add('active', 'slide-in');
                targetPage.addEventListener('animationend', function() {
                    this.classList.remove('slide-in');
                }, { once: true });
            }, { once: true });
        } else {
            // Si aucune page n'est active initialement, affiche directement la cible
            setTimeout(() => targetPage.classList.add('active'), 10);
        }
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            changePage(targetId);
        });
    });

    // Prépare la première page sans animation
    const firstPage = document.getElementById('page1');
    firstPage.style.display = 'block';
    setTimeout(() => firstPage.classList.add('active'), 10);
});
