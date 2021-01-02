import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StepContent from '../StepContent';

configure({ adapter: new Adapter() });

describe('<StepContent /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StepContent as="a" className="stepContent-custom" style={{}}>
        children
      </StepContent>
    );
    expect(wrapper.find('StepContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('stepContent stepContent-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StepContent as="a" className="stepContent-custom" style={{}}>
        children
      </StepContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
