const swiper = new Swiper(".swiper-s1", {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  direction: "horizontal",

  // And if we need scrollbar

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 90,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      cenetredSlides: true,
    },
  },
});

const swiper2 = new Swiper(".swiper-s2", {
  // Optional parameters
  /////slidesPerView: "auto",
  direction: "horizontal",
  loop: true,
  freeMode: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
});
