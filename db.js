const mysql = require('mysql2');
require('dotenv').config();
const PORT = process.env.PORT || 4000 ;

module.exports = mysql.createConnection({
    host: PORT,
    user:'root',
    password: 'Rohit@123456',
    database:'exam_portal'
})