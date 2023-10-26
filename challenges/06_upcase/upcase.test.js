const { upcase } = require('./upcase')

describe('upcase', () => {
  test('Upcases elements in the array', () => {
    const result = upcase(['a', 'b', 'c', 'd']);
    expect(result).toEqual(['A', 'B', 'C', 'D']);
  });

  test('invokes Array.prototype.push()', () => {
    const forEachSpy = jest.spyOn(Array.prototype, 'push');
    upcase(['a', 'b', 'c', 'd']);

    expect(forEachSpy).toHaveBeenCalledTimes(4);

    forEachSpy.mockRestore();
  });


  test('Handles an empty array', () => {
    expect(upcase([])).toEqual([]);
  });
})
