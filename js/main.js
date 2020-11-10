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
        slidesPerView: 3,

      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,

      }
    }
  });



