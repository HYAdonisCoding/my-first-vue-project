<template>
  <div class="demo">
    <h2 @click="showName">姓名： {{ name }}</h2>
    <h2>性别： {{ sex }}</h2>
  </div>
</template>

<script>
import { mixinconfig, shareData } from '@/mixin'
export default {
  name: "Student",
  data() {
    return {
      name: "Eason",
      sex: "Male",
      x: 666//如果混合中配置了与data(或者配置了相同的methods)相同的属性值，则以你的配置的属性为主(而不以mixin为主)
    };
  },
  // methods: {
  //   showName() {
  //     alert(this.name);
  //   },
  // },
  mounted() {//但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
    console.log('hello, world');
  },
  mixins: [mixinconfig, shareData],
};
</script>

<style>
.demo {
  background: aquamarine;
}
</style>