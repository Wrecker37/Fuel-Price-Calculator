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
            quote.price = row.price;
            quote.total = row.total;
            return quote;
        });

        return quotes;
    }

    static async addQuote(userId, quote) {
        const { isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, price, total, profitMarginPercent } = quote;
        
        const newQuote = await addQuotes(userId, deliveryDate, gallonsRequested, profitMarginPercent, price, total);
        return newQuote;
    }
}

module.exports = QuoteService;