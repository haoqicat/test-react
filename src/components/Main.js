import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    )
  }
}

export default Main
