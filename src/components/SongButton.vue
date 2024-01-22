<template>
  <div class = "button-box">
    <div>
      <p @click = "skiptheline(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)">{{ song.title }}</p>
    </div>
    <div class = "theclickies">
      <button class="playbutton" @click = "skiptheline(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)">►</button>
      <button class = "addbutton" @click = "addsong(song.linky, song.title, song.desc, song.comp, song.arr, song.voc, song.lyrwr, song.lyr)">+</button>
   </div>
  </div>
 
</template>
 
 <script>
 
 export default {
   name: 'SongButton',
   methods: {
    addsong(linky, title, desc, comp, arr, voc, lyrwr, lyr) {
                this.$emit('add-song', linky, title, desc, comp, arr, voc, lyrwr, lyr)
            },
    skiptheline(linky, title, desc, comp, arr, voc, lyrwr, lyr) {
        this.$emit('skip-the-line', linky, title, desc, comp, arr, voc, lyrwr, lyr)
    }
   },
   
   components: {
     
   },
   props: {
    song: Object
   }
 }
 </script>

 <style scoped>
 button {
  width: 5ch;
  background-color: rgba(0, 0, 0, 0);
  color:white;
 }

 .theclickies {
  display:flex;
  flex-direction: row;;
  justify-content: center;
  align-items: center;
 }
 .addbutton {
  border:2px solid white;
  height: 36px;
 }

 .playbutton {
  border:2px solid rgba(255, 255, 255, 0);
  height: 60px;
 }

 .button-box {
  margin: 2px;
  padding:10px;
  padding-right:0px;
  width:230px;
  height: 60px;
  overflow:hidden;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(14,58,40);
  background: linear-gradient(180deg, rgba(14,58,40,0) 0%, rgba(14,58,40,0.40) 20%, rgba(41,199,134,0.6) 40%, rgba(38,182,123,0.6) 60%, rgba(14,58,40,0.40) 80%, rgba(14,58,40,0) 100%);
  box-shadow: -6px 0 5px 2px white;
 }

 p{
  color:white;
 }

</style>