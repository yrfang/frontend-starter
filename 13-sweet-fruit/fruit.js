$(document).ready(function() {

  var animations = [ 'shake',
                      'hop',
                      'spin',
                      'grow',
                      'rotate']

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
  }

  $('.fruit_box').on('click', function() {
    var fruit = this;
    var animation = animations[getRandomInt(0, 4)];

    $(fruit).addClass(animation);

    setTimeout(function() {
      $(fruit).removeClass(animation);
    }, 2200);
  });
});
