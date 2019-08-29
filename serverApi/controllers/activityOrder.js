// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('拼团订单详情的请求')

    let uuid = ctx.params.uuid
    console.log(uuid)
    let res = {
        group_activity_order: {
      // 唯一标识
            uuid: '',
      // 拼团发起单
            group_activity_initial: {
                uuid: '',
        // 发起单状态
        // init 等待发起
        // grouping 拼团中
        // success 拼团成功
        // failed 拼团失败
                status: 'init'
            },
      // 拼团活动
            group_activity: {
                uuid: '',
                title: '标题',
                title_image_url: '题图',
                group_type: '三人团',
                current_price: 5,
                original_price: 85,
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
      // 配送信息
            delivery: {
                company: '顺丰快递',
                delivery_no: '运单标号'
            },
      // 收货信息
            address: {
                people: '土土 11111111',
                detail: '上海市 静安区 光复路'
            }
        }

    }

    ctx.state = {
        data: res,
        result: true,
        message: '操作成功'
    }
}
