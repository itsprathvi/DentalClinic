# Videos Directory

Place your clinic videos here. Recommended formats and usage.

## Types of Videos to Add:

### Clinic Tour
- clinic-tour.mp4
- ajekar-tour.mp4
- bailur-tour.mp4

### Testimonials
- patient-testimonial-1.mp4
- patient-testimonial-2.mp4

### Educational
- teeth-cleaning-guide.mp4
- oral-hygiene-tips.mp4

### Procedure Videos
- implant-procedure.mp4
- teeth-whitening.mp4

## Video Specifications:

- **Format**: MP4 (most compatible)
- **Size**: Keep under 50MB (use video compression tools)
- **Resolution**: 720p or 1080p
- **Aspect Ratio**: 16:9 (widescreen)

## How to Add Videos:

### Local Video (stored in videos folder):
```html
<video width="100%" controls poster="images/thumbnail.jpg">
    <source src="videos/your-video.mp4" type="video/mp4">
    Your browser doesn't support HTML5 video tag.
</video>
```

### YouTube Video (recommended for faster loading):
```html
<iframe width="100%" height="400" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

### Vimeo Video:
```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID" 
    width="100%" 
    height="400" 
    frameborder="0" 
    allowfullscreen>
</iframe>
```

## Video Compression Tools:

- **Handbrake**: Free video encoder
- **FFmpeg**: Command-line tool
- **Online**: CloudConvert.com, Compressor.io

## Recommended Workflow:

1. Record videos in 1080p
2. Edit with free tools (iMovie, DaVinci Resolve, OpenShot)
3. Export as MP4 (H.264 codec)
4. Compress to under 50MB using Handbrake
5. Upload to videos folder OR YouTube

## Performance Tips:

- Use YouTube/Vimeo for better streaming
- Only embed if file size is under 30MB
- Always add `poster` image for fast loading
- Load videos with `loading="lazy"`

## Adding to Website:

Create a new section in `index.html`:
```html
<section id="videos" class="videos">
    <div class="container">
        <h2 class="section-title">Video Gallery</h2>
        <div class="videos-grid">
            <!-- Add your videos here -->
            <div class="video-item">
                <iframe src="..." style="width:100%; height:300px;"></iframe>
            </div>
        </div>
    </div>
</section>
```

Add styling in `styles.css`:
```css
.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}
```
