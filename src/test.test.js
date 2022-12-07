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
  expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
  throw new Error('you are not right');
}

test('compiling code to go as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
});

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

beforeEach(() => {
  return sum();
});

afterEach(() => {
  return sum();
});

test('sum is working', () => {
  expect(sum).toBeTruthy();
});

//Scoping

beforeEach(() => {
  return iniializeCityDatabase();
});
