'use strict';
<<<<<<< HEAD
const mysql = require('mysql2');
=======
const mysql = require('mysql');
>>>>>>> edwin_ocampo_torres
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
<<<<<<< HEAD
  password : '',
=======
  password : 'foriti31',
>>>>>>> edwin_ocampo_torres
  database : 'antonela_reposteria'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
<<<<<<< HEAD
module.exports = dbConn;
=======
module.exports = dbConn;
>>>>>>> edwin_ocampo_torres
