// const {isbn, openid} = ctx.request.body

module.exports = async(ctx) => {
    console.log('参加福利 ')
  // console.log(JSON.stringify(ctx.request))
  // let uuid =  ctx.request.body.uuid
    let uuid = ctx.params.uuid

    let auth_code = ctx.params.auth_code
    console.log(uuid, auth_code)

    if (uuid) {
        ctx.state = {
            data: {uuid: false, auth_code: auth_code},
            result: true,
            message: '操作成功'
        }
    }
}
