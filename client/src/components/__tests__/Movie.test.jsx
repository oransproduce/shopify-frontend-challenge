/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Movie from '../Movie';

describe('<Movie />', () => {
  it('renders movie title', () => {
    const movieAction = jest.fn();
    const props = {
      title: 'Lord of the Rings',
      year: '2008',
      movieAction,
      imdbID: 'abcdefg',
      buttonText: 'Click me',
      disabled: true,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<Movie {...props} />);
    expect(wrapper.text()).toMatch(props.title);
    expect(wrapper.text()).toMatch(props.year);
    expect(wrapper.text()).toMatch(props.buttonText);
  });

  it('disables the button with the disabled prop', () => {
    const movieAction = jest.fn();
    const props = {
      title: 'Lord of the Rings',
      year: '2008',
      movieAction,
      imdbID: 'abcdefg',
      buttonText: 'Click me',
      disabled: true,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<Movie {...props} />);
    wrapper.find('[data-testid="movie-button"]').hostNodes().simulate('click');
    expect(movieAction).toHaveBeenCalledTimes(0);
  });

  it('button click returns correct movie information', () => {
    const movieAction = jest.fn();
    const props = {
      title: 'Lord of the Rings',
      year: '2008',
      movieAction,
      imdbID: 'abcdefg',
      buttonText: 'Click me',
      disabled: false,
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<Movie {...props} />);
    wrapper.find('[data-testid="movie-button"]').hostNodes().simulate('click');
    expect(movieAction).toHaveBeenCalledTimes(1);
    expect(movieAction).toHaveBeenCalledWith(props.title, props.year, props.imdbID);
  });
});
