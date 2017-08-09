$(document).ready(function() {

  $(window).scroll(function(e) {
    if ($(window).scrollTop()>0) {
      $('nav').css('position', 'fixed');
      $('nav').css('background-color', '#e7e7e7');
      $('.navbar-list a').css('color', '#acacac');
    } else {
      $('nav').css('position', '');
      $('nav').css('background-color', '');
      $('.navbar-list a').css('color', '');
    }
  })

  var s = skrollr.init();

});
