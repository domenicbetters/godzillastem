<template>
   <div id="app">
   <div class = "heady">
    <div class = "butheady">
    <div><router-link :to="{name: 'DesiresPage'}"> <button class = "buttony">NEWS</button></router-link></div>
    <div><router-link :to="{name: 'VibesPage'}"> <button class = "buttony">ABOUT</button></router-link></div>
    </div>
    <!-- <router-link :to="{name: 'ControllerPageGeneric'}"> <button>Controller?</button></router-link> -->
    <div class = "picbox"><div class = "pic"></div></div>
    <div class = "butheady">
    <div><router-link :to="{name: 'SliderPage'}"> <button class = "buttony">MONSTERS</button></router-link></div>
    <div><router-link :to="{name: 'JukeBox'}"> <button class = "buttony">JUKEBOX</button></router-link></div>
    </div>
   </div>
    <router-view :key="$route.fullPath"  />
   
   
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
  width: 33%;
  min-width: 30vw;
  height:auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
}
.pic {
  width: 100%;
  height: 80px;
  background-image: url("./assets/stemlogo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
}
.heady {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin: auto;
  justify-content: space-around;
  align-items:center;
}
.butheady {
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;
}

.buttony {
  margin-top: 3px;
  margin-bottom: 3px;
  width: 8em;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(4,36,23,1) 50%, rgba(0,0,0,1) 100%);
  border: none;
  font-family:'VHS';
  color: #138b5a;
  font-size: 1.5em;
}
@media  (max-width: 860.5px) {
  .buttony {
    font-size: 1em;
    width: 6em;
  }
}
</style>
