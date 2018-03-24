import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const setup = (products = []) => {
  const component = shallow(<Cart products={products} />)
  return {
    h3: component.find('h3')
  }
}

it('should display 购物车', () => {
  const { h3 } = setup()
  expect(h3.text()).toMatch(/购物车/)
})
