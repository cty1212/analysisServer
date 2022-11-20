
const {
  selectSiYu,
  selectQiWei
} = require('../services/activityAnalysis')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  errorInfo
} = require('../model/ErrorInfo')
const {intiBsAnAc} = require('../utils/index')
const {  koaLogger } = require('../logger/log4js')

async function getSiYu(ctx) {
  try {
    const info = await selectSiYu()
    const obj = {}
    if (info) {
      const name = ['人群触达人数（万）', '参加活动人数（万）', '用户转化率', '销售额（万元）']
      const nameKeys = ['cd_cnt', 'hd_cnt', 'yh_avg', 'xs_sum']
      info.forEach(item => {
        const child = intiBsAnAc(item, name, nameKeys)
        obj[item.mon] = child
      });
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getQiWei(ctx) {
  try {
    const info = await selectQiWei()
    const obj = {}
    if (info) {
      const name = ['企微群数量（万）', '企微群成员数量（万）', '订单数（万）', '订单金额（万元）']
      const nameKeys = ['qw_sum', 'qw_cnt', 'jy_cnt', 'jy_sum']
      info.forEach(item => {
        const child = intiBsAnAc(item, name, nameKeys)
        obj[item.mon] = child
      });
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

module.exports = {
  getSiYu,
  getQiWei
}