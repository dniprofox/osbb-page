$(function () {
  ////////menu
	$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });

  //slider
  $('.gallery__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,    
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },      
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,          
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,          
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,          
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      },
    ]
  });

  //slider
  $('.news__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,    
    arrows: true,
    dots: true,    
  });       
  
});
