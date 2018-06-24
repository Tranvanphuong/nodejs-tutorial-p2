var con = require('../mysqldb.js');

function serverAnswerShowAllUsers(Rows) {
  var result = [];
  for (var i=0; i < Rows.length; i++) {
    result.push({
      id        : Rows[i].id,
      username  : Rows[i].username,
      email     : Rows[i].email
    })
  }
  return result;
}

exports.showAllUsers = function showAllUsers(callback) {
  var sql = "SELECT * FROM `node_tut`.`user`";
  con.query(sql, function(err, rows) {
    callback(null, JSON.stringify(serverAnswerShowAllUsers(rows)));
  });
}
