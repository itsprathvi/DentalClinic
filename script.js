// ============================================
// CONFIGURATION POPULATION FROM CONFIG.JS
// ============================================

// Function to populate all page elements from clinicConfig
function populatePageFromConfig() {
    if (typeof clinicConfig === 'undefined') {
        console.error('clinicConfig not found. Make sure config.js is loaded before script.js');
        return;
    }

    // 1. Page Title, Navbar Brand, Hero Section
    populateHeader();

    // 2. Branch Information
    populateBranchInfo(
        'ajekar',
        clinicConfig.ajekarBranch,
        'ajekarName',
        'ajekarAddress',
        'ajekarPhone',
        'ajekarEmail',
        'ajekarHours',
        'ajekarMap'
    );

    populateBranchInfo(
        'bailur',
        clinicConfig.bailurBranch,
        'bailurName',
        'bailurAddress',
        'bailurPhone',
        'bailurEmail',
        'bailurHours',
        'bailurMap'
    );

    // 2.5 Director Information
    populateDirector();

    // 3. Page Sections
    populateSectionTitles();

    // 4. Treatments
    populateTreatments();

    // 5. Gallery
    populateGallery();

    // 6. Form
    populateForm();

    // 7. Branch Dropdown
    populateBranchDropdown();

    // 8. Quick Contact
    populateQuickContact();

    // 9. Footer
    populateFooter();

    // 10. Social Links
    populateSocialLinks();

    // 11. Observe elements for animations
    observeAnimationElements();

    console.log('✅ Page populated from config.js');
}

// Populate header/navbar
function populateHeader() {
    const pageTitle = document.getElementById('pageTitle');
    const navBrand = document.getElementById('navBrand');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const footerBrand = document.getElementById('footerBrand');

    if (pageTitle) pageTitle.textContent = `${clinicConfig.branding.name} - ${clinicConfig.branding.subtitle}`;
    if (navBrand) navBrand.textContent = clinicConfig.branding.name;
    if (heroTitle) heroTitle.textContent = clinicConfig.branding.tagline;
    if (heroSubtitle) heroSubtitle.textContent = clinicConfig.branding.subheading;
    if (footerBrand) {
        footerBrand.innerHTML = `<i class="fas fa-tooth"></i> ${clinicConfig.branding.name}`;
    }
}

// Populate all section titles and subtitles
function populateSectionTitles() {
    const branchesTitle = document.getElementById('branchesTitle');
    const branchesSubtitle = document.getElementById('branchesSubtitle');
    const treatmentsTitle = document.getElementById('treatmentsTitle');
    const treatmentsSubtitle = document.getElementById('treatmentsSubtitle');
    const galleryTitle = document.getElementById('galleryTitle');
    const gallerySubtitle = document.getElementById('gallerySubtitle');
    const contactTitle = document.getElementById('contactTitle');
    const contactSubtitle = document.getElementById('contactSubtitle');

    if (branchesTitle) branchesTitle.textContent = clinicConfig.pages.home.title;
    if (branchesSubtitle) branchesSubtitle.textContent = clinicConfig.pages.home.subtitle;
    if (treatmentsTitle) treatmentsTitle.textContent = clinicConfig.pages.treatments.title;
    if (treatmentsSubtitle) treatmentsSubtitle.textContent = clinicConfig.pages.treatments.subtitle;
    if (galleryTitle) galleryTitle.textContent = clinicConfig.pages.gallery.title;
    if (gallerySubtitle) gallerySubtitle.textContent = clinicConfig.pages.gallery.subtitle;
    if (contactTitle) contactTitle.textContent = clinicConfig.pages.contact.title;
    if (contactSubtitle) contactSubtitle.textContent = clinicConfig.pages.contact.subtitle;
}

// Populate treatment cards dynamically
function populateTreatments() {
    const treatmentsGrid = document.getElementById('treatmentsGrid');
    if (!treatmentsGrid) return;

    treatmentsGrid.innerHTML = '';

    clinicConfig.treatments.forEach(treatment => {
        const card = document.createElement('div');
        card.className = 'treatment-card';
        card.innerHTML = `
            <div class="treatment-icon">
                <i class="fas ${treatment.icon}"></i>
            </div>
            <h3>${treatment.name}</h3>
            <p>${treatment.description}</p>
        `;
        treatmentsGrid.appendChild(card);
    });
}

// Populate gallery tabs
function populateGalleryTabs() {
    const galleryTabs = document.getElementById('galleryTabs');
    if (!galleryTabs) return;

    galleryTabs.innerHTML = '';

    clinicConfig.galleryCategories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `tab-button ${index === 0 ? 'active' : ''}`;
        button.setAttribute('data-filter', category.value);
        button.textContent = category.label;
        galleryTabs.appendChild(button);
    });
}

// Populate gallery items
function populateGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    clinicConfig.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', item.category);
        galleryItem.style.opacity = '1';
        galleryItem.style.display = 'block';
        galleryItem.innerHTML = `
            <img src="${item.url}" alt="${item.caption}">
            <div class="gallery-overlay">
                <p>${item.caption}</p>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Populate gallery (both tabs and items)
function populateGallery() {
    populateGalleryTabs();
    populateGalleryItems();
    // Attach filter logic AFTER both tabs and items are created
    attachGalleryFilterLogic();
}

// Populate form labels and options
function populateForm() {
    const labelName = document.getElementById('labelName');
    const labelEmail = document.getElementById('labelEmail');
    const labelPhone = document.getElementById('labelPhone');
    const labelBranch = document.getElementById('labelBranch');
    const labelTreatment = document.getElementById('labelTreatment');
    const labelMessage = document.getElementById('labelMessage');
    const textareaMessage = document.getElementById('textareaMessage');
    const submitButton = document.getElementById('submitButton');
    const appointmentForm = document.getElementById('appointmentForm');
    const treatmentSelect = document.getElementById('treatment');
    const formSubject = document.getElementById('formSubject');

    if (labelName) labelName.innerHTML = `${clinicConfig.form.namesLabel} <span class="required">${clinicConfig.form.required}</span>`;
    if (labelEmail) labelEmail.innerHTML = `${clinicConfig.form.emailLabel} <span class="required">${clinicConfig.form.required}</span>`;
    if (labelPhone) labelPhone.innerHTML = `${clinicConfig.form.phoneLabel} <span class="required">${clinicConfig.form.required}</span>`;
    if (labelBranch) labelBranch.innerHTML = `${clinicConfig.form.branchLabel} <span class="required">${clinicConfig.form.required}</span>`;
    if (labelTreatment) labelTreatment.innerHTML = `${clinicConfig.form.treatmentLabel} <span class="required">${clinicConfig.form.required}</span>`;
    if (labelMessage) labelMessage.textContent = clinicConfig.form.messageLabel;
    if (textareaMessage) textareaMessage.placeholder = clinicConfig.form.messagePlaceholder;
    if (submitButton) submitButton.textContent = clinicConfig.form.submitButton;

    // Set form action
    if (appointmentForm) {
        appointmentForm.action = clinicConfig.form.formAction;
    }

    // Update form subject
    if (formSubject) {
        formSubject.value = clinicConfig.form.subjectLine.replace('{clinicName}', clinicConfig.branding.name);
    }

    // Populate treatment options
    if (treatmentSelect) {
        // Keep the placeholder option
        while (treatmentSelect.options.length > 1) {
            treatmentSelect.remove(1);
        }

        clinicConfig.form.treatmentOptions.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.label;
            treatmentSelect.appendChild(opt);
        });
    }
}

// Populate branch dropdown in form
function populateBranchDropdown() {
    const branchSelect = document.getElementById('branch');
    if (!branchSelect) return;

    // Clear existing options except the first one
    while (branchSelect.options.length > 1) {
        branchSelect.remove(1);
    }

    // Add Ajekar option
    const ajekarOption = document.createElement('option');
    ajekarOption.value = 'ajekar';
    ajekarOption.textContent = `${clinicConfig.ajekarBranch.name} - ${clinicConfig.ajekarBranch.phone}`;
    branchSelect.appendChild(ajekarOption);

    // Add Bailur option
    const bailurOption = document.createElement('option');
    bailurOption.value = 'bailur';
    bailurOption.textContent = `${clinicConfig.bailurBranch.name} - ${clinicConfig.bailurBranch.phone}`;
    branchSelect.appendChild(bailurOption);
}

// Populate quick contact section
function populateQuickContact() {
    const quickPhonesEl = document.getElementById('quickPhones');
    const quickEmailsEl = document.getElementById('quickEmails');
    const quickHoursEl = document.getElementById('quickHours');

    if (quickPhonesEl) {
        const phoneHTML = `
            <i class="fas fa-phone"></i>
            <div>
                <h4>Call Us</h4>
                <p>${clinicConfig.ajekarBranch.name}: <a href="tel:${clinicConfig.ajekarBranch.phone}">${clinicConfig.ajekarBranch.phone}</a></p>
                <p>${clinicConfig.bailurBranch.name}: <a href="tel:${clinicConfig.bailurBranch.phone}">${clinicConfig.bailurBranch.phone}</a></p>
            </div>
        `;
        quickPhonesEl.innerHTML = phoneHTML;
    }

    if (quickEmailsEl) {
        const emailHTML = `
            <i class="fas fa-envelope"></i>
            <div>
                <h4>Email Us</h4>
                <p><a href="mailto:${clinicConfig.generalContact.mainEmail}">${clinicConfig.generalContact.mainEmail}</a></p>
                <p><a href="mailto:${clinicConfig.generalContact.appointmentEmail}">${clinicConfig.generalContact.appointmentEmail}</a></p>
            </div>
        `;
        quickEmailsEl.innerHTML = emailHTML;
    }

    if (quickHoursEl) {
        const hoursTitle = quickHoursEl.querySelector('#hoursTitle');
        const hoursDiv = quickHoursEl.querySelector('div');
        if (hoursTitle) hoursTitle.textContent = clinicConfig.quickContact.hoursTitle;
        if (hoursDiv) {
            hoursDiv.innerHTML = `
                <h4 id="hoursTitle">${clinicConfig.quickContact.hoursTitle}</h4>
                <p>${clinicConfig.quickContact.hoursWeekday}</p>
                <p>${clinicConfig.quickContact.hoursSunday}</p>
            `;
        }
    }
}

// Helper function to populate branch information
function populateBranchInfo(branchKey, branchData, nameId, addressId, phoneId, emailId, hoursId, mapId) {
    const nameEl = document.getElementById(nameId);
    const addressEl = document.getElementById(addressId);
    const phoneEl = document.getElementById(phoneId);
    const emailEl = document.getElementById(emailId);
    const hoursEl = document.getElementById(hoursId);
    const mapEl = document.getElementById(mapId);

    if (nameEl) nameEl.textContent = branchData.name;
    
    if (addressEl) {
        const addressText = branchData.address.split(', ').join('<br>');
        addressEl.innerHTML = addressText;
    }

    if (phoneEl) {
        phoneEl.href = `tel:${branchData.phone}`;
        phoneEl.textContent = branchData.phone;
    }

    if (emailEl) {
        emailEl.href = `mailto:${branchData.email}`;
        emailEl.textContent = branchData.email;
    }

    if (hoursEl) {
        const hoursText = `<strong>Weekdays:</strong> ${branchData.hours.weekdays}<br><strong>Sunday:</strong> ${branchData.hours.sunday}`;
        hoursEl.innerHTML = hoursText;
    }

    if (mapEl && branchData.coordinates) {
        const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.289851947614!2d${branchData.coordinates.lng}!3d${branchData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s${encodeURIComponent(branchData.name)}!5e0!3m2!1sen!2sin!4v1234567890`;
        mapEl.src = mapSrc;
    }
}

// Populate director information
function populateDirector() {
    const directorImage = document.getElementById('directorImage');
    // const directorName = document.getElementById('directorName');
    const directorDesignation = document.getElementById('directorDesignation');
    const directorExperience = document.getElementById('directorExperience');
    const directorQuote = document.getElementById('directorQuote');

    if (clinicConfig.director) {
        if (directorImage) {
            directorImage.src = clinicConfig.director.image;
            directorImage.alt = clinicConfig.director.name;
        }
        // if (directorName) directorName.textContent = clinicConfig.director.name;
        if (directorDesignation) directorDesignation.textContent = clinicConfig.director.designation;
        if (directorExperience) directorExperience.textContent = `${clinicConfig.director.yearsOfExperience} Years of Experience`;
        if (directorQuote) directorQuote.textContent = clinicConfig.director.quote;
    }
}

// Populate footer
function populateFooter() {
    const footerAbout = document.getElementById('footerAbout');
    const footerContacts = document.getElementById('footerContacts');
    const quickLinksList = document.getElementById('quickLinksList');
    const servicesList = document.getElementById('servicesList');
    const footerCopyright = document.getElementById('footerCopyright');

    if (footerAbout) {
        footerAbout.textContent = clinicConfig.footer.about;
    }

    if (quickLinksList) {
        quickLinksList.innerHTML = '';
        clinicConfig.footer.quickLinks.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.href}">${link.label}</a>`;
            quickLinksList.appendChild(li);
        });
    }

    if (servicesList) {
        servicesList.innerHTML = '';
        clinicConfig.footer.services.forEach(service => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${service.href}">${service.label}</a>`;
            servicesList.appendChild(li);
        });
    }

    if (footerContacts) {
        const contactHTML = `
            <h4>Contact Info</h4>
            <p><strong>${clinicConfig.ajekarBranch.name}:</strong> <a href="tel:${clinicConfig.ajekarBranch.phone}">${clinicConfig.ajekarBranch.phone}</a></p>
            <p><strong>${clinicConfig.bailurBranch.name}:</strong> <a href="tel:${clinicConfig.bailurBranch.phone}">${clinicConfig.bailurBranch.phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${clinicConfig.generalContact.mainEmail}">${clinicConfig.generalContact.mainEmail}</a></p>
        `;
        footerContacts.innerHTML = contactHTML;
    }

    if (footerCopyright) {
        const legalLinksHTML = clinicConfig.footer.legalLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join(' | ');
        footerCopyright.innerHTML = `&copy; ${clinicConfig.footer.copyright} ${clinicConfig.footer.copyrightText} | ${legalLinksHTML}`;
    }
}

// Populate social media links
function populateSocialLinks() {
    const socialFacebook = document.getElementById('socialFacebook');
    const socialInstagram = document.getElementById('socialInstagram');
    const socialTwitter = document.getElementById('socialTwitter');
    const socialYoutube = document.getElementById('socialYoutube');

    if (socialFacebook) socialFacebook.href = clinicConfig.social.facebook;
    if (socialInstagram) socialInstagram.href = clinicConfig.social.instagram;
    if (socialTwitter) socialTwitter.href = clinicConfig.social.twitter;
    if (socialYoutube) socialYoutube.href = clinicConfig.social.youtube;
}

// Run population when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populatePageFromConfig);
} else {
    populatePageFromConfig();
}

// ============================================
// EXISTING FUNCTIONALITY - GALLERY FILTER & FORM
// ============================================

// Attach gallery filter logic
function attachGalleryFilterLogic() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Initialize: show all items since first button is "all"
    galleryItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
    });

    // Add click listeners to each button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    // Show item
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    // Hide item
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

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

// Form Submission Handler (Formspree)
const appointmentForm = document.getElementById('appointmentForm');
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

// Observe elements and re-observe after dynamic content is added
function observeAnimationElements() {
    // Don't apply scroll animations to gallery items (they have their own filter logic)
    document.querySelectorAll('.treatment-card, .branch-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

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
