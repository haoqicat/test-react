import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart = ({ products, total }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product => (
      <Product title={product.title} price={product.price} key={product.id} />
    ))
  ) : (
    <em>请添加商品</em>
  )

  return (
    <div>
      <h3>购物车</h3>
      <div>{nodes}</div>
      <p>总价：{total} 元</p>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number
}

export default Cart
