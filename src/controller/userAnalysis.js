
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
const {  koaLogger } = require('../logger/log4js')
const {percent, toThousand, intiPieData} = require('../utils/index')
const Moment = require('moment')

async function getTopList(ctx) {
  try {
    const info = await selectTop()
    const infoOther = await selectTopOther()
    if (info && infoOther) {
        const hyrs = {
          title: '会员人数',
          num: toThousand(info.num),
          tb: percent(info.tb),
          hb: percent(info.hb),
        }
        const zcyhl = {
          title: '注册用户量',
          num: toThousand(infoOther.zc_sum),
          tb: percent(infoOther.zc_tb),
          hb: percent(infoOther.zc_hb),
        }
        const gmyhl = {
          title: '购买用户量',
          num: toThousand(infoOther.gm_sum),
          tb: percent(infoOther.gm_tb),
          hb: percent(infoOther.gm_hb),
        }
        const sgyhl = {
          title: '收购用户量',
          num: toThousand(infoOther.dg_sum),
          tb: percent(infoOther.dg_tb),
          hb: percent(infoOther.dg_hb),
        }
        const fgyhl = {
          title: '复购用户量',
          num: toThousand(infoOther.fg_sum),
          tb: percent(infoOther.fg_tb),
          hb: percent(infoOther.fg_hb),
        }
        const arr = [hyrs, zcyhl, gmyhl, sgyhl, fgyhl]
        return new SuccessModel(arr)
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getVipLevel(ctx) {
  try {
    const info = await selectVipLevel()
    if (info) {
        const name = ['喜悦会员', '超悦会员', '卓悦会员', '优悦会员']
        const nameKeys = ['xyhy', 'cyhy', 'zyhy', 'yyhy']
        const vipArr = intiPieData(info, name, nameKeys)
        return new SuccessModel(vipArr)
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegistered(ctx) {
  try {
    const info = await selectRegistered()
    if (info) {
        const name = ['皇上皇family', '风行生活', '悦秀会', '悦享会', '悦享汇', '会员商城']
        const nameKeys = ['hsh', 'fxsh', 'yxiuh', 'yxiaoh', 'yxiaohui', 'hysc']
        const registered = intiPieData(info, name, nameKeys)
        return new SuccessModel(registered)
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegisteredUsers(ctx) {
  try {
    const sex = await selectSex()
    const plate = await selectPlate()
    const age = await selectAge()
    if (sex && plate && age) {
        const name = ['男', '女', '其他']
        const nameKeys = ['nan', 'nv', 'other']
        const ageName = ['61岁及以上', '51-60岁', '41-50岁', '31-40岁', '21-30岁', '20岁及以下', '未知年龄'].reverse()
        const ageNameKeys = ['age61all', 'age5160', 'age4150', 'age3140', 'age2130', 'age20', 'unknownAge'].reverse()
        const sexList = intiPieData(sex, name, nameKeys)
        const ageObj = {
          yData: ageName,
          seriesData: ageNameKeys.map(item => age[item])
        }
        const plateList = plate.map(item => ({
          value: item.reg_cust_qty_td,
          name: item.reg_section
        }))
        return new SuccessModel({sexList, ageObj, plateList})
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getRegisteredSource(ctx) {
  try {
    const info = await selectRegisteredSource()
    if (info) {
        const obj = {
          yData: [],
          seriesData: []
        }
        info.forEach(item => {
          obj.yData.push(item.reg_source)
          obj.seriesData.push(item.reg_cust_qty_td)
        })
        return new SuccessModel(obj)
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getUserLife(ctx) {
  try {
    const info = await selectUserLife()
    if (info) {
        const obj = {
          indicator: ['潜在客户', '新客户', '活跃客户', '流失预警客户', '流失客户'].map(item => ({name: item})),
          legend: info.map(item => item.company),
          series: info.map(item => ({
            value: [item.qz_cnt, item.xy_cnt, item.hy_cnt, item.yj_cnt, item.ls_cnt],
            name: item.company
          }))
        }
        return new SuccessModel(obj)
    } else {
        return new ErrorModel(errorInfo)
    }
  } catch (error) {
    koaLogger.error(error)
    return new ErrorModel(errorInfo)
  }
}

async function getBuyAgain(ctx) {
  try {
    console.log(ctx.request.query)
    const months = ctx.request.query.months?.split(',')
    const startDate = Moment(months[0]).startOf('month').format('YYYY-MM-DD')
    const endDate = Moment(months[months.length - 1]).endOf('month').format('YYYY-MM-DD')
    const info = await selectBuyAgain(startDate, endDate)
    console.log(info.map(item => item.company));
    if (info) {
        const legend = [...new Set(info.map(item => item.company))]
        const seriesData = []
        legend.forEach(item => {
          const obj = {}
          obj.name = item
          obj.data = []
          obj.type = 'line'
          months.forEach(child => {
            let val = info.filter(infoItem => infoItem.mon === child && infoItem.company === item)[0]?.fg_avg || 0
            if(val !== 0) {
              val = Number(val).toFixed(2)
            }
            obj.data.push(val)
          })
          seriesData.push(obj)
        })
        const reObj = {
          legend,
          months,
          seriesData
        }
        return new SuccessModel(reObj)
    } else {
        return new ErrorModel(errorInfo)
    }
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