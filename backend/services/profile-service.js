const app = require('../index');

class ProfileService {
    static async getProfile(userId) {
        const profile = {userId: userId, name: '', address1: '', city: '', state: '', zipcode: ''};

        connection.query(`SELECT Profile.FirstName, Profile.LastName, Address.Address, Address.City, Address.State, Address.ZipCode FROM Profile INNER JOIN Address ON Profile.ProfileID = Address.ProfileID WHERE Profile.UserID = ${userId};`, (err, rows, fields) => {
            if (err) throw err;
            profile.name = rows[0].firstName + rows[0].lastName;
            profile.address1 = rows[0].address;
            profile.city = rows[0].city;
            profile.state = rows[0].state;
            profile.zipcode = rows[0].zipcode;
        });

        return profile;
    }

    static async setProfile(userId, profileSpecs) {
        const profile = { userId, ...profileSpecs };

        // set profile table
        const name = profileSpecs.name.split(" ");
        connection.query(`UPDATE profile SET firstName = ${name[0]}, lastName = ${name[1]} WHERE userID = ${userId};`, (err, rows, fields) => {
            if (err) throw err;
        });
        // set address table
        connection.query(`UPDATE address SET address = ${profileSpecs.address1}, city = ${profileSpecs.city}, state = ${profileSpecs.state}, zipcode = ${profileSpecs.zipcode} WHERE profileID = (SELECT profileID FROM profile WHERE userID = ${userId});`, (err, rows, fields) => {
            if (err) throw err;
        });

        return profile;
    }
}

module.exports = ProfileService;