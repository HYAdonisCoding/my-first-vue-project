import Vue from 'vue'
//引入vue-resource
import vueResource from 'vue-resource'

import App from './App.vue'



Vue.config.productionTip = false
//使用vueResource插件来发送请求
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
