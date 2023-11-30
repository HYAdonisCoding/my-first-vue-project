<template>
  <ul>
    <li>news001 <input type="text"/></li>
    <li>news002 <input type="text"/></li>
    <li>news003 <input type="text"/></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  mounted() {
    // console.log("News is mounted");
  },
  beforeDestroy() {
    // console.log("News is beforeDestroy");
  },
};
</script>

<style scoped>
</style>
