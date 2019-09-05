import React from 'react';
import { shallow } from 'enzyme';
import Temp from './Temp';

describe('Temp component', () => {
  it('renders Temp', () => {
    const wrapper = shallow(<Temp 
      name={'name'}
      temp={5}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
