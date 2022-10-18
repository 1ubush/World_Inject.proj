let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.next').addEventListener('click', function next() {
   offset = offset + 475.75;
   if (offset > 1903) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
});
let slideIndex = 1;
showSlides(slideIndex);

let next = document.getElementById('next');

next.addEventListener ("click", function() {
   showSlides(slideIndex -= 1);
   makeTimer();
});

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let slides = document.getElementsByClassName("slider_photo");
   if (n < slides.length) {
      slideIndex = 1;
   }
   if (n <1) {
      slideIndex = slides.length
   }
   for (let slide of slides) {
      slide.getElementsByClassName.display = "none";
   }
   slides[slideIndex - 1].style.display = "flex";
}

var timer = 0;
makeTimer();
function makeTimer() {
   clearInterval(timer)
}




document.querySelector('.prev').addEventListener('click', function next() {
   offset = offset - 475.75;
   if (offset < 1903) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
});
