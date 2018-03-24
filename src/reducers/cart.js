import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { productId } = action
      if (state.indexOf(productId) === -1) {
        return [...state, productId]
      }
      return state
    default:
      return state
  }
}

const quantityById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { productId } = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export default combineReducers({
  addedIds,
  quantityById
})
