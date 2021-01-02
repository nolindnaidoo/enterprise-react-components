import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableHeaderCell from '../TableHeaderCell';

configure({ adapter: new Adapter() });

describe('<TableHeaderCell /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableHeaderCell
        as="a"
        className="tableHeaderCell-custom"
        sorted="ascending"
        style={{}}
      >
        children
      </TableHeaderCell>
    );
    expect(wrapper.find('TableHeaderCell').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'tableHeaderCell tableHeaderCell-custom'
    );
    expect(wrapper.prop('sorted')).toEqual('ascending');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableHeaderCell
        as="a"
        className="tableHeaderCell-custom"
        sorted="ascending"
        style={{}}
      >
        children
      </TableHeaderCell>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
