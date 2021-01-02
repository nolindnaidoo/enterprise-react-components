import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SegmentGroup from '../SegmentGroup';

configure({ adapter: new Adapter() });

describe('<SegmentGroup /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <SegmentGroup
        as="a"
        className="segmentGroup-custom"
        compact
        horizontal
        piled
        raised
        size="large"
        stacked
        style={{}}
      >
        children
      </SegmentGroup>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'segmentGroup segmentGroup-custom'
    );
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('piled')).toEqual(true);
    expect(wrapper.prop('raised')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('stacked')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <SegmentGroup
        as="a"
        className="segmentGroup-custom"
        compact
        horizontal
        piled
        raised
        size="large"
        stacked
        style={{}}
      >
        children
      </SegmentGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
