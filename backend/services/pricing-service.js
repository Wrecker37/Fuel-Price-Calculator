const { getAddress, getProfile } = require('../db');
class PricingService {
    static async calculatePrice(userID, gallons){
        price = 1.5 * gallons;
        percentage = 0.10;

        address = getAddress(userID);
        if(address.State == 'TX') {
            percentage += 0.02
        }
        else {
            percentage += 0.04
        }
        profile = getProfile(userID);
        if(profile.isExistingCustomer) {
            percentage -= 0.01
        }
        
        if(gallons > 1000) {
            percentage += 0.02;
        }
        else {
            percentage += 0.03;
        }

        margin = price * percentage;
        total = gallons * (price + margin);
        return total;
        
    }
}

module.exports = PricingService;