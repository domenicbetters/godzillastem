<template>
   <button @click = "deletesong(song.id)" >x</button><p>{{ song.title }}</p>
</template>
 
 <script>
 
 export default {
   name: 'PlayList',
   components: {
     
   },
   props: {
    song: Object
   },
   methods: {
    deletesong(id) {
      this.$emit('delete-song', id)
    }
   },
   emits: ['delete-song'],
 }
 </script>

 <style>

</style>