const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'Rohit@123456',
    database:'exam_portal'
})