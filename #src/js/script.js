@@include("./libs/_webpCompatibility.js")

// Custom JS
document.addEventListener('DOMContentLoaded', () => {
   const reviewsSlider = new Swiper('#reviews-slider', {
      // slidesPerView: 3,
      // spaceBetween: 50,
      centeredSlides: true,
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
         rotate: 35,
         stretch: 1,
         depth: 100,
         modifier: 1,
         slideShadows: false,
      },
      navigation: {
         nextEl: '.slider-button-next',
         prevEl: '.slider-button-prev',
      },
      breakpoints: {
         // when window width is >= 320px
         320: {
           slidesPerView: 1,
           spaceBetween: 70
         },
         // when window width is >= 480px
         720: {
           slidesPerView: 2,
           spaceBetween: 30
         },
         // when window width is >= 640px
         980: {
           slidesPerView: 3,
           spaceBetween: 50
         }
      }
   });

   const authorSlider = new Swiper('#author-slider', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      spaceBetween: 20,
      effect: "coverflow",
      speed: 1000,
      coverflowEffect: {
         rotate: 35,
         stretch: 1,
         depth: 100,
         modifier: 1,
         slideShadows: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
      },

   });

   let linkToggle = document.querySelectorAll('.faq__item');

   linkToggle.forEach((item) => {
      item.querySelector(".faq__header").addEventListener('click', (event) => {
         event.preventDefault();
         let body = item.querySelector(".faq__body")

         if (!item.classList.contains('active')) {
            item.classList.add('active');
            body.style.height = 'auto';

            let height = body.clientHeight + 'px';

            body.style.height = '0px';

            setTimeout(function () {
               body.style.height = height;
            }, 0);
         } else {
            body.style.height = '0px';

            body.addEventListener('transitionend', function () {
               item.classList.remove('active');
            }, {
               once: true
            });

         }
      });
   });

   let burger = document.querySelector(".burger");
   let menu = document.querySelector(".header__nav");

   burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
   })


})
