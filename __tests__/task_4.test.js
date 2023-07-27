import  capital  from '../tasks/task_4.js';

test('String is defined', () => {
  expect(capital('hello')).toBeDefined;
});

test('capital the first character of the string', () => {
  expect(capital('hello')).toBe('Hello');
});

// Test 2: Check if already capitald string remains the same
test('already capitald string should remain the same', () => {
  expect(capital('Hello')).toBe('Hello');
});

