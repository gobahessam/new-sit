

const swiper = new Swiper(".slider-container1", {
     slidesPerView: 1,
     autoplay: {
       delay: 5000,
       pauseOnMouseEnter :true,
    },
     pagination: {
       el: '.slider__pagination',
       clickable: true,
     },
    
    });
    
    
    const slider = document.querySelector('.slider-container');
    
    let mySwiper;
    
    function mobileSlider() {
         if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
              mySwiper = new Swiper(slider, {
                   slidesPerView: 1,
                   loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
                   slideClass: 'brands__card',
              });
    
    
              slider.dataset.mobile = 'true';
         }
    
         if (window.innerWidth > 768) {
              slider.dataset.mobile = 'false';
              if (slider.classList.contains('swiper-container-initialized')) {
                   mySwiper.destroy();
              }
         }
    }
    
    mobileSlider()
    
    window.addEventListener('resize', () => {
         mobileSlider();
    });
    

    ScrollReveal({
   reset: true,
   distance: '60px',
   duration: 800,
   delay: 600
 });
 ScrollReveal().reveal('.quality, .customer', { delay: 100, origin: 'left' });
 ScrollReveal().reveal('.products__item', { delay: 100, origin: 'right' });
 ScrollReveal().reveal('.company, .news__item', { delay: 100, origin: 'top' });
 ScrollReveal().reveal('.footer, .catalog', { delay: 100, origin: 'bottom' });
// ScrollReveal().reveal('.brands__card', { delay: 20 });
