const calc = require('./index.js');

describe('getDescrimimamt', () => {
  test('should return 8 when a=2, b=4, c=1', () => {
    expect(calc.getDiscriminant(2, 4, 1)).toBe(8);
  });

  test('should return 8 when a=2, b=4, c=1', () => {
    expect(calc.getDiscriminant(2, 4, 2)).toBe(-48);
  });

  test('should return 8 when a=2, b=4, c=1', () => {
    expect(calc.getDiscriminant(4, 4, 4)).toBe(-48);
  });
});

describe('getRoots', () => {
  test('should return 8 when a=2, b=4, c=1', () => {
    expect(calc.getDiscriminant(1, -4, 4)).toBe({ x1: 2, x2: 2 });
  });

  test('should return "no real roots" 8 when a=2, b=4, c=1', () => {
    expect(calc.getDiscriminant(4, 4, 4)).toEqual({ msg: 'no real roots' });
  });

  test('should return 8 when a=1, b=0, c=-4', () => {
    expect(calc.getDiscriminant(1, 0, -4)).toBe({ x1: 2, x2: -2 });
  });
});
