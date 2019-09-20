#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

const fid = fs.openSync(file, 'r');

// 可以传fid也可以传路径
fs.writeSync(1, fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);
