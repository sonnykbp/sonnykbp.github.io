
$(document).ready(function() {
  $("#home-nav").click(function() {
      $('body').animate({scrollTop: $("#home").offset().top - 120}, "slow");
      return false;
  });

  $("#about-nav").click(function() {
      $('body').animate({scrollTop: $("#about").offset().top - 120}, "slow");
      return false;
  });

  $("#work-nav").click(function() {
      $('body').animate({scrollTop: $("#work").offset().top - 120}, "slow");
      return false;
  });

  $("#contact-nav").click(function() {
      $('body').animate({scrollTop: $("#contact").offset().top - 120}, "slow");
      return false;
  });






});
