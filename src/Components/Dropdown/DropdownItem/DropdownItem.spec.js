import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import DropdownItem from '../DropdownItem';

configure({ adapter: new Adapter() });

describe('<DropdownItem /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <DropdownItem
        active
        as="a"
        className="dropdownItem-custom"
        disabled
        onClick={Function}
        selected
        style={{}}
        value={1}
      >
        children
      </DropdownItem>
    );
    expect(wrapper.find('DropdownItem').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'dropdownItem dropdownItem-custom'
    );
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('onClick')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('selected')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('value')).toEqual(1);
  });

  it('has description prop', () => {
    const wrapper = shallow(<DropdownItem description="text" />);
    expect(wrapper.prop('description')).toEqual('text');
  });

  it('has flag prop', () => {
    const wrapper = shallow(<DropdownItem flag="united states" />);
    expect(wrapper.prop('flag')).toEqual('united states');
  });

  it('has label prop', () => {
    const wrapper = shallow(<DropdownItem label="text" />);
    expect(wrapper.prop('label')).toEqual('text');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <DropdownItem
        active
        as="a"
        className="dropdownItem-custom"
        disabled
        onClick={Function}
        selected
        style={{}}
        value={1}
      >
        children
      </DropdownItem>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<DropdownItem description="text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<DropdownItem flag="united states" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<DropdownItem label="text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
