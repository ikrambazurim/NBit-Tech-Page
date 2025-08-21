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
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            btn.disabled = true; // Disable button
            btn.textContent = 'Sending...';

            emailjs.sendForm('service_7zo66gu', 'template_b2qx6zk', this)
                .then(() => {
                    alert('Message sent successfully!');
                    this.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Error sending message. Please try again.');
                })
                .finally(() => {
                    btn.disabled = false;
                    btn.textContent = 'Send Message';
                });
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

        // Intersection Observer for scroll animations
    const animateOnScroll = (elements, className) => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add(className);
            }
        });
        }, { threshold: 0.1 });

        elements.forEach(element => {
        observer.observe(element);
        });
    };

    // Animate all reveal elements
    const reveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    animateOnScroll(reveal, 'active');

    // Optional: Add hover effect to images with delay
    const hisImages = document.querySelectorAll('.his-image img');
    hisImages.forEach((img, index) => {
        img.style.transitionDelay = `${index * 0.1}s`;
    });
});

// === Existing Menu Toggle ===
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const cylinderSection = document.querySelector(".cylinder-section");
  if (!cylinderSection) return;

  const buttons = cylinderSection.querySelectorAll(".cylinder-btn");
  const contents = cylinderSection.querySelectorAll(".popup-content");
  const placeholder = cylinderSection.querySelector(".popup-placeholder");

  buttons.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
      // Reset
      contents.forEach(c => c.classList.remove("active"));

      // Show hovered content
      contents[index].classList.add("active");

      if (placeholder) placeholder.style.display = "none";
    });
  });

  // Reset when leaving the whole section
  cylinderSection.addEventListener("mouseleave", () => {
    contents.forEach(c => c.classList.remove("active"));
    if (placeholder) placeholder.style.display = "block";
  });
});

