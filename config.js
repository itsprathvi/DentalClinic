// ============================================
// CLINIC CONFIGURATION FILE
// Edit this file to quickly update clinic details
// ============================================

const clinicConfig = {
    // Clinic Branding
    branding: {
        name: "Prabhu's Healthcare",
        subheading: "Premium Dental Care at Your Convenience",
        tagline: "Your Smile, Our Priority",
        subtitle: "Modern Dental Healthcare"
    },

    // Social Media
    social: {
        facebook: "https://facebook.com/yourpage",
        instagram: "https://instagram.com/yourpage",
        twitter: "https://twitter.com/yourpage",
        youtube: "https://youtube.com/yourchannel"
    },

    // AJEKAR BRANCH
    ajekarBranch: {
        name: "Ajekar Dental Clinic",
        address: "1st floor, Ajekar commercial and residential complex, Ajekar junction, Karkala main road, Ajekar Udupi - 574101",
        phone: "+917019547647",
        email: "Ajekardentalclinic2026@gmail.com",
        hours: {
            weekdays: "9:00 AM - 1:00 PM, 3:00 PM - 7:00 PM",
            sunday: "Appointments only"
        },
        coordinates: {
            lat: 13.3216817,
            lng: 74.997926
        }
    },

    // BAILUR BRANCH
    bailurBranch: {
        name: "Bailur Dental Clinic",
        address: "Sai Samruddi Apartment, Palli cross junction, Karkala taluk, Udupi district - 574102",
        phone: "+917892852071",
        email: "Bailurdentalclinic2025@gmail.com",
        hours: {
            weekdays: "9:00 AM - 1:00 PM, 3:00 PM - 7:00 PM",
            sunday: "Appointments only"
        },
        coordinates: {
            lat: 13.2835557495108,
            lng: 74.915854637345
        }
    },

    // DIRECTOR INFORMATION
    director: {
        // name: "Dr. Shravan Prabhu",
        designation: "Founder & Director",
        image: "./images/director.jpg",
        quote: "At Our Dental clinic, we believe that every patient deserves exceptional dental care delivered with compassion and expertise. Our mission is to transform smiles and build lasting relationships with our patients. We are committed to using the latest technology and techniques to ensure the best outcomes for your oral health.",
        yearsOfExperience: "8+"
    },

    // General Contact
    generalContact: {
        mainEmail: "Bailurdentalclinic2025@gmail.com",
        appointmentEmail: "Bailurdentalclinic2025@gmail.com",
        supportEmail: "Bailurdentalclinic2025@gmail.com"
    },

    // Services/Treatments
    treatments: [
        {
            name: "General Dentistry",
            icon: "fa-smile",
            description: "Regular check-ups, cleanings, and preventive care for maintaining optimal oral health"
        },
        {
            name: "Cosmetic Dentistry",
            icon: "fa-tooth",
            description: "Teeth whitening, veneers, bonding, and smile makeovers for a brighter smile"
        },
        {
            name: "Root Canal Treatment",
            icon: "fa-microscope",
            description: "Advanced endodontic procedures to save severely infected or damaged teeth"
        },
        {
            name: "Crowns & Bridges",
            icon: "fa-crown",
            description: "Restore damaged teeth with high-quality crowns and bridges"
        },
        {
            name: "Orthodontics",
            icon: "fa-align-left",
            description: "Teeth straightening treatments including braces and invisible aligners"
        },
        {
            name: "Dental Implants",
            icon: "fa-syringe",
            description: "Permanent tooth replacement solutions with advanced implant technology"
        },
        {
            name: "Teeth Cleaning",
            icon: "fa-wind",
            description: "Professional cleaning and tartar removal for healthier gums and teeth"
        },
        {
            name: "Gum Treatment",
            icon: "fa-shield-alt",
            description: "Specialized care for gum diseases and periodontal conditions"
        }
    ],

    // Color Scheme
    colors: {
        primary: "#0066cc",
        secondary: "#00d4ff",
        accent: "#ff6b9d",
        darkBg: "#0a1428",
        lightBg: "#f8f9fa",
        textDark: "#1a1a1a",
        textLight: "#666"
    },

    // Gallery Images (Add your image URLs here)
    gallery: [
        {
            url: "./images/reception.jpg",
            caption: "Modern Reception Area",
            category: "clinic"
        },
        {
            url: "./images/machine2.jpg",
            caption: "Advanced Equipment",
            category: "equipment"
        },
        {
            url: "./images/equipments.jpg",
            caption: "Treatment Room",
            category: "clinic"
        },
        {
            url: "./images/director2.jpg",
            caption: "Our Professional Team",
            category: "team"
        },
        {
            url: "./images/equipments2.jpg",
            caption: "State-of-the-art Equipment",
            category: "equipment"
        },
        {
            url: "./images/waiting.jpg",
            caption: "Comfortable Waiting Area",
            category: "clinic"
        }
    ],

    // Page Sections & Content
    pages: {
        home: {
            title: "Our Clinics",
            subtitle: "Visit us at one of our two conveniently located branches"
        },
        treatments: {
            title: "Our Treatments",
            subtitle: "Comprehensive dental care services available at both locations"
        },
        gallery: {
            title: "Our Gallery",
            subtitle: "Explore our modern clinic facilities and spaces"
        },
        contact: {
            title: "Schedule Your Appointment",
            subtitle: "We'd love to help you achieve your brightest smile"
        }
    },

    // Gallery Categories
    galleryCategories: [
        { value: "all", label: "All" },
        { value: "clinic", label: "Clinic" },
        { value: "equipment", label: "Equipment" },
        { value: "team", label: "Team" }
    ],

    // Form Configuration
    form: {
        namesLabel: "Full Name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        branchLabel: "Select Branch",
        treatmentLabel: "Treatment Required",
        messageLabel: "Additional Message",
        messagePlaceholder: "Tell us about your concern...",
        submitButton: "Request Appointment",
        required: "*",
        formAction: "https://formspree.io/f/mrejvwlr",
        subjectLine: "New Appointment Request from {clinicName} Dental Clinic",
        treatmentOptions: [
            { value: "general", label: "General Checkup" },
            { value: "cleaning", label: "Teeth Cleaning" },
            { value: "whitening", label: "Teeth Whitening" },
            { value: "filling", label: "Filling" },
            { value: "root-canal", label: "Root Canal" },
            { value: "implant", label: "Implant" },
            { value: "braces", label: "Braces/Aligners" },
            { value: "other", label: "Other" }
        ]
    },

    // Footer Content
    footer: {
        about: "Providing exceptional dental care with modern technology and compassionate service to both Ajekar and Bailur communities since 2020.",
        quickLinks: [
            { label: "Home", href: "#home" },
            { label: "Director", href: "#director" },
            { label: "Branches", href: "#branches" },
            { label: "Treatments", href: "#treatments" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" }
        ],
        services: [
            { label: "General Dentistry", href: "#treatments" },
            { label: "Cosmetic Care", href: "#treatments" },
            { label: "Orthodontics", href: "#treatments" },
            { label: "Implants", href: "#treatments" }
        ],
        copyright: "2026",
        copyrightText: "Prabhu's Healthcare. All rights reserved.",
        legalLinks: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
        ]
    },

    // Quick Contact Hours
    quickContact: {
        hoursTitle: "Working Hours",
        hoursWeekday: "Mon-Sat: 9:00 AM - 1:00 PM and 3:00 PM - 7:00 PM",
        hoursSunday: "Sun: Appointments Only",
    },

    // Navigation
    navigation: {
        navItems: [
            { label: "Home", href: "#home" },
            { label: "Director", href: "#director" },
            { label: "Branches", href: "#branches" },
            { label: "Treatments", href: "#treatments" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" }
        ]
    },

    // Developer Info
    developer: {
        sectionTitle: "Developed By",
        sectionSubtitle: "Meet the creator behind this website",
        name: "Prathviraj Prabhu",
        title: "Full Stack Web Developer",
        photo: "./images/developer.jpg",
        description: "Passionate developer building modern web experiences with clean code, strong UI design, and seamless performance.",
        instagram: "https://instagram.com/its.prathvi",
        instagramHandle: "@its.prathvi",
        linkedin: "https://www.linkedin.com/in/prathviraj-prabhu-430123193/",
        qualification: "B.Tech in Information Science and Engineering",
        company: "Qualcomm, Bangalore",
        email: "prathvirajbellampalli@gmail.com",
        location: "Udupi, India",
        portfolio: "https://prathviraj-prabhu-portfolio.netlify.app/"
    },

    // Website Meta
    meta: {
        title: "Prabhu's Healthcare - Modern Dental Healthcare",
        description: "Professional dental care at two conveniently located branches in Ajekar and Bailur",
        keywords: "dental clinic, dentist, dental care, teeth cleaning, orthodontics, implants",
        author: "Prabhu's Healthcare",
        language: "en"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = clinicConfig;
}

console.log("✅ Clinic configuration loaded successfully!");
