import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Advertisement from '../Advertisement';

configure({ adapter: new Adapter() });

describe('<Advertisement /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Advertisement
        as="a"
        centered
        className="advertisement-custom"
        style={{}}
        test="Medium Rectangle"
        unit="medium rectangle"
      >
        children
      </Advertisement>
    );
    expect(wrapper.find('Advertisement').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('centered')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'advertisement advertisement-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('test')).toEqual('Medium Rectangle');
    expect(wrapper.prop('unit')).toEqual('medium rectangle');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Advertisement
        as="a"
        centered
        className="advertisement-custom"
        style={{}}
        test="Medium Rectangle"
        unit="medium rectangle"
      >
        children
      </Advertisement>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
