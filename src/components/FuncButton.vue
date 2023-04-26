<template>
   <button>{{ title }}</button>
</template>
 
 <script>
 
 export default {
   name: 'FuncButton',
   components: {
     
   },
   props: {
    title: String
   }
 }
 </script>

 <style scoped>
 button {
  padding: 10px;
  margin: 15px;
  width: 30ch;
  box-shadow: 0 0 25px 2px rgb(32, 144, 77) ;
  border: 2px solid black;
  background: rgb(245, 255, 249)

 }

</style>