import React from 'react';
import { shallow } from 'enzyme';
import HighAndLow from './HighAndLow';

describe('HighAndLow component', () => {
  it('renders HighAndLow', () => {
    const wrapper = shallow(<HighAndLow 
      lowTemp={{ name: '', temp: 20 }}
      highTemp={{ name: '', temp: 20 }}
      avgTemp={5}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
