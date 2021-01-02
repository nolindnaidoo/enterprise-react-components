import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import FormDropdown from '../FormDropdown';

configure({ adapter: new Adapter() });

describe('<FormDropdown /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <FormDropdown as="a" className="formDropdown-custom" style={{}}>
        children
      </FormDropdown>
    );
    expect(wrapper.find('FormDropdown').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'formDropdown formDropdown-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <FormDropdown as="a" className="formDropdown-custom" style={{}}>
        children
      </FormDropdown>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
