$(document).ready(function() {

  var apiurl="http://awiclass.monoame.com/api/command.php?type=get&name=hahowdata";
  var vm = new Vue({
    el: "#app",
    data: {
      classdatas: []
    }
  });

  $.ajax({
    url: apiurl,
    success: function(res) {
      var obj = JSON.parse(res);
      console.log(obj);
      vm.classdatas = obj;
    }
  });

});
