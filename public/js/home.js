const myCarouselElement = document.querySelector('#gallery-slider')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 6000,
  touch: false,
  keyboard: false,
  pause: false
})

