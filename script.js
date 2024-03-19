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
