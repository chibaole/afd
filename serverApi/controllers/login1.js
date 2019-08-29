
const CONF = require('../config')
const https = require('https')

module.exports = async (ctx) => {
    console.log(ctx.query.code)
// console.log(ctx)
//   params
//   const code = ctx.request.body.code

    try {
        let grant_type = 'authorization_code'
        let appid = CONF.appId
        let secret = CONF.appSecret
        let code = ctx.query.code

        let opts = {
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=' + grant_type
        }
        console.log(opts)

        let r1 = await getOpenid(opts)
        r1 = JSON.parse(r1)

        openid = r1.openid
        console.log(openid)

        ctx.state.data = {
            openid,
            msg: 'success'
        }
    } catch (e) {
        ctx.response.status = 403
    }
}

function getOpenid (opts) {
    return new Promise((resolve, reject) => {
        https.get(opts.url, (res) => {
      //
            let urlData = {}
            res.on('data', (d) => {
                process.stdout.write(d)
                urlData = d

                resolve(urlData)
            })
        }).on('error', (e) => {
            reject(e)
        })
    })
}
