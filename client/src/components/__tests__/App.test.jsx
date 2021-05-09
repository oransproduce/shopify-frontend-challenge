/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import App from '../App';
import response from '../../../../mock/mockResponse';

jest.mock('axios');

describe('<App />', () => {
  it('test1', async () => {
    expect.assertions(2);
    const newTerm = 'lord of the rings';
    axios.get.mockImplementation((url) => {
      if (url.includes('/search')) {
        return Promise.resolve(response);
      }
      return Promise.resolve({
        data: [],
      });
    });
    const wrapper = mount(<App />);
    const findInput = (wrap) => wrap.find('input').hostNodes();
    expect(findInput(wrapper).prop('value')).toBe('');
    await act(async () => {
      findInput(wrapper).simulate('change', { target: { value: newTerm } });
    });
    wrapper.update();
    expect(findInput(wrapper).prop('value')).toBe(newTerm);
  });
});
