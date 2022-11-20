
const {
  selectFxOnline,
  selectFxOffline,
  selectHshOnline,
  selectHshOffline
} = require('../services/businessAnalysis')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  errorInfo
} = require('../model/ErrorInfo')
const {intiBsAnAc} = require('../utils/index')
const {  koaLogger } = require('../logger/log4js')

async function getFxOnline(ctx) {
  try {
    const info = await selectFxOnline()
    const obj = {}
    if (info) {
      const name = ['用户数（万）', '购买总人数（万）', '购买转化率', '订单数', '客单价（元）', '金额（元）', '复购人数（万）', '复购率']
      const nameKeys = ['yh_cnt', 'gm_cnt', 'gm_avg', 'xs_cnt', 'kd_avg', 'xs_sum', 'fg_cnt', 'fg_avg']
      info.forEach(item => {
        const child = intiBsAnAc(item, name, nameKeys)
        obj[item.order_type] = child
      });
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getFxOffline(ctx) {
  try {
    const info = await selectFxOffline()
    let list = []
    if (info) {
      const name = ['门店总数（个）', '订单量（万）', '单均价（元）']
      const nameKeys = ['md_cnt', 'jy_cnt', 'jy_avg']
      list = intiBsAnAc(info, name, nameKeys)
    } 
    return new SuccessModel(list)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getHshOnline(ctx) {
  try {
    const info = await selectHshOnline()
    const obj = {}
    if (info) {
      const name = ['用户数（万）', '购买总人数（万）', '交易金额（万元）', '交易订单量（万）', '单均价（元）', '复购人数（万）', '复购率']
      const nameKeys = ['yh_cnt', 'gm_cnt', 'jy_sum', 'jy_cnt', 'jy_avg', 'fg_cnt', 'fg_avg']
      info.forEach(item => {
        const child = intiBsAnAc(item, name, nameKeys)
        obj[item.channel] = child
      });
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getHshOffline(ctx) {
  try {
    const info = await selectHshOffline()
    let list = []
    if (info) {
      const name = ['门店总数（个）', '订单量（万）', '单均价（元）']
      const nameKeys = ['md_cnt', 'jy_cnt', 'jy_avg']
      list = intiBsAnAc(info, name, nameKeys)
    }
    return new SuccessModel(list)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

module.exports = {
  getFxOnline,
  getFxOffline,
  getHshOnline,
  getHshOffline
}