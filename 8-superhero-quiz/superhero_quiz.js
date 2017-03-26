$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    var total = getScore();
    var message;

    if (total < 30*1/4) {
      message = "Oh! You're definitely not a superhero.";
    } else if (total < 30*1/2) {
      message = "You're might be a superhero in the future.";
    } else if (total < 30*3/4) {
      message = "You're almost a superhero.";
    } else {
      message = "You're a Big Superhero!";
    }

    var your_score = "<div id='score'>You're score is " + total + ".</div>";
    message = "<div id='message'>" + message + "</div>";

    $('#container').html(your_score + message);

    function getScore() {
      var score = 0;

        for (var i=1; i<11; i++) {
          //var question = i;
          var answer = $('input[name=q' + i + ']:checked').val();

          if (answer) {
            score += parseInt(answer);
          }
        }
      return score;
    }

  });
});
