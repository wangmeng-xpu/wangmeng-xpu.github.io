(function ($) {

  "use strict";

  // Navigation Section
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("nav-shadow");
        } else {
          $(".navbar-fixed-top").removeClass("nav-shadow");
        }
  });

  // Smoothscroll js
  $(function() {
    $('.navbar-custom a, #home a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 50
      }, 600);
      event.preventDefault();
    });
  });
  $(function() {
    $('.navbar-custom a, #home_zh a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 50
      }, 600);
      event.preventDefault();
    });
  });

  $(".more").on('click',function () {
    $(this).children(".fa").toggleClass("fa-chevron-right");
    $(this).children(".fa").toggleClass("fa-chevron-down");
  });

})(jQuery);
