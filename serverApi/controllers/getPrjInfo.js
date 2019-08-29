// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
  // const obj = ctx.request.body

    console.log(ctx.query)
    let pjname = ctx.query.name
    let pjid = ctx.query.id

    let things = [
        {
            title: '热聊：吃了这支冰淇淋，才算一个好夏天',
            pic: '../../static/img/share_pic.jpg'
        },
        {
            title: '加入社群，和999位研究院吃货小伙伴...',
            pic: '../../static/img/share_pic.jpg'
        }
    ]
    ctx.state.data = {
        things: things,
        msg: '返回查询的数据'
    }
}
