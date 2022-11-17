const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const Moment = require('moment')
const userAnalysisRouter = require('./routes/userAnalysis')
const { accessLogger, koaLogger } = require('./logger/log4js')


const onerrorConf = {
  redirect: '/error' //重定义到error
}

// error handler
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(accessLogger())
app.use(json())
app.use(logger((str) => {
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str)
  // koaLogger.error(str)
}))
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
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

// error-handling
app.on('error', (err, ctx) => {
  koaLogger.error(err)
})
// app.on('error-info', (err, ctx) => {
// 	log4js.logInfo(err)
// })

module.exports = app
