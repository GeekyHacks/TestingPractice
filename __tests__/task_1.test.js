import { strLength } from '../tasks/task_1';

describe('strLength', () => {
  it('return the length of string', () => {
    expect(strLength('String')).toBe(6);
    expect(strLength('hello')).toBe(5);
  });
  it('throws an error for a non-string input', () => {
    expect(() => strLength(42)).toThrow('Input must be a string');
    expect(() => strLength(null)).toThrow('Input must be a string');
    expect(() => strLength(undefined)).toThrow('Input must be a string');
    expect(() => strLength({ key: 'value' })).toThrow('Input must be a string');
  });
  it('throws an error for an empty string', () => {
    expect(() => strLength('')).toThrow('String is empty');
  });

  it('throws an error for a string longer than 10 characters', () => {
    expect(() => strLength('ThisIsALongString')).toThrow('String longer than 10 characters');
  });
});
