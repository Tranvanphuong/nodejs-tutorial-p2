var con = require('../mysqldb.js');

exports.updateDevice = function updateDevice(id, devicename, user_id, callback) {
  var deviceID = parseInt(id);
  var sql = "UPDATE `node_tut`.`device` " +
            "SET `devicename`='" + devicename + "', `user_id`='" + user_id + "' " +
            "WHERE `id`='" + id + "'";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}