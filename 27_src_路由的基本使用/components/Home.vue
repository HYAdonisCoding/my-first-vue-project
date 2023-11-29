<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home is mounted");
  },
  beforeDestroy() {
    console.log("Home is beforeDestroy");
  },
};
</script>

<style scoped>
</style>
