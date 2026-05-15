// ============================================
// CLINIC CONFIGURATION FILE
// Edit this file to quickly update clinic details
// ============================================

const clinicConfig = {
    // Clinic Branding
    branding: {
        name: "SmileCare",
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
            lat: 15.4,
            lng: 75.3
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

    // General Contact
    generalContact: {
        mainEmail: "Bailurdentalclinic2025@gmail.com",
        appointmentEmail: "Bailurdentalclinic2025@gmail.com",
        supportEmail: "support@smilecare.in"
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
            url: "https://images.unsplash.com/photo-1606768666260-e637b99daf71?w=400&h=300&fit=crop",
            caption: "Modern Reception Area",
            category: "clinic"
        },
        {
            url: "https://images.unsplash.com/photo-1631217314989-5e6b5d6d02b0?w=400&h=300&fit=crop",
            caption: "Advanced Equipment",
            category: "equipment"
        },
        {
            url: "https://images.unsplash.com/photo-1606768666260-e637b99daf71?w=400&h=300&fit=crop",
            caption: "Treatment Room",
            category: "clinic"
        },
        {
            url: "https://images.unsplash.com/photo-1612529423318-4c0416f4e697?w=400&h=300&fit=crop",
            caption: "Our Professional Team",
            category: "team"
        },
        {
            url: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop",
            caption: "State-of-the-art Equipment",
            category: "equipment"
        },
        {
            url: "https://images.unsplash.com/photo-1631217314989-5e6b5d6d02b0?w=400&h=300&fit=crop",
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
            { label: "Branches", href: "#branches" },
            { label: "Treatments", href: "#treatments" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
            { label: "Developed By", href: "#developer" }
        ],
        services: [
            { label: "General Dentistry", href: "#treatments" },
            { label: "Cosmetic Care", href: "#treatments" },
            { label: "Orthodontics", href: "#treatments" },
            { label: "Implants", href: "#treatments" }
        ],
        copyright: "2026",
        copyrightText: "SmileCare Dental Clinic. All rights reserved.",
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
            { label: "Our Branches", href: "#branches" },
            { label: "Treatments", href: "#treatments" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
            { label: "Developed By", href: "#developer" }
        ]
    },

    // Developer Info
    developer: {
        sectionTitle: "Developed By",
        sectionSubtitle: "Meet the creator behind this website",
        name: "Prathviraj Prabhu",
        title: "Full Stack Web Developer",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        description: "Passionate developer building modern web experiences with clean code, strong UI design, and seamless performance.",
        instagram: "https://instagram.com/its.prathvi",
        instagramHandle: "@its.prathvi",
        qualification: "B.Tech in Information Science",
        company: "Qualcomm",
        email: "prathvirajbellampalli@gmail.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
        location: "Bangalore, India"
    },

    // Website Meta
    meta: {
        title: "SmileCare Dental Clinic - Modern Dental Healthcare",
        description: "Professional dental care at two conveniently located branches in Ajekar and Bailur",
        keywords: "dental clinic, dentist, dental care, teeth cleaning, orthodontics, implants",
        author: "SmileCare Dental",
        language: "en"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = clinicConfig;
}

console.log("✅ Clinic configuration loaded successfully!");
