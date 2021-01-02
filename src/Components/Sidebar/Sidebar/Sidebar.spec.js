import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../Sidebar';

configure({ adapter: new Adapter() });

describe('<Sidebar /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Sidebar
        animation="push"
        as="a"
        className="sidebar-custom"
        direction="top"
        inverted
        style={{}}
        vertical
        visible
        width="thin"
      />
    );
    expect(wrapper.find('Sidebar').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('animation')).toEqual('push');
    expect(wrapper.prop('className')).toEqual('sidebar sidebar-custom');
    expect(wrapper.prop('direction')).toEqual('top');
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('vertical')).toEqual(true);
    expect(wrapper.prop('visible')).toEqual(true);
    expect(wrapper.prop('width')).toEqual('thin');
  });

  it('has props', () => {
    const wrapper = shallow(<Sidebar>children</Sidebar>);
    expect(wrapper.prop('children')).toEqual('children');
  });

  it('has props', () => {
    const wrapper = shallow(<Sidebar defaultVisible />);
    expect(wrapper.prop('defaultVisible')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Sidebar
        animation="push"
        as="a"
        className="sidebar-custom"
        direction="top"
        inverted
        style={{}}
        vertical
        visible
        width="thin"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Sidebar>children</Sidebar>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Sidebar defaultVisible />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
