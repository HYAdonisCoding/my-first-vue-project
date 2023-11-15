<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo" />
    <h1 class="title">欢迎光临</h1>
    <School></School>
    <hr />
    <Student></Student>
    <hr />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
/*
   全局的样式是不需要加scoped
   全局共享
   */
.title {
  color: magenta;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>