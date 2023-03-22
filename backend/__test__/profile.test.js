const ProfileService = require('../routes/profile');

const add = (a, b) => a + b;

test("profile POST is working", async() => {
    const service = {
        name: "cool",
        description: "description"
    };
    try {
        const count = await ProfileService.count();
        await request(app).post('/api/services').send(service)
        const newCount = await ProfileService.count()
        expect(newCount).toBe(count + 1);
    } catch (err) {
        // write test for failure here
        console.log(`Error ${err}`)
    }
})