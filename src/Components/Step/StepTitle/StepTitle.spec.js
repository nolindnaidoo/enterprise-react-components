import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StepTitle from '../StepTitle';

configure({ adapter: new Adapter() });

describe('<StepTitle /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StepTitle as="a" className="stepTitle-custom" style={{}}>
        children
      </StepTitle>
    );
    expect(wrapper.find('StepTitle').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('stepTitle stepTitle-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StepTitle as="a" className="stepTitle-custom" style={{}}>
        children
      </StepTitle>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
