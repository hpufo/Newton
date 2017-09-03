import React from 'react';
import {shallow} from 'enzyme';
import ResultTitle from '../../src/js/components/ResultTitle';

describe('ResultTitle', () => {
  it('renders with a title', () => {
    const component = shallow(<ResultTitle title="test" />);
    expect(component).toHaveLength(1);
  });
});
