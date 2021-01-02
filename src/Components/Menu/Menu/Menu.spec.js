import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../Menu';

configure({ adapter: new Adapter() });

describe('<Menu /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Menu
        as="a"
        attached="top"
        borderless
        className="menu-custom"
        color="blue"
        compact
        fixed="top"
        floated="right"
        fluid
        icon="labeled"
        inverted
        pagination
        pointing
        secondary
        size="large"
        stackable
        style={{}}
        tabular
        text
        vertical
        widths={1}
      >
        children
      </Menu>
    );
    expect(wrapper.find('Menu').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('borderless')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('menu menu-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('fixed')).toEqual('top');
    expect(wrapper.prop('floated')).toEqual('right');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual('labeled');
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('pagination')).toEqual(true);
    expect(wrapper.prop('pointing')).toEqual(true);
    expect(wrapper.prop('secondary')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('stackable')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tabular')).toEqual(true);
    expect(wrapper.prop('text')).toEqual(true);
    expect(wrapper.prop('vertical')).toEqual(true);
    expect(wrapper.prop('widths')).toEqual(1);
  });

  it('has onItemClick prop', () => {
    const wrapper = shallow(<Menu onItemClick={Function} />);
    expect(wrapper.prop('onItemClick')).toEqual(Function);
    wrapper.find('onItemClick');
    wrapper.simulate('click');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Menu
        as="a"
        attached="top"
        borderless
        className="menu-custom"
        color="blue"
        compact
        fixed="top"
        floated="right"
        fluid
        icon="labeled"
        inverted
        pagination
        pointing
        secondary
        size="large"
        stackable
        style={{}}
        tabular
        text
        vertical
        widths={1}
      >
        children
      </Menu>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Menu onItemClick={Function} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
