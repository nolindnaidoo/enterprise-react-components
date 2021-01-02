import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from '../Checkbox';

configure({ adapter: new Adapter() });

describe('<Checkbox /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Checkbox
        as="a"
        checked
        className="checkbox-custom"
        disabled
        fitted
        id="test"
        indeterminate
        label="label"
        name="one"
        onChange={Function}
        onClick={Function}
        onMouseDown={Function}
        radio
        readOnly
        style={{}}
        tabIndex="one"
        type="checkbox"
        value={1}
      />
    );
    expect(wrapper.find('Checkbox').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('checked')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('checkbox checkbox-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('fitted')).toEqual(true);
    expect(wrapper.prop('id')).toEqual('test');
    expect(wrapper.prop('indeterminate')).toEqual(true);
    expect(wrapper.prop('label')).toEqual('label');
    expect(wrapper.prop('name')).toEqual('one');
    expect(wrapper.prop('onChange')).toEqual(Function);
    expect(wrapper.prop('onClick')).toEqual(Function);
    expect(wrapper.prop('onMouseDown')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    wrapper.find('onChange');
    wrapper.simulate('click');
    expect(wrapper.prop('readOnly')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tabIndex')).toEqual('one');
    expect(wrapper.prop('type')).toEqual('checkbox');
    expect(wrapper.prop('value')).toEqual(1);
  });

  it('has defaultChecked prop', () => {
    const wrapper = shallow(<Checkbox defaultChecked />);
    expect(wrapper.prop('defaultChecked')).toEqual(true);
  });

  it('has defaultIndeterminate prop', () => {
    const wrapper = shallow(<Checkbox defaultIndeterminate />);
    expect(wrapper.prop('defaultIndeterminate')).toEqual(true);
  });

  it('has radio prop', () => {
    const wrapper = shallow(<Checkbox radio />);
    expect(wrapper.prop('radio')).toEqual(true);
  });

  it('has slider prop', () => {
    const wrapper = shallow(<Checkbox slider />);
    expect(wrapper.prop('slider')).toEqual(true);
  });

  it('has toggle prop', () => {
    const wrapper = shallow(<Checkbox toggle />);
    expect(wrapper.prop('toggle')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Checkbox
        as="a"
        checked
        className="checkbox-custom"
        disabled
        fitted
        id="test"
        indeterminate
        label="label"
        name="one"
        onChange={Function}
        onClick={Function}
        onMouseDown={Function}
        radio
        readOnly
        style={{}}
        tabIndex="one"
        type="checkbox"
        value={1}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('defaultChecked prop snapshot', () => {
    const component = renderer.create(<Checkbox defaultChecked />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('defaultIndeterminate prop snapshot', () => {
    const component = renderer.create(<Checkbox defaultIndeterminate />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('radio prop snapshot', () => {
    const component = renderer.create(<Checkbox radio />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('slider prop snapshot', () => {
    const component = renderer.create(<Checkbox slider />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('toggle prop snapshot', () => {
    const component = renderer.create(<Checkbox toggle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
