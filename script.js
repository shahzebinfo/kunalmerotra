// script.js

const slides = document.querySelectorAll('.slides img');
const thumbs = document.querySelectorAll('.thumbnails .thumb');

let currentIndex = 0;

// Show the slide at index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

// Clicking thumbnails changes slide
thumbs.forEach((thumb, idx) => {
  thumb.addEventListener('click', () => {
    showSlide(idx);
  });
});

// Initialize first slide
showSlide(0);
