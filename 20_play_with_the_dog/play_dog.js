$(document).ready(function() {

  $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
  }

  $(['bell.png', 'dog.png', 'grassland.jpg']).preload();

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
