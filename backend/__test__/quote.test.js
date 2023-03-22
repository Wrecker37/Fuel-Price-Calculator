const QuoteService = require('../routes/quote');

const add = (a, b) => a + b;

test("quote POST is working", async() => {
    const service = {
        name: "cool",
        description: "description"
    };
    try {
        const count = await QuoteService.count();
        await request(app).post('/api/services').send(service)
        const newCount = await QuoteService.count()
        expect(newCount).toBe(count + 1);
    } catch (err) {
        // write test for failure here
        console.log(`Error ${err}`)
    }
})