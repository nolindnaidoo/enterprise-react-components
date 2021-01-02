import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import MenuNested from '../MenuNested';

configure({ adapter: new Adapter() });

describe('<MenuNested /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <MenuNested
        as="a"
        className="menuNested-custom"
        position="right"
        style={{}}
      >
        children
      </MenuNested>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('menuNested menuNested-custom');
    expect(wrapper.prop('position')).toEqual('right');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <MenuNested
        as="a"
        className="menuNested-custom"
        position="right"
        style={{}}
      >
        children
      </MenuNested>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
