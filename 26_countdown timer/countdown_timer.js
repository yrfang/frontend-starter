$(document).ready(function() {

  $('#btn').click(function() {

    var user_years = $('#user_years').val();
    var user_months = $('#user_months').val();
    var user_days = $('#user_days').val();
    var user_hours = $('#user_hours').val();
    var user_minutes = $('#user_minutes').val();
    var user_seconds = $('#user_seconds').val();

    console.log(user_years);
    console.log(user_months);
    console.log(user_days);
    console.log(user_hours);
    console.log(user_seconds);

  });

  function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if ( isNaN(dateEnd) ) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}



countdown('01/19/2018 15:14:07');


});
