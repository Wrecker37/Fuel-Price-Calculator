const { addQuotes } = require('../db');

test('getQuotes() with wrong userI', async () => {
    return expect(async () => {
        await addQuotes()
    }).rejects.toThrow();
});