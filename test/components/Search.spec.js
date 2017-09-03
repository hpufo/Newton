import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../../src/js/components/Search';

describe('Search', () => {
  it('renders without a problem', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toHaveLength(1);
  });
});
