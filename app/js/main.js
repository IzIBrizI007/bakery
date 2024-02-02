$(function () {
  $('.format__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="format__arrow format__arrow--prev"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="format__arrow format__arrow--next"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
    dots: true,
    responsive: [
        {
          breakpoint: 769,
        settings: {
            arrows : false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 11200
          }
        }
      ]
  });

  $window = $(window);
  $window.scroll(function () {
    $scrollPosition = $window.scrollTop();
    console.log($scrollPosition);
    if ($scrollPosition > 50) {
      $('.header').addClass('header__top--sticky');
    }
    else {
      $('.header').removeClass('header__top--sticky');
    }
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger__line--active');
    $('body').toggleClass('lock');
    $('.burger-nav').toggleClass('burger-nav--active');
  });
});

$(window).on('load resize', function() {
      if ($(window).width() < 769) {
        $('.format__list:not(.slick-initialized)').slick({
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        });
  } if ($(window).width() > 769) {
    $(".format__list.slick-initialized").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="format__arrow format__arrow--prev"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
      nextArrow: '<button type="button" class="format__arrow format__arrow--next"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
      dots: true,
    });
      }
    });