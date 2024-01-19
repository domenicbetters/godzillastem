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
     
      <div id = "nowplayingbox" class = "nowplayingbox">
        <h2>{{this.songname}}</h2>
        <h3>{{this.songdesc}}</h3>
        <p>Composer:{{this.songcomp}} | Arranger:{{this.songarr}} | Vocals:{{this.songvoc}} | Lyrics:{{this.songlyrwr}}</p>
        <h4 v-show="!this.lyricshown" @click="dropdown()">Click Here For Lyrics</h4><h4 v-show="this.lyricshown" @click="pickup()">Click Here To Hide Lyrics</h4>
        <div class = "lyricbox">
          <p>{{ this.songlyr }}</p>
        </div>

      </div>
     <div class = "buttonbox">
     <SongButton @click="changesong(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)" :key = "song.title" v-for="(song) in songs" :song="song"/>
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
      lyricshown: false,
      record: '',
      songlink: '',
      songname: '------------',
      songdesc: '------------',
      songcomp: '----',
      songarr: '----',
      songvoc: '----',
      songlyrwr: '----',
      songlyr: '------------',
      playlists: [],
      tracky: 0,
      songs: [
    {
        title: "The Swingin' Bionic Monster",
        desc: "absolute banger",
        comp: "that one guy  |  ",
        arr: "Zane A Goen  |  ",
        voc: "that guy in hawaiin shirt saying uh oh  |  ", 
        lyrwr: "chubawumba",
        lyr: "I get knocked down but i get up again youre never gonna keep me down",
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
    async changesong(songlinky, songname, songdesc, songcomp, songarr, songvoc, songlyrwr, songlyr) {
      this.playlistsid ++
      this.playlists.push({ id: this.playlistsid, link: songlinky, title: songname, desc: songdesc, comp: songcomp, arr: songarr, voc: songvoc, lyrwr: songlyrwr, lyr: songlyr})
      if(this.playlists.length == 1 ){
      this.switcheroo()
      }
    },

    dropdown(){
      document.getElementById('nowplayingbox').classList.remove('lyricup')
      document.getElementById('nowplayingbox').classList.add('lyricdrop')
      this.lyricshown = !this.lyricshown
    },

    pickup(){
      document.getElementById('nowplayingbox').classList.remove('lyricdrop')
      document.getElementById('nowplayingbox').classList.add('lyricup')
      this.lyricshown = !this.lyricshown
    },



    switcheroo(){
      this.songlink = this.playlists[0].link
      this.songname = this.playlists[0].title
      this.songdesc = this.playlists[0].desc
      this.songcomp = this.playlists[0].comp
      this.songarr= this.playlists[0].arr
      this.songvoc = this.playlists[0].voc
      this.songlyrwr = this.playlists[0].lyrwr
      this.songlyr = this.playlists[0].lyr
      this.tracky = this.tracky + 1
    },

    shuffle(array) {

  if (array.length != 0){
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
}    
},



    togglePlay() {
      var myAudio = document.getElementById("audioplayer");
      return myAudio.paused? myAudio.play() : myAudio.pause();
    },

    playall() {
      var songs = this.songs
      songs.forEach(song=>{
        this.changesong(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)
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
      this.songname = "------------"
      this.songdesc = "------------"
      this.songcomp = "----"
      this.songarr = "----"
      this.songvoc = "----"
      this.songlyrwr = "----"
      this.songlyr = "------------"
      this.tracky = this.tracky + 1}
      else {
        this.switcheroo() }
    },

    deletesong(idnum) {
   
      if(this.playlists[0].id == idnum){
        this.playlists = this.playlists.filter((playlist) => playlist.id !== idnum)
        if (this.playlists.length == 0){
        this.songlink = ""
        this.songname = "------------"
        this.songdesc = "------------"
        this.songcomp = "----"
        this.songarr = "----"
        this.songvoc = "----"
        this.songlyrwr = "----"
        this.songlyr = "------------"
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
  h2 {
    margin:12px;
    font-family: "VHS";
  }
  h3 {
    margin:12px;
  }
  h4{
    margin: 12px;
  }

 .thebody {
  width: 95vw;
  margin:auto;
  height:fit-content;
  border: 7px solid #0e3a28;
  border-radius: 15px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
 }

 .nowplayingbox {
  border: 2px solid #138b5a;
  width: 75%;
  height: 180px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 15px;
  box-shadow: #0e3a28 0 0 15px 8px;
 }
 .lyricbox {
  border: 1px solid #29c786;
  width: 85%;
  height: 220px;
  overflow-y: scroll;
  margin-top: 8px;
 }

 .leftside {
  width: 275px;
  display: flex;
  flex-direction: row;
  justify-content: right;
 }

 .rightside {
  width:fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
    .lyricdrop {
      animation: lyricdrop 1s ease-in-out forwards;
    }
    .lyricup {
      animation: lyricup 1s ease-in-out forwards;
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

  @keyframes lyricdrop{
      from {
    height: 180px;
  }
  to {
    height: 420px;
  }
  }
  @-webkit-keyframes lyricdrop {
    from {
    height: 180px;
  }
  to {
    height: 420px;
  }
  }
  @keyframes lyricup{
      from {
    height: 420px;
  }
  to {
    height: 180px;
  }
  }
  @-webkit-keyframes lyricup {
    from {
    height: 420px;
  }
  to {
    height: 180px;
  }
  }

  .playlistwindow {
    border:5px solid gold;
    height: 300px;
    width: 100ch;
    overflow-y:scroll;

  }

 

    
   
</style>