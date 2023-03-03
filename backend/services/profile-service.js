class ProfileService {
    static async getProfile(userId) {
        /* DB call here */
        const profile = { name: "John Doe" };

        return profile;
    }

    static async setProfile(userId, profile) {
        /* DB call here */

        return profile;
    }
}

module.exports = ProfileService;