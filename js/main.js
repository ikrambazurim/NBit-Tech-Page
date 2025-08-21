// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Header (single event listener)
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('active', window.scrollY > 300);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero section animation
window.addEventListener('load', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        setTimeout(() => heroSection.classList.add('animate-bg'), 300);
    }
});

// Fade-in animation when scrolling
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll('.service-card, .product-card, .client-logo');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => observer.observe(el));
});

// Form submission handler (EmailJS)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    emailjs.sendForm('service_7zo66gu', 'template_b2qx6zk', this)
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        });
});
// products-scroll.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".products-grid");
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");
  const scrollAmount = 300; // card width + gap

  // Function to scroll
  window.scrollCarousel = (direction) => {
    grid.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 300); // check after scroll animation
  };

  // Update button states
  function updateButtons() {
    const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

    if (grid.scrollLeft <= 0) {
      leftBtn.classList.add("hidden");
    } else {
      leftBtn.classList.remove("hidden");
    }

    if (grid.scrollLeft >= maxScrollLeft - 1) {
      rightBtn.classList.add("hidden");
    } else {
      rightBtn.classList.remove("hidden");
    }
  }

  // Initial check
  updateButtons();

  // Update when user scrolls manually
  grid.addEventListener("scroll", updateButtons);
});
