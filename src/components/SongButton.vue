<template>
  <div class = "button-box">
  <div class ="button-back">  </div>
   <button>{{ song.title }}</button>
  </div>
 
</template>
 
 <script>
 
 export default {
   name: 'SongButton',
   components: {
     
   },
   props: {
    song: Object
   }
 }
 </script>

 <style scoped>
 button {
  position: relative;
  z-index: 6;
  top: -60px;
  padding: 10px;
  width: 30ch;
  box-shadow: 0 0 25px 2px rgb(32, 144, 77) ;
  border: 2px solid black;
  background: rgb(245, 255, 249)

 }

 .button-box {
  margin: 2px;
  padding:10px;
  width:230px;
  height: 80px;
  overflow:hidden;
 }
 .button-back {
  z-index: 1;
  position: relative;
  width: 100%;
  height:100%;
  /* background: conic-gradient(rgb(26, 255, 144), rgb(21, 165, 129), rgb(0, 149, 255), rgb(26, 255, 144), rgb(21, 165, 129), rgb(0, 149, 255),rgb(26, 255, 144)); */
  background: rgba(0, 0, 0, 0.297);
 }

</style>