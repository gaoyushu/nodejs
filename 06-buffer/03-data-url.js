#!/usr/bin/node

const fs = require('fs'),
      log = console.log,
      http = require('http');

var data = fs.readFileSync('qr-code.jpg').toString('base64');
var html = 
  '<!DOCTYPE html><html><body><img src="data:image/jpg;base64,'
  + data + 
  '"></body></html>';

// 打印图片base64
// log(data);

// 收到请求做响应
http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url + '\n');
  res.end(html);
}).listen(8080);
