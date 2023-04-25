const { getAddress, getProfile } = require('../db');

class PricingService {
    static async calculatePrice(userID, gallons){
        const price = 1.5 * gallons;
        let percentage = 0.10;

        const address = await getAddress(userID);
        if (address.State == 'TX') {
            percentage += 0.02
        }
        else {
            percentage += 0.04
        }
        const profile = await getProfile(userID);
        if (profile.isExistingCustomer) {
            percentage -= 0.01
        }
        
        if (gallons > 1000) {
            percentage += 0.02;
        }
        else {
            percentage += 0.03;
        }

        const margin = price * percentage;
        const total = gallons * (price + margin);
        return total;
    }
}

module.exports = PricingService;