/**
 * Created by Li on 2016/8/2.
 */
var mysql      = require('mysql');
var util       = require('util');
var moment     = require('moment');
var dbProfile  = require('./dbProfile');

function bookToday(username ,callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });
    //还差个时间
    var strQuerySql = util.format('select count(*) from table_book_list where name=\'%s\' and time > \'%s\'',username,moment().format('YYYY-MM-DD'))
    // var strQuerySql = util.format('select count(*) from table_book_list where name=\'{%s}\' and time > \'{%s}\')',"username","1212");
    // var strQuerySql = 'select count(*) from table_book_list where name={0} and time > {1})'.format("username","1212");
    console.log("strQuerySql = " + strQuerySql)
    connection.query(strQuerySql, function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }

        if (rows == null || rows == undefined || rows.length == 0 || rows[0]['count(*)'] == 0){
            var strSql = util.format('insert into table_book_list(name,time) values (\'%s\',\'%s\')',username,moment().format('YYYY-MM-DD HH:mm:ss'))
            console.log("strSql = " + strSql)
            connection.query(strSql,function (err) {
                connection.end();
                if (err){
                    callback(new Error('插入失败')+err.toString())
                }else {
                    callback(null);
                }
            });
        }else {
            connection.end();
            callback(new Error('今天已经预定了'))

        }

        // console.log('The solution fields is: ', util.inspect(fields));
    });

}


function list(callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });
    //还差个时间
    var strQuerySql = util.format('select * from table_book_list where time >= \'%s\' order by time desc',moment().format('YYYY-MM-DD'))
    // var strQuerySql = util.format('select count(*) from table_book_list where name=\'{%s}\' and time > \'{%s}\')',"username","1212");
    // var strQuerySql = 'select count(*) from table_book_list where name={0} and time > {1})'.format("username","1212");
    console.log("strQuerySql = " + strQuerySql)
    connection.query(strQuerySql, function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }
        var bookListArray = new Array();

        for (var i = 0 ; i < rows.length ; i ++){
            bookListArray.push({
                name:rows[i].name,
                time:rows[i].time
            })
        }

        callback(null,bookListArray);
        // if (rows == null || rows == undefined || rows.length == 0 || rows[0]['count(*)'] == 0){
        //     var strSql = util.format('insert into table_book_list(name,time) values (\'%s\',\'%s\')',username,moment().format('YYYY-MM-DD HH:mm:ss'))
        //     console.log("strSql = " + strSql)
        //     connection.query(strSql,function (err) {
        //         connection.end();
        //         if (err){
        //             callback(new Error('插入失败')+err.toString())
        //         }else {
        //             callback(null);
        //         }
        //     });
        // }else {
        //     connection.end();
        //     callback(new Error('今天已经预定了'))
        //
        // }

        // console.log('The solution fields is: ', util.inspect(fields));
    });

}


function unbookToday(username ,callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });

    var strQuerySql = util.format('DELETE FROM table_book_list WHERE name=\'%s\' and time > \'%s\'',username,moment().format('YYYY-MM-DD'))
    console.log("strQuerySql = " + strQuerySql)
    connection.query(strQuerySql, function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }
            connection.end();
            callback()

    });

}


function history(name,callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });
    //还差个时间
    var strQuerySql = util.format('select * from table_book_list where name = \'%s\' order by time desc',name)
    // var strQuerySql = util.format('select count(*) from table_book_list where name=\'{%s}\' and time > \'{%s}\')',"username","1212");
    // var strQuerySql = 'select count(*) from table_book_list where name={0} and time > {1})'.format("username","1212");
    console.log("strQuerySql = " + strQuerySql)
    connection.query(strQuerySql, function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }
        var bookListArray = new Array();

        for (var i = 0 ; i < rows.length ; i ++){
            bookListArray.push({
                name:rows[i].name,
                time:rows[i].time
            })
        }

        callback(null,bookListArray);

    });

}

exports.book = bookToday;
exports.unbook = unbookToday;
exports.list = list;
exports.history = history;
