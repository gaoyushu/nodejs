#!/usr/bin/node

const log = console.log;

var buf1 = new Buffer(256);

// buffer方法
log('buf1 length: ', buf1.byteLength);
log('buf1:', buf1);

buf1.fill(0, 0, 256);

var buf2 = buf1.slice(250, 256);
log('buf2:', buf2);
log('buf2:', buf2.toJSON());
log('buf2:', JSON.stringify(buf2));

for(var i = 1; i < buf1.length; i++)  buf1[i] = i;
log('buf1:', buf1);

// 数组初始化
var arr = ['a', 0xba, 0xdf, 0x00, 255, 10];
var buf3 = new Buffer(arr);
log('buf3:', buf3);

// 字符串初始化
var buf4 = new Buffer('Hello world!');
log('buf4:', buf4);

// 拷贝 4到3
buf4.copy(buf3, 0, buf3.length);
log('buf3', buf3);
log('buf4', buf4);

// 中文和英文buffer有差别 要按照buffer算
var str = 'hello Alex 中文';
var buf5 = new Buffer(str);
log('buf5 length:', buf5.length);
log('string length:', str.length);
