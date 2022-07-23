document.addEventListener("DOMContentLoaded", function () {
  // accordion start
  $( function() {
    $( ".accordion__list" ).accordion({
       icons: false,
       heightStyle: "content",
       collapsible: true,
       active: false,
       animate: {
         duration: 1000,
         easing: 'easeInQuad'
       }
     });
   });
   // accordion finish

   // hamburger start
   document.querySelector(".header__btn-open").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  });
  document.querySelector(".nav__close").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  });
  // hamburger finish

  // search start
  document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
  });
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active");
    }
  });
  
  document.querySelector(".form-btn-closed").addEventListener("click", function() {
    document.querySelector(".form").classList.remove("form__active");
    document.querySelector(".form-btn__open").classList.remove("active");
  });
  // search finish

  // slider start
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
  // slider finish

  // tabs start
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active');
      });

      document.querySelectorAll('.working__link').forEach(function(btn){
        btn.classList.remove('tabs__btn-active')});
        event.currentTarget.classList.add('tabs__btn-active');

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });
  // tabs finish
});
