const dotenv = require('dotenv')
const { isProd, isQa, isDev } = require('../utils/env')

dotenv.config()

// console.log(process.env.test)

let MYSQL_CONF = {}

if (isDev) {
  MYSQL_CONF = {
    host: process.env.dev_db_host,
    user: process.env.dev_db_user,
    password: process.env.dev_db_password,
    port: process.env.dev_db_port,
    database: process.env.dev_db_database
  }
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
