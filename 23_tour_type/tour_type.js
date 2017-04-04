$(document).ready(function() {

  $(function() {

    $('#container input').on('click', function (element) {
        if( element.target.tagName === "INPUT" ) {
             alert('clicked');

             var length = $('.item_container').length;
             var i;
             var name = "#item" + i;
             e = $(name);
             var q = "q" + i;

             for (let i=1; i < length; i++) {
               $("html, body").animate({ "scrollTop": "0px" }, 800);
             }



        }
    });


/*
    for (let i=1; i < length; i++) {

      $(item).click(function(){

        alert(name);

        if ($('input[type=radio][name='+q+']').is(':checked')) {
          $("html, body").animate({ "scrollTop": $(this).next().position().top }, 800);
        }

      });
    }
*/

  });

});
