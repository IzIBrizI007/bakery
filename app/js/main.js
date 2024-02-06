$(function () {

  $('.nav__button, .bakery__button').on('click', function(){
  $('.popup').toggleClass('popup--active');
  $('body').toggleClass('lock');
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger__line--active');
    $('body').toggleClass('lock');
    $('.burger-nav').toggleClass('burger-nav--active');
  });

  $(document).mouseup( function(e){  
  var div = $('.popup'); 
		if ($('.popup').is(e.target)
		    && $('.popup__bg').has(e.target).length === 0 ) { 
      $('.popup').removeClass('popup--active');
      $('body').removeClass('lock');
		}
});


  $('.format__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="format__arrow format__arrow--prev"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="format__arrow format__arrow--next"><svg width="36" height="23"><use xlink:href="images/svg/sprite.svg#left-arrow"></use></svg></button>',
    dots: true,
    responsive: [
        {
          breakpoint: 1211,
        settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 11200
          }
        },
        {
          breakpoint: 969,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 11200
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
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
});

