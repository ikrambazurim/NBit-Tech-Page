// Run after the page is fully loaded
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

    /** Hero Section Animation */
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.remove('animate-bg');
        void heroSection.offsetWidth; // Trigger reflow
        setTimeout(() => {
            heroSection.classList.add('animate-bg');
        }, 300);
    }

});
