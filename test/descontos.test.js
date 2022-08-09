const {freteGratis} = require('../src/index')

test('Se é uma function', () => {
  expect(freteGratis).toBeInstanceOf(Function)
})

test('freteGratis é verdadeiro para 200', () => {
  expect(freteGratis(200)).toBeTruthy()
})