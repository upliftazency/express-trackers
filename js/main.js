// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Wait for components to inject before binding navigation logic
    document.addEventListener('componentsLoaded', initNavigation);

    // Fallback if event fires before or components don't emit
    setTimeout(() => {
        if(!document.getElementById('mobileMenuBtn')) {
            initNavigation();
        }
    }, 500);

    function initNavigation() {
        const header = document.querySelector('header');
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        // Sticky Header scroll effect
        const handleScroll = () => {
            const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPos > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.body.addEventListener('scroll', handleScroll, { passive: true });
        
        // Trigger scroll immediately to set correct state
        handleScroll();
    }
});
