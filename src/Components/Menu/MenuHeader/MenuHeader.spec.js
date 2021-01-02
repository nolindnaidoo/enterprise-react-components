import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MenuHeader from '../MenuHeader';

configure({ adapter: new Adapter() });

describe('<MenuHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <MenuHeader as="a" className="menuHeader-custom" style={{}}>
        children
      </MenuHeader>
    );
    expect(wrapper.find('MenuHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('menuHeader menuHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <MenuHeader as="a" className="menuHeader-custom" style={{}}>
        children
      </MenuHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
