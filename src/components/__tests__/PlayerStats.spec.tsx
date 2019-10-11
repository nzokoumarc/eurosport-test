import * as React from 'react';
import { shallow } from 'enzyme';
// mocks
import Mocks from '../__mocks__';
// component
import PlayerStats from '../PlayerStats';

describe('PlayerStats', () => {
  it('renders', () => {
    const component = shallow(<PlayerStats data={Mocks.data} />);
    expect(component).toMatchSnapshot();
  });
});
