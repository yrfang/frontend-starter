$(document).ready(function() {

  var rock = "fist.svg";
  var paper = "palm.svg";
  var scissors = "scissors.svg";
  var hands = {rock: rock, paper: paper, scissors: scissors};
  var choices = ['rock', 'paper', 'scissors'];
  var pcChoice, userChoice;

  $('.user').hide();

  $('.btn').on('click', function() {
    $('.btn').off('click');

    compChoice = choices[Math.floor(Math.random() * 3)];
    userChoice = this.id;

    console.log(compChoice);
    console.log(userChoice);

    countDown();
  });



  //-----function-----
  function displayResult() {

    $('.start').removeClass('move');

    $('.start').hide();
    $('.btn').hide();
    $('.pc.' + compChoice).show();
    $('.user.' + userChoice).show();

    setTimeout(function() {
      if (compChoice == userChoice) {
        $('#info').text('Tie!');
      } else if ((compChoice == 'scissors' && userChoice == 'paper') || (compChoice == 'paper' && userChoice == 'rock') || (compChoice == 'rock' && userChoice == 'scissors')) {
        $('#info').text('Lose!');
      } else {
        $('#info').text('Win!');
      }
    }, 500);

    setTimeout(function() {
      $('#again').html('<a href="index.html">Play again?</a>');
    }, 2000);
  }



  function countDown() {
    var i = 3;

    count();

    function count() {
      $('.start').addClass('move');
      $('#info').text(i);

      if (i==1) {
        displayResult();
      } else {
        i -= 1;
        setTimeout(count, 1000);
      }
    }
  }


});
