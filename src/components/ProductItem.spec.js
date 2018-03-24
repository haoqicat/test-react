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

it('should call action on button click', () => {
  const { button, actions } = setup({
    title: 'Product 1',
    price: 9.99
  })
  button.simulate('click')
  expect(actions.onAddToCartClicked).toBeCalled()
})
