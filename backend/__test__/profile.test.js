const ProfileService = require('../services/profile-service');

test("getProfile() returns correct value", async () => {
    const res = { name: "John Doe" };
    expect(await ProfileService.getProfile()).toEqual(res);
});

test("setProfile() returns correct value", async () => {
    const res = { userId: 'john123', name: "John Doe" };
    expect(await ProfileService.setProfile('john123', { name: "John Doe" })).toEqual(res);
});