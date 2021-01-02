import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemContent from '../ItemContent';

configure({ adapter: new Adapter() });

describe('<ItemContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemContent
        as="a"
        className="itemContent-custom"
        style={{}}
        verticalAlign="middle"
      >
        <div />
      </ItemContent>
    );
    expect(wrapper.find('ItemContent').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual('itemContent itemContent-custom');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('verticalAlign')).toEqual('middle');
  });

  test('<ItemContent /> snapshot', () => {
    const component = renderer.create(
      <ItemContent
        as="a"
        className="itemContent-custom"
        style={{}}
        verticalAlign="middle"
      >
        <div />
      </ItemContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
