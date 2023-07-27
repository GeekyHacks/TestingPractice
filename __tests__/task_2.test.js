import { reverseString } from '../tasks/task_2.js';

describe('reverseString', () => {
  // test('throws an error for an empty string', () => {
  //   expect(() => reverseString('')).toThrow('String is empty');
  // });

  test('return the reverse of a string', () => {
    expect(reverseString('you')).toBe('uoy');
    expect(reverseString('you are the best')).toBe('tseb eht era uoy');
    expect(reverseString('@bcd&*')).toBe('*&dcb@');
    expect(reverseString('')).toBe('');
    expect(reverseString('e')).toBe('e');
  });
});


// test('reverseString should reverse the input string', () => {
//   // Test case 1: Reversing a simple string
//   let result = reverseString('hello');
//   expect(result).toBe('olleh');

//   // Test case 2: Reversing a string with spaces
//   result = reverseString('hello world');
//   expect(result).toBe('dlrow olleh');

//   // Test case 3: Reversing a string with special characters
//   result = reverseString('@bcd&*');
//   expect(result).toBe('*&dcb@');

//   // Test case 4: Reversing an empty string
//   result = reverseString('');
//   expect(result).toBe('');

//   // Test case 5: Reversing a string with a single character
//   result = reverseString('a');
//   expect(result).toBe('a');
// });