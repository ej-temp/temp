import React from 'react';
import { shallow } from 'enzyme';
import DetailView from './DetailView';

describe('DetailView component', () => {
  it('renders DetailView', () => {
    const wrapper = shallow(<DetailView 
      name={'name'}
      temps={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
