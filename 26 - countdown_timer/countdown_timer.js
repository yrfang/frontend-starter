$(document).ready(function() {

  $('form').on('submit', function(event, timeEnd) {
    event.preventDefault();

    var year, month, day, hour, minute;
    var date = $('#date').val();
    var time = $('#time').val().split(':');

    console.log(date);
    console.log(time);

    if ( date == 0 && time == 0) {
      $('#info').text('Not Available !');
    } else {

      $('#info').remove();
      if (date.indexOf("/") >= 0) {
        date = date.split("/");  //[month, day, year]
        var year = date[2];
        var month = (date[0])-1;
        var day = date[1];
      }
      else {
        date = date.split("-");  //[year, month, day]
        var year = date[0];
        var month = (date[1])-1;
        var day = date[2];
      }

      function calculation() {

        var timeStart = new Date();
        var timeStart_date = new Date(timeStart.getFullYear(),
                                      timeStart.getMonth(),
                                      timeStart.getDate());
        console.log(timeStart);
        console.log(timeStart_date);

        var hour = time[0];
        var minute = time[1];

        var timeEnd = new Date(year, month, day, hour, minute);
        var timeEnd_date = new Date(year, month, day, 00, 00, 00, 0);
        var timeEnd_time = new Date(timeStart.getFullYear(),
                                    timeStart.getMonth(),
                                    timeStart.getDate(),
                                    hour,
                                    minute);
        console.log(timeEnd);
        console.log(timeEnd_date);
        console.log(timeEnd_time);

        var timeRemaining;

        //timeRemaining expression in seconds unit (deiveded by 1000 milliseconds)
        if (date !== 0 && time == 0) {
          timeRemaining = parseInt((timeEnd_date.getTime() - timeStart.getTime()) / 1000);
          console.log(timeRemaining);
        } else if (date == 0 && time !==0) {
          timeRemaining = parseInt((timeEnd_time.getTime() - timeStart.getTime()) / 1000);
          console.log(timeRemaining);
        } else {
          timeRemaining = parseInt((timeEnd.getTime() - timeStart.getTime()) / 1000);
          console.log(timeRemaining);
        }

        if (timeRemaining >= 0) {
          var days = parseInt(timeRemaining / 86400);
          timeRemaining = parseFloat(timeRemaining % 86400);
          var hours = parseInt(timeRemaining / 3600);
          timeRemaining = parseFloat(timeRemaining % 3600);
          var minutes = parseInt(timeRemaining / 60);
          timeRemaining = parseFloat(timeRemaining % 60);
          var seconds = parseInt(timeRemaining);

          console.log(days);
          console.log(hours);
          console.log(minutes);
          console.log(seconds);

          days = parseInt(days, 10);
          hours = ("0" + hours).slice(-2);
          minutes = ("0" + minutes).slice(-2);
          seconds = ("0" + seconds).slice(-2);

          console.log(days);
          console.log(hours);
          console.log(minutes);
          console.log(seconds);

          $('#days').html(days + 'd');
          $('#hours').html(hours + 'h');
          $('#minutes').html(minutes + 'm');
          $('#seconds').html(seconds + 's');
        }
        else {
          return;
        }
      }

      var timer = setInterval(calculation, 1000);

    }

  });
});
