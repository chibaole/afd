// 保存用户信息接口
module.exports = async (ctx) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看ctx.state：

    console.log('保存用户信息的函数saveUserinfo')

    const {auth_code, encrypted_data, iv, userinfo} = ctx.request.body
    console.log(encrypted_data)
    console.log(iv)
    console.log(userinfo)
    console.log(auth_code)

    if (auth_code) {
        ctx.state = {
            data: {userinfo: userinfo.nickName},
            result: true,
            message: '操作成功'
        }
    } else {
        ctx.state = {

            result: false,
            err_code: '9001', // 错误代码，用于识别具体的错误代码
            err_msg: '错误消息' // 用于提示用户的错误消息，弹出显示该字段内容

        }
    }
}
