<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo" />
    <h1 class="title">{{ msg }} {{ studentName }}</h1>
    <!--通过父组件给子组件传递函数类型的props实现了子给父传递数据-->
    <School ></School>
    <hr />
    <Student ref="student"></Student>
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
  data() {
    return {
      msg: "Hello, ",
      studentName: ''
    }
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
  background-color: gray;
  padding: 5px;
}
</style>