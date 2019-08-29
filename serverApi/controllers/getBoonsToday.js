// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {


        let boons = {boons: [
            {
        // 唯一标识
                uuid: '1',
        // 标题
                title: '酸奶众测',
        // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/pj1.png',
        // 描述
                description: '每满50人抽1人',
        // 参加状态，用于控制按钮的显示状态
        // 0 未参加
        // 1 已参加
                participation_status: 0 || 1,
        // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '抽奖' //
                }
            },
            {
        // 唯一标识
                uuid: '2',
        // 标题
                title: '酸奶众测福利2',
        // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/pj2.png',
        // 描述
                description: '酸奶补给大礼包 x 10',
        // 参加状态，用于控制按钮的显示状态
        // 0 未参加
        // 1 已参加
                participation_status: 0 || 1,
        // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '申请' //
                }
            },
            {
        // 唯一标识
                uuid: '3',
        // 标题
                title: '酸奶众测福利3',
        // 头图地址
                title_image_url: 'http://pbmrxkahq.bkt.clouddn.com/pj3.png',
        // 描述
                description: '酸奶补给大礼包 x 10',
        // 参加状态，用于控制按钮的显示状态
        // 0 未参加
        // 1 已参加
                participation_status: 0 || 1,
        // 按钮文字，由服务端来控制按钮显示的文字
                button: {
                    text: '抽奖' //
                }
            }
        ]}
        ctx.state.data = {
             boons,
              result: true,
              message: '操作成功'
        }

}
