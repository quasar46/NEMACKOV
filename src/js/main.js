$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $('.header__nav').toggleClass('show');
    $('body').toggleClass('hidden');
  })

  $('.header__close').on('click', function () {
    $('.header__nav').removeClass('show');
    $('body').removeClass('hidden');
  })

  if (window.innerWidth < 361) {
    $('.about__picture img').appendTo('.about__content');
    $('.about-inner__picture').appendTo('.about-inner__content');
    // $('.case-block__picture').appendTo('.case-block__content');
  }

  // if (window.innerWidth < 1367) {
  //   max = 2;
  //   i = 0;
  //   $('.projects__item').each(function () {
  //     i += 1;
  //     if (i > max) {
  //       $(this).addClass('foo');
  //     }
  //   })
  // }

  $('.services-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 361,
      settings: 'unslick'
    }]
  })

  $('.projects-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 361,
      settings: 'unslick'
    }]
  })

  // $('.cases__header').slick({
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   mobileFirst: true,
  //   responsive: [{
  //     breakpoint: 361,
  //     settings: 'unslick'
  //   }]
  // })

  $('.case__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: "<button class='slick-arrow slick-prev'>предыдущий проект</button>",
    nextArrow: "<button class='slick-arrow slick-next'>следующий проект</button>",
  })

  if (window.innerWidth < 361) {
    $('.toggle').on('click', function () {
      $(this).next().slideToggle();
    })
  }

  $('.tabs__btns').on('click', 'button:not(.active)', function () {
    $('.tabs__all-content').removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  })

  $('.tabs__all-content').on('click', function () {
    $(this).addClass('active');
    $('.tabs__content').addClass('active');
    $('.tabs__btns button').removeClass('active');
  })


});