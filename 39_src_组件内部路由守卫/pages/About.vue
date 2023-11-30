<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // mounted() {
  //   console.log("About is mounted");
  // },
  // beforeDestroy() {
  //   console.log("About is beforeDestroy");
  // },
  // 组件内路由守卫
  //通过路由规则进入该组件时被调用,注意一定是通过路由规则进入组件，普通的组件装载是不会调用的
  beforeRouteEnter: (to, from, next) => {
    console.log("App---beforeRouteEnter");
    console.log(from, to);
    const { isAuth } = to.meta;
    if (isAuth) {
      if (localStorage.getItem("shcool") === "beida") {
        next();
      } else {
        alert("Shcool is not available");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave: (to, from, next) => {
    //通过路由规则离开该组件时被调用
    console.log("App---beforeRouteLeave");
    console.log(from, to);
    next();
  },
};
</script>

<style scoped>
h2 {
  background-color: blueviolet;
}
</style>
