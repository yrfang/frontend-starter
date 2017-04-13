$(document).ready(function() {
  var running = false;

  $('#player_container').on('click', function(e) {
    e.preventDefault();

    if (running) {
      stopPlay();
      console.log(running);
    } else {
      //$('#sound').show();
      startPlay();
      console.log(running);
    }

  });

  $("input[type='range']").on('change', function() {
    var vol = $('#vol').val();
    var audioobject = $('audio')[0];
    audioobject.volume = vol;
    console.log(vol);
  });


  function startPlay() {
    running = true;
    var vol = $('#vol').val();
    var audioobject = $('audio')[0];
    audioobject.volume = vol;

    $('#playmusic')[0].play();
    $('#play').hide();
    $('#pause_container').show();
        
  }

  function stopPlay() {
    running = false;
    $('#play').show();
    $('#pause_container').hide();
    $('#playmusic')[0].pause();
  }


});
