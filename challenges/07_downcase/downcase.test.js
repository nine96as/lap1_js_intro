const { downcase } = require('./downcase')

describe('downcase', () => {
  test('Downcases elements in the array', () => {
    const result = downcase(['A', 'B', 'C', 'D']);
    expect(result).toEqual(['a', 'b', 'c', 'd']);
  });

  test('invokes Array.prototype.map()', () => {
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    downcase([]);

    expect(mapSpy).toHaveBeenCalledTimes(1);

    mapSpy.mockRestore();
  });

  test('handles an empty array', () => {
    expect(downcase([])).toEqual([]);
  });
})
