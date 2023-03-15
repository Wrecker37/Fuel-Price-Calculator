class QuoteService {
    static async getQuotes(userId) {
        /* DB call here */
        const quotes = ['dummy quote'];

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