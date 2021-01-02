import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemGroup from '../ItemGroup';

configure({ adapter: new Adapter() });

describe('<ItemGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemGroup
        as="a"
        className="itemGroup-custom"
        divided
        link
        relaxed
        style={{}}
        unstackable
      >
        <div />
      </ItemGroup>
    );
    expect(wrapper.find('ItemGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual('itemGroup itemGroup-custom');
    expect(wrapper.prop('divided')).toEqual(true);
    expect(wrapper.prop('link')).toEqual(true);
    expect(wrapper.prop('relaxed')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('unstackable')).toEqual(true);
  });

  test('<ItemGroup /> snapshot', () => {
    const component = renderer.create(
      <ItemGroup
        as="a"
        className="itemGroup-custom"
        divided
        link
        relaxed
        style={{}}
        unstackable
      >
        <div />
      </ItemGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
