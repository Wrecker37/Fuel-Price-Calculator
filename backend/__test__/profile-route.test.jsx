const request = require('supertest');
const app = require('../index');

test('canary', async () => {
    expect(true).toBe(true);
});

test('GET /profile?userId= works', async () => {
    const response = await request(app).get('/profile?userId=user123');
    expect(response.statusCode).toBe(200);
});

test('GET /profile?userId= fails', async () => {
    const response = await request(app).get('/profile');
    expect(response.statusCode).toBe(400);
});

test('POST /profile works', async () => {
    const payload = {
        userId: 'john123',
        fullName: 'John Doe',
        address: '123 Main St.',
        city: 'Houston',
        state: 'TX',
        zipcode: '77204'

    };
    const response = await request(app).post('/profile').send(payload);
    expect(response.statusCode).toBe(200);
});

test('POST /profile fails', async () => {
    const payload = {

    };
    const response = await request(app).post('/profile').send(payload);
    expect(response.statusCode).toBe(400);
});