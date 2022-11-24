const seq = require('../db/seq')
const { QueryTypes } = require('../db/seq')

async function selectTop() {
  const info = await seq.query(`
    select 
    data_time,-- 当前数据日期
    reg_cust_qty_td num,-- 会员数
    concat(round((reg_cust_qty_mtd - reg_cust_qty_mtd_tq)/reg_cust_qty_mtd_tq * 100, 2), '%') tb,-- 同比
    concat(round((reg_cust_qty_mtd - reg_cust_qty_mtd_sq)/reg_cust_qty_mtd_sq * 100, 2), '%') hb -- 环比
    from cdp_cust_mem_overview_stat_analyse order by data_time desc limit 1;
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}
// gm_avg * 100, 2), '%')
async function selectTopOther() {
  const info = await seq.query(`
    select 
    data_time,-- 当前数据日期
    sum(reg_cust_qty_td) zc_sum,-- 注册人数
    sum(buy_cust_qty_td) gm_sum,-- 购买人数
    sum(once_buy_cust_qty_td) dg_sum,-- 单次购次人数
    sum(rebuy_cust_qty_td) fg_sum,-- 复购人数
    concat(round(sum(reg_cust_qty_mtd - reg_cust_qty_mtd_tq) / sum(reg_cust_qty_mtd_tq) * 100, 2), '%') zc_tb,-- 注册同比
    concat(round(sum(reg_cust_qty_mtd -  reg_cust_qty_mtd_sq) / sum(reg_cust_qty_mtd_sq) * 100, 2), '%') zc_hb,-- 注册环比
    concat(round(sum(buy_cust_qty_mtd - buy_cust_qty_mtd_tq) / sum(buy_cust_qty_mtd_tq) * 100, 2), '%') gm_tb,-- 购买同比
    concat(round(sum(buy_cust_qty_mtd -  buy_cust_qty_mtd_sq) / sum(buy_cust_qty_mtd_sq) * 100, 2), '%') gm_hb,-- 购买环比
    concat(round(sum(once_buy_cust_qty_mtd - once_buy_cust_qty_mtd_tq) / sum(once_buy_cust_qty_mtd_tq) * 100, 2), '%') dg_tb,-- 单次购买同比
    concat(round(sum(once_buy_cust_qty_mtd -  once_buy_cust_qty_mtd_sq) / sum(once_buy_cust_qty_mtd_sq) * 100, 2), '%') dg_hb, -- 单次购买环比
    concat(round(sum(rebuy_cust_qty_mtd - rebuy_cust_qty_mtd_tq) / sum(rebuy_cust_qty_mtd_tq) * 100, 2), '%') fg_tb,-- 复购同比
    concat(round(sum(rebuy_cust_qty_mtd -  rebuy_cust_qty_mtd_sq) / sum(rebuy_cust_qty_mtd_sq) * 100, 2), '%') fg_hb-- 复购环比
    from cdp_cust_overview_stat_analyse group by data_time order by data_time desc limit 1;-- 注册用户量，购买用户量，单购客户量，复购客户量
    -- 人数上面要用分割符，每千位分一次
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}

async function selectVipLevel() {
  const info = await seq.query(`
    select 
    data_time,
    v1_cust_qty_td xyhy,-- 喜悦会员
    v4_cust_qty_td cyhy,-- 超悦会员
    v3_cust_qty_td zyhy,-- 卓悦会员
    v2_cust_qty_td yyhy-- 优悦会员
    from cdp_cust_mem_overview_stat_analyse
    order by data_time desc limit 1;
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}

async function selectRegistered() {
  const info = await seq.query(`
    select
    data_time,
    hsh_cust_qty_td hsh,-- 皇上皇会员数量
    fxry_cust_qty_td fxsh,-- 风行乳业会员数量
    yuexiuhui_cust_qty_td yxdc,-- 越秀地产会员数量
    yuexianghui_cust_qty_td yxwy,-- 越秀物业会员数量
    yuexianghui2_cust_qty_td yxjt, -- 越秀集团会员数量
    fangbao_cust_qty_td yxst,-- 越秀商投会员数量
    xinyu_cust_qty_td zydb-- 置业担保会员数量
    from cdp_cust_mem_overview_stat_analyse 
    order by data_time desc limit 1;
  `, { type: QueryTypes.SELECT, raw: true, plain: true })

  return info
}

async function selectSex() {
  const info = await seq.query(`
    select 
    data_time,-- 数据日期
    max(male_cust_qty_td) nan,-- 男性用户数量
    max(female_cust_qty_td) nv,-- 女性用户数量
    max(other_gender_cust_qty_td) other-- 其它性别用户数量
    from cdp_cust_overview_stat_analyse
    group by data_time order by data_time desc limit 1;
    `, { type: QueryTypes.SELECT, raw: true, plain: true })
  return info
}

async function selectPlate() {
  const info = await seq.query(`
    select 
    data_time,-- 数据日期
    reg_section,-- 注册板块
    sum(reg_cust_qty_td) reg_cust_qty_td-- 注册用户数量
    from cdp_cust_overview_stat_analyse
    where data_time=(select data_time from cdp_cust_overview_stat_analyse order by data_time desc limit 1)
    group by data_time,reg_section;
    `, { type: QueryTypes.SELECT, raw: true })
  return info
}

async function selectAge() {
  const info = await seq.query(`
    select 
    data_time,-- 数据日期
    sum(61_cust_qty_td) age61all,-- 61岁及以上用户数量
    sum(51to60_cust_qty_td) age5160,-- 51-60岁用户数量
    sum(41to50_cust_qty_td) age4150,-- 41-50岁用户数量
    sum(31to40_cust_qty_td) age3140,-- 31-40岁用户数量
    sum(21to30_cust_qty_td) age2130,-- 21-30岁用户数量
    sum(20_cust_qty_td) age20,-- 20岁及以下用户数量
    sum(unknown_cust_qty_td) unknownAge-- 未知年龄用户数量
    from cdp_cust_overview_stat_analyse
    group by data_time order by data_time desc limit 1;
    `, { type: QueryTypes.SELECT, raw: true, plain: true })
  return info
}

async function selectRegisteredSource() {
  const info = await seq.query(`
    select 
    data_time,-- 数据日期
    reg_source,-- 注册来源
    reg_cust_qty_td-- 注册用户数量
    from cdp_cust_reg_source_stat_analyse
    where length(reg_source)>0  and
    data_time=(select data_time from cdp_cust_reg_source_stat_analyse order by data_time desc limit 1);
    `, { type: QueryTypes.SELECT, raw: true })
  return info
}

async function selectUserLife() {
  const info = await seq.query(`
    select
    data_time,
    company,
    sum(qz_cnt)  qz_cnt, -- 潜在用户数量
    sum(xy_cnt)  xy_cnt, -- 新用户数量
    sum(hy_cnt)  hy_cnt, -- 活跃用户数量
    sum(yj_cnt)  yj_cnt, -- 流失预警用户数量
    sum(ls_cnt)  ls_cnt,  -- 流失用户数量
    sum(cm_cnt)  cm_cnt -- 沉默用户数量
    from
    (select
    data_time,-- 数据日期
    case 
    when order_type='订奶业务' then '风行（订奶业务）'
    when created_company_id='fx' then '风行（零售业务）'
    else created_company_name end company,-- 公司维度
    potential_cust_qty_td qz_cnt,-- 潜在用户数量
    new_cust_qty_td xy_cnt,-- 新用户数量
    active_cust_qty_td hy_cnt,-- 活跃用户数量
    silent_cust_qty_td cm_cnt,-- 沉默用户数量
    loss_alert_cust_qty_td yj_cnt,-- 流失预警用户数量
    loss_cust_qty_td ls_cnt-- 流失用户数量
    from cdp_cust_life_cycle_stat_analyse
    where data_time=(select data_time from cdp_cust_life_cycle_stat_analyse order by data_time desc limit 1)) t
    group by data_time,company;
    `, { type: QueryTypes.SELECT, raw: true })
  return info
}

async function selectBuyAgain(startDate, endDate) {
  // console.log(startDate)
  // console.log(endDate)
  const info = await seq.query(`
    select
    substr(data_time,1,7) mon,-- 月份
    case when created_company_id='FXRY' and order_type='零售业务' then '风行（零售业务）'
    when created_company_id='FXRY' and order_type='订奶业务' then '风行（订奶业务）'
    else created_company_name end company,-- 业态维度
    (sum(buy_2t_cust_qty + buy_3t_cust_qty + buy_3moret_cust_qty) / sum(buy_cust_qty)) fg_avg-- 复购率
    from cdp_cust_repurchase_stat_analyse
    where time='M' and substr(date_add(data_time,interval 1 day),9,10)='01'
    or data_time=(select data_time from cdp_cust_repurchase_stat_analyse order by data_time desc limit 1)
    and data_time >= ${startDate}
    and data_time <= ${endDate}
    group by substr(data_time,1,7),created_company_name,order_type
    order by mon;
    `, { type: QueryTypes.SELECT, raw: true })
  return info
}

module.exports = {
  selectTop,
  selectTopOther,
  selectVipLevel,
  selectRegistered,
  selectSex,
  selectPlate,
  selectAge,
  selectRegisteredSource,
  selectUserLife,
  selectBuyAgain
}
