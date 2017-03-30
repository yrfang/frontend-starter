$(document).ready(function() {

  $('.tridown, .triup, .triright,.trileft, .rectup, .rectdown, .square, .circle, .quartcircle, .paraleft, .pararight').draggable({
    containment: 'window',
    stack: '.block',
    snap: true,
    snapMode: 'outer',
    snapTolerance: 15,
  });

  $('#info_tab').on('click', function() {
    $('#info').show();
  });

  $('.close').on('click', function() {
    $('#info').hide();
  });

  $('#container').on('mousedown', function() {
    $('#instruction').fadeOut('slow');
  });


});
