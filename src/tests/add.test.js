const add = (a, b) => {
    return a + b;
};

const generateGreeting = (name = 'John Doe') => {
    return `Hello ${name}!`;
};

test('Add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test('Generate greeting with name', () => {
    const result = generateGreeting('Julien');
    expect(result).toBe("Hello Julien!");
});

test('Generate greeting without name', () => {
    const result = generateGreeting();
    expect(result).toBe("Hello John Doe!");
});