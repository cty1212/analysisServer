const dotenv = require('dotenv')
const { isProd } = require('../utils/env')

dotenv.config()

// 开发测试一套单点登录配置
let oAuthConfig = {
  // accessToken请求地址
  accessTokenUri: process.env.qa_accessTokenUri,
  // 用户信息请求地址
  userInfoUri: process.env.qa_userInfoUri,
  grant_type: 'authorization_code',
  // 客户端相关标识，请从认证服务器申请
  clientId: process.env.qa_CLIENT_ID,
  client_secret: process.env.qa_CLIENT_SECRET
}

if (isProd) {
  oAuthConfig = {}
}

module.exports = {
  oAuthConfig
}
