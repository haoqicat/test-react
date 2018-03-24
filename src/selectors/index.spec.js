import { getTotal, getCartProducts } from './index'

describe('selectors', () => {
  describe('getTotal', () => {
    it('should return price total', () => {
      expect(getTotal()).toBe(10)
    })
  })

  describe('getCartProducts', () => {
    it('should return products ', () => {
      const state = {
        cart: {
          addedIds: [1, 2]
        },
        products: [
          {
            id: 1,
            title: 'Product 1',
            price: 1
          },
          {
            id: 2,
            title: 'Product 2',
            price: 3
          },
          {
            id: 3,
            title: 'Product 3',
            price: 4
          }
        ]
      }
      expect(getCartProducts(state)).toEqual([
        {
          id: 1,
          title: 'Product 1',
          price: 1
        },
        {
          id: 2,
          title: 'Product 2',
          price: 3
        }
      ])
    })
  })
})
