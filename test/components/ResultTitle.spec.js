import React from 'react';
import {shallow} from 'enzyme';
import ResultTitle from '../../src/js/components/ResultTitle';

describe('ResultTitle', () => {
  it('renders with a title', () => {
    const wrapper = shallow(<ResultTitle title="Test title" />);
    expect(wrapper.find('li').text()).toBe("Test title");
  });
});
