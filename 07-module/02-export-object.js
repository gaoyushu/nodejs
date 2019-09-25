#!/usr/bin/node

var circle = {
  
  /**
   * 计算圆的面积
   *
   * @param radius {number} 半径
   * @returns {number} 面积
   */
  'area': function(radius){
    return Math.PI * radius * radius;
  },
  'circumference': function(radius){
    return Math.PI * 2 * radius;
  }
};

console.dir(module);
module.exports = circle;
