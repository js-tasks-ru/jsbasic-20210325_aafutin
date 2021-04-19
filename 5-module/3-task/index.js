function initCarousel() {
  let currentSlideNum = 0;
  const lastSlideIndex = 3;

  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselInner = document.querySelector('.carousel__inner');
  const slideWidth = carouselInner.offsetWidth;

  function slideCarousel (e) {
    if (this === carouselArrowLeft) {
      currentSlideNum--;
    }
    else if (this === carouselArrowRight) {
      currentSlideNum++;
    }

    if (currentSlideNum === 0) {
      carouselArrowLeft.style.display = 'none';
    }
    else {
      carouselArrowLeft.style.display = '';
    }

    if (currentSlideNum === lastSlideIndex) {
      carouselArrowRight.style.display = 'none';
    }
    else {
      carouselArrowRight.style.display = '';
    }

    carouselInner.style.transform = `translateX(-${currentSlideNum * slideWidth}px)`;
  }

  slideCarousel();
  carouselArrowLeft.onclick = slideCarousel;
  carouselArrowRight.onclick = slideCarousel;
}
