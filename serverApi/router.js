/*
 * @Author: 刘攀
 * @Date: 2019-08-30 17:33:29
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-09-02 10:51:24
 * @Description: file content
 */
/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
})

const controllers = require('./controllers')

//新的API接口适配
router.get('/crateMenu', controllers.test1)




module.exports = router
