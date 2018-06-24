var con = require('../mysqldb.js');

exports.deleteDevice = function deleteDevice(id, callback) {
  var deviceID = parseInt(id);
  var sql = "DELETE FROM `node_tut`.`device` " +
            "WHERE `node_tut`.`device`.`id`='" + deviceID + "'";
  con.query(sql, function(err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = {'status' : 'done'};
    else result = {'status' : 'fail'};
    callback(null, result);
  });
}
