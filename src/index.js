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
