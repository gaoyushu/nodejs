#!/usr/bin/node

// 导出变量
/*
const p = require('./02-export-var');

console.dir('module');
console.log(p);
*/


// 导出函数
/*
const circle = require('./02-export-function');

console.log('r = 10, circle area: %d', circle(10).area());
console.log('r = 10, circle circumference: %d', circle(10).circumference());
*/

// 导出对象
/*
const circle = require('./02-export-object');

console.log('r = 10, circle area: %d', circle.area(10));
console.log('r = 10, circle circumference: %d', circle.circumference(10));
*/

var circle = require('./02-export-object-v2');

console.log('r = 10, circle area: %d', circle.area(10));
console.log('r = 10, circle circumference: %d', circle.circumference(10)); // 报错
