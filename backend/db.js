const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'FUELCALCULATOR',
    port: 3306,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
  });


const storeUser = (username, hashedPassword) => {
    return new Promise((resolve, reject) => {
  
     
      //const UserID = uuidv4();
  
      // SQL query to insert a new user into the users table
      const sql = 'INSERT INTO User (username, passwordHash) VALUES (?, ?)';
      const values = [ username, hashedPassword];
  
      // Execute the query
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  // Function to retrieve a user from the MySQL database by username
  const getUser = (username) => {
    return new Promise((resolve, reject) => {

      // SQL query to select a user from the users table by username
      const sql = 'SELECT * FROM User WHERE username = ?';
      const values = [username];
  
      // Execute the query
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {

          
          resolve(results[0]);
        }
      });
    });
  };
  
  module.exports = {
    connection,
    storeUser,
    getUser,
  };