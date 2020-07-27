import functions from './functions'

describe('Function Example test', () => {
  test('Total function should work as expected', () => {
    const input = [1, 2]
    const output = 3
    expect(functions.total(input[0], input[1])).toEqual(output)
  })
})
