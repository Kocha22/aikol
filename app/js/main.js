$((function(){
    $(".header__slider").slick({
        infinite:true,
        fade:true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<div class="slider-arrows slider-arrows__left" alt=""><span class="arrow__left-icon"><svg class="arrows__svg" xmlns="http://www.w3.org/2000/svg" fill="#39bc5b" width="24" height="24" viewBox="0 0 24 24"><polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"></polygon></svg></span></div>',
        nextArrow: '<div class="slider-arrows slider-arrows__right"  alt=""><span class="arrow__right-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="#39bc5b" width="24" height="24" viewBox="0 0 24 24"><polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"></polygon></svg></span></div>',
        autoplaySpeed: 0,
        autoplay: true
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick"
            }
        ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img src="images/arrow-left.svg" class="slider-arrows slider-arrows__left" alt=""></img>',
        nextArrow: '<img src="images/arrow-right.svg" class="slider-arrows slider-arrows__right" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
            {
            breakpoint: 1210,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true
                }
            },
            {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false
                }
            }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1103,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1064,
            settings: {
                slidesToShow: 2,
                centerMode: true
                }
            },
            {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true
                }
            }
        ]
    });

    $(".travel__slider, .shop__slider").slick({
        infinite:true,
        fade:true,
        prevArrow: '<img src="images/arrow-left.svg" class="slider-arrows slider-arrows__left" alt=""></img>',
        nextArrow: '<img src="images/arrow-right.svg" class="slider-arrows slider-arrows__right" alt=""></img>',
        asNavFor: '.slider-dots'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

     $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1)*$('.summ').data('guests');
        $('.summ').html('$' + summ);
     });

     let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val()-1)*$('.summ').data('guests');
     $('.summ').html('$' + summ);

     $('.surfboard-box__circle').on('click', function() {
        $(this).toggleClass('active')
     });

     $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
     });

     var swiper = new Swiper(".mySwiper", {
              effect: "coverflow",
              grabCursor: true,
              centeredSlides: true,
              loop: true,
              slidesPerView: 'auto',
              coverflowEffect: {
                  rotate: 0,
                  stretch: 80,
                  depth: 400,
                  modifier: 2, // 2,3
                  slideShadows : true,
                    },
                    pagination: {
                      el: ".swiper-pagination",
                      clickable: true,
                    },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
      });

      var swiper2 = new Swiper(".trustSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 5,
            stretch: 10,
            depth: 200,
            modifier: 3, // 2,3
            slideShadows : true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      });

      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".menu__list");

      hamburger.addEventListener("click", () => {

        /* Toggle active class */
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        /* Toggle aria-expanded value */
        let menuOpen = navMenu.classList.contains("active");
        console.log(menuOpen)
        let newMenuOpenStatus = menuOpen;
        hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
      })

      // close mobile menu
      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      //   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
      }))

      let navLinks = document.querySelector(".menu__list");

      let htmlcssArrow = document.querySelector(".htmlcss-arrow");

      htmlcssArrow.addEventListener('click', function() {
        navLinks.classList.toggle("show1");
      });
 
      new WOW().init();
}));