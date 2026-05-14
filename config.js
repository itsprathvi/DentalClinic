// ============================================
// CLINIC CONFIGURATION FILE
// Edit this file to quickly update clinic details
// ============================================

const clinicConfig = {
    // Clinic Branding
    branding: {
        name: "SmileCare",
        subheading: "Premium Dental Care",
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
        name: "Ajekar Branch",
        address: "Ajekar Main Road, Ajekar, [State] - [Postal Code], India",
        phone: "+91-9876-543-210",
        email: "ajekar@smilecare.in",
        hours: {
            weekdays: "9:00 AM - 8:00 PM",
            saturday: "9:00 AM - 8:00 PM",
            sunday: "10:00 AM - 5:00 PM"
        },
        coordinates: {
            lat: 15.4,
            lng: 75.3
        }
    },

    // BAILUR BRANCH
    bailurBranch: {
        name: "Bailur Branch",
        address: "Bailur Commercial Square, Bailur, [State] - [Postal Code], India",
        phone: "+91-9876-543-211",
        email: "bailur@smilecare.in",
        hours: {
            weekdays: "9:00 AM - 9:00 PM",
            saturday: "9:00 AM - 9:00 PM",
            sunday: "10:00 AM - 5:00 PM"
        },
        coordinates: {
            lat: 15.3,
            lng: 75.5
        }
    },

    // General Contact
    generalContact: {
        mainEmail: "info@smilecare.in",
        appointmentEmail: "appointments@smilecare.in",
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

    // Business Hours
    businessHours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 8:00 PM",
        saturday: "9:00 AM - 8:00 PM",
        sunday: "10:00 AM - 5:00 PM",
        holidays: ["Jan 26", "Mar 8", "Aug 15", "Oct 2", "Dec 25"]
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
