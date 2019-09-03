/*
 * @Author: 刘攀
 * @Date: 2019-08-29 15:44:13
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-09-03 12:27:10
 * @Description: file content
 */
'use strict'
// 新的热修复分支
const Koa = require('koa')
const app = new Koa()
const wechat = require('./wechat/wechat')
const config = require('./config')
const API = require('./wechat/classAPI')
const api = new API(config.wechat.appid, config.wechat.appsecret)
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')

const router = require('./routes')




app.use(bodyParser())

app.use(response)

app.use(router.routes())
// app.use(async (ctx) => {
//   // TODO
//   const result = await api.addConditionalMenu(menu2)
//   console.log(result)
//   ctx.body = result
// })


app.use(wechat(config, async (message, ctx) => {
  // TODO
  // examples
  if (message.MsgType === 'event' && message.Event === 'subscribe') {
    return '上海图书管'
  } else if (message.Content === '音乐') {
    return {
      type: 'music',
      content: {
        title: 'Lemon Tree',
        description: 'Lemon Tree',
        musicUrl: 'http://mp3.com/xx.mp3',
      },
    }
  } else if (message.MsgType === 'text') {
    return message.Content
  } else if (message.MsgType === 'image') {
    return {
      type: 'image',
      content: {
        mediaId: message.MediaId
      },
    }
  } else if (message.MsgType === 'voice') {
    return {
      type: 'voice',
      content: {
        mediaId: message.MediaId
      },
    }
  } else {
    return'阿迪法图书管管理后台'
  }
  
}))

// app.listen(8090)
app.listen(8090, () => debug(`listening on port 8090`))


