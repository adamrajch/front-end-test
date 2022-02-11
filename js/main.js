var slideIndex = 0;

console.log("hello there");

const images = [];
const time = 3000;
images[0] = "images/bb-slideshow-example-1.jpg";
images[1] = "images/stuffed-animal.jpg";

function showSlides() {
  var slides = document.getElementsByClassName("slideshow__slide");
  console.log(slides[0]);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
window.onload = showSlides;

var acc = document.getElementsByClassName("expander");
var panels = document.getElementsByClassName("expander__panel");

var k = 0;

function toggle(b) {
  var x = document.getElementById(`panel${b}`);
  x.classList.toggle("hide");
}

function toggleMenu() {
  console.log("clicked");
  var x = document.getElementById("header-bottom");
  x.classList.toggle("hide");
  console.log(x);
}
