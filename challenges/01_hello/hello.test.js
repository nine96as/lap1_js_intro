const { hello } = require('./hello')

describe('hello', () => {
  test('exists', () => {
    expect(hello).toBeDefined()
  })

  test('is a function', () => {
    expect(hello).toBeInstanceOf(Function)
  })

  test('displays Hello Romeo', () => {
    const result = hello('Romeo')
    expect(result).toBe('Hello Romeo')
  })

  test('displays Hello Stranger', () => {
    const result = hello()
    expect(result).toBe('Hello Stranger')
  })

   test('throws an error if passed an empty string', () => {
    expect(() => {
      hello('')
    }).toThrow('no empty strings allowed')
  })
})
