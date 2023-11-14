<template>
  <div class="demo">
    <h2 @click="showName">学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
import { mixinconfig, shareData } from '@/mixin'

export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
      address: "中国·北京",
    };
  },
  // methods: {
  //   showName() {
  //     alert(this.name);
  //   },
  // },
  mixins: [mixinconfig, shareData],
};
</script>

<style>
.demo {
  background: aquamarine;
}
</style>