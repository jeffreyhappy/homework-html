var express = require('express');
var router = express.Router();
var moment = require('moment');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/asyctodo',function(req,res,next){
  var text = req.query.text;
  var userid = req.query.user;

  console.log("text = " + text + " user= " + user );
  if (text == undefined || text == '') {
    res.json({
      result:'error',
      msg:'请输入text'
    })
    return;
  }

  if (userid == undefined || userid=="") {
    var user = require('../model/user');
    var userModel = new user();
    userModel.generateUser(function(err,info){
      if (err) {
        res.json({
          err:err.toString()
        })
      }else {
        var todo = require('../model/todo');
        var todoModel = new todo();
        todoModel.saveTodo(info.userid,text,function(err){
          if (err) {
            res.json({
              err:err.toString()
            })
          }else {
            res.json({
              result:'ok',
              userid:info.userid,
              text:text
            })
          }
        })
      }
    })
  }else{
    var todo = require('../model/todo');
    var todoModel = new todo();
    todoModel.saveTodo(userid,text,function(err){
      if (err) {
        res.json({
          err:err.toString()
        })
      }else {
        res.json({
          result:'ok',
          userid:userid,
          text:text
        })
      }
    })
  }

})
module.exports = router;
