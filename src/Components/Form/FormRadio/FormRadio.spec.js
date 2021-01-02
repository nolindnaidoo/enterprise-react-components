import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormRadio from '../FormRadio';

configure({ adapter: new Adapter() });

describe('<FormRadio /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormRadio as="a" className="formRadio-custom" style={{}} />
    );
    expect(wrapper.find('FormRadio').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('formRadio formRadio-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormRadio as="a" className="formRadio-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
