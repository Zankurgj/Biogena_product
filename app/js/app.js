document.addEventListener("DOMContentLoaded", function () {
  $(".js--popular-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $(".js--btn-like").on("click", function (evt) {
    $(evt.currentTarget).toggleClass("active");
  });
  scrollTopBtnInit();
});

const scrollTopBtnInit = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".js--btn-top").addClass("show");
    } else {
      $(".js--btn-top").removeClass("show");
    }
  });
  $(".js--btn-top").click(() => {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
};
