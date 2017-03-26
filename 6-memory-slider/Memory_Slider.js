$(document).ready(function() {


  //settings for slider
  var width = 720;
  var animationSpeed = 3000;
  var pause = 4000;
  var currentSlide = 1;

  //cache DOM elements
  var $slider = $('#slider');
  var $slideContainer = $('.slides', $slider);
  var $slides = $('.slide', $slider);

  var interval;

  function startSlider() {
    interval = setInterval(function() {
        $slideContainer.animate({'margin-left': '-='+ width}, animationSpeed, function() {
            if (++currentSlide === $slides.length) {
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);
  }
  function pauseSlider() {
    clearInterval(interval);
  }

  $slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave', startSlider);

  startSlider();


});
