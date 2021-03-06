import Vue from 'vue'
import Cookies from 'js-cookie'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/Index.vue'
import Login from '../views/login/login'
import Connect from '../views/connect.vue'
import BindMobile from '../views/login/bindMobile'
import ChangeMobile from '../views/login/changeMobile'

Vue.use(VueRouter)

const routes = [{
    path: '/', component: App, //顶层路由，对应index.html
    children:[ //二级路由。对应App.vue
      {path: '',  redirect: '/index'},
      {path: '/index',  component: Index, meta: { title:"在线实习" } },
      // {path: '/login',  component: Login, meta: { title:"登录" } },
      // {path: '/bindMobile',  component: BindMobile, meta: { title:"绑定手机" } },
      // {path: '/changeMobile',  component: ChangeMobile, meta: { title:"换绑手机" } },
      // {path: '/connect',  component: Connect, meta: { title:"联系客服" } },
    ]
  }, {
    path: '/login',
    component: Login,
    meta: { title:"登录" }
  }, {
    path: '/bindMobile',
    component: BindMobile,
    meta: { title:"绑定手机" } 
  }, {
    path: '/changeMobile',
    component: ChangeMobile,
    meta: { title:"换绑手机" }
  }, {
    path: '/connect',
    component: Connect,
    meta: { title:"联系客服" } 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const pathAllow = ['/login', '/changeMobile', '/connect', '/bindMobile']
  if (pathAllow.includes(from.path) && !pathAllow.includes(to.path)) {
    location.reload()
    return
  }
  if (!pathAllow.includes(to.path) && !Cookies.get('iclass_code')) {
      next('/login');
  }
  next();
});

export default router
