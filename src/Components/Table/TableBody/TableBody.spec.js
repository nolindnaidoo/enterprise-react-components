import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableBody from '../TableBody';

configure({ adapter: new Adapter() });

describe('<TableBody /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableBody as="a" className="tableBody-custom" style={{}}>
        children
      </TableBody>
    );
    expect(wrapper.find('TableBody').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tableBody tableBody-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableBody as="a" className="tableBody-custom" style={{}}>
        children
      </TableBody>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
