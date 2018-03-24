import { getTotal, getCartProducts } from './index'

describe('selectors', () => {
  describe('getTotal', () => {
    it('should return price total', () => {
      it('should return price total', () => {
        const state = {
          cart: {
            addedIds: [1, 2],
            quantityById: {
              1: 4,
              2: 2
            }
          },
          products: [
            {
              id: 1,
              price: 1
            },
            {
              id: 2,
              price: 3
            }
          ]
        }
        expect(getTotal(state)).toBe(10)
      })
    })
  })

  describe('getCartProducts', () => {
    it('should return products with quantity ', () => {
      const state = {
        cart: {
          addedIds: [1, 2],
          quantityById: {
            1: 4,
            2: 2
          }
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
          price: 1,
          quantity: 4
        },
        {
          id: 2,
          title: 'Product 2',
          price: 3,
          quantity: 2
        }
      ])
    })
  })
})
