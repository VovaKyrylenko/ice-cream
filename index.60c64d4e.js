let e;function o(e){function o(o){o?(e.backdrop.classList.remove("visually-hidden"),e.modal.classList.remove("visually-hidden"),null!=e.autofocus&&e.autofocus.focus()):(e.backdrop.classList.add("visually-hidden"),e.modal.classList.add("visually-hidden"))}e.modal.classList.add("visually-hidden"),e.openModalBtn.addEventListener("click",(()=>o(!0))),e.closeModalBtn.addEventListener("click",(()=>o(!1)))}$(".gallery-js").slick({dots:!1,infinite:!0,arrows:!1,speed:300,fade:!0,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3,cssEase:"ease-in"}),$(".customer").slick({dots:!0,prevArrow:!1,nextArrow:!1,infinite:!0,speed:850,cssEase:"ease-in",autoplay:!0,autoplaySpeed:3e3}),(()=>{const e={customer__dots:document.querySelector(".slick-dots"),customer__dot:document.querySelectorAll(".slick-dots li"),customer__button:document.querySelectorAll(".slick-dots button")};length=e.customer__dots.children.length,e.customer__dots.classList.add("customer__dots"),e.customer__dots.removeAttribute("style");for(let o=0;o<length;o++)e.customer__dot[o].classList.add("customer__dot"),e.customer__button[o].style.display="none";window.setInterval((()=>{for(let o=0;o<length;o++)e.customer__dot[o].classList.contains("slick-active")?e.customer__dot[o].classList.add("customer__dot--active"):e.customer__dot[o].classList.remove("customer__dot--active")}),100)})(),e={backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-franches-open]"),closeModalBtn:document.querySelector("[data-modal-franches-close]"),modal:document.querySelector("[data-modal-franches]"),autofocus:document.querySelector("[data-modal-franches-autofocus]")},o(e),e={backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]"),autofocus:document.querySelector("[data-modal-location-autofocus]")},o(e),e={backdrop:document.querySelector("[data-backdrop]"),openModalBtn:document.querySelector("[data-modal-about-open]"),closeModalBtn:document.querySelector("[data-modal-about-close]"),modal:document.querySelector("[data-modal-about]"),autofocus:document.querySelector("[data-modal-about-autofocus]")},o(e);const t=document.querySelectorAll(".hero__company-info picture");t[0].classList.add("visually-hidden");let a=9999;window.onscroll=()=>function(){const e=document.querySelector(".container.hero").offsetHeight/1.5,o=window.pageYOffset;a>e&&o<e&&(setTimeout((()=>{t[1].classList.add("visually-hidden"),t[0].classList.remove("visually-hidden")}),180),setTimeout((()=>{t[1].classList.remove("visually-hidden"),t[0].classList.add("visually-hidden")}),750));a=o}();
//# sourceMappingURL=index.60c64d4e.js.map
