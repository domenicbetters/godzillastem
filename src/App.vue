<template>
   <div id="app">
    <div class = "picbox"><div class = "pic"></div></div>
    <!-- <router-link :to="{name: 'DesiresPage'}"> <button>What do we want</button></router-link>
    <router-link :to="{name: 'VibesPage'}"> <button>How it gonna look?</button></router-link>
    <router-link :to="{name: 'ControllerPageGeneric'}"> <button>Controller?</button></router-link>
    <router-link :to="{name: 'SliderPage'}"> <button>Check out the slider mockup</button></router-link>
    <router-link :to="{name: 'JukeBox'}"> <button>jukebox test</button></router-link> -->
    <router-view :key="$route.fullPath"  />
   
    <div class = "bady">
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.picbox{
  width: 95vw;
  height:auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pic {
  width:20%;
  height: 80px;
  background-image: url("./assets/stemlogo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
}
</style>
