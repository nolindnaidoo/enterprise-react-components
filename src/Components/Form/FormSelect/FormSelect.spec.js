import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormSelect from '../FormSelect';

configure({ adapter: new Adapter() });

describe('<FormSelect /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormSelect as="a" className="formSelect-custom" style={{}} />
    );
    expect(wrapper.find('FormSelect').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('formSelect formSelect-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormSelect as="a" className="formSelect-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
