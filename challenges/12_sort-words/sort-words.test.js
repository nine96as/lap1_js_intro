const { sortWords } = require('./sort-words')

describe('sort', () => {
  test('Correctly sorts the array', () => {
    const words = ['c', 'b', 'a'];
    const ouput = ['a', 'b', 'c']
    const result = sortWords(words);
    expect(result).toEqual(ouput);
  });

  test('Uses Array.prototype.sort()', () => {
    const sortSpy = jest.spyOn(Array.prototype, 'sort');
    const months = ['word', 'a'];
    sortWords(months);

    expect(sortSpy).toHaveBeenCalled();

    sortSpy.mockRestore();
  });
})
