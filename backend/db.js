const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'FUELCALCULATOR',
    port: 3306,
    multipleStatements: true,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
  });

const getQuotes = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT p.profileID, p.isExistingCustomer, q.dateRequested, q.gallonsRequested, q.profitMarginPercent, q.price, q.total, a.address, a.state 
      FROM profile AS p
      INNER JOIN address AS a ON p.profileId = a.profileId
      INNER JOIN quote AS q ON q.userId = p.userId
      WHERE p.userID = ${userId}
    `;
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const addQuotes = (userId, deliveryDate, gallonsRequested, profitMarginPercent, price, total) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO Quote(userID, dateRequested, gallonsRequested, profitMarginPercent, price, total) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [userId, deliveryDate, gallonsRequested, profitMarginPercent, price, total];

    connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
  });
}

const getProfiles = (userId) => {
  console.log(userId);
  return new Promise((resolve, reject) => {
    const sql = `SELECT Profile.FirstName, Profile.LastName, Address.Address, Address.City, Address.State, Address.ZipCode FROM Profile INNER JOIN Address ON Profile.ProfileID = Address.ProfileID WHERE Profile.UserID = ${userId}`;
    connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
  });
}

const setProfiles = (userId, profileSpecs) => {
  return new Promise((resolve, reject) => {
    const names = profileSpecs.name.split(" ");

    const sql = `UPDATE profile SET firstName = ?, lastName = ? WHERE userID = ${userId}; UPDATE address SET address = ?, city = ?, state = ?, zipcode = ? WHERE profileID = (SELECT profileID FROM profile WHERE userID = ${userId})`;
    const values = [names[0], names[1], profileSpecs.address1, profileSpecs.city, profileSpecs.state, profileSpecs.zipcode]
    connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
  });
}

const addProfiles = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO profile (UserID) VALUES (?)`;
    const values = [userId];
    connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
  });
}

const addAddress = (profileId) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO address (profileId) VALUES (?)`;
    const values = [profileId];
    connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
  });
}

const storeUser = (username, hashedPassword) => {
    return new Promise((resolve, reject) => {
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

  //Function to retrieve a profile from Database by userID
  // Function to retrieve a user from the MySQL database by username
  const getProfile = (userID) => {
    return new Promise((resolve, reject) => {

      // SQL query to select a user from the users table by username
      const sql = 'SELECT * FROM Profile WHERE UserID = ?';
      const values = [userID];
  
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

  //Function to get an address using its userID
  const getAddress = (userID) => {
    return new Promise((resolve, reject) => {
      //SQL Querie to get an address based on userID
      const sql = 'SELECT * FROM Address WHERE ProfileID = (SELECT ProfileID from Profile where UserID = ?)'
      values = [userID];

      //Execute the query
      connection.query(sql , values, (error, results) => {
        if(error) {
          reject(error);
        }
        else{
          resolve(results[0]);
        }
      });
    });
  };
  
  module.exports = {
    connection,
    getQuotes,
    addQuotes,
    getProfiles,
    setProfiles,
    addProfiles,
    addAddress,
    storeUser,
    getUser,
    getAddress,
    getProfile
  };