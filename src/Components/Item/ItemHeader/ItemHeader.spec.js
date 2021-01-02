import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemHeader from '../ItemHeader';

configure({ adapter: new Adapter() });

describe('<ItemHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemHeader as="a" className="itemHeader-custom" style={{}}>
        children
      </ItemHeader>
    );
    expect(wrapper.find('ItemHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('itemHeader itemHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<ItemHeader /> snapshot', () => {
    const component = renderer.create(
      <ItemHeader as="a" className="itemHeader-custom" style={{}}>
        children
      </ItemHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
