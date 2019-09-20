#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

// 如果定义的是构造函数 第一个字母大写
function Dog(name, energy){
  var _name, _energy;
  var that = this;

  EventEmitter.call(this);

  _name = name;
  _energy = energy;

  var timer = setInterval(() => {
    if(_energy > 0){
      that.emit('bark');
      _energy--;
    }else{
      global.clearInterval(timer);
    }
  }, 1000);

  this.getName = () => _name;
  this.getEnergy = () => _energy;
}

Dog.prototype = EventEmitter.prototype;
module.exports = Dog
