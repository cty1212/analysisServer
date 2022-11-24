const Moment = require('moment')
const {
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
} = require('../services/userAnalysis')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  errorInfo
} = require('../model/ErrorInfo')
const { koaLogger } = require('../logger/log4js')
const { toThousand, intiPieData } = require('../utils/index')

async function getTopList() {
  try {
    const info = await selectTop()
    const infoOther = await selectTopOther()
    const arr = []
    if (info) {
      const hyrs = {
        title: '会员人数',
        num: toThousand(info.num),
        tb: info.tb,
        hb: info.hb
      }
      arr.push(hyrs)
    }
    if (infoOther) {
      const zcyhl = {
        title: '注册用户量',
        num: toThousand(infoOther.zc_sum),
        tb: infoOther.zc_tb,
        hb: infoOther.zc_hb
      }
      const gmyhl = {
        title: '购买用户量',
        num: toThousand(infoOther.gm_sum),
        tb: infoOther.gm_tb,
        hb: infoOther.gm_hb
      }
      const sgyhl = {
        title: '收购用户量',
        num: toThousand(infoOther.dg_sum),
        tb: infoOther.dg_tb,
        hb: infoOther.dg_hb
      }
      const fgyhl = {
        title: '复购用户量',
        num: toThousand(infoOther.fg_sum),
        tb: infoOther.fg_tb,
        hb: infoOther.fg_hb
      }
      arr.push(zcyhl, gmyhl, sgyhl, fgyhl)
    }
    return new SuccessModel(arr)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getVipLevel() {
  try {
    const info = await selectVipLevel()
    let vipArr = []
    if (info) {
      const name = ['喜悦会员', '超悦会员', '卓悦会员', '优悦会员']
      const nameKeys = ['xyhy', 'cyhy', 'zyhy', 'yyhy']
      vipArr = intiPieData(info, name, nameKeys)
    }
    return new SuccessModel(vipArr)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegistered() {
  try {
    const info = await selectRegistered()
    let registered = []
    if (info) {
      const name = ['皇上皇', '风行乳业', '越秀地产', '越秀物业', '越秀集团', '越秀商投', '置业担保']
      const nameKeys = ['hsh', 'fxsh', 'yxdc', 'yxwy', 'yxjt', 'yxst', 'zydb']
      registered = intiPieData(info, name, nameKeys)
    }
    return new SuccessModel(registered)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegisteredUsers() {
  try {
    const sex = await selectSex()
    const plate = await selectPlate()
    const age = await selectAge()
    let sexList = []
    let plateList = []
    let ageObj = {}
    if (sex) {
      const name = ['男', '女', '其他']
      const nameKeys = ['nan', 'nv', 'other']
      sexList = intiPieData(sex, name, nameKeys)
    }
    if (plate) {
      plateList = plate.map((item) => ({
        value: item.reg_cust_qty_td,
        name: item.reg_section
      }))
    }
    if (age) {
      const ageName = ['61岁及以上', '51-60岁', '41-50岁', '31-40岁', '21-30岁', '20岁及以下', '未知年龄'].reverse()
      const ageNameKeys = ['age61all', 'age5160', 'age4150', 'age3140', 'age2130', 'age20', 'unknownAge'].reverse()
      ageObj = {
        yData: ageName,
        seriesData: ageNameKeys.map((item) => age[item])
      }
    }
    return new SuccessModel({ sexList, ageObj, plateList })
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegisteredSource() {
  try {
    const info = await selectRegisteredSource()
    const obj = {
      yData: [],
      seriesData: []
    }
    if (info) {
      info.forEach((item) => {
        obj.yData.push(item.reg_source)
        obj.seriesData.push(item.reg_cust_qty_td)
      })
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getUserLife() {
  try {
    const info = await selectUserLife()
    const obj = {
      indicator: [],
      legend: [],
      series: []
    }
    if (info) {
      const indicator = ['潜在客户', '新客户', '活跃客户', '流失预警客户', '流失客户', '沉默用户数量'].map((item) => ({ name: item }))
      const legend = info.map((item) => item.company)
      obj.indicator = indicator
      obj.legend = legend
      obj.series = info.map((item) => ({
        value: [item.qz_cnt, item.xy_cnt, item.hy_cnt, item.yj_cnt, item.ls_cnt, item.cm_cnt],
        name: item.company
      }))
    }
    return new SuccessModel(obj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getBuyAgain(ctx) {
  try {
    // console.log(ctx.request.query)
    const months = ctx.request.query.months?.split(',')
    const startDate = Moment(months[0]).startOf('month').format('YYYY-MM-DD')
    const endDate = Moment(months[months.length - 1]).endOf('month').format('YYYY-MM-DD')
    const info = await selectBuyAgain(startDate, endDate)
    let reObj = {
      legend: [],
      months: [],
      seriesData: []
    }
    if (info) {
      const legend = [...new Set(info.map((item) => item.company))]
      const seriesData = []
      legend.forEach((item) => {
        const obj = {}
        obj.name = item
        obj.data = []
        obj.type = 'line'
        months.forEach((child) => {
          let val = info.filter((infoItem) => infoItem.mon === child && infoItem.company === item)[0]?.fg_avg || 0
          if (val !== 0) {
            val = Number(val).toFixed(2)
          }
          obj.data.push(val)
        })
        seriesData.push(obj)
      })
      reObj = {
        legend,
        months,
        seriesData
      }
    }
    return new SuccessModel(reObj)
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

module.exports = {
  getTopList,
  getVipLevel,
  getRegistered,
  getRegisteredUsers,
  getRegisteredSource,
  getUserLife,
  getBuyAgain
}
