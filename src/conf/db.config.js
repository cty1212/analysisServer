const dotenv = require('dotenv')
const { isProd, isQa } = require('../utils/env')

dotenv.config()

console.log(process.env.db_host)

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

if (isQa) {
  MYSQL_CONF = {
    // 线上的 mysql 配置
    host: process.env.qa_db_host,
    user: process.env.qa_db_user,
    password: process.env.qa_db_password,
    port: process.env.qa_db_port,
    database: process.env.qa_db_database
  }
}

module.exports = {
  MYSQL_CONF
}
