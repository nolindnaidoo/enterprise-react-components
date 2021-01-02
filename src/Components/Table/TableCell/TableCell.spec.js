import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableCell from '../TableCell';

configure({ adapter: new Adapter() });

describe('<TableCell /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableCell
        active
        as="a"
        className="tableCell-custom"
        collapsing
        disabled
        error
        negative
        positive
        selectable
        singleLine
        style={{}}
        textAlign="center"
        verticalAlign="top"
        warning
        width={1}
      >
        children
      </TableCell>
    );
    expect(wrapper.find('TableCell').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tableCell tableCell-custom');
    expect(wrapper.prop('collapsing')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('negative')).toEqual(true);
    expect(wrapper.prop('positive')).toEqual(true);
    expect(wrapper.prop('selectable')).toEqual(true);
    expect(wrapper.prop('singleLine')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
    expect(wrapper.prop('verticalAlign')).toEqual('top');
    expect(wrapper.prop('warning')).toEqual(true);
    expect(wrapper.prop('width')).toEqual(1);
  });

  it('has icon prop', () => {
    const wrapper = shallow(<TableCell icon="add" />);
    expect(wrapper.prop('icon')).toEqual('add');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableCell
        active
        as="a"
        className="tableCell-custom"
        collapsing
        disabled
        error
        negative
        positive
        selectable
        singleLine
        style={{}}
        textAlign="center"
        verticalAlign="top"
        warning
        width={1}
      >
        children
      </TableCell>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<TableCell icon="add" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
