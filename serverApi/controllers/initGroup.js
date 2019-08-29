// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('发起拼团请求')

    let uuid = ctx.params.uuid

    let auth_code = ctx.params.auth_code
    console.log(auth_code)
    console.log(uuid)
    let res = {
        group_activity_order: {
      // 参加成功时，返回订单 uuid，请求订单数据后，前往订单详情页面
            uuid: '发起拼团订单生成'
        }
    }
    if (uuid) {
        ctx.state = {
            data: res,
            result: true,
            message: '操作成功'
        }
    }
}
