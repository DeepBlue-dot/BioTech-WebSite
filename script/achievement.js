var swiper = new Swiper(".team-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true, // Center the slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: "auto",
      spaceBetween: 10
    },
    750: {
      slidesPerView: "auto",
      spaceBetween: 20
    },
    1024: {
      slidesPerView: "auto",
      spaceBetween: 30
    },
    1100: {
      slidesPerView: "auto",
      spaceBetween: 40
    },
  }
});
