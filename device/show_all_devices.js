var con = require('../mysqldb.js');

function serverAnswerShowAllDevice(Rows) {
  var result = [];
  for (var i=0; i < Rows.length; i++) {
    result.push({
      id          : Rows[i].id,
      devicename  : Rows[i].devicename
    })
  }
  return result;
}

exports.showAllDevices = function showAllDevices(id, callback) {
  var userID = parseInt(id);
  var sql = "SELECT `node_tut`.`device`.`id`, `node_tut`.`device`.`devicename` " +
            "FROM `node_tut`.`user` " +
            "INNER JOIN `node_tut`.`device` " +
            "ON `node_tut`.`user`.`id` = `node_tut`.`device`.`user_id`" +
            "WHERE `node_tut`.`user`.`id` = '" + userID + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowAllDevice(rows)));
  });
}
