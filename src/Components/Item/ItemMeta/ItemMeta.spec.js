import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemMeta from '../ItemMeta';

configure({ adapter: new Adapter() });

describe('<ItemMeta /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemMeta as="a" className="itemMeta-custom" style={{}}>
        children
      </ItemMeta>
    );
    expect(wrapper.find('ItemMeta').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('itemMeta itemMeta-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<ItemMeta /> snapshot', () => {
    const component = renderer.create(
      <ItemMeta as="a" className="itemMeta-custom" style={{}}>
        children
      </ItemMeta>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
