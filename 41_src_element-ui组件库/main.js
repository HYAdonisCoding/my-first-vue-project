//引入Vue
import Vue from 'vue';
//引入App
import App from './App';
//完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button, Input, Row, DatePicker} from 'element-ui';

Vue.use(Button)
Vue.use(Row,)
Vue.use(Input)
Vue.use(DatePicker)

//关闭Vue的生产提示
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),

}).$mount('#app')