import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StepDescription from '../StepDescription';

configure({ adapter: new Adapter() });

describe('<StepDescription /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StepDescription as="a" className="stepDescription-custom" style={{}}>
        children
      </StepDescription>
    );
    expect(wrapper.find('StepDescription').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'stepDescription stepDescription-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StepDescription as="a" className="stepDescription-custom" style={{}}>
        children
      </StepDescription>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
