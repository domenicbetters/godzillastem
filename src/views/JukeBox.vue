<template>
    <div id="app">
     
     <h1>Juke Box test</h1>
<h3>now playing :   {{this.songname[0]}}</h3>

     <SongButton @click="changesong(song.linky), changetracktext(song.title)" :key = "song.title" v-for="(song) in songs" :song="song"/>

     <button @click="playall()">play all</button>


     <h3>{{ this.songname }}</h3>


     <div class = "recordbox">
                    <input @click="togglePlay()"  type="checkbox" id="btnControl" />
                        <label class="btn" for="btnControl">
                            <div class = "record">
                                <div class = "tracktext" id = "trackname">
                                   
                                </div>
                                 <div class = "artisttext" id = "artistname">
                                  
                                </div>
                                
                                
                            </div>
                        </label>
                </div>




   
     <audio @play = "checkplay" @pause = "checkpause" @ended="itsover" :key="this.tracky" controls  id="audioplayer"  autoplay class = "playbutton"  > <source :src="this.songlink[0]"> </audio> 


    
 </div>
 </template>
 
 <script>


 import songlist from "@/assets/songs.json"
 import SongButton from "@/components/SongButton.vue"
 
 export default {
   name: 'JukeBox',
   components: {
     SongButton
   },
   data() {
    return {
      songlink: [],
      songname: [],
      tracky: 0,
      songs: songlist,
    }
   },
 

   methods: {
    changesong(songlinky) {
           this.songlink.push(songlinky)
           if(this.songlink.length == 1 ){
           this.tracky = this.tracky + 1
           }
    },
    togglePlay() {
  var myAudio = document.getElementById("audioplayer");
  return myAudio.paused? myAudio.play() : myAudio.pause();
},

    changetracktext(songname) {
        this.songname.push(songname)
    },

    playall() {
      var songs = this.songs
      songs.forEach(song=>{
        console.log(song.linky)
        this.changesong(song.linky)
        this.changetracktext(song.title)
      })
        
       
     
    },
    checkplay() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = true;
    },
    checkpause() {
            let inputs = document.getElementById("btnControl");
        inputs.checked = false;
    },

    itsover(){
      this.songlink.shift()
      this.songname.shift()
      this.tracky = this.tracky + 1
      console.log(this.songlink.length)
    },

   
   },
 }

 </script>

 <style>
img {
  width: 95vw;
  object-fit: cover;
}



.recordbox{
     clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
     margin: 0;
     position: absolute;
     bottom: -273px;
     left: 350px;
     overflow: hidden;
     z-index:6;
     

     
     
    }
  
    .record{
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        background-image: url("@/assets/record.png");
        width: 550px;
        height: 550px;
        background-size: cover;
        margin: 0;
        overflow: hidden;
    }
      #btnControl {
        border:0px;
      }
      #btnControl:checked ~ label div {
          transform-origin: center center;
        animation: spin 4s linear infinite;
        border:0px;
      }
     #btnControl:active ~label div {
          border:0px;
      }
       #btnControl ~ label div  {
          border:0px;
      }
      
 

    @keyframes spin {
      from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
  }
  @-webkit-keyframes spin {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
  }

    
   
</style>