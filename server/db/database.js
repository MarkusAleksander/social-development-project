const mysql = require("mysql");

const db = (function () {

  var connection;

  function setupConnection (obj) {
    connection = mysql.createConnection(obj);
  }

  function openConnection() {
    connection.connect();
  }

  function closeConnection() {
    connection.end();
  }

  function runQuery(query, cb) {
    connection.query(query, (err, rows, fields) => {
      if(err) {
        console.log(err);
      } else {
        cb(rows, fields);
      }
    });
  }

  return {
    openConnection,
    closeConnection,
    setupConnection,
    runQuery
  };

})();

module.exports = db;