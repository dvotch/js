function swiperMode() {
  let init = false;

  swiper = new Swiper(".swiper", {
    init: false,
    direction: "horizontal",
    loop: false,

    pagination: {
      el: ".swiper-pagination ",
      clickable: true,
    },
  });
  // Enable (for mobile)
  if (window.matchMedia("(max-width: 320px)").matches && !init) {
    swiper.init();
    init = true;
  }
  // Disable (for desktop)
  else if (init) {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener("load", () => {
  swiperMode();
});

window.addEventListener("resize", () => {
  swiperMode();
});
