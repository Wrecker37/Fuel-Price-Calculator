class ProfileService {
    static async getProfile(userId) {
        /* DB call here */
        const profile = { name: "John Doe" };

        return profile;
    }

    static async setProfile(userId, profileSpecs) {
        /* DB call here */
        const profile = { userId, ...profileSpecs };

        return profile;
    }
}

module.exports = ProfileService;