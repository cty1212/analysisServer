const router = require('koa-router')()
const { default: axios } = require('axios')
const jsonwebtoken = require('jsonwebtoken')
// const axios = require('axios')
const { oAuthConfig } = require('../conf/oAuth.config')
const { koaLogger } = require('../logger/log4js')

const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  errorLoginInfo
} = require('../model/ErrorInfo')

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

router.prefix('/api/')

router.post('/user/userInfo', async (ctx) => {
  const { code } = ctx.request.body
  let tokenUrl = oAuthConfig.accessTokenUri
  tokenUrl = `${tokenUrl}?grant_type=${oAuthConfig.grant_type}`
  tokenUrl = `${tokenUrl}&code=${code}`
  // tokenUrl = tokenUrl + `&` + `redirect_uri=` + oAuthConfig.redirect_uri
  tokenUrl = `${tokenUrl}&client_id=${oAuthConfig.clientId}`
  tokenUrl = `${tokenUrl}&client_secret=${oAuthConfig.client_secret}`
  try {
    const { data: tokenInfo } = await axios({
      method: 'post',
      url: tokenUrl
    })
    const { data: userInfo } = await axios({
      method: 'get',
      url: `${oAuthConfig.userInfoUri}?access_token=${tokenInfo.access_token}`
    })
    // console.log(userInfo)
    const token = jsonwebtoken.sign(userInfo, 'analysisServer', { expiresIn: '8h' })
    ctx.body = new SuccessModel({
      token,
      tokenInfo,
      userInfo
    })
  } catch (error) {
    // {
    //   message: error.message,
    //   url: error.config.url
    // }
    koaLogger.error(error.message)
    ctx.status = 500
    ctx.body = new ErrorModel(errorLoginInfo)
  }
})

// router.get('/test', async (ctx) => {
//   const token = ctx.request.header.authorization
//   const decoded = jsonwebtoken.verify(token.substr(7), 'analysisServer')
//   console.log(decoded)
//   ctx.body = {
//     test: 1
//   }
// })

module.exports = router
