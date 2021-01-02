import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DropdownHeader from '../DropdownHeader';

configure({ adapter: new Adapter() });

describe('<DropdownHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <DropdownHeader as="a" className="dropdownHeader-custom" style={{}}>
        children
      </DropdownHeader>
    );
    expect(wrapper.find('DropdownHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'dropdownHeader dropdownHeader-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has icon prop', () => {
    const wrapper = shallow(<DropdownHeader icon="world" />);
    expect(wrapper.prop('icon')).toEqual('world');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <DropdownHeader as="a" className="dropdownHeader-custom" style={{}}>
        children
      </DropdownHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<DropdownHeader icon="world" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
