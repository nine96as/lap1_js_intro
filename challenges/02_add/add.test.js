const { add } = require('./add')

describe('add', () => {
  test('exists', () => {
    expect(add).toBeDefined()
  })

  test('is a function', () => {
    expect(add).toBeInstanceOf(Function)
  })

  test('returns a number', () => {
    const result = typeof add(1, 2)
    expect(result).toBe('number')
  })

  test('uses the argument twice, if only one argument is passed', () => {
    const result = add(7)
    expect(result).toBe(14)
  })

   test('throws an error if no arguments are passed', () => {
    expect(() => {
      add()
    }).toThrow('you need to call the functions with 2 arguments')
  })
})
