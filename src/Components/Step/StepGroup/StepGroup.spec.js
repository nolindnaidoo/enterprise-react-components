import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StepGroup from '../StepGroup';

configure({ adapter: new Adapter() });

describe('<StepGroup /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StepGroup
        as="a"
        attached="top"
        className="stepGroup-custom"
        fluid
        ordered
        size="large"
        stackable="tablet"
        style={{}}
        unstackable
        vertical
        widths={1}
      >
        children
      </StepGroup>
    );
    expect(wrapper.find('StepGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('stepGroup stepGroup-custom');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('ordered')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('stackable')).toEqual('tablet');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('unstackable')).toEqual(true);
    expect(wrapper.prop('vertical')).toEqual(true);
    expect(wrapper.prop('widths')).toEqual(1);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StepGroup
        as="a"
        attached="top"
        className="stepGroup-custom"
        fluid
        ordered
        size="large"
        stackable="tablet"
        style={{}}
        unstackable
        vertical
        widths={1}
      >
        children
      </StepGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
