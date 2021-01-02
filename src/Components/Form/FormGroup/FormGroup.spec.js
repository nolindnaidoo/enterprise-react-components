import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormGroup from '../FormGroup';

configure({ adapter: new Adapter() });

describe('<FormGroup /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormGroup
        as="a"
        className="formGroup-custom"
        grouped
        style={{}}
        unstackable
        widths={1}
      >
        children
      </FormGroup>
    );
    expect(wrapper.find('FormGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('formGroup formGroup-custom');
    expect(wrapper.prop('grouped')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('unstackable')).toEqual(true);
    expect(wrapper.prop('widths')).toEqual(1);
  });

  it('has props and children', () => {
    const wrapper = shallow(<FormGroup inline />);
    expect(wrapper.prop('inline')).toEqual(true);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormGroup
        as="a"
        className="formGroup-custom"
        grouped
        style={{}}
        unstackable
        widths={1}
      >
        children
      </FormGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<FormGroup inline />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
