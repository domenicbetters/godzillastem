<template>
    <div id="app">
     
     <h1>What do we desrire</h1>

     <ul>
      <li>Notes and thoughts from each dev and their contributions.  See Zane for details</li>
      <li>Roster.  Include movies or interactive models.  Ref unleashed website and smash bros roster list   -goji and iris</li>
      <li> before and after shots with slidey bar thingy  - christ</li>
      <li> dont have site as subsection of someone elses site - everyone</li>
      <li>hide link to doom somewhere in the code because.  -christ </li>
      <li> controls explanation alogn with button layout for modern controller options - zane</li>
     </ul>

<div class="game-cards">
  <div>
            <div class="backing"></div>
            <img 
                src="@/assets/godzilla.jpg" alt=""
            />
  </div>    
</div>

    
 </div>
 </template>
 
 <script>
 
 export default {
   name: 'DesirePage',
   components: {
     
   }
 }
 </script>

 <style>
li {
  text-align: left;
  font-size: 1.5em;
}

.game-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: start;
  gap: 2em;
  max-width: 80vw;
  margin-inline: auto;
}
.game-cards img {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}
.game-cards div {
  position: relative;
  aspect-ratio: 3 / 4;
  width: 100%;
  padding: 1.55em;
  overflow: hidden;
}
.game-cards div .backing {
  background: conic-gradient(rgb(26, 255, 144), rgb(21, 165, 129), rgb(0, 149, 255), rgb(26, 255, 144), rgb(21, 165, 129), rgb(0, 149, 255),rgb(26, 255, 144));
  position: absolute;
  height: 200%;
  width: 200%;
  top: -50%;
  left: -50%;
  animation: 10s spin linear infinite;
}
</style>