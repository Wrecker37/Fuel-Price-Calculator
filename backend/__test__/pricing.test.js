const PricingService = require('../services/pricing-service.js');
const { getAddress, getProfile } = require('../db');

test('In TX, isExistingCustomer, gallons > 1000', async () => {
    const gallons = 2000;
    const userId = 1;
    
    let margin = 0.1 + 0.02 - 0.01 + 0.02;
    margin *= 1.5;
    correctPrice = (margin + 1.5) * gallons;
    
    expect(await PricingService.calculatePrice(userId, gallons)).toEqual(correctPrice);
});

test('Not in TX, isExistingCustomer, gallons > 1000', async () => {
    const gallons = 2000;
    const userId = 24;
    
    let margin = 0.1 + 0.04 - 0.01 + 0.02;
    margin *= 1.5;
    correctPrice = (margin + 1.5) * gallons;
    
    expect(await PricingService.calculatePrice(userId, gallons)).toEqual(correctPrice);
});

test('In TX, isExistingCustomer, gallons <= 1000', async () => {
    const gallons = 1000;
    const userId = 1;
    
    let margin = 0.1 + 0.02 - 0.01 + 0.03;
    margin *= 1.5;
    correctPrice = (margin + 1.5) * gallons;
    
    expect(await PricingService.calculatePrice(userId, gallons)).toEqual(correctPrice);
});