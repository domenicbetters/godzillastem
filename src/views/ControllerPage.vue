<template>
    <div  class="controllerback" id="app">
     
     <h1>Choose your controller</h1>
     <router-link :to="{name: 'ControllerPageGeneric'}"> <button>Generic</button></router-link>
     <router-link :to="{name: 'ControllerPageXbox'}"> <button>Xbox</button></router-link>
     <router-link :to="{name: 'ControllerPagePS2'}"> <button>PS2</button></router-link>
    

      <img src="@/assets/generic.png" v-show="genericexists ==='yes'" alt="why wont you work"  />
      <img src="@/assets/xbox.jpg" v-show="xboxexists ==='yes'" alt="why wont you work"  />
      <img src="@/assets/ps2.png" v-show="ps2exists ==='yes'" alt="why wont you work"  />


    
 </div>
 </template>
 
 <script>
 
 export default {
   name: 'ControllerPage',
   components: {
     
   },
   data() {
    return {
      genericexists: this.genericcheck(),
      xboxexists: this.xboxcheck(),
      ps2exists: this.ps2check(),
      image: this.type
    }
   },
   methods: {
      genericcheck() {
        if(this.$route.path == '/godzillastem/controller/generic') {
        return 'yes'
        }
        else {
          return 'no'
        }
        },
        xboxcheck() {
        if(this.$route.path == '/godzillastem/controller/xbox') {
        return 'yes'
        }
        else {
          return 'no'
        }
        },
        ps2check() {
        if(this.$route.path == '/godzillastem/controller/ps2') {
        return 'yes'
        }
        else {
          return 'no'
        }
        },
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