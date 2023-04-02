const { connection, getQuotes, addQuotes } = require('../db.js');


class QuoteService {
    static async getQuotes(userId) {
        const res = await getQuotes(userId);
        const quotes = res.map(row => {
            let quote = {}
            quote.isPastClient = row.isExistingCustomer;
            quote.deliveryDate = row.dateRequested;
            quote.gallons = row.gallonsRequested;
            quote.deliveryAddress = row.address;
            // hardcoded
            quote.price = 10;
            quote.total = 1000;
            return quote;
        });

        return quotes;
    }

    static async addQuote(userId, quote) {
        const { isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, price, total } = quote;
        const newQuote = await addQuotes(userId, deliveryDate, gallonsRequested, 10);
        return newQuote;
    }
}

module.exports = QuoteService;