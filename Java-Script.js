// Redirect the logo to the home page
document.querySelector('img[alt="PRMSU Logo"]').addEventListener('click', function() {
    window.location.href = 'HOME.html';
});

// Redirect Home link to the home page
document.getElementById('home-link').addEventListener('click', function() {
    window.location.href = 'HOME.html';
});

let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(slideIndex) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides and remove "active" from all dots
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    dots.forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });

    // Ensure slideIndex is within bounds
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Show the current slide and activate the corresponding dot
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

// Set up auto-sliding
setInterval(function() {
    plusSlides(1); // Automatically move to the next slide
}, 5000); // Change slide every 5 seconds
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
