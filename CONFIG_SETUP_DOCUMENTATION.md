# Configuration Setup Documentation

## Overview
Your website is now fully configured to be dynamic! All content is now pulled from `config.js`, so you only need to update values there - no need to edit HTML directly.

## What Changed

### 1. **config.js** (Already Present)
Contains all clinic information organized in sections:
- **Branding**: Name, tagline, subtitle
- **Social Media**: Facebook, Instagram, Twitter, YouTube links
- **Ajekar Branch**: Address, phone, email, hours, coordinates for map
- **Bailur Branch**: Address, phone, email, hours, coordinates for map
- **General Contact**: Email addresses
- **Treatments**: Service descriptions with icons
- **Gallery**: Image URLs
- **Colors**: Color scheme (for future enhancements)

### 2. **index.html** (Updated)
Added IDs and removed hardcoded values:
- Page title now dynamic (`id="pageTitle"`)
- Navbar brand (`id="navBrand"`)
- Hero section title and subtitle (`id="heroTitle"`, `id="heroSubtitle"`)
- Branch cards with individual IDs for name, address, phone, email, hours, and Google Maps
- Form branch dropdown auto-populated from config
- Quick contact section dynamically populated
- Footer information pulled from config
- Social media links connected to config values
- Added `<script src="config.js"></script>` before `script.js` in HTML

### 3. **script.js** (Enhanced)
Added new functions to populate all content from `config.js`:

**Main Functions:**
- `populatePageFromConfig()` - Main orchestrator function
- `populateBranchInfo()` - Sets branch details (name, address, phone, email, hours, map)
- `populateBranchDropdown()` - Auto-fills branch dropdown in contact form
- `populateQuickContact()` - Updates quick contact section with phone and email
- `populateFooterContacts()` - Updates footer with contact info
- `populateSocialLinks()` - Links social media icons to config URLs

The functions run automatically when the DOM loads.

## How to Update Your Website

### Update Clinic Name
Edit `config.js`:
```javascript
branding: {
    name: "Your New Clinic Name",  // Change this
    // ...
}
```
The name will automatically update in:
- Page title
- Navigation bar
- Footer

### Update Branch Information
Edit `config.js` - `ajekarBranch` or `bailurBranch`:
```javascript
ajekarBranch: {
    name: "Your Clinic Name",
    address: "Full address here",
    phone: "+91...",
    email: "email@example.com",
    hours: {
        weekdays: "9:00 AM - 1:00 PM, 3:00 PM - 7:00 PM",
        sunday: "Appointments only"
    },
    coordinates: {
        lat: 15.4,     // Google Maps latitude
        lng: 75.3      // Google Maps longitude
    }
}
```

### Update Social Media Links
Edit `config.js`:
```javascript
social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    youtube: "https://youtube.com/yourchannel"
}
```

### Update Contact Emails
Edit `config.js`:
```javascript
generalContact: {
    mainEmail: "main@clinic.com",
    appointmentEmail: "appointments@clinic.com",
    supportEmail: "support@clinic.com"
}
```

### Update Treatments/Services
Edit `config.js`:
```javascript
treatments: [
    {
        name: "Service Name",
        icon: "fa-smile",  // FontAwesome icon class
        description: "Description of service"
    },
    // ... more services
]
```

### Update Gallery Images
Edit `config.js`:
```javascript
gallery: [
    {
        url: "https://image-url.jpg",
        caption: "Image description",
        category: "clinic"  // clinic, equipment, or team
    },
    // ... more images
]
```

## File Load Order
**Important:** `config.js` must load before `script.js`. The HTML now has:
```html
<script src="config.js"></script>
<script src="script.js"></script>
```

## Testing
1. Open `index.html` in a browser
2. Verify that all clinic information displays correctly:
   - Navigation bar shows your clinic name
   - Branch cards show correct addresses, phone numbers, and emails
   - Hero section displays your tagline
   - Footer shows updated contact info and social links
   - Branch dropdown in contact form is populated
   - Google Maps show correct locations

## Benefits
✅ Single source of truth - all config in one file  
✅ Faster updates - no need to search through HTML  
✅ Consistent information - phone numbers, names always match  
✅ Easy to manage - organized structure in config.js  
✅ Future-proof - easy to add new features  

## Example Config Values to Try Now
Try changing these in `config.js` and refresh your browser:
1. Change `branding.name` to "XYZ Dental" → See it update everywhere
2. Change `ajekarBranch.phone` → See it update in branches and footer
3. Change `social.facebook` → Click the Facebook icon in footer
4. Change `branding.tagline` → See it in hero section

---
**Note:** Make sure to save `config.js` after making changes and refresh the browser to see updates.
