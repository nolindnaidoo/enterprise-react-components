import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from '../MenuItem';

configure({ adapter: new Adapter() });

describe('<MenuItem /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <MenuItem
        active
        as="a"
        className="menuItem-custom"
        color="blue"
        disabled
        fitted="horizontally"
        header
        icon
        index={1}
        link
        name=""
        onClick={Function}
        position="left"
        style={{}}
      >
        children
      </MenuItem>
    );
    expect(wrapper.find('MenuItem').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('menuItem menuItem-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('fitted')).toEqual('horizontally');
    expect(wrapper.prop('header')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual(true);
    expect(wrapper.prop('index')).toEqual(1);
    expect(wrapper.prop('link')).toEqual(true);
    expect(wrapper.prop('name')).toEqual('');
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('position')).toEqual('left');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <MenuItem
        active
        as="a"
        className="menuItem-custom"
        color="blue"
        disabled
        fitted="horizontally"
        header
        icon
        index={1}
        link
        name=""
        onClick={Function}
        position="left"
        style={{}}
      >
        children
      </MenuItem>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
