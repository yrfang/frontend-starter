$(document).ready(function() {

  var advice = ["Good to see you again. Anything new?",
				  "Seriously? Would you need any help?",
				  "I haven't seen you in ages.",
				  "Keeping busy? I miss you so much.",
				  "On the mend.",
				  "Are you going to suck all your life?",
				  "What? Who does that?!",
				  "I thought you were better than that.",
				  "Everythins will be fine for you. Don't worry.",
				  " *__*|| ",
				  "Are you freaking kidding me?",
				  "NO! Bad!",
				  "And when do you recover your breaking heart?",
				  "That is totally unacceptable.",
				  "Come on, that's not true.",
				  "Ugh! That's horrible!",
				  "Oh, boddy. It's amazing!!!",
				  "I can't believe..."]

  $('#feeling').focus();

	$('form').on('submit', function(event) {
		event.preventDefault();

		var feeling = $('#feeling').val().replace(/^\s+|\s+$/g, '');

    // ^\s+|\s+$/g means regular expression of js

			if (feeling == '') {
				feeling = "don't fill in forms";
			}

      feeling = changeStart(feeling);

			$('#greeting_title').text(feeling + "?");

			$('#advice').text(advice[Math.floor(Math.random() * 18)]);

			$('#feeling').val("");

      function changeStart(phrase) {
      		var startWithI = phrase.substr(0, 2).toUpperCase();
      		var startWithMy = phrase.substr(0, 3).toUpperCase();
      		var newPhrase;


      		if (startWithI == "I ")	{
      			newPhrase = phrase.replace(/I /gi, "You ");
      		} else if ( startWithMy == "MY " ) {
      			newPhrase = phrase.replace(/My /gi, "Your ");
      		} else {
      			newPhrase = "You " + phrase;
      		}

      		newPhrase = newPhrase.replace(/ I /gi, " you ");
      		newPhrase = newPhrase.replace(/ my /gi, " your ");
      		newPhrase = newPhrase.replace(/ me /gi, " you ");

      		return newPhrase;
      	};
	})
});
