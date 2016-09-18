/**
 * Created by Li on 2016/8/2.
 */
var mysql      = require('mysql');
var util       = require('util');
var dbProfile = require('./dbProfile')

// var user = {};
// user.findByUserName = function (username ,callback) {
//     connection.connect(function (e) {
//         if (e){
//             connection.end();
//             console.log("connect err " + e);
//             return;
//         }
//     });
//
//     connection.query('select * from table_user where user_name=' + '\''+username+ '\'', function(err, rows, fields) {
//         if (err) {
//             connection.end();
//             callback(err);
//             return;
//         }
//
//         if (rows == null || rows == undefined || rows.length == 0){
//             callback(null,null);
//         }else {
//             callback(null,{
//                 userName:rows[0].user_name,
//                 userPsw:rows[0].user_psw,
//                 id:rows[0].id,
//             })
//         }
//         console.log('The solution is: ', util.inspect(rows));
//         connection.end();
//
//         // console.log('The solution fields is: ', util.inspect(fields));
//     });
//
// }

function findByUserName(username ,callback) {
    var connection = mysql.createConnection(dbProfile);
    connection.connect(function (e) {
        if (e){
            connection.end();
            console.log("connect err " + e);
            return;
        }
    });

    connection.query('select * from table_user where user_name=' + '\''+username+ '\'', function(err, rows, fields) {
        if (err) {
            connection.end();
            callback(err);
            return;
        }

        if (rows == null || rows == undefined || rows.length == 0){
            callback(null,null);
        }else {
            callback(null,{
                userName:rows[0].user_name,
                userPsw:rows[0].user_psw,
                id:rows[0].id,
            })
        }
        console.log('The solution is: ', util.inspect(rows));
        connection.end();

        // console.log('The solution fields is: ', util.inspect(fields));
    });

}
module.exports = function () {
    this.findByUserName = findByUserName
};