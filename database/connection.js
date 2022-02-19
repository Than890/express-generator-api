const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASS,
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL is connected");
  });
module.exports = connection;