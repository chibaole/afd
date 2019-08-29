// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('拼团活动详情请求')
    let uuid = ctx.params.uuid

    console.log(ctx.params) // { aid: '123' }  //获取动态路由的数据

    let groupDetail = {
        group_activity: {
      // 唯一标识
            uuid: '',
      // 标题
            title: '5元1盒 | 凤梨酥6枚装',
      // 头图地址
            title_image_url: '',
      // 原价
            original_price: 85,
      // 现价
            current_price: 5,
      // 活动结束时间，时间戳，精确到毫秒
            end_time: 1535974437000,
      // 团购类型
            group_type: '三人团',
      // 团购描述
            description: '[老带新团] 老用户可开团，新用户可参团/开团',
      // 详情，符文本内容
            detail: '<h1>标题</h1><p>正文</p>',
      // 库存:
            stock: 200,
      // 商品
            product: {
        // 名称
                name: '凤梨酥',
        // 原价
                original_price: 85,
        // 规格
                specification: '',
        // 数量
                num: 1,
        // 详情
                detail: ''
            },
      // 按钮文字，由服务端来控制按钮显示的文字
            button: {
                text: '发起拼团'
            }
        }
    }

    if (uuid) {
        ctx.state = {
            data: groupDetail,
            result: true,
            message: '操作成功'
        }
    }
}
