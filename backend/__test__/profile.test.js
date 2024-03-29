const ProfileService = require('../services/profile-service');

test("getProfile() returns correct value", async () => {
    const userId = 1;
    expect(await ProfileService.getProfile(userId)).toBeInstanceOf(Array);
});

test("setProfile() returns correct value", async () => {
    const userId = 1;
    const profileSpecs = {
        name: "John Doe",
        address1: "123 Main St",
        city: "Houston",
        state: "TX",
        zipcode: "77090"
    }

    expect(await ProfileService.setProfile(userId, profileSpecs)).toBeInstanceOf(Object);
});