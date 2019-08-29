/*
 * @Author: 刘攀
 * @Date: 2018-09-26 13:56:37
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-29 13:48:54
 * @Description: file content
 */
const CONF = {
  // 微信公众号信息
  appId: 'wxadf7382f1ae53fb6',
  appSecret: 'fb2d45c8f3ded61b25cd7d4934faece3',
  /**
   * MySQL 配置，
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'wechat',
    pass: '313098lp',
    char: 'utf8mb4'
  },
  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'abcdefgh'
}

module.exports = CONF
