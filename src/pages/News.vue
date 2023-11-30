<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
  </ul>
</template>

<script>
export default {
  name: "News",
  mounted() {
    console.log("News is mounted");
  },
  beforeDestroy() {
    console.log("News is beforeDestroy");
  },
};
</script>

<style scoped>
</style>
