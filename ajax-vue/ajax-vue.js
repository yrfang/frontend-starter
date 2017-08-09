var api_url = {
  notifydata: "http://www.monoame.com/awi_class/api/command.php?type=get&name=notifydata",
  itemdata: "http://www.monoame.com/awi_class/api/command.php?type=get&name=itemdata",
  hahowdata: "http://www.monoame.com/awi_class/api/command.php?type=get&name=hahowdata"
}

//notif
var vm1 = new Vue({
  el: "#app1",
  data: {
    notifydata: "Loading..."
  },
  ready: function() {
    $.ajax({
      url: api_url.notifydata,
      success: function(res) {
        vm1.notifydata = res;
      }
    });
  }
});

//items
var vm2 = new Vue({
  el: "#app2",
  data: {
    items: []
  },
  ready: function() {
    $.ajax({
      url: api_url.itemdata,
      success: function(res){
        vm2.items=JSON.parse(res);
      }
    });
  }
});

//classes
var vm3 = new Vue({
  el: "#app3",
  data: {
    classes: []
  },
  ready: function() {
    $.ajax({
      url: api_url.hahowdata,
      success: function(res) {
        vm3.classes = JSON.parse(res);
      }
    });
  }
});
