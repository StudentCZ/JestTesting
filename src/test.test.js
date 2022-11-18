const sum = require('./test');

test('adds num1 + num2 to equal num3', () => {
  expect(sum(2, 3)).toBe(5);
});

test('assigning to object', () => {
  const obj = { one: 2 };
  obj['two'] = 3;
  expect(obj).toEqual({ one: 2, two: 3 });
});

test('adding floating numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
