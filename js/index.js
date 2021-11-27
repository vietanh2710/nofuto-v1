$(document).ready(function () {
  $(".carousel-center").slick({
    slidesToShow: 3,
    nextArrow:
      '<div class="slick-container arrow-right"><button class="slick-next bar"></button></div>',
    prevArrow:
      '<div class="slick-container arrow-left"><button class="slick-next bar"></button></div>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  AOS.init({
    offset: 400,
    delay: 0,
    duration: 1000,
  });
});
