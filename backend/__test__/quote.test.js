const add = (a, b) => a + b;

test("temp", () => {
    const sum = add(3, 4);
    expect(sum).toBe(7);
})