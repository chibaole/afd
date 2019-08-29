/*
 * @Author: 刘攀
 * @Date: 2018-11-13 10:16:21
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 14:57:34
 * @Description: file content
 */
/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({prefix: '/api/v1'})
const controllers = require('../controllers')
//  get 获取今日福利 的路由
// router.get('/getFuli', controllers.getFuli)
// // get 获取拼团的数据
// router.get('/getGroup', controllers.getGroup)
// // get 获取更多活动的数据
// router.get('/getMore', controllers.getMore)

// // post来产品的名称和产品号
// router.get('/getPrjInfo', controllers.getPrjInfo)
// // 新的API接口适配
// router.get('/boons/today', controllers.getBoonsToday)

// // 获取福利详情
// router.get('/boons/:uuid', controllers.getBoons)
// // 参加福利
// router.post('/boons/:uuid/attend', controllers.attendBoon)
// // 查询拼团的活动信息

// router.get('/group_activities',controllers.getGroupActive)

// // group_activities//
// // 查询某个拼团的详情数据
// router.get('/group_activities/:uuid',controllers.groupDetail)

// // 发起拼团

// router.post('/group_activities/:uuid/initial',controllers.initGroup)

// // 拼团订单详情

// router.get('/group_activity_orders/:uuid',controllers.activityOrder)

// // 拼团发起详情页
// router.get('/group_activity_initials/:uuid',controllers.groupInitDetail)

// // 参与拼团
// router.post('/group_activities/:uuid/attend',controllers.attendGroup)

// // 用户登录
// router.post('/wx/login', controllers.wxlogin)
// router.post('/wx/save_user_info', controllers.saveUserinfo)
// 验证 公众号  接口配置 url

router.get('/', controllers.wxToken)

module.exports = router
