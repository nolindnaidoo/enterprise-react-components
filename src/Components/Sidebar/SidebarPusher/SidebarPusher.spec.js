import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SidebarPusher from '../SidebarPusher';

configure({ adapter: new Adapter() });

describe('<SidebarPusher /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <SidebarPusher as="a" className="sidebarPusher-custom" dimmed style={{}}>
        children
      </SidebarPusher>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'sidebarPusher sidebarPusher-custom'
    );
    expect(wrapper.prop('dimmed')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <SidebarPusher as="a" className="sidebarPusher-custom" dimmed style={{}}>
        children
      </SidebarPusher>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
