(function(){
  const reviews = new Swiper('.review-block__reviews', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}());
