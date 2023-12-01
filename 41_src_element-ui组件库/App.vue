<template>
  <div>
    <hr />
    <button>原生的button</button>
    <input type="text" />
    <hr />
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>

    <el-input placeholder="请输入内容" v-model="input4">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <!-- <Row>
      <Button round>圆角按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>成功按钮</Button>
      <Button type="info" round>信息按钮</Button>
      <Button type="warning" round>警告按钮</Button>
      <Button type="danger" round>危险按钮</Button>
    </Row>

    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <DatePicker type="date" placeholder="选择日期"> </DatePicker>

​      <Row>
​        <Button icon="el-icon-search" circle></Button>
​        <Button type="primary" icon="el-icon-edit" circle></Button>
​        <Button type="success" icon="el-icon-check" circle></Button>
​        <Button type="info" icon="el-icon-message" circle></Button>
​        <Button type="warning" icon="el-icon-star-off" circle></Button>
​        <Button type="danger" icon="el-icon-delete" circle></Button>
​      </Row>
​    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.panel-body {
  background: lightblue;
}
</style>