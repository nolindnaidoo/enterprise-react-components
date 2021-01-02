import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../Form';

configure({ adapter: new Adapter() });

describe('<Form /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Form
        action="example"
        as="a"
        className="form-custom"
        error
        inverted
        loading
        onSubmit={Function}
        reply
        size="small"
        style={{}}
        success
        unstackable
        warning
        widths="equal"
      >
        children
      </Form>
    );
    expect(wrapper.find('Form').length).toBe(1);
    expect(wrapper.prop('action')).toEqual('example');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('form form-custom');
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('onSubmit')).toEqual(Function);
    expect(wrapper.prop('reply')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('small');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('success')).toEqual(true);
    expect(wrapper.prop('unstackable')).toEqual(true);
    expect(wrapper.prop('warning')).toEqual(true);
    expect(wrapper.prop('widths')).toEqual('equal');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Form
        action="example"
        as="a"
        className="form-custom"
        error
        inverted
        loading
        onSubmit={Function}
        reply
        size="small"
        style={{}}
        success
        unstackable
        warning
        widths="equal"
      >
        children
      </Form>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
