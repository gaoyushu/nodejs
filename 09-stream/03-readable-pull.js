#!/usr/bin/node

// 拉取流
// 不消耗缓存
const read = require('stream').Readable;

var r = new read();

var c = 'a'.charCodeAt(0);
r._read = () => {
  r.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) r.push(null);
}

r.pipe(process.stdout);
