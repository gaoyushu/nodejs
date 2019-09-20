#!/usr/bin/node

// 全局变量
// __dirname和__filename是全局变量 所以可以直接打印
console.log('dirname: ', __dirname);
console.log('filename: ', __filename);

// 路径拼接
// CentOS下的路径拼接
var cfile = __dirname + '/views/view.html';
console.log('file name for CentOS: ', cfile);

// windows下的路径拼接
var wfile = __dirname + '\\views\\view.html';
console.log('file name for windows: ', wfile);

// 不同平台下路径格式转换
// 1.switch..case..
/*switch(){
  case 'linux':
    file = cfile;
    break;
  case 'win32':
    file = wfile;
    break;
}*/

// 2.调用path模块
const path = require('path');
file = path.join(__dirname, 'views', 'view.html');
console.log('path join file name: ', file);
