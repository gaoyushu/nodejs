#!/usr/bin/node

const Read = require('stream').Readable;

function MyReadable(){
  Read.call(this);
}

var c = 'a'.charCodeAt(0);

// 重载read方法
MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) this.push(null);
};

// 原型链继承
MyReadable.prototype = Read.prototype;

// 暴露导出
module.exports = MyReadable;
