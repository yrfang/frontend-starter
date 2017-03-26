$(document).ready(function() {

  $('#btn').on('click', function() {
    var number = getRandomInt();
    $('#num').text(number);
    $('#num').addClass('#num');
  });

  function getRandomInt() {
    return Math.floor((Math.random() * 100) + 1);
  }

});
