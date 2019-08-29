// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('参与拼团')

    let res = {
        group_activity_order: {
      // 参加成功时，返回订单 uuid，请求订单数据后，前往订单详情页面
            uuid: '吃饱了'
        }
    }

    ctx.state = {
        data: res,
        result: true,
        message: '操作成功'
    }
}
