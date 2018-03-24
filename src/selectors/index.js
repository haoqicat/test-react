const getQuantity = (state, productId) =>
  state.cart.quantityById[productId] || 0

const getProductsById = state =>
  state.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {})

const getAddedIds = state => state.cart.addedIds
const getProduct = (state, id) => getProductsById(state.products)[id]

export const getTotal = state =>
  getAddedIds(state).reduce(
    (total, id) => total + getProduct(state, id).price * getQuantity(state, id),
    0
  )

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
