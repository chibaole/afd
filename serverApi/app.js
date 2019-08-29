/*
 * @Author: 刘攀
 * @Date: 2019-08-29 15:44:13
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 17:36:31
 * @Description: file content
 */
const Koa = require('koa')
const app = new Koa()
const crypto = require('crypto')
const config = require('./config')
app.use(async ctx => {
  const {
    signature,
    timestamp,
    nonce,
    echoster
  } = ctx.query
  const token = config.wechat.token
  let hash = crypto.createHash('sha1')
  const arr = [token, timestamp, nonce].sort()
  hash.update(arr.join(''))
  const shasum = hash.digest('hex')
console.log(signature)
console.log(shasum)
  if (shasum === signature) {
    return ctx.body = echoster
  }
  ctx.status = 401
  ctx.body = 'invalid signature'

})
app.listen(8081)