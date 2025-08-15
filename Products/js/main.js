window.addEventListener('load', () => {
    /*Mobile Menu Toggle*/
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /*Sticky Header*/
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 100);
        });
    }

    /*Back to Top Button*/
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('active', window.scrollY > 300);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /*Smooth Scrolling Links*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /*Contact Form Submission*/
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message')?.value || '';

            alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            contactForm.reset();
        });
    }

    /*Hero Section Animation*/
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        setTimeout(() => {
            heroSection.classList.add('animate-bg');
        }, 300);
    }

    /*Scroll Reveal Animations*/
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    /*ERP Tab Functionality - Corrected Placement*/
    const erpTabButtons = document.querySelectorAll('.erp-tab-btn');
    const erpFeaturePanels = document.querySelectorAll('.erp-feature-panel');
    
    if (erpTabButtons.length && erpFeaturePanels.length) {
        erpTabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and panels
                erpTabButtons.forEach(btn => btn.classList.remove('erp-active'));
                erpFeaturePanels.forEach(panel => panel.classList.remove('erp-active'));
                
                // Add active class to clicked button
                this.classList.add('erp-active');
                
                // Show corresponding panel
                const erpTabId = this.getAttribute('data-erp-tab');
                const erpActivePanel = document.getElementById(erpTabId);
                if (erpActivePanel) {
                    erpActivePanel.classList.add('erp-active');
                }
            });
        });
        
        // Initialize first tab as active if none is active
        if (!document.querySelector('.erp-tab-btn.erp-active')) {
            erpTabButtons[0]?.classList.add('erp-active');
            erpFeaturePanels[0]?.classList.add('erp-active');
        }
    }
});