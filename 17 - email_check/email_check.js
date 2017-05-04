$(document).ready(function() {
  $('textarea').focus();

  $('body').on('click', function () {
		$('textarea').focus();
	});

  $('textarea').one('keypress', function () {
		$('#container').fadeOut('slow');
		$('#result').fadeIn('slow');
    $('#length_check').fadeIn('slow');
    $('#emailaddress').css({'top':'40px', 'height': '200px', 'width': '800px'} );
	});

  $('textarea').on('keyup', function() {
    var text = $('textarea').val();
    var size = 500*(Math.pow(Math.pow(1/13, (1/250)), text.length));

    $('textarea').css('font-size', size + '%');
    $('#length_check').text('Character Count: ' + text.length);

    if (text.length >= 15) {
      $('#length_check').css('background-color', '#e99505');
    }

    if (text.length >= 20) {
        $('#length_check').css('background-color', '#a0e905');
    }

    if (text.length >= 25) {
        $('#length_check').css('background-color', '#e90572');
    }

    if (text.length >= 30) {
        $('#length_check').css('background-color', '#05ace9');
    }

  });

  $('textarea').val("");
  $('textarea').css('font-size', '24px');


  function checkEmail() {
    var email = document.getElementById('emailaddress');
    var filter = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    }
  }

});
