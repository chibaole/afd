// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('拼团订单详情的请求')

    let res = {

        group_activity_initial: {
      // 唯一标识
            uuid: '',
      // 发起单状态
      // init 等待发起
      // grouping 拼团中
      // success 拼团成功
      // failed 拼团失败
            status: 'success',
            status_display: '等待发起',
            group_activity: {
                title: '标题',
                title_image_url: '题图',
                group_type: '三人团',
                current_price: 5,
                original_price: 85,
        // 详情，符文本内容
                detail: '<h1>标题</h1><p>正文</p>',
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
                }
            },
      // 拼团订单
            group_activity_order: {
                uuid: ''
            },
      // 开始拼团时间
            initial_time_timestamp: 102010000000,
      // 拼团结束时间戳
            end_time_timestamp: 10202010000,
      // 剩余用户数
            users_left: 2,
            users: [
                {
                    uuid: '',
          // 暱称
                    nick_name: '',
          // 头像
                    avatar_url: '',
          // 是否是团长
                    is_initiator: true
                }
            ]
        }

    }

    ctx.state = {
        data: res,
        result: true,
        message: '操作成功'
    }
}
