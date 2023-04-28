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

test('setProfile() creates a new profile and returns correct value', async () => {
    const userId = 2;
    const profileSpecs = {
        name: "Jane Doe",
        address1: "456 Oak Street",
        city: "Houston",
        state: "TX",
        zipcode: "77090"
    }

    expect(await ProfileService.setProfile(userId, profileSpecs)).toBeInstanceOf(Object);

})