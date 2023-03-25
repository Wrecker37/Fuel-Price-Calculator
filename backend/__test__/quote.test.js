const QuoteService = require('../services/quote-service');

test('getQuotes gets quotes', async () => {
    const res = [
            {
                isInState: true,
                isPastClient: true,
                deliveryDate: "1/13/2023",
                gallons: 145,
                deliveryAddress: "123 Main St.",
                price: 3.75,
                total: 456,
            },
            {
                isInState: false,
                isPastClient: true,
                deliveryDate: "5/23/2023",
                gallons: 176,
                deliveryAddress: "345 Tiger St.",
                price: 7,
                total: 1000,
            }
        ];
    expect(await QuoteService.getQuotes('user')).toEqual(res);
});

test('addQuotes gets quotes', async () => {
    const res = ['dummy quote'];
    expect(await QuoteService.addQuote('user', 'newQuote')).toEqual(res);
});