import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SidebarPushable from '../SidebarPushable';

configure({ adapter: new Adapter() });

describe('<SidebarPushable /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <SidebarPushable as="a" className="sidebarPushable-custom" style={{}}>
        children
      </SidebarPushable>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'sidebarPushable sidebarPushable-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <SidebarPushable as="a" className="sidebarPushable-custom" style={{}}>
        children
      </SidebarPushable>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
