const images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

function showImage(index) {
    images[currentImageIndex].style.display = 'none';
    images[index].style.display = 'block';
    currentImageIndex = index;
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % images.length;
    showImage(nextIndex);
}

// Adjust timing and speed as needed (in milliseconds)
const slideshowInterval = setInterval(nextImage, 3000); // Change slide every 3 seconds

// Optionally, you can pause the slideshow when a user interacts with it
images.forEach(image => {
    image.addEventListener('click', () => {
        clearInterval(slideshowInterval);
    });
});
