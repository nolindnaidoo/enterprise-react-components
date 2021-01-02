import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormField from '../FormField';

configure({ adapter: new Adapter() });

describe('<FormField /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormField
        as="a"
        className="formField-custom"
        control="input"
        disabled
        error
        inline
        label={{}}
        required
        style={{}}
        type="input"
        width={1}
      >
        children
      </FormField>
    );
    expect(wrapper.find('FormField').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('formField formField-custom');
    expect(wrapper.prop('control')).toEqual('input');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('inline')).toEqual(true);
    expect(wrapper.prop('label')).toEqual({});
    expect(wrapper.prop('required')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('type')).toEqual('input');
    expect(wrapper.prop('width')).toEqual(1);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormField
        as="a"
        className="formField-custom"
        control="input"
        disabled
        error
        inline
        label={{}}
        required
        style={{}}
        type="input"
        width={1}
      >
        children
      </FormField>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
