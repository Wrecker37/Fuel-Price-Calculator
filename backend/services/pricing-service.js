const { getAddress, getProfile } = require('../db');

class PricingService {
    static async calculatePrice(userID, gallons){
        let margin = 0.1;

        const address = await getAddress(userID);
        if (address.State == 'TX') {
            margin += 0.02
        }
        else {
            margin += 0.04
        }
        const profile = await getProfile(userID);
        if (profile.isExistingCustomer) {
            margin -= 0.01
        }

        if (gallons > 1000) {
            margin += 0.02;
        }
        else {
            margin += 0.03;
        }
        margin *= 1.5;
        return (margin + 1.5) * gallons;
    }
}

module.exports = PricingService;