$(document).ready(function() {
  var item_template = "<li class='{{class}}'>{{city}}.{{state}}({{population}})</li>";
  var data_url =  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  var dataShow;

  $.ajax({
    url: data_url,
    // type: "GET",
    // dataType: "json",
    success: function(res) {
      //console.log(JSON.parse(res));
      dataShow = JSON.parse(res);
      // console.log(dataShow);

      for (var i=0; i<dataShow.length; i++) {
        var data = dataShow[i];
        // console.log(data);
        var current_data = item_template.replace("{{city}}", data.city);
        // console.log(current_data);
        $("#listitem").append(current_data);
      }
    }
  });

});
