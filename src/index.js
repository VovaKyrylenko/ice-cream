$('.gallery-js').slick({
   dots: false,
   infinite: true,
   arrows: false,
   speed: 300,
   fade: true,
   slidesToShow: 1,
   adaptiveHeight: true,
   autoplay: true,
   autoplaySpeed: 3000,
   cssEase: 'ease-in',
});

$('.customer').slick({
   dots: true,
   prevArrow: false,
   nextArrow: false,
   infinite: true,
   speed: 850,
   cssEase: 'ease-in',
   autoplay: true,
   autoplaySpeed: 3000,
});

// ------------- Змінює класи Slider відповідно до БЕМ -------------
(() => {
   const refs = {
      customer__dots: document.querySelector('.slick-dots'),
      customer__dot: document.querySelectorAll('.slick-dots li'),
      customer__button: document.querySelectorAll('.slick-dots button'),
   };

   length = refs.customer__dots.children.length;
   refs.customer__dots.classList.add('customer__dots');
   refs.customer__dots.removeAttribute('style');

   for (let i = 0; i < length; i++) {
      refs.customer__dot[i].classList.add('customer__dot');
      refs.customer__button[i].style.display = 'none';
   }

   window.setInterval(() => {
      for (let i = 0; i < length; i++) {
         if (refs.customer__dot[i].classList.contains('slick-active'))
            refs.customer__dot[i].classList.add('customer__dot--active');
         else refs.customer__dot[i].classList.remove('customer__dot--active');
      }
   }, 100);
})();

let refs;
// ----------------------------------------------------------------------------------------
// ---------------------------------------- Модалки + приклад -----------------------------
refs = {
   backdrop: document.querySelector('[data-backdrop]'),

   openModalBtn: document.querySelector('[data-modal-franches-open]'),
   closeModalBtn: document.querySelector('[data-modal-franches-close]'),
   modal: document.querySelector('[data-modal-franches]'),

   autofocus: document.querySelector('[data-modal-franches-autofocus]'),
};
modalLoad(refs);

refs = {
   backdrop: document.querySelector('[data-backdrop]'),

   openModalBtn: document.querySelector('[data-modal-franches-open]'),
   closeModalBtn: document.querySelector('[data-modal-franches-close]'),
   modal: document.querySelector('[data-modal-franches]'),

   autofocus: document.querySelector('[data-modal-franches-autofocus]'),
};
modalLoad(refs);

// ----------------------------------------------------------------------------------------
// ------------------------------------ Тут не лізти --------------------------------------

function modalLoad(refs) {
   refs.modal.style.display = 'none';

   refs.openModalBtn.addEventListener('click', () => toggleModal(true));
   refs.closeModalBtn.addEventListener('click', () => toggleModal(false));

   function toggleModal(value) {
      refs.backdrop.classList.toggle('visually-hidden');
      if (value) {
         refs.modal.style.display = 'block';
         if (refs.autofocus != null) refs.autofocus.focus();
      } else refs.modal.style.display = 'none';
   }
}

// (() => {
//    const refs = {
//       checkBox: document.querySelector('[data-policy]'),
//       submitBtn: document.querySelector('[data-submit-btn]'),
//    };

//    refs.checkBox.addEventListener('change', toggleAttr);

//    function toggleAttr() {
//       refs.submitBtn.toggleAttribute('disabled');
//    }
// })();
