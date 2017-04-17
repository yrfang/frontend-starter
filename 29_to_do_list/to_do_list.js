$(document).ready(function() {

  $('#text').focus();
  addCloseSymbol();


  //-----mouse submit-----
  $("#submit").on('click', function() {
    listInput = $('#text').val();
    if ($.trim(listInput) !== '') {
      var closeSymbol = "\u00D7";
      var close = '<span class="close">' + closeSymbol + '</span>';
      var list = '<p> ' + listInput + close + ' </p>'
      $('#list_container').append(list);
    }
    $('#text').val('');
  });



  //-----mouse submit-----
  $('#text').bind('keypress', function(e) {
    listInput = $('#text').val();
    if (e.keyCode == 13) {
      if ($.trim(listInput) !== '') {
        var closeSymbol = "\u00D7";
        var close = '<span class="close">' + closeSymbol + '</span>';
        var list = '<p> ' + listInput + close + ' </p>'
        $('#list_container').append(list);
      }
      $('#text').val('');
    }
  });



  //-----listChecked-----
  $('html').on('click', 'p', function() {
    if ($(this).attr('class') === 'checked') {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
  });



  //-----listClosed-----
  $('html').on('click', 'span', function() {
    $(this).parent("p").remove();
  });


  //-------function-------
  function addCloseSymbol() {
    var closeSymbol = "\u00D7";
    var close = '<span class="close">' + closeSymbol + '</span>';
    $('p').append(close);
    close = '';
  }

});
