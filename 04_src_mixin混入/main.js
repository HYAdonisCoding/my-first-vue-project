import Vue from 'vue'
import App from './App.vue'

// import { mixinconfig, shareData } from '@/mixin'

Vue.config.productionTip = false
// Vue.mixin(mixinconfig)
// Vue.mixin(shareData)

new Vue({
  render: h => h(App),
}).$mount('#app')
