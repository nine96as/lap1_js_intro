const path = require('path')
const fs = require('fs')

const { reverse1 } = require('./reverse1')

const sourceCode = fs.readFileSync(path.resolve(__dirname, 'reverse1.js'), 'utf8');

describe('reverse1', () => {

  test('Reverses the string olleh', () => {
    const result = reverse1('olleh');
    expect(result).toBe('hello');
  });

  test('Reverses the string world', () => {
    const result = reverse1('world');
    expect(result).toBe('dlrow');
  });

  test('Handles an empty string', () => {
    const result = reverse1('');
    expect(result).toBe('');
  });

  test('Checks if the function uses a for loop', () => {
    expect(sourceCode).not.toContain('// for (');
    expect(sourceCode).not.toContain('//  for (');
    expect(sourceCode).toContain('for (');
  });
})
