$(document).ready(function() {
  var soudpack = [];
  var soudpack_index = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15];

  for (var i=0; i<soudpack_index.length; i++) {
    soudpack.push({
      number: soudpack_index[i],
      url: "https://awiclass.monoame.com/pianosound/set/" + soudpack_index[i] + ".wav"
    });
  }

  var vm = new Vue({
    el: '#app',
    data: {
      soundData: soudpack,
      notes: [{"num":1,"time":150},{"num":1,"time":265},{"num":5,"time":380},{"num":5,"time":501},{"num":6,"time":625},{"num":6,"time":748},{"num":5,"time":871},{"num":4,"time":1126},{"num":4,"time":1247},{"num":3,"time":1365},{"num":3,"time":1477},{"num":2,"time":1597},{"num":2,"time":1714},{"num":1,"time":1837}],
      now_note_id: 0
    },
    methods: {
      playNote: function(id, volume) {
        if (id>0) {
          var audio_obj = $("audio[data-num="+id+"]")[0];
          audio_obj.volume = volume;
          audio_obj.currentTime = 0;
          audio_obj.play();
        }
      },
      playNext: function(volume) {
        var play_note = this.notes[this.now_note_id].num;
        this.playNote(play_note, volume);
        this.now_note_id += 1;
      }
    }
  });

});
