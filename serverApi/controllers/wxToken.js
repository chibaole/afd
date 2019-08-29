/*
 * @Author: 刘攀
 * @Date: 2019-08-29 13:58:13
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 14:13:15
 * @Description: file content
 */
const sha1 = require('sha1')
const config = require('../config')

module.exports = async (ctx) => {
  console.log(ctx)
  const signature = ctx.query.signature
  const timestamp = ctx.query.timestamp
  const nonce = ctx.query.nonce
  const token = config.token

  // 字典排序
  const str = [token, timestamp, nonce].sort().join('')
  const result = sha1(str)
  if (result === signature) {
    ctx.body = ctx.query.echostr
    console.log('校验成功')
  } else {
    console.log('校验失败')

    ctx.body = {
      code: -1,
      msg: 'fail'
    }
  }
}
