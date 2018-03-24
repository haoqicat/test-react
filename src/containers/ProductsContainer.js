import React from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductList from '../components/ProductList'
import { addToCart } from '../actions'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductList title="商品列表">
    {products.map(product => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductList>
)

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer)
