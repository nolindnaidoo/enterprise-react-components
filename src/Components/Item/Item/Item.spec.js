import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Item from '../Item';

configure({ adapter: new Adapter() });

describe('<Item /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Item as="a" className="item-custom" style={{}}>
        children
      </Item>
    );
    expect(wrapper.find('Item').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('item item-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<Item /> snapshot', () => {
    const component = renderer.create(
      <Item as="a" className="item" style={{}}>
        children
      </Item>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
