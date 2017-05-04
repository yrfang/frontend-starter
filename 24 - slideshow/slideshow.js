$(document).ready(function() {

  var slideIndex = 1;
  showSlides(slideIndex);

  $('.prev').click(function() {
    plusSlides(-1);
  });

  $('.next').click(function() {
    plusSlides(1);
  });

  $('.dot').click(function() {
    var index = $(".dot").index(this);
    currentSlide(index+1);
  });

  /* function */
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = $('.slides');
    var dots = $('.dot');

    console.log(slides.length);

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i=0; i<slides.length; i++) {
      var slide = slides[i];
      console.log(slide);
      $(slide).css("display", "none");
    }

    for (var i=0; i<dots.length; i++) {
      var dot = dots[i];
      $(dot).removeClass("active");
    }

    $(slides[slideIndex-1]).css("display", "block");
    $(dots[slideIndex-1]).addClass("active");
    console.log(slideIndex);
    console.log(n);
  }

});
