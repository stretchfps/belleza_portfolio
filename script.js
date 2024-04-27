var currentTestimonial = 0;
var testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(function(testimonial) {
        testimonial.classList.remove('active');
    });

    // Show the selected testimonial
    testimonials[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }
    showTestimonial(currentTestimonial);
}

// Show the first testimonial initially
showTestimonial(currentTestimonial);

var slideIndex = 0;
var slides = document.getElementsByClassName("slideshow_slide");

function showSlides() {
    // Fade out the current slide
    slides[slideIndex].style.opacity = 0;
    slides[slideIndex].style.transition = "opacity 1s";

    // Increment the slide index
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Fade in the next slide
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.transition = "opacity 1s";

    // Continue the slideshow
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow automatically when the page loads
showSlides();

window.addEventListener('scroll', function() {
    var header = document.getElementById('fixed-header');
    var portfolioSection = document.getElementById('portfolio');
    var portfolioSectionPosition = portfolioSection.getBoundingClientRect().top;
  
    // Adjust the threshold as needed
    if (portfolioSectionPosition < 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Adjust scrolling speed as needed
    easing: 'easeInOutCubic' // Adjust easing function as needed
  });
  


