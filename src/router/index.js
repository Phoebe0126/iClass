import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/Index.vue'
import Login from '../views/login/login'
import BindMobile from '../views/login/bindMobile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: App, //顶层路由，对应index.html
    children:[ //二级路由。对应App.vue
      {path: '',  redirect: '/index'},
      {path: '/index',  component: Index, meta: { title:"在线实习" } },
      {path: '/login',  component: Login, meta: { title:"登录" } },
      {path: '/bindMobile',  component: BindMobile, meta: { title:"绑定手机" } },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
