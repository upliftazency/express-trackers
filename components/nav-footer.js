// components/nav-footer.js

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerHTML = `
        <div class="nav-container container">
            <a href="index.html" class="logo">
                <!-- SVG Icon for Logistics -->
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Express Trackers
            </a>
            <div class="mobile-menu-btn" id="mobileMenuBtn">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
            <nav class="nav-links" id="navLinks">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="services.html">Services</a>
                <!-- <a href="tracking.html">Track Shipment</a> -->
                <a href="contact.html">Contact</a>
                <a href="contact.html" class="btn btn-primary">Get Quote</a>
            </nav>
        </div>
    `;

    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);

    // Set Active Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = header.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Inject Footer
    const footerHTML = `
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="logo" style="color: white; margin-bottom: 1rem;">
                    Express Trackers
                </div>
                <p>Since 2014, we have provided fast door delivery, personalized logistics solutions, and reliable domestic & international shipping.</p>
                <div class="social-links" style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <!-- Placeholder Social Icons -->
                    <a href="#" style="color: white;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    <a href="#" style="color: white;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    <a href="#" style="color: white;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <!-- <li><a href="tracking.html">Track Shipment</a></li> -->
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our Services</h4>
                <ul class="footer-links">
                    <li><a href="services.html">Air Freight</a></li>
                    <li><a href="services.html">Rail Transport</a></li>
                    <li><a href="services.html">Road Transport</a></li>
                    <li><a href="services.html">Warehousing</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact Info</h4>
                <ul class="footer-links">
                    <li>📞 +1 234 567 8900</li>
                    <li>✉️ info@expresstrackers.com</li>
                    <li>🏢 123 Logistics Way, Global City, GC 10001</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; ${new Date().getFullYear()} Express Trackers. Premium Logistics Solutions. All Rights Reserved.
        </div>
    `;

    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);

    // Dispatch custom event to signal components are loaded
    document.dispatchEvent(new Event('componentsLoaded'));
});
