const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection(config);

connection.connect();

console.log('connected');

