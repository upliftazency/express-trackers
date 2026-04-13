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

        // Mobile Menu Toggle
        if (mobileBtn && navLinks) {
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                
                // Toggle icon
                if (navLinks.classList.contains('active')) {
                    mobileBtn.innerHTML = `
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    `;
                } else {
                    mobileBtn.innerHTML = `
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    `;
                }
            });
        }
    }
});
