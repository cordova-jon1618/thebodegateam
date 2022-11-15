//This JS file handles the Connection to the Database Stored in AWS RDS
const mysql = require("mysql2");
const { connect } = require("../routes/shops");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  multipleStatements: true /* turn on multiple statements */,
});

// connection.connect(function (err) {
//   if (err) {
//     console.error("Database connection  failed: " + err.stack);
//     return;
//   }
//   console.log("Connected to database.");
// });
connection.connect(function (err) {
  try {
    console.log("Connected to database")
  } catch (error) {
    console.error("Database connection  failed: " + err.stack);
     return;
  }
})

module.exports = connection;
