// Example of a simple image carousel
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.portfolio-images img');
    let currentImage = 0;

    setInterval(() => {
        images[currentImage].style.display = 'none';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.display = 'block';
    }, 3000); // Change image every 3 seconds
});
