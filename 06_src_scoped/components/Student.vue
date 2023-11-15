<template>
  <div class="demo">
    <h2>姓名： {{ name }}</h2>
    <h2>性别： {{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Eason",
      sex: "Male",
    };
  },
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>