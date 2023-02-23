(function(){
  const license = new Swiper('.license-slider__inner', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 24,
    //loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      //clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    // },
  });
}());
