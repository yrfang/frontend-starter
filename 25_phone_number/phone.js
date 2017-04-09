$(document).ready(function() {
  var numbers = "";
  $(function () {
    $("#items").selectable({
      selected: function (event, ui) {
        $(".ui-selected", this).each(function () {
            var index = $("#items li").index(this);

            if (index === 9) {
              numbers = "";
            } else if (index === 10) {
              numbers += 0;
            } else if (index === 11) {
              numbers += "#";
            } else {
              numbers += (index + 1);
            }

            $("#info").html(numbers);

            $('#call').on('click', function() {
              var text = "Please confirm the phone number."
              $('#overlay').css('display', 'block');
              $('#text').html(text);
              $('#confirm').html(numbers);
            });

            $('#overlay').on('click', function() {
              $('#overlay').css('display', 'none');
            });
        });
      }
    });
  });
});
