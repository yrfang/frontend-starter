$(document).ready(function() {

  var form_data = {
    name: "海綿寶寶",
    email: "pieapple@sea.com",
    text: "我是優質員工！專長是做美味蟹堡 :D",
    styleObject: {
      color: '#fff'
    }
  }

  var vm = new Vue({
    el: "#app",
    data: form_data
  });

  $('.button').click(function(e) {
    e.preventDefault();

    var message = "<div class='message'>" + "It\'s Done, thank you !" + "</div>";
    var send_container = "<div class='send_container'>" + message + "</div>"
    $('body').html(send_container);
  })

});
