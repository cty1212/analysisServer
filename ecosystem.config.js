module.exports = {
  apps: [{
    name: 'analysis',
    script: 'bin/www',
    watch: true,
    ignore_watch: [
      'node_modules',
      'logs',
      'uploadFiles',
      'src/logger/logs'
    ],
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    exec_mode: 'cluster',
    instances: 4,
    max_memory_restart: '2G',
    autorestart: true,
    instance_var: 'isMaster',
    merge_logs: true
  }]

  // deploy: {
  //   dev: {
  //     test: '111'
  //     // user: 'SSH_USERNAME',
  //     // host: 'SSH_HOSTMACHINE',
  //     // ref: 'origin/master',
  //     // repo: 'GIT_REPOSITORY',
  //     // path: 'DESTINATION_PATH',
  //     // 'pre-deploy-local': '',
  //     // 'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     // 'pre-setup': ''
  //   }
  // }
}
