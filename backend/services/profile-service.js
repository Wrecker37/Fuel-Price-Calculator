const app = require('../index');
const { getProfiles, setProfiles } = require('../db');


class ProfileService {
    static async getProfile(userId) {
       const profile = await getProfiles(userId);
       return profile;
    }

    static async setProfile(userId, profileSpecs) {
        console.log(userId, profileSpecs);
        const profile = await setProfiles(userId, profileSpecs);
        console.log(profile);

        // const profile = { userId, ...profileSpecs };
        
        // // set profile table
        // const name = profileSpecs.name.split(" ");
        // connection.query(`UPDATE profile SET firstName = ${name[0]}, lastName = ${name[1]} WHERE userID = ${userId};`, (err, rows, fields) => {
        //     if (err) throw err;
        // });
        // // set address table
        // connection.query(`UPDATE address SET address = ${profileSpecs.address1}, city = ${profileSpecs.city}, state = ${profileSpecs.state}, zipcode = ${profileSpecs.zipcode} WHERE profileID = (SELECT profileID FROM profile WHERE userID = ${userId});`, (err, rows, fields) => {
        //     if (err) throw err;
        // });

        return profile;
    }
}

module.exports = ProfileService;