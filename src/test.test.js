const sum = require('./test');

test('adds num1 + num2 to equal num3', () => {
  expect(sum(2, 3)).toBe(5);
});

test('assigning to object', () => {
  const obj = {};
  obj['one'] = 1;
  obj['two'] = 2;
  expect(obj).toEqual({ one: 1, two: 2 });
});

test('adding floating numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

const shoppingList = [
  'grape jam',
  'butter',
  'cream cheese',
  'milk',
  'soda',
  'popcorn',
];

test('the shopping list contain item', () => {
  expect(shoppingList).toContain('soda');
});
