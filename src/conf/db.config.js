const { isProd } = require('../utils/env')


let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'Cty1212!',
  port: '3306',
  database: 'analysis'
}

if (isProd) {
    MYSQL_CONF = {
        // 线上的 mysql 配置
        host: 'localhost',
        user: 'root',
        password: 'Cty1212!',
        port: '3306',
        database: 'analysis'
    }
    
}

module.exports = {
    MYSQL_CONF
}