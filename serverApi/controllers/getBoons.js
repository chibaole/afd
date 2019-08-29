// const {isbn, openid} = ctx.request.body

module.exports = async (ctx) => {
  console.log('发起福利详情的 请求')

  try {
    // const {page} = ctx.request.query
    let uuid = ctx.query.uuid

    console.log(uuid)

    let boon = {

      boon: {
        uuid: '福利唯一ID',
        short_title: '短标题',
        title: '标题 - 酸奶众测',
        title_image_url: '标题图',
        description: '福利活动描述',
        // 开奖条件
        lottery_conditions: '500人自动开奖',
        // 参加人数
        num_of_participants: 433,
        // 赞助商，不存在时，为 null
        sponsor: {
          // 赞助商描述
          description: '安佳(Anchor), 来自新西兰的全球知名乳制品品牌。',
          // 小程序地址，不存在时，为 null
          app_id: '小程序 app id',
          // path
          app_path: '小程序 地址',
          // 头像
          avatar_url: '赞助商头像'
        },
        // 福利详情，符文本内容
        detial: '<h1>标题</h1><p>正文</p>',
        // 参加状态，用于控制按钮的显示状态
        // true 未参加
        // false 已参加
        participate_status: true ,
        // 是否是研究院
        is_boffin_user: true || fase,
        // 状态
        // rewarded 表示已开奖，published 表示已发布未开奖
        status: 'rewarded' ,
        // 按钮文字，由服务端来控制按钮显示的文字
        button: {
          text: '已开奖'
        },
        // 参加后，将会返回以下信息
        // 抽奖订单，用于跳转到抽奖订单，领取奖品
        boon_order: {
          // 抽奖订单号
          uuid: 'xxxxxxx',
          // 抽奖状态
          // init: '未开奖',
          // win: '中奖'
          // lose: '未中奖'
          // received: '已领奖'
          status: 'win',
          // 订单状态
          // not_shipped: '',
          // shipped: '已发货'
          //
          order_status: 'shipped'
        },
        // 全部中奖用户列表，开奖后显示
        rewarded_users: [
          {
            uuid: '',
            // 暱称
            nick_name: '',
            // 头像
            avatar_url: '',
          }
        ]
      }

    }

    ctx.state = {
      data: boon,
      result: true,
      message: '操作成功'
    }
  }
  catch
    (e) {
    ctx.state = {
      result: false,
      err_code: '9001', // 错误代码，用于识别具体的错误代码
      err_msg: '错误消息' // 用于提示用户的错误消息，弹出显示该字段内容
    }

  }
}
