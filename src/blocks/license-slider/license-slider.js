(function(){
  const license = new Swiper('.license-slider__inner', {
    speed: 400,
    //slidesPerView: 'auto',
    spaceBetween: 24,
    //loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      //clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 24
      },
      // when window width is >= 480px
      560: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 24
      },

      1280: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    },

    autoplay: {
      delay: 5000,
    },
    a11y: true,
  });
}());
