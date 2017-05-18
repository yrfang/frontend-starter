$(document).ready(function() {
  var item_template = "<li class='location'>{{city}}, {{country}}<span class='temp'>{{temperature}}</span></li>";
  var data_url =  "https://raw.githubusercontent.com/sgratzl/d3tutorial/master/examples/weather.json";
  var dataShow;

  $.ajax({
    url: data_url,
    // type: "GET",
    // dataType: "json",
    success: function(res) {
      dataShow = JSON.parse(res);
      // console.log(dataShow);

      for (var i=0; i<dataShow.length; i++) {
        var data = dataShow[i];
        // var sunClass = "<i class='fa fa-sun-o' aria-hidden='true'></i>";
        // console.log(data);
        var current_data = item_template.replace("{{city}}", data.location.city)
                                        .replace("{{country}}", data.location.country)
                                        .replace("{{temperature}}", data.temperature);
        $("#listitem").append(current_data);
      }
    }
  });

  // $('.location').prepend(" <i class='fa fa-sun-o' aria-hidden='true'></i>");

});
