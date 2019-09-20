#!/usr/bin/node

// 1.引入模块 创建对象 实例化
// 引入events模块并创建EventEmitter对象
// const events = require('events');
// const EventEmitter = events.EventEmitter;
const EventEmitter = require('events').EventEmitter;

// EventEmitter对象实例化
var e = new EventEmitter();

// 2.触发事件
// 事件发生的条件
setInterval(function(){
  e.emit('hello');
}, 1000);

setTimeout(function(){
  e.emit('bye');
}, 5000)

// 3.绑定事件函数
// 事件发生的内容
e.on('hello', function(){
  console.log('hello event');
})

e.on('bye', function(){
  console.log('goodbye');
  process.exit;
});
// ps：绑定事件函数和触发事件的事件名称要一致
