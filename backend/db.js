const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'FUELCALCULATOR',
});

connection.connect();

module.exports = connection;

// const query = util.promisify(connection.query).bind(connection);

// class SQLService {
//     static query(SQL) {
//         return query(SQL);
//     }
// }

// module.exports = SQLService;