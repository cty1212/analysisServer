const Koa = require('koa')

const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const Moment = require('moment')
const jwt = require('koa-jwt')
const userAnalysisRouter = require('./routes/userAnalysis')
const businessAnalysisRouter = require('./routes/businessAnalysis')
const activityAnalysisRouter = require('./routes/activityAnalysis')
const userRouter = require('./routes/user')
const { accessLogger, koaLogger } = require('./logger/log4js')

const onerrorConf = {
  redirect: '/error' // 重定义到error
}

// error handler
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(accessLogger())
app.use(json())
app.use(logger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str)
  // koaLogger.error(str)
}))
app.use((ctx, next) => next().catch((err) => {
  if (err.status === 401) {
    ctx.status = 401
    ctx.body = {
      errno: 401,
      message: 'Protected resource, use Authorization header to get access\n'
    }
  } else {
    throw err
  }
}))
app.use(jwt({ secret: 'analysisServer' }).unless({ path: [/^\/public|\/api\/user\/userInfo|\/assets/] }))
app.use(require('koa-static')(`${__dirname}/public`))

app.use(views(`${__dirname}/views`, {
  extension: 'nunjucks'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(userAnalysisRouter.routes(), userAnalysisRouter.allowedMethods())
app.use(businessAnalysisRouter.routes(), businessAnalysisRouter.allowedMethods())
app.use(activityAnalysisRouter.routes(), activityAnalysisRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())

// error-handling
app.on('error', (err) => {
  koaLogger.error(err)
})
// app.on('error-info', (err, ctx) => {
// log4js.logInfo(err)
// })

module.exports = app
