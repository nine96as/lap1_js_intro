const { capitalise } = require('./capitalise')

describe('capitalise', () => {
  test('Capitalises the first letter of a word', () => {
    const result = capitalise('hello');
    expect(result).toBe('Hello');
  });

  test('downcases the rest of the letters', () => {
    const result = capitalise('HELLO');
    expect(result).toBe('Hello');

  })

  test('handles an already capitalised word', () => {
    const result = capitalise('Hello');
    expect(result).toBe('Hello');
  });

  test('handles an empty string', () => {
    const result = capitalise('');
    expect(result).toBe('');
  });

  test('invokes Array.prototype.push()', () => {
    const sliceSpy = jest.spyOn(String.prototype, 'slice');
    capitalise('romEO');

    expect(sliceSpy).toHaveBeenCalled();

    sliceSpy.mockRestore();
  });
})
