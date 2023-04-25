<template>
    <div id="app">
     
     <h1>Juke Box test</h1>
<h3>now playing :   {{this.songname}} </h3>

     <SongButton @click="changesong(song.linky, song.title)" :key = "song.title" v-for="(song) in songs" :song="song"/>

     <button @click="playall()">play all</button>


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

                <PlayList @delete-song="deletesong" :key = "playlist.id" v-for="(playlist) in playlists" :song="playlist"/>


   
     <audio @play = "checkplay" @pause = "checkpause" @ended="itsover" :key="this.tracky" controls  id="audioplayer"  autoplay class = "playbutton"  > <source :src="this.songlink"> </audio> 


    
 </div>
 </template>
 
 <script>


 import songlist from "@/assets/songs.json"
 import SongButton from "@/components/SongButton.vue"
 import PlayList from "@/components/PlayList.vue"
 
 export default {
   name: 'JukeBox',
   components: {
     SongButton,
     PlayList
   },
   data() {
    return {
      songlink: '',
      songname: '',
      playlists: [],
      tracky: 0,
      songs: songlist,
      playlistsid: 0
    }
   },
 

   methods: {
    changesong(songlinky, songname) {
      this.playlistsid ++
      this.playlists.push({ id: this.playlistsid, link: songlinky, title: songname})
      if(this.playlists.length == 1 ){
      this.songlink = this.playlists[0].link 
      this.songname = this.playlists[0].title
      this.tracky = this.tracky + 1
      console.log(this.playlists)
      }
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