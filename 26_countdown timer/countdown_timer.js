$(document).ready(function() {

  $('form').on('submit', function(event, timeEnd) {
    event.preventDefault();

    var year;
    var month;
    var day;
    var dateEnd;
    var timeEnd;
    var timer;

    if ( $('#time').val() == 0) {
      $('.timer').text('Not Available !');
    } else {

      dateEnd = $('#time').val();
      console.log(dateEnd);

      if (dateEnd.indexOf("/") >= 0) {
        dateEnd = dateEnd.split("/");  //[month, day, year]
        var year = dateEnd[2];
        var month = (dateEnd[0])-1;
        var day = dateEnd[1];
      }
      else {
        endDate = dateEnd.split("-");  //[year, month, day]
        var year = dateEnd[0];
        var month = (dateEnd[1])-1;
        var day = dateEnd[2];
      }

      timeEnd = new Date(dateEnd);
      timeEnd = timeEnd.getTime();
      console.log(timeEnd);

      $('.timer').text(timeEnd);

      timer = setInterval(calculate, 1000);
    }

  });

  function calculate() {
    var days;
    var timeEnd;
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                            dateStart.getUTCMonth(),
                            dateStart.getUTCDate());
    var timeRemaining = parseInt((timeEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);

      $('#test').parseInt(days, 10);
      
      } else {
      return;
      }
   }



});
