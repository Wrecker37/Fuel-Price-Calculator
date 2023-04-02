const request = require('supertest');
const app = require('../index');

test('canary', async () => {
    expect(true).toBe(true);
});

test('GET /quote?userId= works', async () => {
    const userId = 1;
    const response = await request(app).get(`/quote?userId=${userId}`);
    expect(response.statusCode).toBe(200);
});

test('GET /quote?userId= fails', async () => {
    const response = await request(app).get('/quote');
    expect(response.statusCode).toBe(400);
});

test('POST /quote works', async () => {
    const payload = {
        userId: 1,
        isInState: 'Yes',
        isPastClient: 'Yes',
        deliveryDate: '03/23/2023',
        gallonsRequested: '100',
        deliveryAddress: '4401 Cougar Village Dr, Houston, TX 77204',
        price: '2.50',
        total: '250'
    };
    const response = await request(app).post('/quote').send(payload);
    expect(response.statusCode).toBe(200);
});

test('POST /quote fails', async () => {
    const payload = {

    };
    const response = await request(app).post('/quote').send(payload);
    expect(response.statusCode).toBe(400);
});