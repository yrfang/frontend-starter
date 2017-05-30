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

});
