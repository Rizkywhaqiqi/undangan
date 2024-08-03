let slideIndex = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;

// Slider functionality
function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', function() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', function() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

// Initialize the first slide
showSlide(slideIndex);

// Modal functionality
const rsvpButton = document.getElementById('rsvp-button');
const modal = document.getElementById('rsvp-modal');
const closeButton = document.querySelector('.close-button');

rsvpButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
