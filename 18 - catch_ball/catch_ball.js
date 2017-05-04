$(document).ready(function() {

  var notes = ["Good!",
					"That's Easy, Right?'!",
					"It's not Difficult.!",
					"Man you are good!",
					"WOW!",
					"Excellent!",
					"Everything is fine.!",
					"Keep Going!",
          "Yes?",
          "Unbelievable?",
          "It's Amazing!"];

  var levels = 0;

  $('#bouncer').on('click', function() {

    if ((levels+1) < 12) {
      ballSpeedUp(this);
      noteInstruction();
    } else {
      $('#score').text("You Win!").show();
      $('#traveler').hide();
      $('#replay').show();
    }

  });

  function noteInstruction() {
    var note = notes[levels];

    levels += 1;

    $('#score').text(note).show();
    $('#nextLevel').text('Next Level: Level ' + (levels+1)).show();
    $('#traveler').hide();

    setTimeout(function() {
      $('#score').hide();
      $('#nextLevel').hide();
      $('#traveler').show();
    }, 3000);

  }

  function ballSpeedUp() {
    var timeMinus = 5.8 - (levels+1)/2;
    var container = $('#traveler');
    var ball = $('#ball');
    var containerSpeed = container.css('animation-duration', timeMinus + 's');
    var ballSpeed = ball.css('animation-duration', timeMinus + 's');
  }

});
