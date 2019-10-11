import * as React from 'react';
import { shallow } from 'enzyme';

import Mocks from '../__mocks__';
import PlayerItem from '../PlayerItem';

describe('PlayerItem', () => {
  it('renders', () => {
    const component = shallow(<PlayerItem item={Mocks} />);
    expect(component).toMatchSnapshot();
  });
});
