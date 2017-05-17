$(document).ready(function() {

  var shoplist = {};

  shoplist.name="MyBuylist";
  shoplist.time="2017/05/16";
  shoplist.list = [
    {name: "吹風機", price: 300},
    {name: "麥克筆", price: 50},
    {name: "美術用品", price: 120},
    {name: "筆記本", price: 80},
    {name: "原子比", price: 30}
  ];

  //定義元素用的html模板，{{名稱}}代表要套入的地方
  var item_html = "<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid={{del_item_id}} class='del_btn'>X</div></li>";

  var total_html = "<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

  showList();

  $(".addbtn").click(function() {

    if ($("#input_name").val().trim() == 0 || $("#input_price").val().trim() == 0) {
      return;
    } else {
      //使用val()存取輸入的值，val("..") 有給參數是設定
      shoplist.list.push(
        {
          name:$("#input_name").val(),
          price: $("#input_price").val()
        }
      );

      $("#input_name").val("");
      $("#input_price").val("");
      showList();
    }
  });

  $(function() {
    // console.log($(this).attr('placeholder'));
    $('input,textarea').focus(function () {
      $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
    }).blur(function () {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
  });



  function showList(){
    $('#items_list').html("");

    var total_price = 0;
    for (var i=0; i<shoplist.list.length; i++) {

      var item = shoplist.list[i];
      var item_id = "buyitem_" + i;
      var del_item_id="del_buyitem_"+i;

      total_price += parseInt(item.price);
      // console.log(total_price);

      var current_item_html =
       item_html.replace("{{num}}", i+1)
                .replace("{{item}}",item.name)
                .replace("{{id}}",item_id)
                .replace("{{del_id}}",del_item_id)
                .replace("{{price}}",item.price)
                .replace("{{del_item_id}}",i)

      $('#items_list').append(current_item_html);

      //delet item id of buyitem (只有在append後顯示在html才能被移除)
      $("#" + del_item_id).click(function() {
        // console.log(parseInt($(this).attr("data-delid")));
        // console.log($(this).attr("data-delid"));

        removeItem($(this).attr("data-delid"));
      });
    }

    var current_total_html=
      total_html.replace("{{price}}",total_price);
    $("#items_list").append(current_total_html);
  }



  //刪除項目 陣列.splice(位置,長度)
  //刪除資料->重新根據資料渲染清單
  function removeItem(id) {
    shoplist.list.splice(id,1);
    showList();
  }

});
