const { swapcase } = require('./swapcase')

describe('swapcase', () => {
  test('Swaps the case of all letters in the input', () => {
    const result = swapcase('JournAl');
    expect(result).toBe('jOURNaL');
  });

  test('Handles an empty string', () => {
    const result = swapcase('');
    expect(result).toBe('');
  });

  test('Handles a string with no alphabetic characters', () => {
    const result = swapcase('12345');
    expect(result).toBe('12345');
  });

  test('Handles a string with special characters', () => {
    const result = swapcase('!@#$%^');
    expect(result).toBe('!@#$%^');
  });

  test('Handles a string with spaces', () => {
    const result = swapcase('Hello World');
    expect(result).toBe('hELLO wORLD');
  });
})
