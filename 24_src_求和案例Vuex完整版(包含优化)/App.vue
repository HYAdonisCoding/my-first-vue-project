<template>
  <div class="container">
    <Count/>
    
  </div>
</template>

<script>
import Count from './components/Count';

export default {
  name: "App",
  data() {
    return {
    }
  },
  components: {
    Count,
  },
  methods: {
    
  },
  
};
</script>

<style>
   .container, .foot {
     display: flex;
     justify-content: space-around;
     background-color: lightblue;
   }
   video {
     width: 100%;
   }
   img {
     width: 100%;
   }
   h4 {
    text-align: center;
    background: magenta;
   }
</style>