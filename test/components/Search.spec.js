import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../../src/js/components/Search';

const testResults = ["Test title 1","Test title 2","Test title 3"];

describe('Search', () => {
  it('renders without a problem', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('h2')).toBeTruthy();
    expect(wrapper.find('#search')).toBeTruthy();
    expect(wrapper.find('h2')).toBeTruthy();
  });
  it('renders 3 search results',() => {
    const wrapper = mount(<Search />)
    .setState({results: testResults});
    expect(wrapper.find('li').length).toBe(3);
  });
  it('renders a message',() => {
    const wrapper = mount(<Search />)
    .setState({message: "Test message"});
    expect(wrapper.find('#msg').text()).toBe("Test message");
  });
  
  it('submits the form',() => {
    const wrapper = shallow(<Search />);
    const preventDefault = jest.fn();
    wrapper.find('form').simulate('submit', {preventDefault});
    expect(preventDefault).toBeCalled();
  });
  
  it('tests the input text',() => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("#search");
    input.node.value = "Test"
    expect(input.node.value).toBe('Test');
  });
});
