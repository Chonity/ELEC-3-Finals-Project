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

// Main function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    // Ensure the slides and dots exist
    if (slides.length === 0 || dots.length === 0) {
        console.error("Slides or dots not found.");
        return;
    }
    
    // Wrap around the slides if the index goes out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

