# Images Directory

Place your clinic images here. Recommended file names and formats:

## Recommended Images to Add:

### Clinic Interior
- clinic-reception.jpg
- clinic-waiting-area.jpg
- treatment-room-1.jpg
- treatment-room-2.jpg

### Equipment
- dental-chair.jpg
- x-ray-machine.jpg
- equipment-setup.jpg

### Team
- dentist-1.jpg
- dentist-2.jpg
- staff-team.jpg

### Before & After (Optional)
- before-after-1.jpg
- before-after-2.jpg

### Featured
- clinic-exterior.jpg
- ajekar-branch.jpg
- bailur-branch.jpg

## Image Optimization Tips:

1. **Size**: Keep images under 500KB
2. **Dimensions**: Use 1200x800px or larger
3. **Format**: Use JPEG for photos, PNG for graphics
4. **Tools**: Use TinyPNG.com to compress images

## How to Use:

Update image URLs in `index.html`:
```html
<img src="images/your-image-name.jpg" alt="Description">
```

Or update in `config.js` gallery array:
```javascript
gallery: [
    {
        url: "images/your-image.jpg",
        caption: "Image caption",
        category: "clinic"
    }
]
```
