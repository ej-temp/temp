import React from 'react';
import { shallow } from 'enzyme';
import Temps from './Temps';

describe('Temps component', () => {
  it('renders Temps', () => {
    const wrapper = shallow(<Temps 
      temps={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
