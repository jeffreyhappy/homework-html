/**
 * Created by Li on 2016/8/2.
 */
var mysql      = require('mysql');
var util       = require('util');
var dbProfile = require('./dbProfile')
var moment     = require('moment')

function generateUser(callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });
    //todo 先用时间来做，以后用随机数
    var userId = moment().format('YYYY-MM-DD-hh-mm-ss');
    var time   = moment().format('YYYY-MM-DD hh:mm:ss');
    var strQuerySql = util.format('insert into table_user (userid ,  time) values (\'%s\' ,\'%s\')',userId,time);
    connection.query(strQuerySql, function(err, rows) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }

        callback(null,{
          userid:userId,
        });
        console.log('The generateUser is: ', util.inspect(rows));
        connection.end();
    });

}
module.exports = function () {
    this.generateUser = generateUser
};
