// js/animations.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Add staggered reveals dynamically for grids
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        const gridItems = grid.querySelectorAll('.reveal');
        gridItems.forEach((item, index) => {
            // Apply delay classes (100, 200, 300, etc. up to 500)
            const delay = ((index % 5) + 1) * 100;
            item.classList.add(`delay-${delay}`);
        });
    });
});
