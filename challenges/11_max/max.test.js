const { max } = require('./max')

describe('max', () => {
  test('finds the maximum value in the array', () => {
    const result = max([1, 297, -73, 99, 10]);
    expect(result).toBe(297);
  });

  test('invokes Array.prototype.reduce()', () => {
    const reduceSpy = jest.spyOn(Array.prototype, 'reduce');
    max([1, 297, -73, 99, 10]);

    expect(reduceSpy).toHaveBeenCalled();

    reduceSpy.mockRestore();
  });

  test('handles an empty array', () => {
    const result = max([]);
    expect(result).toBe(undefined);
  });

  test('does not call Array.prototype.reduce() if the input is []', () => {
    const reduceSpy = jest.spyOn(Array.prototype, 'reduce');
    max([]);

    expect(reduceSpy).not.toHaveBeenCalled();

    reduceSpy.mockRestore();
  });
})
