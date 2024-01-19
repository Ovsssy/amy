let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200:{
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});