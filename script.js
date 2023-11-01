
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.querySelector('.close');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const lightboxOverlay = document.getElementById('lightbox');

    let currentImageIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        lightbox.style.display = 'flex';
        currentImageIndex = index;
        showImage(currentImageIndex);
        document.body.style.overflow = 'hidden'; // Prevent scrolling in the background
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Enable scrolling in the background
    }

    function showImage(index) {
        lightboxImage.src = thumbnails[index].src;
    }

    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage(currentImageIndex);
        }
    }

    function nextImage() {
        if (currentImageIndex < thumbnails.length - 1) {
            currentImageIndex++;
            showImage(currentImageIndex);
        }
    }

    closeButton.addEventListener('click', closeLightbox);
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    lightboxOverlay.addEventListener('click', function(event) {
        // Check if the click occurred outside the lightbox content
        if (event.target === lightboxOverlay) {
            closeLightbox();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = '#1E1E1E'; // Full opacity when scrolling down
        } else {
            navbar.style.backgroundColor = '#1E1E1E70'; // 0.5 opacity when at the top of the page
        }
    });
});
