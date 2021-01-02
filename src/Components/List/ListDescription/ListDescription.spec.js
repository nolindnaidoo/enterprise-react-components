import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListDescription from '../ListDescription';

configure({ adapter: new Adapter() });

describe('<ListDescription /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ListDescription as="span" className="listDescription-custom" style={{}}>
        children
      </ListDescription>
    );
    expect(wrapper.find('ListDescription').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'listDescription listDescription-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });
  test('snapshot', () => {
    const component = renderer.create(
      <ListDescription as="span" className="listDescription-custom" style={{}}>
        children
      </ListDescription>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
