import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(<ProductItem product={product} {...actions} />)

  return {
    component: component,
    actions: actions,
    button: component.find('button')
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99
    }
  })
  it('should render Add To Cart message', () => {
    const { button } = setup(productProps)
    expect(button.text()).toMatch(/^Add to cart/)
  })

  it('should call action on button click', () => {
    const { button, actions } = setup(productProps)
    button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })
})
