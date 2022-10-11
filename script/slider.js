let offset = 0;
const sliderLine = document.querySelector('.slider_line');
let timer;
autoSlide();

function autoSlide() {
   setInterval(2000);
}

document.querySelector('.next').addEventListener('click', function next() {
   offset = offset + 475.75;
   if (offset > 1903) {
      offset = 1903;
   }
   sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function next() {
   offset = offset - 475.75;
   if (offset < 1903) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
});
