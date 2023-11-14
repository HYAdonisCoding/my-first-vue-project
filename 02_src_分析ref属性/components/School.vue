<template>
  <div class="demo">
    <h1>学校名称： {{ name }}</h1>
    <h1>学校地址： {{ address }}</h1>
  </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            address: "中国·北京",
            name: "北大"
        }
    },
}
</script>

<style>
    .demo {
        background: aquamarine;
    }
</style>