const request = require('supertest');
const app = require('../index');


describe('POST /', () => {
    test('returns a price for valid userId and gallons', async () => {
        const expectedPrice = 17.1;

        const res = await request(app)
            .post('/price')
            .send({ userId: 1, gallons: 10 })
            .expect(200);

        expect(res.body.price).toEqual(expectedPrice);
    });

    test('returns a 400 error if userId is missing', async () => {
        await request(app)
            .post('/price')
            .send({ gallons: 10 })
            .expect(400);
    });

    test('returns a 400 error if gallons is missing', async () => {
        await request(app)
            .post('/price')
            .send({ userId: 1 })
            .expect(400);
    });
});