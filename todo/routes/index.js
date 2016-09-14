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

  if (userid == undefined || userid=="" || userid =='undefined') {
    console.log("userid undefined");
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
        todoModel.saveTodo(info.userid,text,function(err,insertTodo){
          if (err) {
            res.json({
              err:err.toString()
            })
          }else {
            res.json({
              result:'ok',
              todo:insertTodo
            })
          }
        })
      }
    })
  }else{
    var todo = require('../model/todo');
    var todoModel = new todo();
    todoModel.saveTodo(userid,text,function(err,insertTodo){
      if (err) {
        res.json({
          err:err.toString()
        })
      }else {
        res.json({
          result:'ok',
          todo:insertTodo
        })
      }
    })
  }

})


router.get('/asyctodo/all',function(req,res,next){
  var userid = req.query.userid;

  console.log("/asyctodo/all  user= " + userid );
  if (userid == undefined || userid == '') {
    res.json({
      result:'error',
      msg:'请输入userid'
    })
    return;
  }

  console.log("/asyctodo/all  start require ");
  var todo = require('../model/todo');

  console.log("/asyctodo/all  end require  " );
  var todoModel = new todo();
  todoModel.all(userid,function(err,todos){
    if (err) {
      res.json({
        result:'error'
      })
    }else {
      res.json({
        result:'ok',
        todos:todos
      })
    }
  })
})
router.get('/asyctodo/toggle',function(req,res,next){
  var todoId = req.query.todoId;

  console.log("/asyctodo/all  user= " + todoId );
  if (todoId == undefined || todoId == '') {
    res.json({
      result:'error',
      msg:'请输入todoId'
    })
    return;
  }

  var todo = require('../model/todo');
  var todoModel = new todo();
  todoModel.toggle(todoId,function(err){
    if (err) {
      res.json({
        result:'error'
      })
    }else {
      res.json({
        result:'ok',
      })
    }
  })
})

module.exports = router;
