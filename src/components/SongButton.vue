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
  border:1px dashed white;
  height: 26px;
  background: rgba(0, 0, 0, 0.521);
 }

 .playbutton {
  border:1px dashed white;
  height: 26px;
  background: rgba(0, 0, 0, 0.521);
  margin-right: 3px;
  margin-left: 1px;
 }

 .button-box {
  margin-top:8px;
  margin-bottom: 8px;
  padding:10px;
  padding-right:0px;
  width:230px;
  height: 45px;
  overflow:hidden;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left:2px;
  margin-right:2px;
  background: rgb(14,58,40);
  background: linear-gradient(180deg, rgba(14,58,40,0) 0%, rgba(14,58,40,0.15) 20%, rgba(41,199,134,0.3) 40%, rgba(38,182,123,0.3) 60%, rgba(14,58,40,0.15) 80%, rgba(14,58,40,0) 100%);
  box-shadow: -6px 0 5px 2px rgba(255, 255, 255, 0.704);
 }

 p{
  color:white;
 }
 @media  (max-width: 860.5px) {
  .button-box{
    height: 25px;
  }
 p{
  font-size: .6em;;
 }
 }

 
</style>