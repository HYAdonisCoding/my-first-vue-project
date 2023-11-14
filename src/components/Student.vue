<template>
  <div class="demo">
    <!--注意props传递过来的值是不能改的(尽量避免去改，控制台会有警告)-->
    <h1>{{ msg }}</h1>
    <h2>姓名： {{ name }}</h2>
    <h2>年龄： {{ myAge+1 }}</h2>
    <h2>性别： {{ sex }}</h2>
    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
      //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
      msg: "中国·北京",
      myAge: this.age,
      // name: "北大",
      // age: 18,
      // sex: "male",
    };
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  //简单声明接收
  // props: ['name', 'sex', 'age'],
  //限制props中属性的类型 类型错误了会提示错误信息
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // }
  props: {
    name: {
      type: String,// 类型
      required: true,// 必要的
    },
    age: {
      type: Number,
      default: 16 // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
  }
};
</script>

<style>
.demo {
  background: aquamarine;
}
</style>