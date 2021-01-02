import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DimmerDimmable from '../DimmerDimmable';

configure({ adapter: new Adapter() });

describe('<DimmerDimmable /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <DimmerDimmable
        as="a"
        blurring
        className="dimmerDimmable-custom"
        dimmed
        style={{}}
      >
        children
      </DimmerDimmable>
    );
    expect(wrapper.find('DimmerDimmable').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('blurring')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'dimmerDimmable dimmerDimmable-custom'
    );
    expect(wrapper.prop('dimmed')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <DimmerDimmable
        as="a"
        blurring
        className="dimmerDimmable-custom"
        dimmed
        style={{}}
      >
        children
      </DimmerDimmable>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
