import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ItemDescription from '../ItemDescription';

configure({ adapter: new Adapter() });

describe('<ItemDescription /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ItemDescription as="a" className="itemDescription-custom" style={{}}>
        <div />
      </ItemDescription>
    );
    expect(wrapper.find('ItemDescription').length).toBe(1);
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual(
      'itemDescription itemDescription-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('<ItemDescription /> snapshot', () => {
    const component = renderer.create(
      <ItemDescription as="a" className="itemDescription-custom" style={{}}>
        <div />
      </ItemDescription>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
