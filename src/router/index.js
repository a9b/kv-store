import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import List from '@/components/List'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/list/:userId',
      name: 'List',
      component: List
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
