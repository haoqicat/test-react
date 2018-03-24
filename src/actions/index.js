export const addToCart = productId => dispatch => {
  dispatch({
    type: 'ADD_TO_CART',
    productId
  })
}
