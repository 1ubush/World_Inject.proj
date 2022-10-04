let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.next').addEventListener('click', function () {
   offset = offset + (-247.5);
   if (offset > 0) {
      offset = 990
   }
   sliderLine.style.top = offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function() {
   offset = offset + 247.5;
   if (offset < 990) {
      offset = 0
   }
   sliderLine.style.top = offset + 'px';
})