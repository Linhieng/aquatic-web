import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import validator from 'vue-validator'
import axios from 'axios'
import './constant/default'

Vue.use(validator)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


