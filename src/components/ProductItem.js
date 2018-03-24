import React from 'react'
import Product from './Product'
import PropTypes from 'prop-types'

const ProductItem = ({ product }) => (
  <div style={{ marginBottom: 20 }}>
    <Product title={product.title} price={product.price} />
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default ProductItem
