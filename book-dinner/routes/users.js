var express = require('express');
var router = express.Router();
var util  = require('util')
var moment = require('moment')
// var redis = require("redis")
// var    client = redis.createClient();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',function(req,res,next){
  res.render('login');
});

/**
 * name
 * psw
 *
 */
router.get('/api/login',function(req,res,next){
  console.log('user name '+req.query.name);
  console.log('user psw '+req.query.psw);

  var user = require('../model/user.js');
  var userModel = new  user();
    userModel.findByUserName(req.query.name,function (err,userObj) {
      if(err){
        res.send({result:'fail',msg:err.toString()})
        console.log('user operate err' + err);
      }else {
          if (userObj == null){
              res.send({result:'ok',code:1,msg:'用户名或密码错误'});
              return;
          }
          var loginName = req.query.name;
          var loginPsw = req.query.psw;
          if (loginName == userObj.userName && loginPsw == userObj.userPsw){
              //产生token 放入redis
              var token = moment().format('YYYY-MM-DD-hh:mm:ss')+loginName;
              // client.set(token,userObj.id);
              userObj.token = token;
              res.send({result:'ok',code :0,data:userObj});
          }else{
              res.send({result:'ok',code:1,msg:'用户名或密码错误'});

          }
        console.log('user operate ok ' + util.inspect(userObj));
      }
  })


  // res.send(JSON.stringify({result:'ok'}));
  // res.render('index')
});
module.exports = router;
