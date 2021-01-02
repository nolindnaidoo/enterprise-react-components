import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Label from '../Label';

configure({ adapter: new Adapter() });

describe('<Label /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Label
        active
        as="a"
        attached="top"
        basic
        circular
        className="label-custom"
        color="blue"
        floating
        horizontal
        icon="add"
        onClick={Function}
        onRemove={Function}
        pointing="below"
        ribbon="right"
        size="medium"
        style={{}}
        tag
      />
    );
    expect(wrapper.find('Label').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('label label-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('floating')).toEqual(true);
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual('add');
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('onRemove')).toEqual(Function);
    expect(wrapper.prop('pointing')).toEqual('below');
    expect(wrapper.prop('ribbon')).toEqual('right');
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tag')).toEqual(true);
  });

  it('has children', () => {
    const wrapper = shallow(<Label>children</Label>);
    expect(wrapper.prop('children')).toEqual('children');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Label
        active
        as="a"
        attached="top"
        basic
        circular
        className="label-custom"
        color="blue"
        floating
        horizontal
        icon="add"
        onClick={Function}
        onRemove={Function}
        pointing="below"
        ribbon="right"
        size="medium"
        style={{}}
        tag
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Label>children</Label>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
