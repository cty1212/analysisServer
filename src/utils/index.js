function percent(num) {
  return `${String((Math.round(num * 10000) / 100))}%`
  // return num
}

function toThousand(num) {
  return Number(num).toLocaleString()
}

function intiPieData(info, name, nameKeys) {
  const arr = []
  Object.keys(info).forEach((item) => {
    if (nameKeys.includes(item)) {
      const index = nameKeys.findIndex((child) => child === item)
      const obj = {
        value: info[item],
        name: name[index]
      }
      arr.push(obj)
    }
  })
  return arr
}

function intiBsAnAc(info, name, nameKeys) {
  const arr = []
  Object.keys(info).forEach((item) => {
    if (nameKeys.includes(item)) {
      const index = nameKeys.findIndex((child) => child === item)
      const obj = {
        value: info[item],
        name: name[index],
        key: item
      }
      arr.push(obj)
    }
  })
  return arr
}

module.exports = {
  percent,
  toThousand,
  intiPieData,
  intiBsAnAc
}
