export const getTotal = () => 10

const getProductsById = state =>
  state.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {})

const getAddedIds = state => state.cart.addedIds
const getProduct = (state, id) => getProductsById(state.products)[id]

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id)
  }))
