#!/usr/bin/node

const log = console.log;

log('architecture:', process.arch); // CPU架构信息
log('platform: %s\n', process.platform); // 操作系统版本信息

log('process id:', process.pid); // 进程id信息
log('exePath: %s\n', process.execPath); // 该node.js可执行问价的绝对路径信息

log('node version:', process.version); // node.js版本信息
log('user id:', process.getuid()); // 当前登录用户信息
log('group id:', process.getgid()); // 当前登录用户所属组id信息
log('cwd: %s\n', process.cwd()); // 当前脚本所在路径信息

log('rss:', process.memoryUsage().rss); // 驻留集大小 该进程被分配的物理内存的大小
log('heapTotal:', process.memoryUsage().heapTotal); // 内存使用情况
log('heapUsed:', process.memoryUsage().heapUsed); // 内存使用情况
log('external: %s\n', process.memoryUsage().external); // 特定对象的内存使用情况

log('env:', process.env); // 环境变量
log('host name:', process.env.HOSTNAME);
