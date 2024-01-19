<template>
    <div id="app">
      <h1>STEM JUKE BOX</h1> 
    <div class = "thebody">
      
      <div class = "leftside">
        <div class = "recordbox">
          <input @click="togglePlay()"  type="checkbox" id="btnControl" />
          <label class="btn" for="btnControl">
            <div class = "record" :style = "this.record">
              <div class = "tracktext" id = "trackname">
                                   
              </div>
              <div class = "artisttext" id = "artistname">
                                  
              </div>                 
            </div>
          </label>
        </div>
      </div>

      <div class="rightside">
     
      <h3>now playing :   {{this.songname}} </h3>
     <div class = "buttonbox">
     <SongButton @click="changesong(song.linky, song.title)" :key = "song.title" v-for="(song) in songs" :song="song"/>
     </div>
     <FuncButton @click="playall()" title = "Play All"/>
     <FuncButton @click="shuffle(this.playlists)" title = "Shuffle that Shit" />


     <!-- <h3>{{ this.playlists }}</h3> -->


    
    <div class = "playlistwindow">
      <PlayList @delete-song="deletesong" :key = "playlist.id" v-for="(playlist, i) in playlists" :song="playlist" :songorder = "i + 1"  />
    </div>

   
     <audio @play = "checkplay" @pause = "checkpause" @ended="itsover" :key="this.tracky" controls  id="audioplayer"  autoplay class = "playbutton"  > <source :src=this.songlink> </audio> 

    </div>
    </div>
    
 </div>
 </template>
 
 <script>


 import SongButton from "@/components/SongButton.vue"
 import FuncButton from "@/components/FuncButton.vue"
 import PlayList from "@/components/PlayList.vue"
 
 export default {
   name: 'JukeBox',
   components: {
     SongButton,
     FuncButton,
     PlayList
   },
   data() {
    return {
      record: '',
      songlink: '',
      songname: '',
      playlists: [],
      tracky: 0,
      songs: [
    {
        title: "The Swingin' Bionic Monster", 
        linky: require("@/assets/swinging.mp3")
    },
    {
        title: "Bio Wars",
        linky: require("@/assets/biowars.mp3")
    },
    {
        title: "Vast Mysteries of the Ocean",
        linky: require("@/assets/ocean.mp3")
    },
    {
        title: "Prepare for Attack",
        linky: require("@/assets/prepareforattack.mp3")
    },
    {
        title: "on va s'écraser et brûler",
        linky: require("@/assets/bruler.mp3")
    },
    {
        title: "le bâtiment du capitole est en danger!",
        linky: require("@/assets/capitol.mp3")
    },
    {
        title: "la dernière bataille de tokyo contre les monstres",
        linky: require("@/assets/battledetokyo.mp3")
    },
    {
        title: "la guerre est un enfer, mais ça doit se faire",
        linky: require("@/assets/guere.mp3")
    },

    {
        title: "godzilla vs the self defense forcese",
        linky: require("@/assets/sdf.mp3")
    },
    {
        title: "Destroy All Monsters",
        linky: require("@/assets/dam.mp3")
    },
    {
        title: "Deathly Confrontation",
        linky: require("@/assets/confrontation.mp3")
    },
    {
        title: "citation de mitsubishi pavilion I 'volcano'",
        linky: require("@/assets/volcano.mp3")
    },
    {
        title: "a great tragedy has befallen manhattan",
        linky: require("@/assets/greattragedy.mp3")
    }
],
      playlistsid: 0
    }
   },
 

   methods: {
    async changesong(songlinky, songname) {
      this.playlistsid ++
      this.playlists.push({ id: this.playlistsid, link: songlinky, title: songname})
      if(this.playlists.length == 1 ){
      this.switcheroo()
      }
    },

    switcheroo(){
      this.songlink = this.playlists[0].link
      this.songname = this.playlists[0].title
      this.tracky = this.tracky + 1
    },

    shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  this.switcheroo()
  return array;
  
},



    togglePlay() {
      var myAudio = document.getElementById("audioplayer");
      return myAudio.paused? myAudio.play() : myAudio.pause();
    },

    playall() {
      var songs = this.songs
      songs.forEach(song=>{
        this.changesong(song.linky, song.title)
      })
    },

    checkplay() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = true;
        this.record = 'animation: spin 4s linear infinite;'
    },

    checkpause() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = false;
        this.record = ''
    },

    itsover(){
      this.playlists.shift()
      if (this.playlists.length == 0){
      this.songlink = ""
      this.songname = ""
      this.tracky = this.tracky + 1}
      else {
        this.switcheroo() }
    },

    deletesong(idnum) {
   
      if(this.playlists[0].id == idnum){
        this.playlists = this.playlists.filter((playlist) => playlist.id !== idnum)
        if (this.playlists.length == 0){
        this.songlink = ""
        this.songname = ""
        this.tracky = this.tracky + 1}
        else {
          this.switcheroo()}
      }

      else {
        this.playlists = this.playlists.filter((playlist) => playlist.id !== idnum)
      }
    }
   },
 }

 </script>

 <style>
 .thebody {
  width: 100vw;
  height:fit-content;
  border: 5px pink solid;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
 }

 .leftside {
  width: 275px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  
  border: 5px solid rgb(164, 0, 80);
 }

 .rightside {
  width:fit-content;
  border: 5px solid green;
  display: flex;
  flex-direction: column;
 }

img {
  width: 95vw;
  object-fit: cover;
}

.buttonbox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height:400px;
  overflow-y: scroll;
}

.recordbox{
     clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
     margin: 0;
     /* position: relative;
     left: -65%; */
     z-index:6;
     display: flex;
     justify-self: left;
     
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
        display:none;
      }
      #btnControl:checked ~ label div {
          transform-origin: center center;
        border:0px;

      }
     #btnControl:active ~label div {
          border:0px;
      }
       #btnControl ~ label div  {
          border:0px;
      }
      
 
  /* animation: spin 4s linear infinite; */
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

  .playlistwindow {
    border:5px solid gold;
    height: 300px;
    width: 100ch;
    overflow-y:scroll;

  }

    
   
</style>