const { getAddress, getProfile, getQuotes } = require('../db');

class PricingService {
    static async calculatePrice(userID, gallons){
        if (!userID || !gallons || isNaN(gallons)) {
            throw new Error("Invalid input");
          }
        let margin = 0.1;

        const address = await getAddress(userID);
        if (address.State == 'TX') {
            margin += 0.02
        }
        else {
            margin += 0.04
        }

        const quotes = await getQuotes(userID);
        // If existing customer
        if (!(typeof quotes !== 'undefined' && quotes.length === 0)) {
            margin -= 0.01
        }
        
        if (gallons > 1000) {
            margin += 0.02;
        }
        else {
            margin += 0.03;
        }
        margin *= 1.5;
        const total = (margin + 1.5) * gallons
        return total;
    }
}

module.exports = PricingService;