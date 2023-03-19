class QuoteService {
    static async getQuotes(userId) {
        /* DB call here */
        const quotes = [
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

        return quotes;
    }

    static async addQuote(userId, quote) {
        const { isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, price, total } = quote;

        /* DB call here */
        const quotes = ['dummy quote'];

        return quotes;
    }
}

module.exports = QuoteService;