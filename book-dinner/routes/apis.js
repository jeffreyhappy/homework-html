
var express = require('express');
var router = express.Router();
var moment = require('moment');
var util = require('util');

router.get('/test',function(req,res,next){
  res.json({
    code:1,
    msg:"hello ios"
  })
});

router.get('/today_list',function(req,res,next){
    console.log("today_list cookie = " + util.inspect(req.cookies));
    var todayBook = require('../model/today_book');
    todayBook.list(function (err, booklist) {
        console.log("toady_list booklist = " + util.inspect(booklist))
        if (err) {
          res.json({
            code:-1,
            msg:err.message
          })
          return;
        }
        res.json({title:'已订餐列表'
            ,today:moment().format('HH:mm:ss')
            ,users:booklist
            ,debugLog:util.inspect(req.cookies)
            ,today_food_name:'一百块的油焖大虾'})
    })
});


router.get('/book_history_list',function(req,res,next){
    console.log("today_list name = " + util.inspect(req.query.name));
    var name = req.query.name;

    var todayBook = require('../model/today_book');
    todayBook.history(name,function (err, booklist) {
        console.log("toady_list booklist = " + util.inspect(booklist))
        if (err) {
          res.json({
            code:-1,
            msg:err.message
          })
          return;
        }
        res.json({title:'已订餐列表'
            ,today:moment().format('HH:mm:ss')
            ,users:booklist
            ,debugLog:util.inspect(req.cookies)
            ,today_food_name:'一百块的油焖大虾'})
    })
});

router.get('/today_list/book',function(req,res,next){
    console.log("today_list book = " + util.inspect(req.query));
    var today_book = require('../model/today_book');
    today_book.book(req.query.name,function (err) {
        if (err){
            res.send({result:'fail',
                code :2,
                msg:err.toString()}
            );
        }else {
            res.send({result:'ok',code :0});
        }
    })
});
router.get('/today_list/unbook',function(req,res,next){
    console.log("today_list unbook = " + util.inspect(req.query));
    var today_book = require('../model/today_book');
    today_book.unbook(req.query.name,function (err) {
        if (err){
            res.send({result:'fail',
                code :3,
                msg:err.toString()}
            );
        }else {
            res.send({result:'ok',code :0});
        }
    })
});


router.get('/login',function(req,res,next){
  console.log('user name '+req.query.username);
  console.log('user psw '+req.query.psw);
  var username = req.query.username;
  var user = require('../model/user.js');
  var userModel = new  user();
    userModel.findByUserName(username,function (err,userObj) {
      if(err){
        res.send({result:'fail',msg:err.toString()})
        console.log('user operate err' + err);
      }else {
          if (userObj == null){
              res.send({result:'ok',code:1,msg:'用户名或密码错误'});
              return;
          }
          var loginName = username;
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
})

module.exports  = router;
