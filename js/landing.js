/**
 * Vanguard AutoPartes - Landing Page JavaScript
 * Interactions and dynamic functionality
 */

(function () {
    'use strict';

    // ========================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only handle anchor links
            if (href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========================================
    // ACTIVE NAVIGATION STATE
    // ========================================
    function setActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Run on scroll
    window.addEventListener('scroll', setActiveNav);

    // ========================================
    // STICKY HEADER ON SCROLL
    // ========================================
    let lastScroll = 0;
    const headerNav = document.querySelector('.header-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            headerNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            headerNav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // CATEGORY HOVER EFFECTS
    // ========================================
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // WHATSAPP BUTTON ANALYTICS (Optional)
    // ========================================
    const whatsappButton = document.querySelector('.whatsapp-float');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', function () {
            // Track analytics if needed (Google Analytics, etc.)
            console.log('WhatsApp button clicked');

            // Optional: Add custom tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp Float Button'
                });
            }
        });
    }

    // ========================================
    // LAZY LOAD IMAGES (Performance optimization)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // ANIMATE ON SCROLL (Optional enhancement)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply to specific elements if needed
    const fadeElements = document.querySelectorAll('.category-item, .service-tile, .value-tile');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // ========================================
    // MOBILE MENU OVERLAY
    // ========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Open mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
        });
    }

    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
        });
    }

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
        }
    });

    // ========================================
    // PAGE LOAD ANIMATION
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // ========================================
    // CONSOLE BRANDING (Optional fun touch)
    // ========================================
    console.log(
        '%c🚗 Vanguard AutoPartes',
        'font-size: 20px; font-weight: bold; color: #e30613;'
    );
    console.log(
        '%cLo mejor para tu auto',
        'font-size: 14px; color: #0088cc;'
    );

})();
