const container = document.querySelector(".container");
const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  loop: true,
  speed: 300,


  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: "Перейти на слайд {{index}}",
    slideLabelMessage: "Слайд номер {{index}} из общего количества {{slidesLength}}"
  }
});

