import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main"
import Login from "../views/Login";
Vue.use(Router)

export default new Router({
  routes:[{
    path:'/login',
    component:Login
  },{
    path: '/main',
    component: Main
  }]
})
