$(document).ready(function() {

  $(function() {
    $('.item_container').each(function(index, element) {
      $(element).on('click','input', function(){

        var length = $('.item_container').length;

        if (index < (length-2)) {
          $("body, html").animate({"scrollTop": $(element).next().offset().top}, 800);
        }

      });
    });
  });


  $('#btn').on('click', function(event) {
    event.preventDefault();

    var total = getScore();
    var message;
    var img;
    var style;

    if (total === 0) {
      message = "You have to finish all questions. （請完成所有問題）"
    } else if (total < 9) {
      message = "時尚都會型：花園城市新加坡";
      style = "singapore.jpg";
    } else if (total < 18) {
      message = "自然奇景型：徒步穿越優勝美地";
      style = "Yosemite.jpg";
    } else {
      message = "自我療癒型：探尋喜馬拉雅山腳下祕境不丹";
      style = "Bhutan.jpg";
    }

    message = "<div id='message'>" + message + "</div>";
    img = "<img src="+ style +">";

    if (total === 0) {
      $('#container').html(message);
    } else {
      $('#container').html(message + img);
    }

    function getScore() {
      var score = 0;

        for (var i=1; i<11; i++) {
          //var question = i;
          var answer = $('input[name=q' + i + ']:checked').val();

          if (answer) {
            score += parseInt(answer);
          }
        }
      return score;
    }

  });



});
