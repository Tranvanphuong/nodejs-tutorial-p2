var con = require('../mysqldb.js');

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

exports.createDevice = function createDevice(userid, devicename, callback) {
  var deviceID = randomInt(100000, 999999);
  var sql = "INSERT INTO `node_tut`.`device` (`id`, `devicename`, `user_id`) " +
            "VALUES ('" + deviceID + "', '" + devicename + "', '" + userid + "')";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}
