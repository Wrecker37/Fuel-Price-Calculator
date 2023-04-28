const request = require('supertest');
const express = require('express');
const pricingRoute = require('../routes/pricing');
const PricingService = require('../services/pricing-service');

// Mock express app and use pricing route
const app = express();
app.use(express.json());
app.use('/', pricingRoute);

describe('POST /', () => {
  test('returns a price for valid userId and gallons', async () => {
    const userId = 1; // Replace with a valid userId from your database
    const gallons = 10;

    const expectedPrice = await PricingService.calculatePrice(userId, gallons);

    const res = await request(app)
      .post('/')
      .send({ userId, gallons })
      .expect(200);
      
    expect(res.body.price).toEqual(expectedPrice);
  });

  test('returns a 400 error if userId is missing', async () => {
    await request(app)
      .post('/')
      .send({ gallons: 10 })
      .expect(400);
  });

  test('returns a 400 error if gallons is missing', async () => {
    await request(app)
      .post('/')
      .send({ userId: 1 })
      .expect(400);
  });
});
