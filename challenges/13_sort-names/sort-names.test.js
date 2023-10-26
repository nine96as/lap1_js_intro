const { sortNames } = require('./sort-names')

describe('sortNames', () => {
  test('Correctly sorts the array', () => {
    const trainers = ["Ree", "romeo", "emile", "sarah"];
    const output = [ 'emile', 'Ree', 'romeo', 'sarah' ];

    const result = sortNames(trainers);
    
    expect(result).toEqual(output);
  });

  test('Uses Array.prototype.sort()', () => {
    const sortSpy = jest.spyOn(Array.prototype, 'sort');
    sortNames(["R", "r", "e", "s"]);

    expect(sortSpy).toHaveBeenCalled();

    sortSpy.mockRestore();
  });
})
