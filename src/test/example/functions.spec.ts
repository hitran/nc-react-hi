import functions from './functions'

global.fetch = jest.fn(() => 
 Promise.resolve({
   json: () => Promise.resolve({ data: { name: "Hi Tran" }})
}))

describe('Total function test', () => {
  test.each([
    [1, 2, 3],
    [0, 0, 0],
    [-10, 2, -8],
    [-10, -2, -12]
  ])('Total of %i and %i should be %i', (num1, num2, expected) => {
    expect(functions.total(num1, num2)).toBe(expected)
  });
})

describe('isNull function test', () => {
  test('isNull function should work as expected', () => {
    expect(functions.isNull()).toBeNull()
  });
})

describe('checkValue function test', () => {
  test.each([
    ['abc', 'abc'],
    [12, 12],
  ])('checkValue of %i should be %i', (a, expected) => {
    expect(functions.checkValue(a)).toBe(expected);
  });
})

describe('createUser function test', () => {
  const output = {
    firstName: 'Nordic',
    lastName: 'Coder',
  }
  test('createUser should return Nordic Coder', () => {
    expect(functions.createUser()).toEqual(output)
  })
})

describe('totalCallBack function test', () => {
  const mockCallback = jest.fn()
  const num1 = 2
  test('totalCallBack should work as expected', () => {
    expect(functions.totalCallBack(num1, mockCallback)).toBe(mockCallback(num1))
  })
})

describe('fecthUser function test', () => {
  test('Fetch user success', async () => {
    const res= await functions.fetchUser()
    expect(res).toEqual({ name: "Hi Tran" })
  })

  test('Fetch user fail', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Async error')))
    const err = await functions.fetchUser()
    expect(err).toBe('error')
  })
})
