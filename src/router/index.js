/*
 * @Author: 刘攀
 * @Date: 2019-08-28 15:15:17
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 12:22:22
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/web/home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
