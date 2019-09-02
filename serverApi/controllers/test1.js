/*
 * @Author: 刘攀
 * @Date: 2019-08-30 17:38:54
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-09-02 10:17:24
 * @Description: file content
 */
const config = require('../config')

 const API = require('../wechat/classAPI')
 const api = new API(config.wechat.appid, config.wechat.appsecret)
// 测试菜单接口
module.exports = async (ctx) => {
    console.log('测试菜单接口')
    console.log(ctx)

    const menu1 = {
        "button": [
          {
            "type": "click",
            "name": "上海图书管",
            "key": "V1001_TODAY_MUSIC"
          }],
        "matchrule": {
          "sex": "1",
        }
      }
      
      const menu2 = {
        "button": [
          {
            "type": "click",
            "name": "长宁图书管",
            "key": "V1001_TODAY_MUSIC"
          }],
        "matchrule": {
          "sex": "2",
        }
      }

      const result = await api.addConditionalMenu(menu2)

        console.log(result)


}
