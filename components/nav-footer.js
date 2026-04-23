// components/nav-footer.js

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerHTML = `
        <div class="nav-container container">
            <a href="/" class="logo">
                <img src="assets/logo.png" alt="Express Trackers Logo" style="height: 60px;">
            </a>
            <div class="mobile-menu-btn" id="mobileMenuBtn">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
            <nav class="nav-links" id="navLinks">
                <a href="/">Home</a>
                <a href="about">About Us</a>
                <a href="services">Services</a>
                <!-- <a href="tracking">Track Shipment</a> -->
                <a href="contact" class="btn btn-primary mobile-only-btn">Contact Us</a>
            </nav>
            <div class="nav-actions">
                <a href="contact" class="btn btn-primary">Contact Us</a>
            </div>
        </div>
    `;

    const header = document.createElement('header');
    header.innerHTML = headerHTML;
    document.body.prepend(header);

    // Mobile Menu Toggle
    const mobileBtn = header.querySelector('#mobileMenuBtn');
    const navLinks = header.querySelector('#navLinks');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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

    // Set Active Link
    const currentPage = window.location.pathname.split('/').pop() || '/';
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
                <div class="logo" style="margin-bottom: 1rem;">
                    <img src="assets/logo.png" alt="Express Trackers Logo" style="height: 75px; background: white; padding: 5px; border-radius: 4px;">
                </div>
                <p>Since 2014, we have provided fast door delivery, personalized logistics solutions, and reliable domestic & international shipping.</p>
                <div class="social-links" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
                    <p style="font-size: 0.95rem; font-weight: 500; margin-bottom: 0.2rem;">Connect with us:</p>
                    <div style="display: flex; gap: 1rem;">
                        <a href="https://wa.me/919321759269" target="_blank" style="color: white; transition: 0.3s;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                        <a href="https://www.facebook.com/share/1MGox6zQ5x/" target="_blank" style="color: white; transition: 0.3s;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="https://www.instagram.com/vishwasrao.amol149?utm_source=qr&igsh=YW55MThzdHpuajln" target="_blank" style="color: white; transition: 0.3s;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="https://in.linkedin.com/in/amol-vishwasrao-b343597a" target="_blank" style="color: white; transition: 0.3s;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                    </div>
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <!-- <li><a href="tracking">Track Shipment</a></li> -->
                    <li><a href="contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our Services</h4>
                <ul class="footer-links">
                    <li><a href="services">Ocean Freight</a></li>
                    <li><a href="services">Air Freight</a></li>
                    <li><a href="services">Custom Clearance</a></li>
                    <li><a href="services">Courier & Cargo</a></li>
                    <li><a href="services">Road Transportation</a></li>
                    <li><a href="services">Warehousing</a></li>
                    <li><a href="services">Marine Cargo Insurance</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact Info</h4>
                <ul class="footer-links" style="font-size: 0.95rem; line-height: 1.8;">
                    <li style="display: flex; align-items: flex-start; gap: 8px;"><span>📞</span> <span>+91 9325405118</span></li>
                    <li style="display: flex; align-items: flex-start; gap: 8px;"><span>✉️</span> <span style="word-break: break-word;">freight@expresstrackers.in</span></li>
                    <li style="display: flex; align-items: flex-start; gap: 8px;"><span>🏢</span> <span>Naigaon (W), Vasai - 401207</span></li>
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
