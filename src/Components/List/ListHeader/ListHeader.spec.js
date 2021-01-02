import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ListHeader from '../ListHeader';

configure({ adapter: new Adapter() });

describe('<ListHeader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ListHeader as="span" className="listHeader-custom" style={{}}>
        children
      </ListHeader>
    );
    expect(wrapper.find('ListHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('listHeader listHeader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ListHeader as="span" className="listHeader-custom" style={{}}>
        children
      </ListHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
