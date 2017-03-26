$(document).ready(function() {

  $('#bell_container').draggable({
    helper: "clone"
  });

  $('#dog').droppable({
    drop: function(event, ui) {
		    playSound();
    }
  });

  function playSound() {
    document.getElementById('sound').innerHTML="<audio autoplay><source src='bell_sound.wav' type='audio/wav'></audio>";
  }
});
