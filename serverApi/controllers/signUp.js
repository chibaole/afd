/*
 * @Author: 刘攀
 * @Date: 2018-09-26 13:56:37
 * @LastEditors: 刘攀
 * @LastEditTime: 2018-09-26 13:56:37
 * @Description: file content
 */
// // // 首次进入注册接口
// // module.exports = async (ctx, next) => {
// //   // 通过 Koa 中间件进行登录之后
// //   // 登录信息会被存储到 ctx.state.$wxInfo
// //   // 具体查看ctx.state：
// //   console.log('下面是前端传来的数据')
// //   console.log(ctx.request.body)
// //
// // }
// //
// //

// const {mysql} = require('../qcloud')

// const CONF = require('../config')
// const https = require('https')

// module.exports = async (ctx) => {
//     try {
//         let grant_type = 'authorization_code'
//         let appid = CONF.appId
//         let secret = CONF.appSecret
//         let code = ctx.request.body.code

//         let opts = {
//             url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=' + grant_type
//         }

//         let r1 = await getOpenid(opts)
//         r1 = JSON.parse(r1)

//         openid = r1.openid

//         ctx.state.data = {
//             openid,
//             msg: 'success'
//         }
//         console.log(ctx.state.$wxInfo.userinfo)
//     } catch (e) {
//         ctx.response.status = 403
//     }
// }

// function getOpenid (opts) {
//     return new Promise((resolve, reject) => {
//         https.get(opts.url, (res) => {
//       //
//             let urlData = {}
//             res.on('data', (d) => {
//                 process.stdout.write(d)
//                 urlData = d

//                 resolve(urlData)
//             })
//         }).on('error', (e) => {
//             reject(e)
//         })
//     })
// }

// //
// // // 登录信息会被存储到 ctx.state.$wxInfo
// // // 具体查看ctx.state：
// // console.log(ctx.state)
// // if (ctx.state.$wxInfo.loginState) {
// //   ctx.state.data = ctx.state.$wxInfo.userinfo
// //   ctx.state.data['time'] = Math.floor(Date.now() / 1000)
// // }
