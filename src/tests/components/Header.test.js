import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(wrapper).toMatchSnapshot();
})

// import ReactShallowRender from 'react-test-renderer/shallow';

// test('should render Header correctly', () => {
//   const wrapper = shallow(<Header />);
//   const renderer = new ReactShallowRender();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// });
