/*
 * @Author: 刘攀
 * @Date: 2019-08-28 15:15:17
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-28 15:15:17
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/web/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
