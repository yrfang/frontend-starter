$(document).ready(function() {

  var id = 1;

  $("#button1").click(function(){
    var inputs = $("#txt").val();
    if ($.trim(inputs) != "") {
      $('#divContainer').append(
        $('<p><input type="checkbox" id="cb ' + id + '" name="cb ' + id + '" value="Finish" class="delete"/>' + '&nbsp;' + inputs + '</p>')
      );
      id++;
      $("#txt").val("");
      }
  });



  $('#txt').bind("keypress", function(e) {
    var inputs = $("#txt").val();
    if ($.trim(inputs) != "") {
      if (e.keyCode == 13) {
        $('#divContainer').append(
          $('<p><input type="checkbox" id="cb ' + id + '" name="cb ' + id + '" value="Finish" class="delete"/>' + '&nbsp;&nbsp;' + inputs + '</p>')
        );
        id++;
        $("#txt").val("");
        //return false; // prevent the button click from happening
      }
    }
  });


  $("body").on("click", ".delete", function (e) {
    $(this).parent("p").remove();
  });

});
