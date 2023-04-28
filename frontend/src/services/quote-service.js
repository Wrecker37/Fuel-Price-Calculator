import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export default class QuoteService {
    static async getQuoteHistory(userId) {
        const quotes = await axios.get('http://localhost:8080/quote', {
            params: {
                userId,
            },
        });
        return quotes.data.quotes;
    }

    static async postQuote(quoteData) {
        const { userId, deliveryDate, gallonsRequested, computedPrice: price, computedTotal: total } = quoteData;

        const quote = await axios.post(`${BASE_URL}/quote`, {
            userId, deliveryDate, gallonsRequested, price, total, 
        });

        return quote.data;
    }
}
