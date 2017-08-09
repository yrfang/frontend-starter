$(document).ready(function() {

  var button_audio = new Audio('http://www.monoame.com/awi_class/ballsound/click14.wav');
  var screen_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click18.wav");
  var home_audio = new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");
  var wiggle_audio = new Audio("http://www.monoame.com/awi_class/ballsound/phonevi.mp3");

  $('.i4s').click(function() {
    $(".phone").css("width","210px");
    $(".screen").css("height","300px");
    $(".phonename").text($(this).text());
    button_audio.play();
  });

  $('.i5s').click(function() {
    $(".phone").css("width","");
    $(".screen").css("height","");
    $(".phonename").text($(this).text());
    button_audio.play();
  });

  $('.i6').click(function() {
    $(".phone").css("width","270px");
    $(".screen").css("height","440px");
    $(".phonename").text($(this).text());
    button_audio.play();
  });

  $('.i6+').click(function() {
    $(".phone").css("width","300px");
    $(".screen").css("height","500px");
    $(".phonename").text($(this).text());
    button_audio.play();
  });

  var page = 0;
  $(".screen").click(function() {
    page+=1;
    if (page > 2) {
      page = 0;
    }
    $(".pages").css("left","-"+page*100+"%");
    screen_audio.play();
  });

  $('.button').click(function() {
    page = 0;
    $(".pages").css("left","-"+page*100+"%");
    home_audio.play();
  });

  $(".turn").click(function(){
    $(".phone").toggleClass('turn_effect');

  });

  $(".wiggle").click(function() {
    wiggleTime = 0;
    wiggle_audio.play();
  });

  var wiggleTime = 21;
  setInterval(function() {
    if (wiggleTime<=20) {
      wiggleTime+=1;
      console.log(wiggleTime);
      if (wiggleTime % 2 == 0) {
        $('.phone').css('left', '-30px');
      } else {
        $('.phone').css('left', '30px');
      }
    }

    if (wiggleTime==21) {
      $('.phone').css('left', '');
    }

  }, 60);


});
