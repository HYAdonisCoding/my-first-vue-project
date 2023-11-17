<template>
  <div class="app">
    <img src="./assets/logo.png" alt="logo" />
    <h1 class="title">{{ msg }} {{ studentName }}</h1>
    <!--通过父组件给子组件传递函数类型的props实现了子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>
    <hr />
    <!--通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第一种写法使用@或v-on-->
      <!--once代表改事件只执行一次-->
    <!-- <Student v-on:sendStudentName="getStudentName" @demo="m1"></Student> -->
    
    <!--第二种写法使用ref绑定事件--->
    <Student ref="student" @click.native="myClick"></Student>
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
  methods: {
    myClick() {
      alert('111!');
    },
    getSchoolName(name) {
      console.log(`App收到了学校名， ${name}`);
    },
    getStudentName(name, ...params) {
      console.log(`App收到了学生名， ${name}， ${params}`);
      this.studentName = name;
    },
    m1() {
      console.log(`App收到了m1事件回调`);
    }
  },
  mounted() {
    this.$refs.student.$on('sendStudentName', this.getStudentName)
    // this.$refs.student.$once('sendStudentName', this.getStudentName)
    // setTimeout(() => {
    //   this.$refs.student.$on('sendStudentName', this.getStudentName)
    // }, 3000);

    // this.$refs.student.$on('sendStudentName', (name) => {
    //   console.log(this);
    //   console.log(name);
    //   this.studentName = name;
    // })

    // this.$refs.student.$on('sendStudentName', function(name) {
    //   console.log(this);
    //   console.log(name);
    //   this.studentName = name;
    // });
    // setTimeout(() => {
    //   this.$destroy();
    // }, 3000);
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