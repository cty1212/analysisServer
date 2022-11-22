const dotenv = require('dotenv')
const { isProd } = require('../utils/env')

dotenv.config()

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
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    port: process.env.db_port,
    database: process.env.db_database
  }
}

module.exports = {
  MYSQL_CONF
}
