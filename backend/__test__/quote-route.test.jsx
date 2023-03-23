import request from 'supertest';
import app from '../index';

test('canary', async () => {
    expect(true).toBe(true);
});

test('GET /quotehistory?userId= works', async () => {
    const response = await request(app).get('/quotehistory?userId=user123');
    expect(response.statusCode).toBe(200);
});

test('GET /quotehistory?userId= fails', async () => {
    const response = await request(app).get('/quotehistory');
    expect(response.statusCode).toBe(400);
});
/*
test('POST /quotehistory works', async () => {
    const payload = {
        isInState: 'Yes',
        isPastClient: 'Yes',
        deliveryDate: '03/23/2023',
        gallonsRequested: '100',
        deliveryAddress: '4401 Cougar Village Dr, Houston, TX 77204',
        price: '2.50',
        total: '250'
    };
    const response = await request(app).post('/quotehistory').send(payload);
    expect(response.statusCode).toBe(200);
});

test('POST /quotehistory fails', async () => {
    const payload = {

    };
    const response = await request(app).post('/quotehistory').send(payload);
    expect(response.statusCode).toBe(400);
});
*/