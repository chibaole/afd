// 登录授权接口
module.exports = async (ctx) => {
    console.log('登录函数wxlogin')

    const {code} = ctx.request.body
    console.log(ctx.request.body)
    console.log(code)

    if (code) {
        ctx.state = {
            data: {auth_code: '123456789'},
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
