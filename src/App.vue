<template>
   <div id="app">
    
    <h1>GODZILLA STEM WEBSITE MAIN PAGE YAY!!!!!</h1>

    <router-link :to="{name: 'DesiresPage'}"> <button>What do we want</button></router-link>
    <router-link :to="{name: 'VibesPage'}"> <button>How it gonna look?</button></router-link>
    <router-view />
   
    <div class = "bady">
    <div class="imgbox"><img src="@/assets/godzilla.jpg" /></div>
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
  margin-top: 60px;
}
</style>
