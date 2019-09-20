#!/usr/bin/node

const fs = require('fs');

var opt, src, lnk;

switch(process.argv.length) {
  // hard link  
  case 4:
    src = process.argv[2];
    lnk = process.argv[3];

    if(fs.existsSync(src)){
      fs.linkSync(src, lnk);
    } else {
      console.error('%s not exist!', src);
      process.exit(1);
    }
    break;
  
  // soft link
  case 5:
    opt = process.argv[2];
    src = process.argv[3];
    lnk = process.argv[4];

    if(opt === '-s') {
      if(fs.existsSync(src)){
        fs.symlinkSync(src, lnk);
      } else {
        // error处理一样 可以写成一个function直接调用
        console.error('%s not exist!', src);
        process.exit(1);
      }
    } else {
      console.error('命令行参数不正确！');
    }
    break;

  default:
    console.error('命令行参数不正确！');
}
