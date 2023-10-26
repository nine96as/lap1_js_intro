const { howIndex } = require('./how-index')

describe('howIndex', () => {
  test('finds the index of "how" in the array', () => {
    const result = howIndex(['hello', 'how', 'are', 'you'], 'how');
    expect(result).toBe(1);
  });

  test('involes Array.prototype.indexOf()', () => {
    const indexOfSpy = jest.spyOn(Array.prototype, 'indexOf');
    howIndex(['hello', 'how', 'are', 'you'], 'how');

    expect(indexOfSpy).toHaveBeenCalledWith('how');

    indexOfSpy.mockRestore();
  });

  test('handles the case where a word is not in the array', () => {
    const result = howIndex(['hello', 'are', 'you'], 'how');
    expect(result).toBe(-1);
  });
})
