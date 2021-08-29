$('.section__slider-slick-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade:false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    draggable: false,
    // prevArrow:'<button type="button" class="slick-prev-slide-top"><i class="ti-angle-left slick-slider-icon"></i></button>',
    // nextArrow:'<button type="button" class="slick-next-slide-top"><i class="ti-angle-right slick-slider-icon"></i></button>',
});

$('.section__ctas-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade:false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    draggable: true,
    // prevArrow:'<button type="button" class="slick-prev-slide-top"><i class="ti-angle-left slick-slider-icon"></i></button>',
    // nextArrow:'<button type="button" class="slick-next-slide-top"><i class="ti-angle-right slick-slider-icon"></i></button>',
});



$('.section__events-slick').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    prevArrow:'<button type="button" class="section__events-slick-btn-prev"><i class="fas fa-caret-left  section__events-slick-btn-icon"></i></button>',
    nextArrow:'<button type="button" class="section__events-slick-btn-next"><i class="fas fa-caret-right section__events-slick-btn-icon"></i></button>',
});


$('.section__news-slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.section__news-slick-tab',
    draggable: false,
  });
  $('.section__news-slick-tab').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.section__news-slick-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });



  $('.section__videos-header-slick').slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    draggable: false,
    autoplay: true,
    autoplaySpeed:4000,
  });
