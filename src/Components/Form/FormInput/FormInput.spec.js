import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormInput from '../FormInput';

configure({ adapter: new Adapter() });

describe('<FormInput /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormInput as="a" className="formInput-custom" style={{}} />
    );
    expect(wrapper.find('FormInput').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('formInput formInput-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormInput as="a" className="formInput-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
