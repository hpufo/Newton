import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../../src/js/components/Search';

const testResults = ["Test title 1","Test title 2","Test title 3"];

describe('Search', () => {
  it('renders without a problem', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toHaveLength(1);
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
  /*
  it('tests',() => {
    const wrapper = shallow(<Search />);
    const spy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.find('#btn').simulate('click');
    expect(spy).toHaveBeenCalled();
  });//*/
  /*
  it('tests',() => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("#search").simulate('change',{target: {value: 'Test'}});
    expect(input.node.value).toEqual('Test');
  });//*/
/*
  it('',() => {
    
  });*/
});
