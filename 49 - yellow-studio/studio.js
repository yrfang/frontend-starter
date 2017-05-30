$(document).ready(function() {

  //滑動離開頂部時就取消at_top的class
  $(window).scroll(function(e){
    if ($(window).scrollTop()<=0)
      $(".navbar,.explore").addClass("at_top");
    else
      $(".navbar,.explore").removeClass("at_top");
  });



  // 緩慢滑動
  $(document).on('click', 'a', function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });



  //vue監看物件
  var vm = new Vue({
    el: "#app",
    data: {
      works: []
    },
    mounted: function(){
      var vobj=this;
      $.ajax({
        url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
        success: function(res){
          // console.log(res);
          vobj.works=JSON.parse(res);
        }
      });
    }
  });


  // 貓咪滑動
  $(window).mousemove(function(evt) {
    var pageX = evt.pageX;
    var pageY = evt.pageY;

    var x = pageX - $('#section_about').offset().left;
    var y = pageY - $('#section_about').offset().top;
    // console.log(x + "," + y);

    $('#cross').css('left', x+'px');
    $('#cross').css('top', y+'px');

    if (y < 0 || y>$('#section_about').outerHeight()) {
      $('#cross').css('opacity', 0);
    } else {
      $('#cross').css('opacity', 1);
    }

    var catplace=$("#cat").offset().left+$("#cat").width()/2;
    var cattop=$("#cat").offset().top;
    var img_url="https://awiclass.monoame.com/catpic/";

    if (pageX < catplace-50) {
      $('#cat').attr('src', img_url + 'cat_left.png');
    } else if (pageX > catplace+50) {
      $('#cat').attr('src', img_url + 'cat_right.png');
    } else {
      $('#cat').attr('src', img_url + 'cat_top.png');
    }

    if (pageX<catplace-50 && pageY<cattop) {
      $('#cat').attr('src', img_url + 'cat_lefttop.png');
    }
    if (pageX > catplace+50 && pageY<cattop) {
      $('#cat').attr('src', img_url + 'cat_righttop.png');
    }

    // 貓咪上下動
    detect_cat("#cat_yellow",pageX);
    detect_cat("#cat_blue",pageX);
    detect_cat("#cat_grey",pageX);


    // 滑動效果
  //   $('.mountain').css('transform', translateX('+(pageX/-20+50)'))
  // });

  function detect_cat(cat_id,x){
    var catplace=$(cat_id).offset().left+$(cat_id).width()/2;
    if(Math.abs(x-catplace)<80)
      $(cat_id).css("bottom","0px")
    else
      $(cat_id).css("bottom","-50px")
  }
  });

});
