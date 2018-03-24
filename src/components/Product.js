import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, title }) => (
  <div>
    {title} - {price} 元
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
