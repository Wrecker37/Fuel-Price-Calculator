const { addQuotes, addProfiles } = require('../db');

test('getQuotes() with wrong userI', async () => {
    return expect(async () => {
        await addQuotes()
    }).rejects.toThrow();
});

test('addProfiles() fails', async () => {
    return expect(async () => {
        await addProfiles()
    }).rejects.toThrow();
});