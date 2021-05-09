/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Search from '../Search';

describe('<Search />', () => {
  it('works correctly as a controlled component', () => {
    const searchTerm = 'happy';
    const newTerm = 'happy gilmore';
    const updateSearchTerm = jest.fn();
    const wrapper = mount(<Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />);
    const findInput = (wrap) => wrap.find('input').hostNodes();
    expect(findInput(wrapper).prop('value')).toBe(searchTerm);
    findInput(wrapper).simulate('change', { target: { value: newTerm } });
    expect(updateSearchTerm).toHaveBeenCalled();
    expect(updateSearchTerm).toHaveBeenCalledWith('happy gilmore');
  });
});
