const QuoteService = require('../services/quote-service');

test('getQuotes gets quotes', async () => {
    const res = ['dummy quote'];
    expect(await QuoteService.getQuotes('user')).toEqual(res);
});

test('getQuotes gets quotes', async () => {
    const res = ['dummy quote'];
    expect(await QuoteService.addQuote('user', 'newQuote')).toEqual(res);
});