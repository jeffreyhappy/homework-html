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
    connection.query(strQuerySql, function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }

        callback(null);
        console.log('The solution is: ', util.inspect(rows));
        connection.end();

        // console.log('The solution fields is: ', util.inspect(fields));
    });

}
module.exports = function () {
    this.saveTodo = saveTodo
};
