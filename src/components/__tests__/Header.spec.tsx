import * as React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  it('renders', () => {
    const wrapper = shallow(<Header />);
    // return text of component
    expect(wrapper.text()).toEqual('EUROSPORT | TEST');
    expect(wrapper).toMatchSnapshot();
  });
});
