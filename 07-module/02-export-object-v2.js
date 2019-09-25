#!/usr/bin/node

// 只暴露部分函数
function area(radius){
  return Math.PI * radius * radius;
  function circumference(radius){
    return Math.PI * 2 * radius;
  }
}

module.exports.area = area;
