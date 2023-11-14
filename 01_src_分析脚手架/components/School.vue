<template>
  <div class="demo-1">
    <h2>学校姓名：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    //注意这里不要写箭头函数
    return {
      schoolName: "北大",
      address: "北京",
    };
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo-1 {
  background: orange;
}
</style>