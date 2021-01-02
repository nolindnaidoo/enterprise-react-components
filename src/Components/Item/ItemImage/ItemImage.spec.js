import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemImage from '../ItemImage';

configure({ adapter: new Adapter() });

describe('<ItemImage /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <ItemImage
        className="itemImage-custom"
        size="tiny"
        src="text"
        style={{}}
      />
    );
    expect(wrapper.find('ItemImage').length).toBe(1);
    expect(wrapper.prop('className')).toEqual('itemImage itemImage-custom');
    expect(wrapper.prop('size')).toEqual('tiny');
    expect(wrapper.prop('src')).toEqual('text');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<ItemImage /> snapshot', () => {
    const component = renderer.create(
      <ItemImage
        className="itemImage-custom"
        size="tiny"
        src="text"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
