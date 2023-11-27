//引入Vuex
import Vuex from 'vuex';
//引入Vue
import Vue from 'vue';
//使用vuex来集中管理状态,必要
//new store的前提是必须要使用Vuex插件
Vue.use(Vuex);

//创建actions(本质就是对象) 用于响应组件中的动作
const actions = {
    // increment(context, value) {
    //     console.log('increment', context, value);
    //     context.commit('INCREMENT', value);
    // },
    // decrement(context, value) {
    //     context.commit('DECREMENT', value);
    // },
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value);
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value);
        }, 2000);
    },
}

//创建mutations(本质也是对象) 用于修改数据(state)
const mutations = {
    INCREMENT(state, value) {
        state.sum += value;
    },
    DECREMENT(state, value) {
        state.sum -= value;
    }
}

//准备state(数据) 存储数据
const state = {
    sum: 0, //
    school: '北大',
    subject: 'Computer Science',
}

//准备getters用于加工state，将其共享于各个组件当中
//类似于各个组件里的computed(计算属性),只不过它是共享的
const getters = {
    bigSum(state) {
        return state.sum * 10
    },
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});