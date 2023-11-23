<template>
  <section class="category">
    <h3 class="jumbotron-heading">{{ title }}</h3>
    
    <slot>我是默认值</slot>
  </section>
</template>

<script>

export default {
  name: "Category",
  
  props: [ 'title'],
  
};
</script>

<style>
   .category{
     background: lightblue;
     width: 200px;
     height: 300px;
   }
   h3{
     text-align: center;
     background: orange;
   }
   video {
     width: 100%;
   }
   img {
     width: 100%;
   }

</style>