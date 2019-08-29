
module.exports = async(ctx) => {
    console.log('发起更多活动 请求')
    let things = [
        {
            title: '热聊：吃了这支冰淇淋，才算一个好夏天',
            pic: 'http://pbmrxkahq.bkt.clouddn.com/activity_pj1.png'
        },
        {
            title: '加入社群，和999位研究院吃货小伙伴...',
            pic: 'http://pbmrxkahq.bkt.clouddn.com/activity_pj2.png'
        }
    ]

    ctx.state = {
        data: things,
        result: true,
        message: '操作成功'
    }
}

