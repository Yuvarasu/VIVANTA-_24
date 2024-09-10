let currentSlide1 = 0;
let currentSlide2 = 0;
const intervalTime = 5000; // 5 seconds

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');
    const indicators = document.querySelectorAll(`#${carouselId} ~ .carousel-indicators .carousel-indicator`);

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

    // Move the carousel (fix translateX syntax)
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // Update indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
}

function nextSlide(carouselId) {
    if (carouselId === 'carousel1') {
        showSlide(carouselId, currentSlide1 + 1);
    } else if (carouselId === 'carousel2') {
        showSlide(carouselId, currentSlide2 + 1);
    }
}

function setupIndicators(carouselId) {
    const indicators = document.querySelectorAll(`#${carouselId} ~ .carousel-indicators .carousel-indicator`);
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showSlide(carouselId, index);
        });
    });
}

// Initialize carousels
setupIndicators('carousel1');
setupIndicators('carousel2');

// Automatically change slides every 5 seconds
setInterval(() => {
    nextSlide('carousel1');
}, intervalTime);

setInterval(() => {
    nextSlide('carousel2');
}, intervalTime);

// Show the first slide on load
showSlide('carousel1', 0);
showSlide('carousel2', 0);
