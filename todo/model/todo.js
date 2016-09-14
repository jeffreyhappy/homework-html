/**
 * Created by Li on 2016/8/2.
 */
var mysql      = require('mysql');
var util       = require('util');
var dbProfile = require('./dbProfile')
var moment     = require('moment')

function saveTodo(userid,text ,callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });
    var strQuerySql = util.format('insert into table_todo (userid , text, time) values (\'%s\' ,\'%s\',\'%s\')',userid,text,moment().format('YYYY-MM-DD hh:mm:ss'));
    connection.query(strQuerySql, function(err, rows) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }

        callback(null,{
          id:rows.insertId,
          text:text,
          userid:userid,
          completed:false
        });
        console.log('The solution is: ', util.inspect(rows));
        connection.end();

        // console.log('The solution fields is: ', util.inspect(fields));
    });

}

function all(userid,callback){
  console.log('todo all function in');
  var connection = mysql.createConnection(dbProfile);
  connection.connect(function (e) {
      if (e){
          connection.end();
          console.log("connect err " + e);
          return;
      }
  });
  var strQuerySql = util.format('select * from table_todo where userid = \'%s\' ',userid);
  connection.query(strQuerySql, function(err, rows) {
      if (err) {
          connection.end();
          callback(err);
          return;
      }
      var todoList = new Array();

        for (var i = 0 ; i < rows.length ; i ++){
            todoList.push({
                id:rows[i].id,
                text:rows[i].text,
                completed:rows[i].completed
            })
        }

      callback(null,todoList);
      console.log('The solution is: ', util.inspect(rows));
      connection.end();
  });

}

function toggle(todoId,callback){
  console.log('todo all function in');
  var connection = mysql.createConnection(dbProfile);
  connection.connect(function (e) {
      if (e){
          connection.end();
          console.log("connect err " + e);
          return;
      }
  });
  var strQuerySql = util.format('select completed from table_todo where id = %s ',todoId);
  connection.query(strQuerySql, function(err, rows) {
      if (err) {
          connection.end();
          callback(err);
          return;
      }
      console.log('strQuerySql solution is: ', util.inspect(rows));
      var strToogleSql = util.format('update table_todo set  completed = %s  where id = %s ',rows[0].completed == 0 ? 1:0 ,todoId);
      console.log('strToogleSql=' + strToogleSql);
      connection.query(strToogleSql,function(err,rows) {
          if (err) {
            connection.end();
            return;
          }
          callback(null);
          console.log('strToogleSql solution is: ', util.inspect(rows));
          connection.end();
      })

  });

}


module.exports = function () {
    this.saveTodo = saveTodo,
    this.all      = all,
    this.toggle   = toggle
};
