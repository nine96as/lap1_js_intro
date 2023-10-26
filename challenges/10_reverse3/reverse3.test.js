const { reverse3 } = require('./reverse3')

describe('reverse3', () => {
  test('Reverses the input string', () => {
    const result = reverse3('olleh');
    expect(result).toBe('hello');
  });

  test('Uses Array.prototype.join()', () => {
    const joinSpy = jest.spyOn(Array.prototype, 'join');
    reverse3('olleh');

    expect(joinSpy).toHaveBeenCalled();

    joinSpy.mockRestore();
  });

  test('Uses String.prototype.split()', () => {
    const splitSpy = jest.spyOn(String.prototype, 'split');
    reverse3('olleh');

    expect(splitSpy).toHaveBeenCalled();

    splitSpy.mockRestore();
  });

  test('Handles an empty string', () => {
    const result = reverse3('');
    expect(result).toBe('');
  });
})
