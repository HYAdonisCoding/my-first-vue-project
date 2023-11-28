<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:magenta;">Count组件求和为： {{ sum }}</h2>
    <h3>列表中第一个人的名字为：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的</button>
    <button @click="addPersonServer">添加一个服务器人员</button>
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
            this.$store.commit('Person/ADD_PERSON', person)
        },
        addWang() {
            const person = {
                id: nanoid(),
                name: this.name,
            }
            console.log(person);
            this.name = ''
            this.$store.dispatch('Person/addWang', person)
        },
        addPersonServer() {
            this.$store.dispatch('Person/addPersonServer');
        },
    },
    computed: {
        // ...mapState('Person', ['persons']),
        // ...mapState('countComponent', ['sum']),
        persons() {
            return this.$store.state.Person.persons
        },
        sum() {
            return this.$store.state.Count.sum
        },
        firstPersonName() {
            return this.$store.getters['Person/firstPersonName']
        }
    }

}
</script>

<style>

</style>