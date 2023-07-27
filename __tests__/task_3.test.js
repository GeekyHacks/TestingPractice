import Calculate from '../tasks/task_3.js';
describe('calculate', () => {
  let calculate;
  beforeEach(() => {
    calculate = new Calculate();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculate.add(3, 5)).toBe(8);
    });

    test('adds a positive number and zero', () => {
      expect(calculate.add(7, 0)).toBe(7);
    });

    test('adds two negative numbers', () => {
      expect(calculate.add(-2, -3)).toBe(-5);
    });
    test('adds two positive and nigative numbers', () => {
      expect(calculate.add(2, -3)).toBe(-1);
      expect(calculate.add(-2, 3)).toBe(1);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculate.subtract(8, 3)).toBe(5);
    });

    test('subtracts a positive number and zero', () => {
      expect(calculate.subtract(7, 0)).toBe(7);
    });
    test('subtracts two negative numbers', () => {
      expect(calculate.subtract(-2, -3)).toBe(1);
    });
    test('subtracts two positive and nigative numbers', () => {
      expect(calculate.subtract(2, -3)).toBe(5);
      expect(calculate.subtract(-2, 3)).toBe(-5);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculate.divide(10, 2)).toBe(5);
    });

    test('divides a positive number by 1', () => {
      expect(calculate.divide(7, 1)).toBe(7);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculate.divide(4, 0)).toThrowError('Division by zero is not allowed');
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculate.multiply(5, 3)).toBe(15);
    });

    test('multiplies a positive number by zero', () => {
      expect(calculate.multiply(7, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(calculate.multiply(-2, -3)).toBe(6);
    });
  });
});
