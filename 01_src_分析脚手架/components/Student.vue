<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    //注意这里不要写箭头函数
    return {
      name: "Eason",
      age: 19,
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
.demo {
  background: purple;
}
</style>