$(document).ready(function() {

  $('.i4s').click(function() {
    $(".phone").css("width","210px");
    $(".screen").css("height","300px");
    $(".phonename").text($(this).text());
  });

  $('.i5s').click(function() {
    $(".phone").css("width","");
    $(".screen").css("height","");
    $(".phonename").text($(this).text());
  });

  $('.i6').click(function() {
    $(".phone").css("width","270px");
    $(".screen").css("height","440px");
    $(".phonename").text($(this).text());
  });

  $('.i6+').click(function() {
    $(".phone").css("width","300px");
    $(".screen").css("height","500px");
    $(".phonename").text($(this).text());
  });

  var page = 0;
  $(".screen").click(function() {
    page+=1;
    if (page > 2) {
      page = 0;
    }
    $(".pages").css("left","-"+page*100+"%");
  });

  $('.button').click(function() {
    page = 0;
    $(".pages").css("left","-"+page*100+"%");
  });


});
