(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const aboutCard = document.getElementById('about-card');
        
        // Find the "About" button
        const buttons = document.querySelectorAll('.custom-btn');
        let aboutButton = null;
        buttons.forEach(btn => {
            if (btn.textContent.trim() === 'About') {
                aboutButton = btn;
            }
        });

        if (aboutButton && aboutCard) {
            aboutButton.addEventListener('click', (e) => {
                e.preventDefault();
                aboutCard.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // No scroll event listener needed as it's now part of the flow
    });
})();
