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
      now_note_id: 0,
      next_note_id: 0,
      playing_time: 0,
      player: null,
      recorder: null,
      now_press_key: -1,
      record_time: 0,
      display_keys: [
        {num: 1,key: 90  ,type:'white'},
      {num: 1.5,key: 83  ,type:'black'},
      {num: 2,key: 88  ,type:'white'},
      {num: 2.5,key: 68  ,type:'black'},
      {num: 3,key: 67  ,type:'white'},
      {num: 4,key: 86  ,type:'white'},
      {num: 4.5,key: 71  ,type:'black'},
      {num: 5,key: 66  ,type:'white'},
      {num: 5.5,key: 72  ,type:'black'},
      {num: 6,key: 78  ,type:'white'},
      {num: 6.5,key: 74  ,type:'black'},
      {num: 7,key: 77  ,type:'white'},
      {num: 8,key: 81  ,type:'white'},
      {num: 8.5,key: 50  ,type:'black'},
      {num: 9,key: 87  ,type:'white'},
      {num: 9.5,key: 51,type:'black'},
      {num: 10,key: 69  ,type:'white'},
      {num: 11,key: 82  ,type:'white'},
      {num: 11.5,key: 53  ,type:'black'},
      {num: 12,key: 84  ,type:'white'},
      {num: 12.5,key: 54  ,type:'black'},
      {num: 13,key: 89  ,type:'white'},
      {num: 13.5,key: 55  ,type:'black'},
      {num: 14,key: 85  ,type:'white'},
      {num: 15,key: 73  ,type:'white'}
      ]
    },
    methods: {
      playnote: function(id, volume) {
        if (id>0) {
          var audio_obj = $("audio[data-num='"+id+"']")[0];
          // console.log(audio_obj);
          audio_obj.volume = volume;
          audio_obj.currentTime = 0;
          audio_obj.play();
        }
      },
      playnext: function(volume) {
        var vobj = this;
        if (vobj.notes.length>0) {
          var play_note = this.notes[this.now_note_id].num;
          console.log(play_note);
          this.playnote(play_note, volume);
          this.now_note_id += 1;
        }

        if (this.now_note_id >= this.notes.length) {
          clearInterval(this.player);
          this.playing_time=0;
          this.stopplay();
        }
      },
      start_record: function() {
        this.record_time=0;
        this.recorder =  setInterval(function() {
          vm.record_time++;
        });
      },
      stop_record: function() {
        clearInterval(this.recorder);
        this.record_time=0;
      },
      startplay: function(){
        this.now_note_id=0;
        this.playing_time=0;
        this.next_note_id=0;
        var vobj=this; //代表取得vue vm內的物件

        // console.log(vobj.notes.length);

        if (vobj.notes.length>0) {
          this.player=setInterval(function(){
            if (vobj.playing_time>=vobj.notes[vobj.next_note_id].time){
              vobj.playnext(1); //volume=1
              vobj.next_note_id++;
            }
            vobj.playing_time++;
          },2);
        }
      },
      stopplay: function() {
        clearInterval(this.player);
        this.now_note_id=0;
        this.playing_time=0;
        this.next_note_id=0;
      },
      get_current_highlight: function(id, skey){
        if (this.now_press_key==skey)
          return true;
        if (this.notes.length==0)
          return false
        var cur_id=this.now_note_id-1;
        if (cur_id<0) cur_id=0;
        var num=this.notes[cur_id].num;
        if (num==id)
          return true;
        return false;
      },
      addnote: function(id) {
        if (this.record_time>0) {
          this.notes.push({num:id, time:this.record_time});
        }
        this.playnote(id,1);
      },
      load_sample: function() {
        var vobj = this;
        $.ajax({
          url: "http://awiclass.monoame.com/api/command.php?type=get&name=music_dodoro",
          success: function(res) {
            vobj.notes = JSON.parse(res);
          }
        })
      }
    }
  });

  // vm.startplay();

  $(window).keydown(function(e) {
    var key = e.which;
    vm.now_press_key = key;
    console.log(key);
    for (var i=0; i<vm.display_keys.length; i++) {
      if (key == vm.display_keys[i].key) {
        vm.addnote(vm.display_keys[i].num);
        // vm.playnote(vm.display_keys[i].num,1);
      }
    }
  });

  $(window).keyup(function(e) {
    vm.now_press_key=-1;
  });

});
