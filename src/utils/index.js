function percent(num) {
  return String((Number(num) * 100).toFixed(2)) + '%'
}

function toThousand(num) {
  return Number(num).toLocaleString()
}

function intiPieData(info, name, nameKeys) {
  const arr = []
  Object.keys(info).forEach(item => {
    if(nameKeys.includes(item)) {
      const index = nameKeys.findIndex(child => child === item)
      arr.push(
        {
          value: info[item],
          name: name[index]
        }
      )
    }
  })
  return arr
}

module.exports = {
  percent,
  toThousand,
  intiPieData
}