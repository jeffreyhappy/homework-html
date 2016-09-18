var express = require('express');
var router = express.Router();
var moment = require('moment');
var util = require('util');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/learn',function(req,res,next){
//   res.render("learn_include");
// });

// router.get('/learn_extend',function(req,res,next){
//   res.render("learn_extend");
// });


router.get('/test',function(req,res,next){
  res.json({
    code:1,
    msg:"hello ios"
  })
});


// router.get('/test-react',function(req,res,next){
//   res.sendFile('index.hmtl');
// })
router.get('/today_list',function(req,res,next){
    console.log("today_list cookie = " + util.inspect(req.cookies));
    var todayBook = require('../model/today_book');
    todayBook.list(function (err, booklist) {
        console.log("toady_list booklist = " + util.inspect(booklist))
        res.render("today_list",{title:'已订餐列表'
            ,today:moment().format('HH:mm:ss')
            ,users:booklist
            ,debugLog:util.inspect(req.cookies)
            ,today_food_name:'一百块的油焖大虾'});
    })

});

router.get('/book_history_list',function(req,res,next){
    console.log("today_list name = " + util.inspect(req.query.name));
    var name = req.query.name;

    var todayBook = require('../model/today_book');
    todayBook.history(name,function (err, booklist) {
        console.log("toady_list booklist = " + util.inspect(booklist))
        res.render("book_history_list",{title:'已订餐列表'
            ,today:moment().format('HH:mm:ss')
            ,users:booklist
            ,debugLog:util.inspect(req.cookies)
            ,today_food_name:'一百块的油焖大虾'});
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

module.exports = router;
