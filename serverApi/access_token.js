/*
 * @Author: 刘攀
 * @Date: 2019-08-30 10:10:47
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-30 13:05:17
 * @Description: file content
 */
import Axios from "axios";
const fs = require('fs-extra')
class API {
    constructor(appid, appsecret) {
      this.appid = appid
      this.appsecret = appsecret
      this.prefix = 'https://api.weixin.qq.com/cgi-bin/'
      // 保存access_token
      this.saveToken = async function (token) {
        await fs.writeFile('access_token.txt', JSON.stringify(token))
      }
    }
  
    // 从https接口获取access_token
    async getAccessToken() {
      let token = {}
      const response = await axios.get(`${this.prefix}token?grant_type=client_credential&appid=${this.appid}&secret=${this.appsecret}`)
  
      // 过期时间，因网络延迟等，将实际过期时间提前20秒，以防止临界点
      const expireTime = Date.now() + (data.data.expires_in - 20) * 1000
      token.accessToken = response.data.access_token
      token.expireTime = expireTime
      await this.saveToken(token)
      return token
    }
  }
  
  const api = new API(appid, appsecret)
  api.getAccessToken()