<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button type="button" @click="sendSchoolName">把学校名传递给app</button>
  </div>
</template>

<script>

export default {
  name: "School",
  props: ['getSchoolName'],
  data() {
    return {
      name: "北京大学",
      address: "中国·北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    }
  }
};
</script>

<style scoped>
.demo {
  background: aquamarine;
  padding: 5px;
}
</style>