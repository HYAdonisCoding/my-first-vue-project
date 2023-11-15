<template>
  <div class="demo">
    <h2>姓名： {{ name | mySlice}}</h2>
    <h2>性别： {{ sex }}</h2>
    <input v-fbind:value="name" >
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

<style>
.demo {
  background: aquamarine;
}
</style>