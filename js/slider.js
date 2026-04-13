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
    const intervalTime = 4000; // 4 seconds instead of 3 for better readability

    function initSlider() {
        // Show first slide
        slides[0].classList.add('active');
        if(dots[0]) dots[0].classList.add('active');

        // Start auto slide
        startSlide();
    }

    function goToSlide(n) {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');
        if(dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = (n + slideCount) % slideCount;

        // Add active class to new
        slides[currentSlide].classList.add('active');
        if(dots[currentSlide]) dots[currentSlide].classList.add('active');
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
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlide();
            startSlide(); // reset timer
        });
    }

    if(prevBtn) {
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
        }, {passive: true});
        
        heroSection.addEventListener('touchend', e => {
          touchendX = e.changedTouches[0].screenX;
          handleGesture();
        }, {passive: true});
    }

    // Initialize
    initSlider();
});
