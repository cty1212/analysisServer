const ENV = process.env.NODE_ENV

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isQa: ENV === 'qa',
  notQa: ENV !== 'qa',
  isProd: ENV === 'production',
  notProd: ENV !== 'production'
}
