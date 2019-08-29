/*
 * @Author: 刘攀
 * @Date: 2018-09-26 13:56:37
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 14:25:08
 * @Description: file content
 */
const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(response)

// 引入路由分发
const router = require('./routes')
app.use(router.routes())
// 使用响应处理中间件
// 解析请求体
// app.use(bodyParser())

// 启动程序，监听端口
app.listen(3030, () => debug(`listening on port 3030`))
