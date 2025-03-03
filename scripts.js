setInterval(() => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateGalleryPosition();
}, 0.05);  // Move images every 1 second
