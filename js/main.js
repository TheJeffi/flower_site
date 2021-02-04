const flowersSlider = new Swiper('.flowers-slider', {
   // Параметры слайдера
   loop: true,
   slidesPerView: 6,
 
 
   // подключаем стрелки
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 const reviewsSlider = new Swiper('.reviews-slider', {
   // Параметры слайдера
   loop: true,
   slidesPerView: 1,
 
 
   // подключаем стрелки
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });