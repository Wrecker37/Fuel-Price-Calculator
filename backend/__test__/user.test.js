const { debug } = require('util');
const express = require('express');
const { query, body, validationResult} = require('express-validator');
const {UserService, req, res, router, postfunc} = require('../routes/user');





const add = (a, b) => a + b;

test("user POST is working", async() => {
    const service = {
        name: "cool",
        description: "description"
    };
    try {
        const count = await UserService.count();
        await request(app).post('/api/services').send(service)
        const newCount = await UserService.count()
        expect(newCount).toBe(count + 1);
    } catch (err) {
        // write test for failure here
        console.log(`Error ${err}`)
    }
})

test('res and req are storing something', ()=>{
    expect(res).not.toBe(null);
    expect(req).not.toBe(null);
})

test('aync function test', async () => {
    let data = await postfunc(req, res);
    expect(data).toBe('anything');
  })

  
