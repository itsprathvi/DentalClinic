// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Gallery Filter
const tabButtons = document.querySelectorAll('.tab-button');
const galleryItems = document.querySelectorAll('.gallery-item');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter gallery items
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form Submission Handler (Formspree)
const appointmentForm = document.querySelector('.appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        // Get form values for validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const branch = document.getElementById('branch').value;
        const treatment = document.getElementById('treatment').value;

        // Validate form
        if (!name || !email || !phone || !branch || !treatment) {
            e.preventDefault();
            alert('Please fill in all required fields');
            return;
        }

        // Set reply-to from the submitted email so Formspree can route replies correctly
        const replyToInput = document.getElementById('replyto');
        if (replyToInput) {
            replyToInput.value = email;
        }

        // Show success message
        showNotification('✅ Appointment request submitted! We will contact you shortly.', 'success');

        // Log the submission
        console.log(`Appointment request from ${name} for ${treatment} submitted to Formspree with reply-to ${email}`);

        // Form will submit to Formspree automatically (don't prevent default)
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles via elements
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notifications]')) {
        style.setAttribute('data-notifications', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 2rem;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            
            .notification-success {
                background-color: #4caf50;
                color: white;
            }
            
            .notification-error {
                background-color: #f44336;
                color: white;
            }
            
            .notification-info {
                background-color: #0066cc;
                color: white;
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe treatment cards and other elements
document.querySelectorAll('.treatment-card, .branch-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Smooth scroll active nav link
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add some interactivity to treatment cards
document.querySelectorAll('.treatment-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.scale = '1.05';
    });
    card.addEventListener('mouseleave', function() {
        this.style.scale = '1';
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Animate section titles
    document.querySelectorAll('.section-title').forEach((title, index) => {
        title.style.animation = `slideUp 0.6s ease ${index * 0.1}s backwards`;
    });

    // Add fade-in animation to body
    document.body.style.animation = 'fadeIn 0.5s ease';
});

// Type writer effect for hero title (optional)
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Enable lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.loading = 'lazy';
        }
    });
}

// Parallax effect for hero section (optional)
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    });
}

// Dynamic year in footer
const year = new Date().getFullYear();
document.querySelectorAll('.footer-bottom').forEach(footer => {
    if (footer.textContent.includes('2026')) {
        footer.textContent = footer.textContent.replace('2026', year.toString());
    }
});

// Add active state animation to CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .tab-button.active {
        animation: pulse 0.3s ease;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

console.log('SmileCare Dental - Website Loaded Successfully! ✨');
