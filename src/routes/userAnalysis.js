const router = require('koa-router')()
const {
  getTopList,
  getVipLevel,
  getRegistered,
  getRegisteredUsers,
  getRegisteredSource,
  getUserLife,
  getBuyAgain
} = require('../controller/userAnalysis')

router.prefix('/api/userAnalysis')

router.get('/topList', async (ctx) => {
  ctx.body = await getTopList(ctx)
})

router.get('/vipLevel', async (ctx) => {
  ctx.body = await getVipLevel(ctx)
})

router.get('/registered', async (ctx) => {
  ctx.body = await getRegistered(ctx)
})

router.get('/registeredUsers', async (ctx) => {
  ctx.body = await getRegisteredUsers(ctx)
})

router.get('/registeredSource', async (ctx) => {
  ctx.body = await getRegisteredSource(ctx)
})

router.get('/userLife', async (ctx) => {
  ctx.body = await getUserLife(ctx)
})

router.get('/buyAgain', async (ctx) => {
  ctx.body = await getBuyAgain(ctx)
})

module.exports = router
