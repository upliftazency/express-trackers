// js/slider.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;
    const intervalTime = 4000; // 4 seconds delay

    function initSlider() {
        // Show first slide
        slides[0].classList.add('active');
        if (dots[0]) dots[0].classList.add('active');

        // Start auto slide
        startSlide();
    }

    function goToSlide(n) {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = (n + slideCount) % slideCount;

        // Add active class to new
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopSlide() {
        clearInterval(slideInterval);
    }

    // Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlide();
            startSlide(); // reset timer
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlide();
            startSlide(); // reset timer
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopSlide();
            startSlide();
        });
    });

    // Pause on hover over the slider section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlide);
        heroSection.addEventListener('mouseleave', startSlide);
    }

    // Touch support for swiping
    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
        if (touchendX < touchstartX - 50) {
            // Swiped left
            nextSlide();
            stopSlide(); startSlide();
        }
        if (touchendX > touchstartX + 50) {
            // Swiped right
            prevSlide();
            stopSlide(); startSlide();
        }
    }

    if (heroSection) {
        heroSection.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        }, { passive: true });

        heroSection.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        }, { passive: true });
    }

    // Initialize
    initSlider();

    // Testimonial Slider
    const testTrack = document.getElementById('testimonialTrack');
    const testDotsContainer = document.getElementById('testimonialDots');
    if (testTrack && testDotsContainer) {
        const testSlides = document.querySelectorAll('.testimonial-slide');
        let currentTestSlide = 0;
        
        // Calculate max index based on viewport width
        function getMaxIndex() {
            if (window.innerWidth < 768) return testSlides.length - 1; // mobile: 1 per view
            if (window.innerWidth < 992) return Math.max(0, testSlides.length - 2); // tablet: 2 per view
            return Math.max(0, testSlides.length - 3); // desktop: 3 per view
        }

        function createTestDots() {
            testDotsContainer.innerHTML = '';
            const maxIdx = getMaxIndex();
            for (let i = 0; i <= maxIdx; i++) {
                const dot = document.createElement('div');
                dot.className = `test-dot ${i === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goTestSlide(i));
                testDotsContainer.appendChild(dot);
            }
        }

        function updateTestDots() {
            const dots = testDotsContainer.querySelectorAll('.test-dot');
            dots.forEach((dot, idx) => {
                if (idx === currentTestSlide) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }

        function goTestSlide(index) {
            const maxIdx = getMaxIndex();
            if (index > maxIdx) index = 0; // Wrap around for auto-play
            if (index < 0) index = maxIdx;
            
            currentTestSlide = index;
            
            // Calculate slide width + gap
            const slideWidth = testSlides[0].offsetWidth;
            const gap = 32; // 2rem gap
            const offset = currentTestSlide * (slideWidth + gap);
            
            testTrack.style.transform = `translateX(-${offset}px)`;
            updateTestDots();
        }

        createTestDots();
        window.addEventListener('resize', () => {
            createTestDots();
            goTestSlide(currentTestSlide);
        });

        // Auto-play for testimonials
        let testInterval;
        function startTestSlide() {
            testInterval = setInterval(() => {
                goTestSlide(currentTestSlide + 1);
            }, 3000);
        }
        function stopTestSlide() {
            clearInterval(testInterval);
        }

        startTestSlide();

        // Swipe for testimonials
        let tstartX = 0;
        let tendX = 0;
        const testContainer = document.querySelector('.testimonial-slider-container');
        
        if (testContainer) {
            testContainer.addEventListener('mouseenter', stopTestSlide);
            testContainer.addEventListener('mouseleave', startTestSlide);

            testContainer.addEventListener('touchstart', e => {
                tstartX = e.changedTouches[0].screenX;
                stopTestSlide();
            }, { passive: true });

            testContainer.addEventListener('touchend', e => {
                tendX = e.changedTouches[0].screenX;
                if (tendX < tstartX - 50) goTestSlide(currentTestSlide + 1);
                if (tendX > tstartX + 50) goTestSlide(currentTestSlide - 1);
                startTestSlide();
            }, { passive: true });
        }
    }
});
