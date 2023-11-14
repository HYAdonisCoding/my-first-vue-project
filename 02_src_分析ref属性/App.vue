<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo" />
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎来到北京",
    };
  },
  methods: {
    showDom(e) {
      console.log(this.$refs.title); //this ==> vc(app组件)
      console.log(e.target); //发生事件的dom元素m
      console.log(this.$refs.sch); //可以是school组件加refs属性 获得的是组件事例对象vc
      console.log(this.$refs);
    },
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>