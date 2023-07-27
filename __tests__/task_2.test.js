import { reverseString } from '../tasks/task_2.js';

describe('reverseString', () => {
  it('throws an error for an empty string', () => {
    expect(() => reverseString('')).toThrow('String is empty');
  });

  it('return the reverse of a string', () => {
    expect(()=>reverseString('you').toEqual('uoy'));
    // expect(()=>reverseString('you are the best')).toBe('tseb eht era uoy');
  });
});
