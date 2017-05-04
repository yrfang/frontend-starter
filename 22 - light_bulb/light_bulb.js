$(document).ready(function() {

  $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
  }

  var state = 'on';
  $(['light_off.png', 'light_on.png']).preload();

  $('#light_' + state).hide();
  //$('#light_' + state).hide();
  var width = $('.slider').css('width');

  $('input').on('click', function(){
    if ( $(this).is(':checked') ) {
      $('#light_on').fadeIn('slow');
      $('#links_container a').css('color', '#fec941');
    }
    else {
      $('#light_on').fadeOut('slow');
      $('#light_off').show();
      $('#links_container a').css('color', '#83703f');
    }
  });

})
