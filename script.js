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
            body.style.overflow = 'hidden'; 
        });
    });

    closeBtn.addEventListener('click', function() {
        lightboxModal.style.display = 'none';
        body.style.overflow = 'auto'; 
    });

    lightboxModal.addEventListener('click', function(event) {
        if (event.target === lightboxModal) {
            lightboxModal.style.display = 'none';
            body.style.overflow = 'auto'; 
        }
    });
});

function plusSlides(n) {
    console.log("plusSlides function called");
    showSlides(slideIndex += n);
}

function showSlides(n) {
    console.log("showSlides function called");

}


var slideIndex = 1;


function plusSlides(n, inLightbox) {

    if (inLightbox) {
        showSlides(slideIndex += n);
    }

}


function showSlides(n) {

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

var slideIndex = 1;
var modalImg; 

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.querySelectorAll('.lightbox');
    const lightboxModal = document.getElementById('lightbox-modal');
    modalImg = document.getElementById('modal-img'); 
    const closeBtn = document.querySelector('.close');
    const body = document.querySelector('body');

 
});



const testimonialsContainer = document.querySelector('.testimonials-container');
let translateY = 0;

function slideUp() {
    translateY -= 220;
    testimonialsContainer.style.transform = `translateY(${translateY}px)`;
}

function slideDown() {
    translateY += 220; 
    testimonialsContainer.style.transform = `translateY(${translateY}px)`;
}
