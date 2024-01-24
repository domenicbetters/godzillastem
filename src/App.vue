<template>
   <div id="app">

    <router-link :to="{name: 'DesiresPage'}"> <button>What do we want</button></router-link>
    <router-link :to="{name: 'VibesPage'}"> <button>How it gonna look?</button></router-link>
    <router-link :to="{name: 'ControllerPageGeneric'}"> <button>Controller?</button></router-link>
    <router-link :to="{name: 'SliderPage'}"> <button>Check out the slider mockup</button></router-link>
    <router-link :to="{name: 'JukeBox'}"> <button>jukebox test</button></router-link>
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
</style>
