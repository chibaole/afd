/*
 * @Author: 刘攀
 * @Date: 2019-08-29 23:26:49
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-08-30 14:35:36
 * @Description: file content
 */
const crypto = require('crypto')
const getRawBody = require('raw-body')
const xml2js = require('xml2js')
const ejs = require('ejs')

// 签名生成

function getSignature(timestamp, nonce, token){
    let hash = crypto.createHash('sha1')
    const arr = [token,timestamp,nonce].sort()
    hash.update(arr.join(''))
    // console.log( hash.digest('hex'))
    return hash.digest('hex')
}

// xml 转json 对话消息数据
function parseXML(xml) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xml, { trim: true, explicitArray: false, ignoreAttrs: true }, function (err, result) {
        if (err) {
          return reject(err)
        }
        resolve(result.xml)
      })
    })
  }
  const tpl = `
<xml>
  <ToUserName><![CDATA[<%-toUsername%>]]></ToUserName>
  <FromUserName><![CDATA[<%-fromUsername%>]]></FromUserName>
  <CreateTime><%=createTime%></CreateTime>
  <MsgType><![CDATA[<%=msgType%>]]></MsgType>
  <% if (msgType === 'news') { %>
  <ArticleCount><%=content.length%></ArticleCount>
  <Articles>
  <% content.forEach(function(item){ %>
  <item>
  <Title><![CDATA[<%-item.title%>]]></Title>
  <Description><![CDATA[<%-item.description%>]]></Description>
  <PicUrl><![CDATA[<%-item.picUrl || item.picurl || item.pic || item.thumb_url %>]]></PicUrl>
  <Url><![CDATA[<%-item.url%>]]></Url>
  </item>
  <% }) %>
  </Articles>
  <% } else if (msgType === 'music') { %>
  <Music>
  <Title><![CDATA[<%-content.title%>]]></Title>
  <Description><![CDATA[<%-content.description%>]]></Description>
  <MusicUrl><![CDATA[<%-content.musicUrl || content.url %>]]></MusicUrl>
  <HQMusicUrl><![CDATA[<%-content.hqMusicUrl || content.hqUrl %>]]></HQMusicUrl>
  </Music>
  <% } else if (msgType === 'voice') { %>
  <Voice>
  <MediaId><![CDATA[<%-content.mediaId%>]]></MediaId>
  </Voice>
  <% } else if (msgType === 'image') { %>
  <Image>
  <MediaId><![CDATA[<%-content.mediaId%>]]></MediaId>
  </Image>
  <% } else if (msgType === 'video') { %>
  <Video>
  <MediaId><![CDATA[<%-content.mediaId%>]]></MediaId>
  <ThumbMediaId><![CDATA[<%-content.thumbMediaId%>]]></ThumbMediaId>
  <Title><![CDATA[<%-content.title%>]]></Title>
  <Description><![CDATA[<%-content.description%>]]></Description>
  </Video>
  <% } else { %>
  <Content><![CDATA[<%-content%>]]></Content>
  <% } %>
</xml>`

// ejs 编译

const compiled = ejs.compile(tpl)

// 消息回复


function reply(content, fromUsername, toUsername) {
    var info = {}
    var type = 'text'
    info.content = content || ''
    if (Array.isArray(content)) {
      type = 'news'
    } else if (typeof content === 'object') {
      if (content.hasOwnProperty('type')) {
        type = content.type
        info.content = content.content
      } else {
        type = 'music'
      }
    }
    info.msgType = type
    info.createTime = new Date().getTime()
    info.toUsername = toUsername
    info.fromUsername = fromUsername
    return compiled(info)
  }


  function wechat(config, handle) {
    return async (ctx, next) => {
      const { signature, timestamp, nonce, echostr } = ctx.query
      const TOKEN = config.wechat.token
      if (ctx.method === 'GET') {
        if (signature === getSignature(timestamp, nonce, TOKEN)) {
          return ctx.body = echostr
        }
        ctx.status = 401
        ctx.body = 'Invalid signature'
      } else if (ctx.method === 'POST') {
        if (signature !== getSignature(timestamp, nonce, TOKEN)) {
          ctx.status = 401
          return ctx.body = 'Invalid signature'
        }
        // 取原始数据
        const xml = await getRawBody(ctx.req, {
          length: ctx.request.length,
          limit: '1mb',
          encoding: ctx.request.charset || 'utf-8'
        })
        const formatted = await parseXML(xml)
        // 业务逻辑处理handle
        const content = await handle(formatted, ctx)
        if (!content) {
          return ctx.body = 'success'
        }
        const replyMessageXml = reply(content, formatted.ToUserName, formatted.FromUserName)
        ctx.type = 'application/xml'
        return ctx.body = replyMessageXml
      }
    }
  }


module.exports = wechat