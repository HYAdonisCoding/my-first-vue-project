<template>
  <section class="category">
    <h3 class="jumbotron-heading">{{ title }}</h3>
    <slot :games="games">我是默认值</slot>
    <!-- <slot name="center" :games="games">我是默认值center</slot>-->
    <slot name="footer">我是默认值footer</slot> 
  </section>
</template>

<script>

export default {
  name: "Category",
  
  props: [ 'title'],
  data() {
    return { 
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
    }
  }
  
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