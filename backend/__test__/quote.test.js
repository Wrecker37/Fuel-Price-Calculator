const QuoteService = require('../services/quote-service');

test('getQuotes gets quotes', async () => {
    const userId = 1;
    expect(await QuoteService.getQuotes(userId)).toBeInstanceOf(Array);
});

test('addQuotes gets quotes', async () => {
    const userId = 1;
    const res = {
        isInState: true,
        isPastClient: true,
        deliveryDate: "1/13/2023",
        gallonsRequested: 145,
        deliveryAddress: "123 Main St.",
        price: 3.75,
        total: 456,
    };

    expect(await QuoteService.addQuote(userId, res)).toBeInstanceOf(Object);
});