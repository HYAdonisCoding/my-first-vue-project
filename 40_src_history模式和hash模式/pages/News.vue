<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"/></li>
    <li>news002 <input type="text"/></li>
    <li>news003 <input type="text"/></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity: 1
    }
  },
  mounted() {
    // console.log("News is mounted");
    // this.timer = setInterval(() => {
    //   console.log('@');
    //   this.opacity -= 0.02
    //   if (this.opacity <= 0) {
    //     this.opacity = 1
    //   }
    // }, 100)
  },
  beforeDestroy() {
    // console.log("News is beforeDestroy");
    // clearInterval(this.timer);
  },
  //激活(路由组件独有的两个钩子)
  activated() {
    // console.log("News is activated");
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.02
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    }, 100)
  },
  //失活
  deactivated() {
    // console.log("News is deactivated");
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
</style>
