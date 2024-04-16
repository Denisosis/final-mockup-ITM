import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
// Переменные слайдер
const showBtn = document.querySelector(".hide");
const showText = document.querySelector(".hide__name_show");
const closeText = document.querySelector(".hide__name_close");
const hideImg = document.querySelector(".hide__img");
const mainBlock = document.querySelector(".main");
const slider = document.querySelector(".swiper");
// Переменные бургер-меню
const burger = document.querySelector(".point__menu-btn");
const burgerMenu = document.querySelector(".burger-menu");
const burgerClose = document.querySelector(".burger__button__general");
const fonBurger = document.querySelector(".fon-burger");
// Переменные модалки-звонка
const callBtnP = document.querySelector(".point__tel");
const callBtnM = document.querySelector(".footer__button__tel");
const modalTel = document.querySelector(".modal-call-container");
const callClose = document.querySelector(".call__button");
const fonCall = document.querySelector(".fon-call");
// Переменные модалки-фидбэк
const feedbackBtnP = document.querySelector(".point__email");
const feedbackBtnM = document.querySelector(".footer__button__message");
const modalFeedback = document.querySelector(".modal-feedback-container");
const feedbackClose = document.querySelector(".feedback__button");
const fonFeedback = document.querySelector(".fon-feedback");

// Выезд бургер-меню
burger.addEventListener("click", function () {
  burgerMenu.classList.add("burger-menu-active");
  fonBurger.classList.add("fon-burger-active");
});
burgerClose.addEventListener("click", function () {
  burgerMenu.classList.remove("burger-menu-active");
  fonBurger.classList.remove("fon-burger-active");
});
fonBurger.addEventListener("click", function () {
  burgerMenu.classList.remove("burger-menu-active");
  fonBurger.classList.remove("fon-burger-active");
});

// Выезд модалки звонка
callBtnP.addEventListener("click", () => {
  modalTel.classList.add("modal-call-container-active");
  fonCall.classList.add("fon-call-active");
});
callBtnM.addEventListener("click", () => {
  modalTel.classList.add("modal-call-container-active");
  fonCall.classList.add("fon-call-active");
});
callClose.addEventListener("click", () => {
  modalTel.classList.remove("modal-call-container-active");
  fonCall.classList.remove("fon-call-active");
});
fonCall.addEventListener("click", () => {
  modalTel.classList.remove("modal-call-container-active");
  fonCall.classList.remove("fon-call-active");
});

// Выезд модалки фидбэка
feedbackBtnP.addEventListener("click", () => {
  modalFeedback.classList.add("modal-feedback-container-active");
  fonFeedback.classList.add("fon-feedback-active");
});
feedbackBtnM.addEventListener("click", () => {
  modalFeedback.classList.add("modal-feedback-container-active");
  fonFeedback.classList.add("fon-feedback-active");
});
feedbackClose.addEventListener("click", () => {
  modalFeedback.classList.remove("modal-feedback-container-active");
  fonFeedback.classList.remove("fon-feedback-active");
});
fonFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("modal-feedback-container-active");
  fonFeedback.classList.remove("fon-feedback-active");
});

// Кнопка "Показать все" repair-tech
showBtn.onclick = function () {
  showText.classList.toggle("hidden");
  closeText.classList.toggle("hidden");
  hideImg.classList.toggle("hide__img_rotate");
  mainBlock.classList.toggle("show__element");
};

let swiper;

function resize() {
  if (window.innerWidth < 768 && slider.dataset.mobile === "true") {
    //   Инициализация слайдера
    swiper = new Swiper(".swiper", {
      // loop: true,
      width: 240,
      height: 72,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    slider.dataset.mobile = "false";
  }

  if (window.innerWidth > 767 && slider.dataset.mobile === "false") {
    //   РАЗРУШЕНИЕ!!!
    if (slider.classList.contains("swiper-initialized")) {
      swiper[0].destroy();
      swiper[1].destroy();
    }
    slider.dataset.mobile = "true";
  }
}

resize();

window.addEventListener("resize", resize);
