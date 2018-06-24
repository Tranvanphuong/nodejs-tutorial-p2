var con = require('../mysqldb.js');

function serverAnswerShowDevicesUser(Id, Devicename, User_id) {
  return {
    id          : Id,
    devicename  : Devicename,
    user_id     : User_id
  };
}

exports.showDevicesUser = function showDevicesUser(id, callback) {
  var deviceID = parseInt(id);
  var sql = "SELECT * FROM `node_tut`.`Device` " +
            "WHERE `node_tut`.`device`.`id` = '" + deviceID + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowDevicesUser(
      rows[0].id,
      rows[0].devicename,
      rows[0].user_id
    )));
  });
}
