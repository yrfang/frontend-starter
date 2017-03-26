$(document).ready(function() {
  $('textarea').focus();

  $('.button').on('click', function(event) {
    event.preventDefault();

    var text = $('textarea').val();

    if (text.replace(/^\s+|\s+$/g, '') == '') {
			text = 'You have to probably type some text next time.'
		}

    $('header').addClass('dark');
		$('body').css('background', '#0b3930');
		$('#container').html('<div id="grow">' + text + '</div>');

    scaleUp(text);
  });

  function scaleUp() {
    setTimeout(function() {
      $('#grow').css('font-size', '60px');
    }, 2000);
  };

});
