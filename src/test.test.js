const sum = require('./test');

test('adds num1 + num2 to equal num3', () => {
  expect(sum(2, 3)).toBe(5);
});
