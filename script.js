document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);
            document.querySelectorAll('.page').forEach(page => {
                if(page.id === targetId) {
                    page.classList.add('active');
                    page.style.display = 'block'; // Commencez à afficher avant l'animation pour un fade-in
                    setTimeout(() => page.classList.add('active'), 10); // Léger délai pour la transition CSS
                } else {
                    page.classList.remove('active');
                    setTimeout(() => page.style.display = 'none', 500); // Cachez après l'animation pour un fade-out
                }
            });
        });
    });
});

