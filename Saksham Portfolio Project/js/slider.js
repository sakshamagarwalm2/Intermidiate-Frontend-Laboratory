const slides = document.querySelectorAll(".slides");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goprev = () => {
  if (counter == 0) {
    counter = slides.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
};

const gonext = () => {
  if (counter == slides.length - 1) {
    counter = 0 ;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
