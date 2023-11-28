<template>
  <div>
    <h1>当前求和为： {{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}， 学习{{ subject }}</h3>
    <h3 style="color:magenta;">Person组件的总人数为：{{ persons.length }}</h3>
    <!--让其收集到的数据全是number类型的 number修饰符-->
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">➕</button>
    <button @click="decrement(n)">➖</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>




  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: "Count",
  data() {
    return { 
      n: 1,//代表用户在select框开始的时候选择的数字

    }
  },
  methods: {
    // 程序员自己写的方法
    // increment() {
    //   this.$store.commit('INCREMENT', this.n)
    // },
    // decrement() {
    //   this.$store.commit('DECREMENT', this.n)
    // },
    //借助mapMutations生成对应方法，方法会调用commit去联系mutations，数组写法
    // ...mapMutations(['INCREMENT',  'DECREMENT']),
    //借助mapMutations生成对应方法，方法会调用commit去联系mutations，对象写法
    ...mapMutations('Count',{ increment: 'INCREMENT', decrement: 'DECREMENT'}),

    // ****************************************************************

    // 程序员自己写的方法
    // incrementOdd() {
    //   this.$store.dispatch('incrementOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('incrementWait', this.n)
    // },
    //借助mapActions生成对应方法，方法会调用dispatch去联系actions，对象写法
    // ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'}),
    //借助mapActions生成对应方法，方法会调用dispatch去联系actions，数组写法
    ...mapActions('Count',['incrementOdd', 'incrementWait']),

  },
  computed: {
    //借助mapState从state中生成计算属性,对象写法
    // ...mapState({sum:'sum', school: 'school', subject: 'subject', }),
    //借助mapState从state中生成计算属性,数组写法
    ...mapState('Count', ['sum', 'school', 'subject', 'persons' ]),
    ...mapState('Person', [ 'persons' ]),

    //借助mapGetters从getters中生成计算属性,对象写法
    // ...mapGetters({bigSum: 'bigSum', }),
    //借助mapGetters从getters中生成计算属性,数组写法
    ...mapGetters('Count', ['bigSum', ]),
  },
  
};
</script>

<style>
   button {
    margin-left: 5px;
   }

</style>