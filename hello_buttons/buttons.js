$(document).ready(function() {

  $('body').on('click', function() {
      $('#message').fadeOut('fast');
  });

  $('button').on('click', function () {
		$(this).hide();
		newButton();
	});

  function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

  function newButton() {
    var btn = randomInt(0, 5);

    if (btn === 0) {
			$('.btn_'+btn).css({top: randomInt(50, 450), left: randomInt(50, 800),
									 backgroundColor: randomColor()}).show();
		} else {
			$('.btn_'+btn).css({top: randomInt(50, 450), left: randomInt(50, 800)}).show();
		}
  }

  function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};


});
