const myModal = document.getElementById("modal");
const myInput = document.getElementById("myInput");

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



const swiper = new Swiper(".swiper-screenshots", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 25,
  watchSlidesVisibility: true,
  
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },

  

});