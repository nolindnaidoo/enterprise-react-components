import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListList from '../ListList';

configure({ adapter: new Adapter() });

describe('<ListList /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ListList as="span" className="listList-custom" style={{}}>
        children
      </ListList>
    );
    expect(wrapper.find('ListList').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('listList listList-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ListList as="span" className="listList" style={{}}>
        children
      </ListList>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
