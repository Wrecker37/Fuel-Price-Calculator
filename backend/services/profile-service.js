const app = require('../index');
const { getProfiles, setProfiles } = require('../db');


class ProfileService {
    static async getProfile(userId) {
       const profile = await getProfiles(userId);
       return profile;
    }

    static async setProfile(userId, profileSpecs) {
        const profile = await setProfiles(userId, profileSpecs);
        return profile;
    }
}

module.exports = ProfileService;