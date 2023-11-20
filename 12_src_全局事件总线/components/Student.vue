<template>
  <div class="demo">
    <h2>姓名： {{ name }}</h2>
    <h2>性别： {{ sex }}</h2>
    <button type="button" @click="sendName">把学生名传递给School</button>
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
  methods: {
    sendName() {
      console.log('sendName');
      this.$bus.$emit('hello', this.name)
    },
  }
};
</script>

<style scoped>
.demo {
  background: orange;
  padding: 5px;
  margin-bottom: 5px;
}
</style>