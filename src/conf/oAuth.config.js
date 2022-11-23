const dotenv = require('dotenv')
const { isProd } = require('../utils/env')

dotenv.config()

let oAuthConfig = {
  // accessToken请求地址
  accessTokenUri: 'https://linksso-test.yuexiu.com/sso/oauth2/token',
  // 用户信息请求地址
  userInfoUri: 'https://linksso-test.yuexiu.com/sso/oauth2/userinfo',
  grant_type: 'authorization_code',
  // 客户端相关标识，请从认证服务器申请
  clientId: '9wLvi3Yy7AxwHHbUgRDmD',
  client_secret: '7912a806-718b-4de4-927b-f25244e8d38b'
}

if (isProd) {
  oAuthConfig = {}
}

module.exports = {
  oAuthConfig
}
