$(document).ready(function() {
  $('#go').on('click', function() {
    var clicks = 0;

    $('#text_container').hide();
    $('#click_container').show();

    $('body').css('cursor', 'pointer');
    $('body').css('user-select', 'none');

    $('body').on('click', function () {
			clicks++;
			$('#counter').text(clicks);
		});

    //timeBar progress
    var startTime = new Date();
    var maxTime = 15*1000;
    var timer = setInterval(fram, 100);

    function fram() {
      var now = new Date();
      var timeDiff = now.getTime() - startTime.getTime();
      var perc = Math.round((timeDiff/maxTime)*100);

      if (perc >= 100) {
        clearInterval(timer);
      } else {
        perc ++;
        $('#progress').css('width', (perc + "%"));
      }
     }

    //timerCounter
    var c = 0;
    var t = setInterval(timeCounter, 1000);

    function timeCounter() {
      if (c >= 15) {
        clearInterval(t);
      } else {
        c++;
      }
      if (c === 1) {
        $('#time').text(c + " second");
      } else {
        $('#time').text(c + " seconds");
      }
    }

    //results
    setTimeout(function() {
      var speed = Math.round((clicks / 15)*Math.pow(10,2))/Math.pow(10,2);

      $('#click_container').hide();
      $('#text_container').show();
      $('#text1').remove();
      $('#go').remove();
      $('body').css('cursor', 'auto');
      $('body').css('user-select', 'auto');
      $('h1').text('Time\'s Up!');

      if (clicks ===1) {
        $('#text2').text('You got ' + clicks + ' click.');
        $('#result').text('That\'s ' + speed + ' click per minute.');
      } else {
        $('#text2').text('You got ' + clicks + ' clicks.');
        $('#result').text('That\'s ' + speed + ' clicks per minute.');
      }

      $('#try').html('<a href="index.html">Try Again?</a>');

    }, 15000);



  });
});
