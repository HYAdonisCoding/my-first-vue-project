<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:magenta;">Count组件求和为： {{ sum }}</h2>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        }
    },
    methods: {
        add() {
            const person = {
                id: nanoid(),
                name: this.name,
            }
            console.log(person);
            this.name = ''
            this.$store.commit('ADD_PERSON', person)
        },
    },
    computed: {
        ...mapState(['persons', 'sum'])
    }

}
</script>

<style>

</style>