var con = require('../mysqldb.js');

function serverAnswerShowUser(Id, Username, Email) {
  return {
    id        : Id,
    username  : Username,
    email     : Email
  };
}

exports.showUser = function showUser(id, callback) {
  var userID = parseInt(id);
  var sql = "SELECT * FROM `node_tut`.`user` " +
            "WHERE `node_tut`.`user`.`id` = '" + userID + "'";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowUser(
      rows[0].id,
      rows[0].username,
      rows[0].email
    )));
  });
}
