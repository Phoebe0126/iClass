import Vue from './plugins/vant';
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
