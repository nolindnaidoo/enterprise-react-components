import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemExtra from '../ItemExtra';

configure({ adapter: new Adapter() });

describe('<ItemExtra /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemExtra as="a" className="itemExtra-custom" style={{}}>
        children
      </ItemExtra>
    );
    expect(wrapper.find('ItemExtra').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('itemExtra itemExtra-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<ItemExtra /> snapshot', () => {
    const component = renderer.create(
      <ItemExtra as="a" className="itemExtra-custom" style={{}}>
        children
      </ItemExtra>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
