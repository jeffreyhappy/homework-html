var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/test', function(req, res, next) {
  var todo = require('../model/todo');
  var todoModel = new todo();
  todoModel.all('123',function(err,todos){
    res.json('respond with a resource');
  });

});
module.exports = router;
