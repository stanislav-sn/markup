$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
    });

$(document).ready(function () {
    $("#carousel-header").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        navText: []
        
    });
  });
  