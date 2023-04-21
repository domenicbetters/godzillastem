<template>
    <div  class="controllerback" id="app">
     
     <h1>Choose your controller</h1>
    <router-link :to="{name: 'ControllerPageGeneric'}"> <button>Generic</button></router-link>
    <router-link :to="{name: 'ControllerPageXbox'}"> <button>xbox</button></router-link>
    <router-link :to="{name: 'ControllerPagePS2'}"> <button>ps2</button></router-link>
     <img :src="image" alt="why wont you work"  />


    
 </div>
 </template>
 
 <script>
 
 export default {
   name: 'ControllerPage',
   components: {
     
   },
   data() {
    return {
      image: this.type
    }
   },
   props: {
     type: String
    },
 }
 </script>

 <style scoped>
li {
  text-align: left;
  font-size: 1.5em;
}

.controllerback {
  background-color: rgb(18, 7, 29);
}

img {
  width: 100%;
  height:auto;
}
</style>