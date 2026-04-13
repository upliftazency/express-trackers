// js/tracking.js

document.addEventListener('DOMContentLoaded', () => {
    const trackingForm = document.getElementById('trackingForm');
    const trackingResult = document.getElementById('trackingResult');
    const trackingSteps = document.querySelectorAll('.tracking-step');

    if (trackingForm) {
        trackingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idInput = document.getElementById('trackingId').value.trim();
            
            if (idInput === '') return;

            // Show loading state
            const btn = trackingForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Tracking...';
            btn.disabled = true;

            // Simulate API Call delay
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                
                // Show Result Container
                trackingResult.classList.remove('hidden');
                
                // Mock logic to show different states based on ID length or ending
                // For demo: if ends in 1 = processing, 2 = transit, else delivered
                const lastChar = idInput.slice(-1);
                
                // Reset states
                trackingSteps.forEach(step => {
                    step.classList.remove('completed', 'current');
                });

                if (lastChar === '1') {
                    // Processing
                    trackingSteps[0].classList.add('current');
                } else if (lastChar === '2') {
                    // In Transit
                    trackingSteps[0].classList.add('completed');
                    trackingSteps[1].classList.add('current');
                } else {
                    // Delivered
                    trackingSteps[0].classList.add('completed');
                    trackingSteps[1].classList.add('completed');
                    trackingSteps[2].classList.add('completed');
                    trackingSteps[2].classList.add('current');
                }

                // Scroll to result smoothly
                trackingResult.scrollIntoView({ behavior: 'smooth', block: 'center' });

            }, 1000); // 1s delay
        });

        // If URL contains ID, trigger automatically
        const urlParams = new URLSearchParams(window.location.search);
        const urlId = urlParams.get('id');
        if(urlId) {
            document.getElementById('trackingId').value = urlId;
            trackingForm.dispatchEvent(new Event('submit'));
        }
    }
});
