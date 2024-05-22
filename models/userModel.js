// userModel.js
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'bkiyug5qgo4astqikfib-mysql.services.clever-cloud.com',
    user: 'u8zrrl04sg6bts4p',
    password: 'LcgWNuf6HgOKA6hwIR4z',
    database: 'bkiyug5qgo4astqikfib'
}); // Assuming you have a database connection

const getUserByUsername = (usernamee, callback) => {
    const query = 'SELECT * FROM student WHERE usernamee = ?';
    pool.query(query, [usernamee], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]); // Assuming username is unique, so we return the first result
    });
};

module.exports = { getUserByUsername };
