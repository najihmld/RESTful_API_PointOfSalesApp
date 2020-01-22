const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'posapp'
  });

  connection.connect(error => {
    if (error) throw error;
    console.log("You're now connected...");
  })

  module.exports = connection;