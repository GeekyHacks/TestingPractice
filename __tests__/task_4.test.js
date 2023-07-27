// import { capital } from '../tasks/task_4.js';

const capital = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

let expected;
let input;

let result = capital(input);
// Test 1: Check if the first character is capitald
test('capital the first character of the string', () => {
  input = 'hello';
  expected = 'Hello';

  expect(result).toBe(expected);
});

// Test 2: Check if already capitald string remains the same
test('already capitald string should remain the same', () => {
  input = 'Hello';
  expected = 'Hello';

  expect(result).toBe(expected);
});

// Test 3: Check if an empty string remains empty
test('empty string remains empty', () => {
  input = '';
  expected = '';

  expect(result).toBe(expected);
});
