import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../Select';

configure({ adapter: new Adapter() });

describe('<Select /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Select
        basic
        button
        compact
        className="select-custom"
        direction="right"
        disabled
        error
        floating
        fluid
        header="header"
        icon="dropdown"
        loading
        multiple
        noResultsMessage="test"
        onClick={Function}
        onChange={Function}
        onClose={Function}
        onOpen={Function}
        onSearchChange={Function}
        open
        options={[]}
        placeholder="test"
        pointing="left"
        scrolling
        search
        searchQuery="value"
        style={{}}
        upward
        value="test"
      />
    );
    expect(wrapper.find('Select').length).toBe(1);
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('button')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('select select-custom');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('direction')).toEqual('right');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('floating')).toEqual(true);
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('header')).toEqual('header');
    expect(wrapper.prop('icon')).toEqual('dropdown');
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('multiple')).toEqual(true);
    expect(wrapper.prop('noResultsMessage')).toEqual('test');
    expect(wrapper.prop('onClick')).toEqual(Function);
    expect(wrapper.prop('onChange')).toEqual(Function);
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('onSearchChange')).toEqual(Function);
    expect(wrapper.prop('open')).toEqual(true);
    expect(wrapper.prop('options')).toEqual([]);
    expect(wrapper.prop('placeholder')).toEqual('test');
    expect(wrapper.prop('pointing')).toEqual('left');
    expect(wrapper.prop('scrolling')).toEqual(true);
    expect(wrapper.prop('search')).toEqual(true);
    expect(wrapper.prop('searchQuery')).toEqual('value');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('upward')).toEqual(true);
    expect(wrapper.prop('value')).toEqual('test');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Select
        basic
        button
        className="select-custom"
        compact
        direction="right"
        disabled
        error
        floating
        fluid
        header="header"
        icon="dropdown"
        loading
        multiple
        noResultsMessage="test"
        onClick={Function}
        onChange={Function}
        onClose={Function}
        onOpen={Function}
        onSearchChange={Function}
        open
        options={[]}
        placeholder="test"
        pointing="left"
        scrolling
        search
        searchQuery="value"
        style={{}}
        upward
        value="test"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
