$(document).ready(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  $(".news-index__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      }
    ]
  });

  $(".partners-inner__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $(".about__stats").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 361,
      settings: 'unslick'
    }]
  })

  $('#burger').on('click', function () {
    if (window.innerWidth > 360) {
      $('body').toggleClass('hidden');
      $(this).toggleClass('active');
      $('.main-menu').toggleClass('show');
    } else {
      $('body').toggleClass('hidden');
      $(this).toggleClass('active');
      $('.header__nav > ul').toggleClass('show');
    }
  })

  $(".aside").hover(
    function () {
      $(this).addClass("show")
    },
    function () {
      $(this).removeClass("show")
    }
  );

  $(function () {
    $(".phone-input").mask("+7(999) 999-99-99");
  });

  $(".search").on("click", function () {
    $(this).addClass("active");
  });
  // сварачиваем поиск по клику на пустое место
  $(document).mouseup(function (e) {
    if ($(".search").has(e.target).length === 0) {
      $(".search").removeClass("active");
    }
  });
  $("#buttonCall").on("click", function () {
    $(".modal").addClass("show");
    $(".modal__call").addClass("show");
    $("body").toggleClass('hidden');
  });
  $("#buttonLk").on("click", function () {
    $(".modal").toggleClass("show");
    $(".modal__lk").toggleClass("show");
    $("body").toggleClass('hidden');
  });
  // $('#orderBtn').on('click', function () {
  //   $('.modal__call').removeClass('show');
  //   $('.modal__order').addClass('show');
  // })
  // закрываем модальное окно
  $(".cross").on("click", function () {
    $(".modal").removeClass("show");
    $("body").removeClass("hidden");
  });

  if (window.innerWidth < 361) {
    $('.inner-block__header a').html('Все');
    $('.partners-inner__header a').html('Все');
    $('.tabs__header li:first-child').html('Офис');
  }

  $('#footerNav').on('click', function () {
    $(this).toggleClass('active');
    $('.footer__nav nav').toggleClass('active');
  })

  // tabs
  $(function () {
    $('.tabs__header').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  // отоброжание количества прикрепленных файлов
  let inputs = document.querySelectorAll('.input__file');
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.input__file-button-text').innerText = labelVal;
    });
  });
  //- инициализация fancybox
  // $('[data-fancybox="video-gallery"]').fancybox({
  //   // Options will go here
  // });

  $('.toggle').on('click', function () {
    $(this).next().toggle();
    $(this).toggleClass('active');
  })

  //- внутреняя новости, перемещение заголовка на мобильной версии
  if (window.innerWidth < 361) {
    $('.news-inner__wrapper .title').appendTo($('.news-inner__wrapper .inner-block__col'));
    $('.news-inner__picture').appendTo('.news-inner__block');
  }

  //- скролл вверх по клику
  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow")
      }
      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow")
        } else {
          $(scrollDiv).fadeIn("slow")
        }
      });
      $(this).click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, "slow")
      })
    }
  });

  //- top scroll
  $(function () {
    $("#topscroll").scrollToTop();
  });

  $('.item-product__basket').on('click', function () {
    console.log('1');
    $(this).hide();
    $(this).next().removeClass('hide');
  })

});