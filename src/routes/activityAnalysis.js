const router = require('koa-router')()
const {
  getSiYu,
  getQiWei
} = require('../controller/activityAnalysis')

router.prefix('/api/activityAnalysis')

router.get('/siYu',  async (ctx, next) => {
  ctx.body = await getSiYu(ctx)
})

router.get('/qiWei',  async (ctx, next) => {
  ctx.body = await getQiWei(ctx)
})

module.exports = router

