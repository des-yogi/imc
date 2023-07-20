(function(){
  const projects = new Swiper('.project-slider__inner', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 24,
    //loop: true,
    //loopedSlides: 4,
    autoplay: {
      delay: 5000,
    },
    a11y: true,
  });
}());
