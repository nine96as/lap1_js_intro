const { evens } = require('./evens')

describe('evens', () => {
  test('Filters even elements in the array', () => {
    const result = evens([1, 2, 3, 45, 79, 8]);
    expect(result).toEqual([2, 8]);
  });

  test('invokes Array.prototype.filter()', () => {
    const filterSpy = jest.spyOn(Array.prototype, 'filter');
    evens([]);

    expect(filterSpy).toHaveBeenCalled();

    filterSpy.mockRestore();
  });

  test('Handles an empty array', () => {
    expect(evens([])).toEqual([]);
  });
})
