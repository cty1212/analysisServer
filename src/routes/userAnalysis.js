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

router.get('/getTopList',  async (ctx, next) => {
  ctx.body = await getTopList(ctx)
})

router.get('/getVipLevel',  async (ctx, next) => {
  ctx.body = await getVipLevel(ctx)
})

router.get('/getRegistered',  async (ctx, next) => {
  ctx.body = await getRegistered(ctx)
})

router.get('/getRegisteredUsers',  async (ctx, next) => {
  ctx.body = await getRegisteredUsers(ctx)
})

router.get('/getRegisteredSource',  async (ctx, next) => {
  ctx.body = await getRegisteredSource(ctx)
})

router.get('/getUserLife',  async (ctx, next) => {
  ctx.body = await getUserLife(ctx)
})

router.get('/getBuyAgain',  async (ctx, next) => {
  ctx.body = await getBuyAgain(ctx)
})



module.exports = router

