import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DropdownSearchInput from '../DropdownSearchInput';

configure({ adapter: new Adapter() });

describe('<DropdownSearchInput /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <DropdownSearchInput
        as="a"
        className="dropdownSearchInput-custom"
        inputRef={Function}
        style={{}}
        tabIndex="two"
        type="icon"
        value="value"
      />
    );
    expect(wrapper.find('DropdownSearchInput').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'dropdownSearchInput dropdownSearchInput-custom'
    );
    expect(wrapper.prop('inputRef')).toEqual(Function);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('tabIndex')).toEqual('two');
    expect(wrapper.prop('type')).toEqual('icon');
    expect(wrapper.prop('value')).toEqual('value');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <DropdownSearchInput
        as="a"
        className="dropdownSearchInput-custom"
        inputRef={Function}
        style={{}}
        tabIndex="two"
        type="icon"
        value="value"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
