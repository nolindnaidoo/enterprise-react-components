import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Step from '../Step';

configure({ adapter: new Adapter() });

describe('<Step /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Step
        active
        as="a"
        className="step-custom"
        completed
        disabled
        href="test"
        link
        onClick={Function}
        ordered
        style={{}}
      >
        children
      </Step>
    );
    expect(wrapper.find('Step').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('step step-custom');
    expect(wrapper.prop('completed')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('href')).toEqual('test');
    expect(wrapper.prop('link')).toEqual(true);
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('ordered')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has icon prop', () => {
    const wrapper = shallow(<Step icon="add" />);
    expect(wrapper.prop('icon')).toEqual('add');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Step
        active
        as="a"
        className="step-custom"
        completed
        disabled
        href="test"
        link
        onClick={Function}
        ordered
        style={{}}
      >
        children
      </Step>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Step icon="add" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
