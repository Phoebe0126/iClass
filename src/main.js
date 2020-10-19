import Vue from './plugins/vant';
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import qs from 'qs';


Vue.prototype.$http=axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Vue.prototype.$qs = qs;

import "lib-flexible/flexible"


Vue.config.productionTip = false


router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path !== '/login' && !document.cookie.includes('user_id')) {
    next('/login');
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
