document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.querySelectorAll('.lightbox');
    const lightboxModal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    const body = document.querySelector('body');

    lightbox.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const imgSrc = item.getAttribute('href');
            modalImg.setAttribute('src', imgSrc);
            lightboxModal.style.display = 'block';
            body.style.overflow = 'hidden'; // Undgå at scrolle på ting i baggrunden
        });
    });

    closeBtn.addEventListener('click', function() {
        lightboxModal.style.display = 'none';
        body.style.overflow = 'auto'; // Gendan scrolling på baggrundindhold
    });

    lightboxModal.addEventListener('click', function(event) {
        if (event.target === lightboxModal) {
            lightboxModal.style.display = 'none';
            body.style.overflow = 'auto'; // Gendan scrolling på baggrundsindhold
        }
    });
});

function plusSlides(n) {
    console.log("plusSlides function called");
    showSlides(slideIndex += n);
}

function showSlides(n) {
    console.log("showSlides function called");
    // Resten af ​​funktionskoden...
}

// Definer slideIndex globalt
var slideIndex = 1;

// Definer plusSlides funktion
function plusSlides(n, inLightbox) {
    // Tjek om inLightbox er "true" før funktionen udføres
    if (inLightbox) {
        showSlides(slideIndex += n);
    }
    // Hvis inLightbox er falsk eller ikke angivet, gør ikke noget (navigation til hovedgalleri)
}

// Define showSlides function
function showSlides(n) {
    // Funktion implementering
}
function plusSlides(n) {
    console.log("plusSlides function called with n =", n);
    console.log("Current slideIndex value:", slideIndex);
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.querySelectorAll('.lightbox');
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    modalImg.src = slides[slideIndex - 1].getAttribute('href');
}
// Definer globale variabler
var slideIndex = 1;
var modalImg; // Definer modalImg globalt

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.querySelectorAll('.lightbox');
    const lightboxModal = document.getElementById('lightbox-modal');
    modalImg = document.getElementById('modal-img'); // tildeling af modalImg her
    const closeBtn = document.querySelector('.close');
    const body = document.querySelector('body');

    // Resten af event listeners...
});

// Resten af funktionerne...

const testimonialsContainer = document.querySelector('.testimonials-container');
let translateY = 0;

function slideUp() {
    translateY -= 220; // Adjust the slide distance as needed
    testimonialsContainer.style.transform = `translateY(${translateY}px)`;
}

function slideDown() {
    translateY += 220; // Adjust the slide distance as needed
    testimonialsContainer.style.transform = `translateY(${translateY}px)`;
}
