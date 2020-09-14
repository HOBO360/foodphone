/***
 * @creater:wjiban
 * @create_time:20-9-2 9:42:29
 * @last_modify:wjiban
 * @modify_time:20-9-3 21:47:41
 * @line_count:25
 **/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


Vue.use(ElementUI).use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
