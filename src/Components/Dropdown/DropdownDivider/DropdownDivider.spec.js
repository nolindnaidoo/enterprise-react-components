import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DropdownDivider from '../DropdownDivider';

configure({ adapter: new Adapter() });

describe('<DropdownDivider /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <DropdownDivider as="a" className="dropdownDivider-custom" style={{}} />
    );
    expect(wrapper.find('DropdownDivider').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'dropdownDivider dropdownDivider-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <DropdownDivider as="a" className="dropdownDivider-custom" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
