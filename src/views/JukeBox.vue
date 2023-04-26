<template>
    <div id="app">
     
     <h1>Juke Box test</h1>
<h3>now playing :   {{this.songname}} </h3>

     <SongButton @click="changesong(song.linky, song.title)" :key = "song.title" v-for="(song) in songs" :song="song"/>

     <FuncButton @click="playall()" title = "Play All"/>
     <FuncButton @click="shuffle(this.playlists)" title = "Shuffle that Shit" />


     <!-- <h3>{{ this.playlists }}</h3> -->


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
    <div class = "playlistwindow">
      <PlayList @delete-song="deletesong" :key = "playlist.id" v-for="(playlist, i) in playlists" :song="playlist" :songorder = "i + 1"  />
    </div>

   
     <audio @play = "checkplay" @pause = "checkpause" @ended="itsover" :key="this.tracky" controls  id="audioplayer"  autoplay class = "playbutton"  > <source :src=this.songlink> </audio> 


    
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
      songlink: '',
      songname: '',
      playlists: [],
      tracky: 0,
      songs: [
    {
        title: "Swinging bionic boi", 
        linky: require("@/assets/g2.mp3")
    },
    {
        title: "BioWars",
        linky: require("@/assets/g1.mp3")
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
      this.songlink = this.playlists[0].link
      console.log(this.songlink)
      this.songname = this.playlists[0].title
      this.tracky = this.tracky + 1
      }
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
        this.songlink=this.playlists[0].link
        this.songname=this.playlists[0].title 
        this.tracky = this.tracky + 1 
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
    },

    checkpause() {
        let inputs = document.getElementById("btnControl");
        inputs.checked = false;
    },

    itsover(){
      this.playlists.shift()
      if (this.playlists.length == 0){
      this.songlink = ""
      this.songname = ""
      this.tracky = this.tracky + 1}
      else {
      this.songlink=this.playlists[0].link
      this.songname=this.playlists[0].title 
      this.tracky = this.tracky + 1 }
    },

    deletesong(idnum) {
   
      if(this.playlists[0].id == idnum){
        this.playlists = this.playlists.filter((playlist) => playlist.id !== idnum)
        if (this.playlists.length == 0){
        this.songlink = ""
        this.songname = ""
        this.tracky = this.tracky + 1}
        else {
        this.songlink=this.playlists[0].link
        this.songname=this.playlists[0].title 
        this.tracky = this.tracky + 1 }
      }

      else {
        this.playlists = this.playlists.filter((playlist) => playlist.id !== idnum)
      }
    }
   },
 }

 </script>

 <style>
img {
  width: 95vw;
  object-fit: cover;
}

.recordbox {
  display: none;
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

  .playlistwindow {
    border:5px solid gold;
    height: 300px;
    width: 100ch;
    overflow-y:scroll;

  }

    
   
</style>