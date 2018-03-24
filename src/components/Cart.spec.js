import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const component = shallow(<Cart />)
  return {
    div: component.find('div')
  }
}

it('should display 购物车', () => {
  const { div } = setup()
  expect(div.text()).toMatch(/购物车/)
})
