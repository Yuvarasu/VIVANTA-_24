let currentSlide = {
    carousel1: 0,
    carousel2: 0
};

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.getElementsByClassName('carousel-item');
    const indicators = document.querySelector(`#${carouselId} ~ .carousel-indicators`).querySelectorAll('.carousel-indicator');

    if (index >= items.length) {
        index = 0;
    } else if (index < 0) {
        index = items.length - 1;
    }

    currentSlide[carouselId] = index;

    // Move the carousel container (not individual items)
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide(carouselId) {
    showSlide(carouselId, currentSlide[carouselId] + 1);
}

function prevSlide(carouselId) {
    showSlide(carouselId, currentSlide[carouselId] - 1);
}

function setupCarousel(carouselId) {
    const indicators = document.querySelector(`#${carouselId} ~ .carousel-indicators`).querySelectorAll('.carousel-indicator');

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            showSlide(carouselId, index);
        });
    });

    // Set initial slide
    showSlide(carouselId, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    setupCarousel('carousel1');
    setupCarousel('carousel2');
    
    setInterval(() => {
        nextSlide('carousel1');
    }, 5000);

    setInterval(() => {
        nextSlide('carousel2');
    }, 5000);
});
