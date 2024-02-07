<template>
    <div id="app">
    <div class = "thebody">
      
      <div class = "leftside">
        <div class = cap></div>
        <div class = "hotbars"> 
          <div class = "recordbox">
            <input @click="togglePlay()"  type="checkbox" id="btnControl" />
            <label class="btn" for="btnControl">
              <div class = "record" :style = "this.record">
              </div>
            </label>
          </div>
        </div>
        <div class = cap></div>
      </div>

      <div class="rightside">
     
      <div id = "nowplayingbox" class = "nowplayingbox playboxblink">
        <h2><marquee  class="blink" scrollamount = "10">{{this.songname}}</marquee></h2>
        <h3><marquee  class="blink" scrollamount = "10">{{this.songdesc}}</marquee></h3>
        <p><marquee  class="blink" scrollamount = "10">Composer:{{this.songcomp}} | Arranger:{{this.songarr}} | Vocals:{{this.songvoc}} | Lyrics:{{this.songlyrwr}}</marquee></p>
        <h4 v-show="!this.lyricshown" @click="dropdown()">Click Here For Lyrics</h4><h4 v-show="this.lyricshown" @click="pickup()">Click Here To Hide Lyrics</h4>
        <div id="lyricbox" class = "lyricbox hidelyrics">
          <p>{{ this.songlyr }}</p>
        </div>

      </div>
      <div class = "themaincontrols">
        <FuncButton @click="playall()" title = "Play All"/>
        <audio @play = "checkplay" @pause = "checkpause" @ended="itsover" :key="this.tracky" controls  id="audioplayer"  autoplay class = "playbutton"  > <source :src=this.songlink> </audio> 
     <FuncButton @click="shuffle(this.playlists)" title = "Shuffle that Shit" />
      </div>
     
      <div class = "buttsnplays">
     <div class = "buttonbox">
     <SongButton @add-song = "addsong" @skip-the-line="skiptheline" :key = "song.title" v-for="(song) in songs" :song="song"/>
     </div>
     <div class = "playlistwindow">
      <PlayList @delete-song="deletesong" :key = "playlist.id" v-for="(playlist, i) in playlists" :song="playlist" :songorder = "i + 1"  />
      <div v-if= "empty <= 0" class = "blanklist"></div> 
      <div v-if= "empty <= 1" class = "blanklist"></div> 
      <div v-if= "empty <= 2" class = "blanklist"></div> 
      <div v-if= "empty <= 3" class = "blanklist"></div> 
      <div v-if= "empty <= 4" class = "blanklist"></div> 
      <div v-if= "empty <= 5" class = "blanklist"></div> 
      <div v-if= "empty <= 6" class = "blanklist"></div>
    </div>

    </div>


    
    </div>
    <div class  = "leftside mobilemakebyebye">
        <div class = cap></div>
        <div class = "hotbars"> 
        
          <div class = "recordbox">
            <input @click="togglePlay()"  type="checkbox" id="btnControl" />
            <label class="btn" for="btnControl">
              <div class = "record" :style = "this.record">
              </div>
            </label>
          </div>
        </div>
        <div class = cap></div>
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
      record: 'background: rgb(0,28,16); background: linear-gradient(90deg, rgba(0,28,16,1) 0%, rgba(70,79,75,1) 50%, rgba(0,28,16,1) 100%);',
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
      empty: 0,
      songs: [
    {
        title: "The Swingin' Bionic Monster",
        desc: "An Absolute Banger",
        comp: "Masaru Sato",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/swinging.mp3")
    },
    {
        title: "Bio Wars",
        desc: "An Absolute Banger",
        comp: "Koichi Sugiyama",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/biowars.mp3")
    },
    {
        title: "Vast Mysteries of the Ocean",
        desc: "An Absolute Banger",
        comp: "Zane A. Goen",
        arr: "Zane A. Goen",
        voc: "The Groundzero Opera Choir Unit",
        lyrwr: "Scott Avery",
        lyr: "the end is nigh lest \n we may find a way to overcome it \n there’s no time for muse \n ready the weapons of war for their deadly use against our foe \n shifting eyes betray lies of peace and of harmony \n prepare for attack or die",
        linky: require("@/assets/ocean.mp3")
    },
    {
        title: "Prepare for Attack",
        desc: "An Absolute Banger",
        comp: "Zane A. Goen",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/prepareforattack.mp3")
    },
    {
        title: "on va s'écraser et brûler",
        desc: "An Absolute Banger",
        comp: "Timothy Steven Clarke",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/bruler.mp3")
    },
    {
        title: "le bâtiment du capitole est en danger!",
        desc: "An Absolute Banger",
        comp: "Michiru Oshima",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/capitol.mp3")
    },
    {
        title: "la dernière bataille de tokyo contre les monstres",
        desc: "An Absolute Banger",
        comp: "Timothy Steven Clarke",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/battledetokyo.mp3")
    },
    {
        title: "la guerre est un enfer, mais ça doit se faire",
        desc: "An Absolute Banger",
        comp: "Shiro SAGISU",
        arr: "Zane A. Goen",
        voc: "The Groundzero Opera Choir Unit, OpheliasAria", 
        lyrwr: "Mike Wyzgowski",
        lyr: "Before turmoil comes serenity reflected in your soul to see you through adversityvwar is hell, but it must be Dwell not negative signs, focus your mind to be your guide eternally!",
        linky: require("@/assets/guere.mp3")
    },

    {
        title: "godzilla vs the self defense forcese",
        desc: "An Absolute Banger",
        comp: "Akira Ifukube",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/sdf.mp3")
    },
    {
        title: "Destroy All Monsters",
        desc: "An Absolute Banger",
        comp: "Akira Ifukube",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/dam.mp3")
    },
    {
        title: "Deathly Confrontation",
        desc: "An Absolute Banger",
        comp: "Junko Yokoyama",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/confrontation.mp3")
    },
    {
        title: "citation de mitsubishi pavilion I 'volcano'",
        desc: "An Absolute Banger",
        comp: "Akira Ifukube",
        arr: "Zane A. Goen",
        voc: "---", 
        lyrwr: "---",
        lyr: "---",
        linky: require("@/assets/volcano.mp3")
    },
    {
        title: "a great tragedy has befallen manhattan",
        desc: "An Absolute Banger",
        comp: "Timothy Steven Clarke",
        arr: "Zane A. Goen",
        voc: "The Groundzero Opera Choir Unit", 
        lyrwr: "Scott Avery",
        lyr: "new york, terror full out, warfare how will, man fare no stop, nightmare the cries of the ringing sirens warning citizens missiles falling people dying no hope found",
        linky: require("@/assets/greattragedy.mp3")
    }
],
      playlistsid: 0
    }
   },
 

   methods: {
    async addsong(songlinky, songname, songdesc, songcomp, songarr, songvoc, songlyrwr, songlyr) {
      this.playlistsid ++
      this.empty ++
      this.playlists.push({ id: this.playlistsid, link: songlinky, title: songname, desc: songdesc, comp: songcomp, arr: songarr, voc: songvoc, lyrwr: songlyrwr, lyr: songlyr})
      if(this.playlists.length == 1 ){
      this.switcheroo()
      }
    },

    async skiptheline(songlinky, songname, songdesc, songcomp, songarr, songvoc, songlyrwr, songlyr) {
      this.playlistsid ++
      this.empty ++
      this.playlists.unshift({ id: this.playlistsid, link: songlinky, title: songname, desc: songdesc, comp: songcomp, arr: songarr, voc: songvoc, lyrwr: songlyrwr, lyr: songlyr})
      this.switcheroo()
    },

    dropdown(){
      document.getElementById('nowplayingbox').classList.remove('lyricup')
      document.getElementById('nowplayingbox').classList.add('lyricdrop')
      document.getElementById('lyricbox').classList.remove('hidelyrics')
      this.lyricshown = !this.lyricshown
    },

    pickup(){
      document.getElementById('lyricbox').classList.add('hidelyrics')
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
        this.addsong(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)
      })
    },

    checkplay() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = true;
        this.record = 'animation: spin .4s ease-in-out infinite;'
    },

    checkpause() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = false;
        this.record = 'background: rgb(0,28,16); background: linear-gradient(90deg, rgba(0,28,16,1) 0%, rgba(70,79,75,1) 50%, rgba(0,28,16,1) 100%);'
    },

    itsover(){
      this.empty --
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
      this.empty --
   
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
    margin:6px;
  }
  h3 {
    margin:6px;
  }
  h4{
    margin: 6px;
  }

  audio {
    color: black;
    width: 200px;
    height: 25px;
}

 .thebody {
  width: 95vw;
  margin:auto;
  height:fit-content;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 30px;
 }

 .nowplayingbox {
  border: 1px solid #144e36;
  width: 95%;
  height: 143px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 15px;
  box-shadow: #0e3a28 0 0 15px 8px;
 }

 .playboxblink {
  animation: playblink 3.4s linear infinite;
 }

 @keyframes playblink {
                0%{
                  border: 1px solid #144e36;
                  box-shadow: #0e3a28 0 0 15px 8px;
                }
               
                50%{
                  border: 1px solid #144e3671;
                  box-shadow: #0e3a28d8 0 0 15px 8px;
                }
              
                100% {
                  border: 1px solid #144e36;
                  box-shadow: #0e3a28 0 0 15px 8px;
                }
               
            }


 @keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
 .lyricbox {
  border: 1px solid #29c786;
  width: 85%;
  height: 220px;
  overflow-y: scroll;
  margin-top: 8px;
 }

 .leftside {
  width: 6%;
  display: flex;
  flex-direction: column;
  background: rgb(177,177,181);
  background: linear-gradient(90deg,rgba(31, 35, 44, 0) 4%, rgb(31, 35, 44) 5%,  rgb(119, 119, 124) 10%, rgb(31, 35, 44) 14%, rgba(49,49,61,1) 15%, rgba(19,20,22,1) 40%, rgba(19,20,22,1) 60%, rgba(49,49,61,1) 85%,  rgb(31, 35, 44) 86%,  rgb(119, 119, 124) 90%, rgb(31, 35, 44) 95%,rgba(31, 35, 44, 0) 100%);

 }

 .themaincontrols {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
 }

 .cap{
  background-image: url(../assets/caps.jpg);
  background-size:100% 100% ;
  z-index: 1;
  width:100%;
  height:50px;
 }
 .hotbars {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  z-index: 9;
  justify-content: space-evenly;
 }

 .blink {
                animation: blinker 1.4s linear infinite;
            }

            @keyframes blinker {
                0%{
                  opacity:100;
                }
                46%{
                  opacity:100;
                }
                47% {
                    opacity: 0;
                }55% {
                    opacity: 0;
                }
                56%{
                  opacity:100;
                }
                100%{
                  opacity:100;
                }
               
               
            }

 .buttsnplays {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 }

 .rightside {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
 }

img {
  width: 95vw;
  object-fit: cover;
}

.buttonbox {
  width: 48%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height:400px;
  overflow-y: scroll;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #138b5a; 
  scrollbar-color: #138b5a rgba(255, 166, 0, 0);
  scrollbar-width: thin;

}

.recordbox{
     margin: 0;
     width:40%;
     z-index:10;
    }
  
    .lyricdrop {
      animation: lyricdrop 1s ease-in-out forwards;
    }
    .lyricup {
      animation: lyricup 1s ease-in-out forwards;
    }

    .record{
        width: 50%;
        height: 100%;
        margin: 0;
        margin-right: auto;
        margin-left: auto;
        z-index: 19;
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

      marquee {
        min-width:100dvw;
      }
      
 
  /* animation: spin 4s linear infinite; */
    @keyframes spin {
      from {
    
        background: rgb(14,58,40);
        background: linear-gradient(90deg, rgba(14,58,40,1) 0%, rgba(255,255,255,1) 50%, rgba(14,58,40,1) 100%); 
        box-shadow: 0 0 10px 8px rgb(14,58,40); 
  }
  to {
    background: rgb(19,139,90);
    background: linear-gradient(90deg, rgba(19,139,90,1) 0%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 66%, rgba(19,139,90,1) 100%);
    box-shadow: 0 0 20px 16px rgb(19,139,90);
  }
  }
  @-webkit-keyframes spin {
    from {
   
      background: rgb(14,58,40);
      background: linear-gradient(90deg, rgba(14,58,40,1) 0%, rgba(255,255,255,1) 50%, rgba(14,58,40,1) 100%);
      box-shadow: 0 0 10px 8px rgb(14,58,40);
  }
  to {
    background: rgb(19,139,90);
  background: linear-gradient(90deg, rgba(19,139,90,1) 0%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 66%, rgba(19,139,90,1) 100%);
    box-shadow: 0 0 20px 16px rgb(19,139,90);
  }
  }

  @keyframes lyricdrop{
      from {
    height: 143px;
  }
  to {
    height: 420px;
  }
  }
  @-webkit-keyframes lyricdrop {
    from {
    height: 143px;
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
    height: 143px;
  }
  }
  @-webkit-keyframes lyricup {
    from {
    height: 420px;
  }
  to {
    height: 143px;
  }
  }

  .blanklist{
    border-bottom: 2px solid #3c100d;
    height: 50px;
  }
  .playlistwindow {
    border: 2px solid #138b5a;
    height: 400px;
    width: 48%;
    overflow-y:scroll;
    
  scrollbar-color: #138b5a rgba(255, 166, 0, 0);
  scrollbar-width: thin;
  background-image: url("../assets/StEM_Backdrop01.png");
  background-size: cover;

  }



  @media  (max-width: 860.5px) {
    .mobilemakebyebye {
      display:none;
    }
    .buttsnplays {
      flex-direction: column;
    }
    .buttonbox {
      width: 98%;
      margin-bottom: 5px;
      height: 200px;
    }
    .playlistwindow {
      width: 98%;
      height: 200px;
    }
    h2 {
      font-size:1.1em;
    }
    h3{
      font-size: .95em;
    }
    h4 {
      font-size: .9em;

    }
    p{
      font-size: .75em;
    }
    audio {
      width:120px;
    }
    .nowplayingbox {
      height:125px;
      
    }
    .hidelyrics {
      display: none;
    }
    .leftside{
      width: 15%;
    }

    @keyframes lyricdrop{
      from {
    height: 125px;
  }
  to {
    height: 380px;
  }
  }
  @-webkit-keyframes lyricdrop {
    from {
    height: 125px;
  }
  to {
    height: 380px;
  }
  }
  @keyframes lyricup{
      from {
    height: 380px;
  }
  to {
    height: 125px;
  }
  }
  @-webkit-keyframes lyricup {
    from {
    height: 380px;
  }
  to {
    height: 125px;
  }
  }
  }

 

    
   
</style>