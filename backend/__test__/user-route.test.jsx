const request = require('supertest');
const app = require('../index');

test('canary', async () => {
    expect(true).toBe(true);
});

test('GET /user?username= works', async () => {
    const payload = {
        username: 'Jane'
    };

    const response = await request(app).get('/user').query(payload);
    expect(response.statusCode).toBe(200);
});

test('GET /user?username= fails', async () => {
    const payload = {

    }

    const response = await request(app).get('/user').query(payload);
    expect(response.statusCode).toBe(400);
});

test('POST /user/register fails', async () => {
    const payload = {
        username: 'Jane',
        password: 'Password123!',
    }

    const response = await request(app).post('/user/register').send(payload);
    expect(response.statusCode).toBe(500);
})

test('POST /user/login works', async () => {
    const payload = {
        username: "Jane",
        password: "Jane's Password"
    };
    const response = await request(app).post('/user/login').send(payload);
    expect(response.statusCode).toBe(200);
});

test('POST /user/login fails', async () => {
    const payload = {

    };
    const response = await request(app).post('/user/login').send(payload);
    expect(response.statusCode).toBe(400);
});

test('POST /user/register works', async () => {
    const payload = {
        username: "gyro pedroza",
        password: "notMyName1"
    };
    const response = await request(app).post('/user/register').send(payload);
    expect(response.statusCode).toBe(200);
});

test('POST /user/register fails', async () => {
    const payload = {

    };
    const response = await request(app).post('/user/register').send(payload);
    expect(response.statusCode).toBe(400);
});