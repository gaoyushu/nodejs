#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      qs = require('querystring')
      log = console.log;

let usr = [
    {name: 'zhangsan', pswd: '123'}
];

// 创建服务
http.createServer((req, res) => {

    // log('==========');
    // log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);

    switch (req.method) {
        case 'GET':
            // log('METHOD: GET');
            getfun(req,res);
            // log('==========');
            break;
    
        case 'POST':
            // log('METHOD: POST');
            postfun(req,res);
            break;
    
        default:
            // log('ERROR METHOD, RETURN ERROR', + req.method);
            err(res);
            break;
    }

}).listen(8081);

// getfun
// 读取login.html
function getfun(req, res){
    let file = __dirname;

    if(req.url === '/favicon.ico') return;

    switch (req.url) {
        case '/':
        case '/login':
            fs.readFile(file + '/login.html', (err, data) => {
                if(err){
                    res.end(err.message);
                }
                res.writeHead(200,{
                    'Content-Type':'text/html'
                })
                res.end(data);
            })
            break;
        default:
            log('ERROR GET!', req.url); // favicon.ico报错
            err(res);
            break;
    }
}

// postfun
// 验证密码 记录cookie
function postfun(req, res){
    let count = 0;
    var user = '';

    req.on('data',(data)=>{
        user += data;
    });

    req.on('end', ()=>{
        user = qs.parse(user);
        
        usr.map((item)=>{
            if(item.name == user.username && item.pswd == user.pwd){
                if(typeof req.headers['cookie'] === 'undefined') {
                    count = 1;
                } else {
                    var pair = req.headers['cookie'].split('=');
                    count = Number(pair[1]) + 1;
                }
              
                res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);
                res.statusCode = 200;
                res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>登录成功</title></head><body><h1>${item.name}这是您第 ${count} 次访问本网站！</h1></body></html>`);
            }
        });

        res.statusCode = 401;
        res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>登录失败</title></head><body><h1>密码错误 登录失败！</h1><p>账号：zhangsan 密码：123</p></body></html>`);
    });
}

// err
// 报错
function err(res) {
    let msg = 'ERROR TEST!';
  
    res.statusCode = 404;
    res.setHeader('Content-Length', msg.length);
    res.setHeader('Content-Type', 'text/plain');
  
    res.end(msg);
  }