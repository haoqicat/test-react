import { getTotal, getCartProducts } from './index'

describe('selectors', () => {
  describe('getTotal', () => {
    it('should return price total', () => {
      expect(getTotal()).toBe(10)
    })
  })

  describe('getCartProducts', () => {
    it('should return products ', () => {
      expect(getCartProducts()).toBe('products')
    })
  })
})
