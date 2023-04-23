<template>
   <button>{{ song.title }}</button>
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

 <style>

</style>