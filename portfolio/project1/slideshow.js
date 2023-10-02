// Variables
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");
let slideTimeout;

// Function to show a specific slide
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  clearTimeout(slideTimeout);
  slides[index].style.display = "block";
  dots[index].classList.add("active");
  slideIndex = index;
  slideTimeout = setTimeout(nextSlide, 2000); // Resume slideshow after 2 seconds
}

// Function to show the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Attach click event listeners to dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    showSlide(i);
  });
}

// Initial call to start the slideshow
nextSlide();
