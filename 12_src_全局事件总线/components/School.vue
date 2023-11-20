<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
      address: "中国·北京",
    };
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('School组件接收到了数据，', data);
    })
  },
  beforeDestroy() {
    this.$bus.off('hello');//销毁解绑
  }
};
</script>

<style scoped>
.demo {
  background: aquamarine;
  padding: 5px;
}
</style>