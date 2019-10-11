import * as React from 'react';
import { mount } from 'enzyme';
import Mocks from '../__mocks__';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import PlayerList, { endpoint } from '../PlayerList';

describe('PlayerList', () => {
  it('renders', () => {
    const wrapper = mount(<PlayerList />);
    expect(wrapper.text()).toEqual('...loading');
  });

  it('fetch data', (done) => {
    act(() => {
      const mock = new MockAdapter(axios);
      mock.onGet(endpoint).reply(200, { players: [Mocks] });
      const component = mount(<PlayerList />);
      setImmediate(() => {
        component.update();
        expect(component).toMatchSnapshot();
        done();
      });
    });
  });
});
