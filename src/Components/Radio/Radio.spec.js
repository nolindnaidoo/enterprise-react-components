import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Radio from '../Radio';

configure({ adapter: new Adapter() });

describe('<Radio /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Radio
        checked
        className="radio-custom"
        disabled
        label="label"
        name="test"
        onChange={Function}
        slider
        style={{}}
        type="radio"
      />
    );
    expect(wrapper.find('Radio').length).toBe(1);
    expect(wrapper.prop('checked')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('radio radio-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('label')).toEqual('label');
    expect(wrapper.prop('name')).toEqual('test');
    expect(wrapper.prop('onChange')).toEqual(Function);
    expect(wrapper.prop('slider')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('type')).toEqual('radio');
  });

  it('has toogle & value prop', () => {
    const wrapper = shallow(<Radio toggle value="test" />);
    expect(wrapper.prop('toggle')).toEqual(true);
    expect(wrapper.prop('value')).toEqual('test');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Radio
        checked
        className="radio-custom"
        disabled
        label="label"
        name="test"
        onChange={Function}
        slider
        style={{}}
        type="radio"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Radio toggle value="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
