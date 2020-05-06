$('.main-banner__content').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  fade: true,
  cssEase: "linear",
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
      
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000
      }
    }
  ]
});
$('.main-seervice__content').slick({
  infinite: true,
  slidesToShow: 4,
  autoplay:true,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
   
        autoplaySpeed: 1000
      }
    }
  ]
});

$('.main-testimonios__content').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  autoplay:true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
   
        autoplaySpeed: 1000
      }
    }
  ]
});

$('.main-marcas__content').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  dots: false,
  arrows: false,
  autoplay:true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
   
        autoplaySpeed: 1000
      }
    }
  ]
});