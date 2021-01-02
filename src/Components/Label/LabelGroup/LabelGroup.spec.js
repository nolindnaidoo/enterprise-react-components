import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import LabelGroup from '../LabelGroup';

configure({ adapter: new Adapter() });

describe('<LabelGroup /> component', () => {
  it('has props as children', () => {
    const wrapper = shallow(
      <LabelGroup
        as="a"
        circular
        className="labelGroup-custom"
        color="blue"
        size="medium"
        style={{}}
        tag
      >
        children
      </LabelGroup>
    );
    expect(wrapper.find('LabelGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('labelGroup labelGroup-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tag')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <LabelGroup
        as="a"
        circular
        className="labelGroup-custom"
        color="blue"
        size="medium"
        style={{}}
        tag
      >
        children
      </LabelGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
