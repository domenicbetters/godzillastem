<template>
    <div  class="controllerback" id="app">
     
     <h1>Before and after, for your health</h1>
    

     <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img slot="handle" class = "sliderbutton" src="@/assets/sliderbutton.png" />
    <img
      slot="first"
      style="width: 100%"
      src="@/assets/before.png"
    />
    <img
      slot="second"
      style="width: 100%"
      src="@/assets/after.png"
    />
    <!-- eslint-enable -->
    </ImgComparisonSlider>


    
 </div>
 </template>

 
 
 <script>



import { ImgComparisonSlider } from '@img-comparison-slider/vue';


 
 export default {
   name: 'SliderPage',
   components: {
     ImgComparisonSlider
   },
   data() {
    return {
   
    }
   },
   methods: {
   
      },
   
   props: {
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


img-comparison-slider {
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --default-handle-color: red;
  }

  .sliderbutton {
    width: 40px;
    height: 40px;
  }

</style>