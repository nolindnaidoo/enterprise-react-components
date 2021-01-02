import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableHeader from '../TableHeader';

configure({ adapter: new Adapter() });

describe('<TableHeader /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableHeader as="a" className="tableHeader-custom" fullWidth style={{}}>
        children
      </TableHeader>
    );
    expect(wrapper.find('TableHeader').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tableHeader tableHeader-custom');
    expect(wrapper.prop('fullWidth')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableHeader as="a" className="tableHeader-custom" fullWidth style={{}}>
        children
      </TableHeader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
