(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const aboutCard = document.getElementById('about-card');
        
        // Handle all custom buttons with hash links
        const buttons = document.querySelectorAll('.custom-btn[href^="#"]');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Intersection Observer for Active Section Highlighting
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all buttons
                    buttons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to the corresponding button
                    const id = entry.target.getAttribute('id');
                    const activeButton = document.querySelector(`.custom-btn[href="#${id}"]`);
                    if (activeButton) {
                        activeButton.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        // Observe all sections that have a corresponding nav button
        buttons.forEach(btn => {
            const targetId = btn.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                observer.observe(targetSection);
            }
        });

        // No scroll event listener needed as it's now part of the flow
    });
})();
