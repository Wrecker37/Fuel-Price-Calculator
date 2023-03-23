const UserService = require('../services/user-service');

test('registerUser() registers user', async () => {
    const res = { username: 'John', password: 'pass123'};
    expect(await UserService.registerUser('John', 'pass123')).toEqual(res);
});

test('loginUser() logs in user', async () => {
    const res = true;
    expect(await UserService.loginUser('username', 'password')).toEqual(true);
});