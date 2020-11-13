const body = document.querySelector('body');




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
      // when window width is >= 280
      280: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      // when window width is >= 320px
      
      320: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      850: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    }
  });

  // Menu opener hamburger




// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});


const burger = document.querySelector('.hamburger');


burger.addEventListener('click', e => {
    if (!body.classList.contains('menuMobActive')) {
        body.classList.add('menuMobActive')
    } else {
        body.classList.remove('menuMobActive')
    }
});




function addMenuActiveClass(scrollHeight, activeClass) {
  if (window.scrollY > scrollHeight) {
      body.classList.add(activeClass);
  } else {
      body.classList.remove(activeClass);
  }
}


addMenuActiveClass(0, 'js-active-header');

window.addEventListener('scroll', e=>{  
  addMenuActiveClass(0, 'js-active-header')
});

addMenuActiveClass(146, 'js-fixed-header');

window.addEventListener('scroll', e=>{
addMenuActiveClass(146, 'js-fixed-header')
});




// onclick= display()

// function display() {
//   document.getElementById("myID").style.marginTop = "80px";
// }


// function addMenuActiveClass(scrollHeight, activeClass) {
//   console.log(window.scrollY)
//   if (window.scrollY > scrollHeight) {
//       body.classList.remove(activeClass);
//   } else {
//       body.classList.add(activeClass);
//   }
// }

// addMenuActiveClass(0, 'js-notActive-header');

// window.addEventListener('scroll', e=>{  
//   addMenuActiveClass(0, 'js-notActive-header')
// });