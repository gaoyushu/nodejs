var express = require('express');
var router = express.Router();
var data = require('../data.json','utf-8');

/* GET home page. */
router.get('/', function(req,res) {
  res.render('login');
});

router.post('/', function(req, res) {
    // log(data.users);
    // log(req.body.username, req.body.password)
    data.users.map(item=>{
        if(req.body.username === item.username && req.body.password === item.password) {
            let user = item.username;
            res.render('list', {data: data.chapterList, user});
        }
    })
    res.send('您的账号或密码有误，请重新输入！');
})   

module.exports = router;
