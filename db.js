const mysql = require("mysql");
const db = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6420011",
    password: "zDf9VtYkiY",
    database:"sql6420011"
  });
  
  db.connect((err) => {
    if (err) {
      console.log(err);;
    }
    console.log("Database Connected..");
  });

  module.exports = db;