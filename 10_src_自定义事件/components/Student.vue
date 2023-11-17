<template>
  <div class="demo">
    <h2>姓名： {{ name }}</h2>
    <h2>性别： {{ sex }}</h2>
    <h3>当前的number为：{{ number }}</h3>
    <button @click="add">点我number++</button>
    <button type="button" @click="sendName">把学生名传递给app</button>
    <button type="button" @click="unbind">解绑sendStudentName事件</button>
    <button type="button" @click="death">销毁当前Student组件实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Eason",
      sex: "Male",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log('add 被调用了');
      this.number++
    },
    sendName() {
      console.log('sendName');
      //emit触发绑定在指定vc上的自定义事件 vc实例对象可以使用该方法
      //后面多余参数演示es6的参数收集
      this.$emit('sendStudentName', this.name, 1, 5, 7, 20)
      this.$emit('demo', this.name, 1, 5, 7, 20)
      // this.$emit('click')
    },
    unbind() {
      console.log('unbind');
      // this.$off('sendStudentName')//这种写法只能解绑一种自定义事件
      // this.$off(['sendStudentName', 'demo'])// 解绑多个事件，参数为包含多个事件名的数组
      this.$off()//比较暴力，有几个自定义事件就全给你解绑了
    },
    death() {
      this.$destroy()//
    }
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