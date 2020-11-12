var swiper = new Swiper('.swiper__bikeSlider', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.ico-arr-right',
        prevEl: '.ico-arr-left',
      },
      breakpoints: {
           // when window width is >= 240px
           240: {
            slidesPerView: 1,
    
          },
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
  
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
  
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
  
        }
      }
      
  });


  var swiper2 = new Swiper('.swiper__usedbySlider', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.ico-arr-right',
        prevEl: '.ico-arr-left',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,

      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,

      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,

      }
    }
  });

  // Menu opener hamburger







const burger = document.querySelector('.js-burger');
const body = document.querySelector('body');

burger.addEventListener('click', e => {
    if (!body.classList.contains('menuMobActive')) {
        body.classList.add('menuMobActive')
    } else {
        body.classList.remove('menuMobActive')
    }
});



function addMenuActiveClass() {

    if (window.scrollY > 0) {
        body.classList.add('js-active-header');
    } else {
        body.classList.remove('js-active-header');
    }
}


addMenuActiveClass();

window.addEventListener('scroll', addMenuActiveClass);

