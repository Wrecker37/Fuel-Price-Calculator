import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export default class QuoteService {
    static async getQuoteHistory(userId) {
        const quotes = await axios.get('http://localhost:8080/quote', {
            params: {
                userId: 1,
            },
        });
        return quotes.data.quotes;
    }

    static async postQuote(quoteData) {
        console.log(`API request:`);
        console.log(quoteData);
        const { userId, isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, computedPrice: price, computedTotal: total, profitMarginPercent } = quoteData;

        const quote = await axios.post(`${BASE_URL}/quote`, {
            userId, isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, price, total, profitMarginPercent
        });

        return quote.data;
    }
}
