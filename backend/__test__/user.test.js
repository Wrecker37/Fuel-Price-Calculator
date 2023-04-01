const UserService = require('../services/user-service');

test('registerUser() registers user', async () => {
    const res = { username: 'John', password: 'pass123'};
    expect(await UserService.registerUser('John', 'pass123')).toBeInstanceOf(Object);
});

test('loginUser() logs in user', async () => {
    const res = true;
    const username = `Jane`;
    const password = `Jane's Password`;
    expect(await UserService.loginUser(username, password)).toEqual(true);
});

test('registerUser() with duplicate throws an error', async () => { 
    const username = 'Jane';
    const password = `Jane's Password`;
    return expect(async () => {
        await UserService.registerUser(username, password);
    }).rejects.toThrow();
});

test('loginUser() with wrong password fails', async () => {
    const username = 'Jane';
    const password = 'Wrong Password';
    return expect(async () => {
        await UserService.loginUser(username, password);
    }).rejects.toThrow();
});

test('loginUser() with unregistered username fails', async () => {
    const username = 'Bob';
    const password = `Jane's Password`;
    return expect(async () => {
        await UserService.loginUser(username, password);
    }).rejects.toThrow();
});