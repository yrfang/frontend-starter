$(document).ready(function() {

  var slideIndex = 0;

  function plusSlides(n) {

  }

  function currentSlide(n) {

  }

  function showSlides(n) {


  }

  var i;
  var slides = $('.slides');
  var dots = $('.dots');

  console.log(slides.length);

  for (var i=0; i<slides.length; i++) {
    var slide = slides[i];
    console.log(slide);
    console.log(i);
    $(slide).css("display", "none");
  }

  for (var i=0; i<dots.length; i++) {
    var dot = dots[i];
    console.log(dot);
    console.log(i);
    $(dot).removeClass("active");
  }

  if (i = (slides.length-1)) {
    slideIndex = 0;
  }
  if (i < 0) {
    slideIndex = (slides.length-1);
  }

  $(slide).css("display", "block");
  $(dot).addClass("active");

});
