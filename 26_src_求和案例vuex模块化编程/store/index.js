//引入Vuex
import Vuex from 'vuex';
//引入Vue
import Vue from 'vue';
//使用vuex来集中管理状态,必要
//new store的前提是必须要使用Vuex插件
Vue.use(Vuex);

import Count from './Count';
import Person from './Person';





export default new Vuex.Store({
   
    modules: {
        Count,
        Person,
    }
});