$(document).ready(function() {

  $("#flip").on("click", function() {
    $("#panel").slideToggle("1000");
  });

  $("#button").click(function() {
    alert("Your Setence: " + $("#test").val());
  });

});
