class QuoteService {
    static async getQuotes(userId) {
        quotes = [];

        connection.query(`SELECT profile.profileID, profile.isExistingCustomer, quote.dateRequested, quote.gallonsRequested, quote.profitMarginPercent, address.address, address.state FROM address, profile, quote WHERE profile.userID = ${userId} AND address.profileID = (SELECT profileID FROM profile WHERE userID = ${userId});`, (err, rows, fields) => {
            if (err) throw err;
            for (let x = 0; x < rows.length; x++) {
                currQuote = {isInState: '', isPastClient: '', deliveryDate: '', gallons: '', deliveryAddress: '', price: '', total: ''};
                if (rows[x].state == 'TX') {
                    currQuote.isInState = 'true';
                }
                else {
                    currQuote.isInState = 'false';
                }
                currQuote.isPastClient = rows[x].isExistingCustomer;
                currQuote.deliveryDate = rows[x].dateRequested;
                currQuote.gallons = rows[x].gallonsRequested;
                currQuote.deliveryAddress = rows[x].address;
                // hardcoded
                currQuote.price = 10;
                currQuote.total = 1000;

                quotes.push(currQuote);
            }
        });

        return quotes;
    }

    static async addQuote(userId, quote) {
        const { isInState, isPastClient, deliveryDate, gallonsRequested, deliveryAddress, price, total } = quote;
        // profit margin?
        connection.query(`INSERT INTO Quote(userID, dateRequested, gallonsRequested, profitMarginPercent) VALUES (${userId}, ${deliveryDate}, ${gallonsRequested}, 10);`, (err, rows, fields) => {
            if (err) throw err;
        });

        const quotes = ['dummy quote'];

        return quotes;
    }
}

module.exports = QuoteService;