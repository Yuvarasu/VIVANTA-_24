let currentSlide1 = 0;
let currentSlide2 = 0;

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');

    // Wrap around if the index is out of bounds
    if (index >= items.length) {
        index = 0;
    } else if (index < 0) {
        index = items.length - 1;
    }

    // Update current slide variables
    if (carouselId === 'carousel1') {
        currentSlide1 = index;
    } else if (carouselId === 'carousel2') {
        currentSlide2 = index;
    }

    // Move the carousel container
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide(carouselId) {
    if (carouselId === 'carousel1') {
        showSlide(carouselId, currentSlide1 + 1);
    } else if (carouselId === 'carousel2') {
        showSlide(carouselId, currentSlide2 + 1);
    }
}

// Automatically change slides every 5 seconds
setInterval(() => {
    nextSlide('carousel1');
}, 5000); // 5 seconds

setInterval(() => {
    nextSlide('carousel2');
}, 5000); // 5 seconds
