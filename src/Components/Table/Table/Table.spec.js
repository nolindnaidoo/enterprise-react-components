import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../Table';

configure({ adapter: new Adapter() });

describe('<Table /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Table
        as="a"
        attached="top"
        basic="very"
        celled
        className="table-custom"
        collapsing
        color="blue"
        columns={1}
        compact="very"
        definition
        fixed
        inverted
        padded="very"
        selectable
        singleLine
        size="large"
        sortable
        stackable
        striped
        structured
        style={{}}
        textAlign="center"
        unstackable
        verticalAlign="top"
      >
        children
      </Table>
    );
    expect(wrapper.find('Table').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('basic')).toEqual('very');
    expect(wrapper.prop('celled')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('table table-custom');
    expect(wrapper.prop('collapsing')).toEqual(true);
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('columns')).toEqual(1);
    expect(wrapper.prop('compact')).toEqual('very');
    expect(wrapper.prop('definition')).toEqual(true);
    expect(wrapper.prop('fixed')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('padded')).toEqual('very');
    expect(wrapper.prop('selectable')).toEqual(true);
    expect(wrapper.prop('singleLine')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('sortable')).toEqual(true);
    expect(wrapper.prop('stackable')).toEqual(true);
    expect(wrapper.prop('striped')).toEqual(true);
    expect(wrapper.prop('structured')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('textAlign')).toEqual('center');
    expect(wrapper.prop('unstackable')).toEqual(true);
    expect(wrapper.prop('verticalAlign')).toEqual('top');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Table
        as="a"
        attached="top"
        basic="very"
        celled
        className="table-custom"
        collapsing
        color="blue"
        columns={1}
        compact="very"
        definition
        fixed
        inverted
        padded="very"
        selectable
        singleLine
        size="large"
        sortable
        stackable
        striped
        structured
        style={{}}
        textAlign="center"
        unstackable
        verticalAlign="top"
      >
        children
      </Table>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
