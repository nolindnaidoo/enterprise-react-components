import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';

configure({ adapter: new Adapter() });

describe('<Input /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Input
        action
        actionPosition="left"
        as="a"
        className="input-custom"
        disabled
        error
        fluid
        focus
        inverted
        loading
        onChange={Function}
        placeholder=""
        size="medium"
        style={{}}
        tabIndex="one"
        transparent
      >
        children
      </Input>
    );
    expect(wrapper.find('Input').length).toBe(1);
    expect(wrapper.prop('action')).toEqual(true);
    expect(wrapper.prop('actionPosition')).toEqual('left');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('input input-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('focus')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('placeholder')).toEqual('');
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tabIndex')).toEqual('one');
    expect(wrapper.prop('transparent')).toEqual(true);
  });

  it('has icon & label prop', () => {
    const wrapper = shallow(
      <Input icon iconPosition="left" label="label" labelPosition="left" />
    );
    expect(wrapper.prop('icon')).toEqual(true);
    expect(wrapper.prop('iconPosition')).toEqual('left');
    expect(wrapper.prop('label')).toEqual('label');
    expect(wrapper.prop('labelPosition')).toEqual('left');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Input
        action
        actionPosition="left"
        as="a"
        className="input-custom"
        disbabled
        error
        fluid
        focus
        inverted
        loading
        onChange={Function}
        placeholder=""
        size="medium"
        style={{}}
        tabIndex="one"
        transparent
      >
        children
      </Input>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Input icon iconPosition="left" label="label" labelPosition="left" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
