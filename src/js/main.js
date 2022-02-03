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

  $('.cases__header').slick({
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

  if (window.innerWidth < 361) {
    $('.toggle').on('click', function () {
      $(this).next().slideToggle();
    })
  }
});