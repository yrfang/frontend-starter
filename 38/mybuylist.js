$(document).ready(function() {

  var shoplist = {};

  shoplist.name="MyBuylist";
  shoplist.time="2017/05/16";
  shoplist.list = [
    {name: "吹風機", price: 300},
    {name: "麥克筆", price: 50},
    {name: "麥克筆", price: 50},
    {name: "麥克筆", price: 50},
    {name: "麥克筆", price: 50}
  ];

  var item_html = "<li id={{id}}>{{num.}}.{{item}}<div class='price'>{{price}}</div><div class='del_btn'>X</div></li>";;

  var total_html = "<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

  var total_price = 0;
  for (var i=0; i<shoplist.length; i++) {
    var item = shoplist.list[i];
    total_price += item.price;
    console.log(total_price);
  }

});
