import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListContent from '../ListContent';

configure({ adapter: new Adapter() });

describe('<ListContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ListContent
        as="span"
        className="listContent-custom"
        floated="left"
        verticalAlign="middle"
      >
        children
      </ListContent>
    );
    expect(wrapper.find('ListContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('listContent listContent-custom');
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('verticalAlign')).toEqual('middle');
  });
  test('snapshot', () => {
    const component = renderer.create(
      <ListContent
        as="span"
        className="listContent-custom"
        floated="left"
        verticalAlign="middle"
      >
        children
      </ListContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
