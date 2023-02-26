const mysql = require("mysql2");
const dbConnection =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "finalproject"
}).promise()

module.exports = dbConnection;