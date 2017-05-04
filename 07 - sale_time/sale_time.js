$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		var year;
		var month;
		var day;
		var birthday;

    if ( $('#bdate').val() == 0) {
      $('#sale').text('No Birthday? No Sale for You!');
      $('#sale').css("color", "red");
    }
    else {
      var birthday = $('#bdate').val();
      if (birthday.indexOf("/") >= 0) {
        birthday = birthday.split("/");  //[month, day, year]
        var year = birthday[2];
        var month = (birthday[0])-1;
        var day = birthday[1];
      }
      else {
        birthday = birthday.split("-");  //[year, month, day]
        var year = birthday[0];
        var month = (birthday[1])-1;
        var day = birthday[2];
      }

      var birthtime = $('#btime').val().split(':');

      var hour  = birthtime[0];
			var min   = birthtime[1];
			var bday  = new Date(year, month, day);
			var btime = new Date(year, month, day, hour, min);
			var today = new Date();
			var todayStr = today.toDateString();

      if (birthtime == 0) {
				btime = bday;
			}

      var age = today.getFullYear() - year;

      // If the user's birthday has not occurred yet this year, subtract 1.
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }

      //age calculation
      var ageInDays = Math.floor((today-bday) / (1000*60*60*24));
      var ageInHours = Math.floor((today-bday) / (1000*60*60))*7;
      var ageInHours = Math.floor((today-bday) / (1000*60));
      var weekDays = new Date(bday.getTime() + (1000*60*60*24)*7);
      var hundDays = new Date(bday.getTime() + (1000*60*60*24)*100);
      var thouDays = new Date(bday.getTime() + (1000*60*60*24)*1000);
      var tenKDays = new Date(bday.getTime() + (1000*60*60*24)*10000);

      if (today.getMonth() == month && today.getDate() == day) {
        $('#sale').text("Today is your Birthday? It's on Sale of 70% off!");
        $('#sale').css('color', 'red');
      }
      else if (today.getMonth() ==  month) {
        $('#sale').text("Here is 50% coupon for you if you come again.");
        $('#sale').css('color', 'red');
      }
      else {
        $('#sale').text("Oops! There is no sale today.");
        $('#sale').css('color', 'red');
      }

      $('.bday_date').text("Your birthday is " + months[month] + " " + day);

      /* calculation in milliseconds
      $('.bday_date').text(bday);
      $('.bday_date').text(today);
      */

      if (age==1) {
        $('.bday_age_year').text("You're age is " + age + " year old");
      } else {
        $('.bday_age_year').text("You're age is " + age + " years old");
      }

      if (ageInDays==1) {
        $('.bday_age_days').text("You're age is " + ageInDays + " day old");
      } else {
        $('.bday_age_days').text("You're age is " + ageInDays + " days old");
      }

      if (ageInHours==1) {
        $('.bday_age_hours').text("You're age is " + ageInHours + " hour old");
      } else {
        $('.bday_age_hours').text("You're age is " + ageInHours + " hours old");
      }

      if (today <= weekDays) { //that's mean younger than tenKdays
        $('.bday_age_weekDay').text("Your're 7th dyas is " + weekDays.toDateString());
      } else {
        $('.bday_age_weekDay').text("Your're 7th dyas was " + weekDays.toDateString());
      }

      if (today <= hundDays) { //that's mean younger than tenKdays
        $('.bday_age_hundDay').text("Your're 100th dyas is " + hundDays.toDateString());
      } else {
        $('.bday_age_hundDay').text("Your're 100th dyas was " + hundDays.toDateString());
      }

      if (today <= thouDays) { //that's mean younger than tenKdays
        $('.bday_age_thouDay').text("Your're 1000th dyas is " + thouDays.toDateString());
      } else {
        $('.bday_age_thouDay').text("Your're 1000th dyas was " + thouDays.toDateString());
      }

      if (today <= tenKDays) { //that's mean younger than tenKdays
        $('.bday_age_tenKDay').text("Your're 10000th dyas is " + tenKDays.toDateString());
      } else {
        $('.bday_age_tenKDay').text("Your're 10000th dyas was " + tenKDays.toDateString());
      }


    }

  })
});
