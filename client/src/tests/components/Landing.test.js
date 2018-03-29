import Landing from '../../components/Landing';
import { shallow } from 'enzyme';
import React from 'react';

test('render the component', () => {
  const wrapper = shallow(<Landing />);
  expect(wrapper).toMatchSnapshot();
});
