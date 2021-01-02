import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormCheckbox from '../FormCheckbox';

configure({ adapter: new Adapter() });

describe('<FormCheckbox /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormCheckbox as="a" className="formCheckbox-custom" style={{}} />
    );
    expect(wrapper.find('FormCheckbox').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'formCheckbox formCheckbox-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormCheckbox as="a" className="formCheckbox-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
