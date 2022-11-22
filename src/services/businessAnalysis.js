const seq = require('../db/seq')
const { QueryTypes } = require('../db/seq')

// TRUNCATE(yh_cnt/10000, 4)
// CONVERT(yh_cnt/10000, DECIMAL(15,2))
// round
async function selectFxOnline() {
  const info = await seq.query(`
    select 
    mon,-- 当前年度（截止至上个月，如果这个月刚过完，则为截止至这个月）
    order_type,-- 订单类型（零售业务、订奶业务）
    round(yh_cnt/10000, 2) yh_cnt,-- 会员数(用户总数）
    round(gm_cnt/10000, 2) gm_cnt,-- 购买总人数
    concat(round(gm_avg * 100, 2), '%') gm_avg,-- 购买转化率
    xs_cnt,-- 销售订单数
    round(kd_avg, 2) kd_avg,-- 客单价（元）
    round(xs_sum, 2) xs_sum,-- 销售金额
    round(fg_cnt/10000, 2) fg_cnt,-- 复购人数
    concat(round(fg_avg * 100, 2), '%') fg_avg-- 复购率
    from h5_fx_online
  `, { type: QueryTypes.SELECT, raw: true })

  return info
}

async function selectFxOffline() {
  const info = await seq.query(`
    select
    mon,-- 当前数据月份
    md_cnt,-- 门店总数
    round(jy_cnt/10000, 2) jy_cnt,-- 订单量
    jy_sum,-- 订单金额
    round(jy_avg, 2) jy_avg-- 单均价（元）
    from h5_fx_offline;
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}

async function selectHshOnline() {
  const info = await seq.query(`
    select
    mon mon,-- 最新数据月份
    channel,-- 渠道
    round(yh_cnt/10000, 2) yh_cnt,-- 用户数（万）
    round(gm_cnt/10000, 2) gm_cnt,-- 购买用户数（万）
    round(jy_sum/10000, 2) jy_sum,-- 交易金额（万元）
    round(jy_cnt/10000, 2) jy_cnt,-- 交易订单量（万）
    round(jy_cnt, 2) jy_avg, -- 单均价（元）
    round(fg_cnt/10000, 2) fg_cnt, -- 复购人数
    concat(round(fg_avg * 100, 2), '%') fg_avg-- 复购率
    from h5_hsh_online;
  `, { type: QueryTypes.SELECT, raw: true })

  return info
}

async function selectHshOffline() {
  const info = await seq.query(`
    select
    mon,-- 当前数据月份
    md_cnt,-- 门店总数
    round(jy_cnt/10000, 2) jy_cnt,-- 订单量（万）
    jy_sum,-- 订单金额
    round(jy_avg, 2) jy_avg-- 单均价（元）
    from h5_hsh_offline;
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}

module.exports = {
  selectFxOnline,
  selectFxOffline,
  selectHshOnline,
  selectHshOffline
}
