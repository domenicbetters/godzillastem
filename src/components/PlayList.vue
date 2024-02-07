<template>
  <div class = "playlistbutton">
   <p class = "songordernum">{{ songorder }}</p>
   <p>{{ song.title }}</p>
   <button class="deleted" @click = "deletesong(song.id)" >Remove</button>
  </div>
</template>
 
 <script>
 
 export default {
   name: 'PlayList',
   components: {
     
   },
   props: {
    song: Object,
    songorder: String
   },
   methods: {
    deletesong(id) {
      this.$emit('delete-song', id)
    }
   },
   emits: ['delete-song'],
 }
 </script>

 <style scoped>
   .playlistbutton {
    display: flex;
    height:50px;
    border-bottom: 1px dashed rgba(38,183,123,1);
    align-items: center;
    justify-content: space-between;
   }
   .songordernum {
    display: flex;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(41,199,134,1) 100%);
    padding: 3px;
    margin-left: 5px;
    margin-right: 30px;
    height:80%;
    align-items: center;
    border-radius: 50%;
    margin-top:3px;
    margin-bottom: 3px;
   }
   .deleted {
    background: rgb(38,183,123);
background: linear-gradient(180deg, rgba(38,183,123,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(41,199,134,1) 100%);
    padding: 10px;
    margin-left: 30px;
    margin-right: 5px;
    color:rgba(38,183,123,1);
    font-family:'VHS';
    border: none;
   }
   
</style>