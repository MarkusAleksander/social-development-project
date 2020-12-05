const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "socialdevproject"
});

connection.connect();

connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err

    console.log('connected as id ' + connection.threadId);
    console.log(rows.length);

    // When done with the connection, release it.
    // connection.release();
    
    // console.log('The solution is: ', rows[0].solution)
  })

connection.end();