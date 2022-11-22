const router = require('koa-router')()
const {
  getFxOnline,
  getFxOffline,
  getHshOnline,
  getHshOffline
} = require('../controller/businessAnalysis')

router.prefix('/api/businessAnalysis')

router.get('/fxOnline', async (ctx) => {
  ctx.body = await getFxOnline(ctx)
})

router.get('/fxOffline', async (ctx) => {
  ctx.body = await getFxOffline(ctx)
})

router.get('/hshOnline', async (ctx) => {
  ctx.body = await getHshOnline(ctx)
})

router.get('/hshOffline', async (ctx) => {
  ctx.body = await getHshOffline(ctx)
})

module.exports = router
