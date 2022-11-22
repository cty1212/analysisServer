const seq = require('../db/seq')
const { QueryTypes } = require('../db/seq')

async function selectSiYu() {
  const info = await seq.query(`
    select
    mon,-- 筛选维度
    round(cd_cnt/10000, 2) cd_cnt,-- 人群触达人数（万）
    round(hd_cnt/10000, 2) hd_cnt,-- 参加活动人数（万）
    concat(round(yh_avg * 100, 2), '%') yh_avg,-- 用户转化率
    round(xs_sum/10000, 2) xs_sum-- 销售额（万元）
    from h5_siyu;
  `, { type: QueryTypes.SELECT, raw: true })

  return info
}

async function selectQiWei() {
  const info = await seq.query(`
    select
    mon,-- 筛选维度
    round(qw_sum/10000, 2) qw_sum,-- 企微群数量（万）
    round(qw_cnt/10000, 2) qw_cnt,-- 企微群成员数量（万）
    round(jy_cnt/10000, 2) jy_cnt,-- 订单数（万）
    round(jy_sum/10000, 2) jy_sum-- 订单金额（万元）
    from h5_qiwei;
  `, { type: QueryTypes.SELECT, raw: true })

  return info
}

module.exports = {
  selectSiYu,
  selectQiWei
}
