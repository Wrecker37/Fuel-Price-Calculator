import axios from "axios";

export default class QuoteService {
    static async getQuoteHistory() {
        const quotes = await axios.get('http://localhost:8080/quote', {
            params: {
                userId: "DummyId",
            },
        });
        return quotes.data.quotes;
    }
}