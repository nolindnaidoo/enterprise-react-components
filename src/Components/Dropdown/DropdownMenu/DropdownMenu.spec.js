import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DropdownMenu from '../DropdownMenu';

configure({ adapter: new Adapter() });

describe('<DropdownMenu /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <DropdownMenu as="a" className="dropdownMenu-custom" scrolling style={{}}>
        children
      </DropdownMenu>
    );
    expect(wrapper.find('DropdownMenu').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'dropdownMenu dropdownMenu-custom'
    );
    expect(wrapper.prop('scrolling')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <DropdownMenu as="a" className="dropdownMenu-custom" scrolling style={{}}>
        children
      </DropdownMenu>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
