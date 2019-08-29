// const {isbn, openid} = ctx.request.body

                                          // getGroupActive
module.exports = async(ctx) => {
    console.log('发起获取拼团活动get请求')

    let boon = {
        group_activities:
        [
            {
          // 唯一标识
                uuid: '89485023',
          // 标题
                title: '显示闪购 | 真诚的凤梨酥',
          // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/group_pj1.png',
          // 原价
                original_price: 85,
          // 现价
                current_price: 5,
          // 参加状态
          // 0 未参加
          // 1 已参加
                participation_status: 1 || 0,
          // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '团'
                }
            },
            {
          // 唯一标识
                uuid: '89485023',
          // 标题
                title: '显示闪购 | 真诚的凤梨酥',
          // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/group2.png',
          // 原价
                original_price: 85,
          // 现价
                current_price: 5,
          // 参加状态
          // 0 未参加
          // 1 已参加
                participation_status: 1 || 0,
          // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '团'
                }
            },
            {
          // 唯一标识
                uuid: '89485023',
          // 标题
                title: '显示闪购 | 真诚的凤梨酥',
          // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/group3.png',
          // 原价
                original_price: 85,
          // 现价
                current_price: 5,
          // 参加状态
          // 0 未参加
          // 1 已参加
                participation_status: 1 || 0,
          // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '团'
                }
            },
            {
          // 唯一标识
                uuid: '89485023',
          // 标题
                title: '显示闪购 | 真诚的凤梨酥',
          // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/group4.png',
          // 原价
                original_price: 85,
          // 现价
                current_price: 5,
          // 参加状态
          // 0 未参加
          // 1 已参加
                participation_status: 1 || 0,
          // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '团'
                }
            },
            {
          // 唯一标识
                uuid: '89485023',
          // 标题
                title: '显示闪购 | 真诚的凤梨酥',
          // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/group5.png',
          // 原价
                original_price: 85,
          // 现价
                current_price: 5,
          // 参加状态
          // 0 未参加
          // 1 已参加
                participation_status: 1 || 0,
          // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '团'
                }
            }

        ]
    }

    ctx.state = {
        data: boon,
        result: true,
        message: '操作成功'
    }
}
