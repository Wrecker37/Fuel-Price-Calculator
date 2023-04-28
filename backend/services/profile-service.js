const app = require('../index');
const { getProfiles, getProfile, setProfiles, addProfiles, addAddress } = require('../db');


class ProfileService {
    static async getProfile(userId) {
       const profile = await getProfiles(userId);
       return profile;
    }

    static async setProfile(userId, profileSpecs) {
        console.log(`ProfileService.setProfile() invoked - UserId=${userId}`);
        const profileArray = await getProfile(userId);
        if (typeof profileArray !== 'undefined' && profileArray.length === 0) {
            console.log(`ProfileService.setProfile() - creating new profile`);
            const profileCreated = await addProfiles(userId);
            const newProfile = await getProfile(userId);
            const profileId = newProfile[0].ProfileID;
            console.log(profileId);
            const addressCreated = await addAddress(profileId);
        }

        const profile = await setProfiles(userId, profileSpecs);
        return profile;
    }
}

module.exports = ProfileService;