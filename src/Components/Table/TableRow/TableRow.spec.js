import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableRow from '../TableRow';

configure({ adapter: new Adapter() });

describe('<TableRow /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableRow
        active
        as="a"
        cellAs="td"
        className="tableRow-custom"
        disabled
        error
        negative
        positive
        style={{}}
        textAlign="center"
        verticalAlign="top"
        warning
      >
        children
      </TableRow>
    );
    expect(wrapper.find('TableRow').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('cellAs')).toEqual('td');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tableRow tableRow-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('negative')).toEqual(true);
    expect(wrapper.prop('positive')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
    expect(wrapper.prop('verticalAlign')).toEqual('top');
    expect(wrapper.prop('warning')).toEqual(true);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableRow
        active
        as="a"
        cellAs="td"
        className="tableRow-custom"
        disabled
        error
        negative
        positive
        style={{}}
        textAlign="center"
        verticalAlign="top"
        warning
      >
        children
      </TableRow>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
