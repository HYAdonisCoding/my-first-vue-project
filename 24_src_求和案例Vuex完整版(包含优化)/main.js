//引入Vue
import Vue from 'vue';
//引入store
import store from './store';
//引入vue-resource
import vueResource from 'vue-resource'
//引入App
import App from './App.vue';



Vue.config.productionTip = false
//使用vueResource插件来发送请求
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')

