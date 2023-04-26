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
    border-bottom:solid 2px rgb(0, 0, 0);
    align-items: center;
    justify-content: space-between;
   }
   .songordernum {
    display: flex;
    background-color: bisque;
    padding: 3px;
    margin-left: 5px;
    margin-right: 30px;
    height:80%;
    align-items: center;
   }
   .deleted {
    background-color: rgb(101, 22, 22);
    padding: 10px;
    margin-left: 30px;
    color:white;

   }
</style>