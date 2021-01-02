import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../Dropdown';

configure({ adapter: new Adapter() });

describe('<Dropdown /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Dropdown
        additionPosition="top"
        as="a"
        basic
        button
        className="dropdown-custom"
        closeOnBlur
        closeOnChange
        compact
        deburr
        defaultOpen
        defaultSearchQuery="search"
        defaultSelectedLabel={1}
        defaultValue={10}
        disabled
        error
        floating
        fluid
        header="text"
        icon="h"
        inline
        item
        labeled
        loading
        minCharacters={2}
        multiple
        noResultsMessage="no"
        onAddItem={Function}
        onBlur={Function}
        onChange={Function}
        onClick={Function}
        onClose={Function}
        onFocus={Function}
        onLabelClick={Function}
        onMouseDown={Function}
        onOpen={Function}
        onSearchChange={Function}
        openOnFocus
        placeholder="text"
        pointing="top"
        renderLabel={Function}
        scrolling
        search={Function}
        searchInput={{}}
        selectOnBlur
        selectOnNavigation
        simple
        style={{}}
        tabIndex="one"
        text="example"
        upward
      >
        <div />
      </Dropdown>
    );
    expect(wrapper.find('Dropdown').length).toBe(1);
    expect(wrapper.prop('additionPosition')).toEqual('top');
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('button')).toEqual(true);
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual('dropdown dropdown-custom');
    expect(wrapper.prop('closeOnBlur')).toEqual(true);
    expect(wrapper.prop('closeOnChange')).toEqual(true);
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('deburr')).toEqual(true);
    expect(wrapper.prop('defaultOpen')).toEqual(true);
    expect(wrapper.prop('defaultSearchQuery')).toEqual('search');
    expect(wrapper.prop('defaultSelectedLabel')).toEqual(1);
    expect(wrapper.prop('defaultValue')).toEqual(10);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('floating')).toEqual(true);
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('header')).toEqual('text');
    expect(wrapper.prop('icon')).toEqual('h');
    expect(wrapper.prop('inline')).toEqual(true);
    expect(wrapper.prop('item')).toEqual(true);
    expect(wrapper.prop('labeled')).toEqual(true);
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('minCharacters')).toEqual(2);
    expect(wrapper.prop('multiple')).toEqual(true);
    expect(wrapper.prop('noResultsMessage')).toEqual('no');
    expect(wrapper.prop('onAddItem')).toEqual(Function);
    expect(wrapper.prop('onBlur')).toEqual(Function);
    expect(wrapper.prop('onChange')).toEqual(Function);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('onClose')).toEqual(Function);
    expect(wrapper.prop('onFocus')).toEqual(Function);
    wrapper.find('onLabelClick');
    wrapper.simulate('click');
    expect(wrapper.prop('onMouseDown')).toEqual(Function);
    expect(wrapper.prop('onOpen')).toEqual(Function);
    expect(wrapper.prop('onSearchChange')).toEqual(Function);
    expect(wrapper.prop('openOnFocus')).toEqual(true);
    expect(wrapper.prop('placeholder')).toEqual('text');
    expect(wrapper.prop('pointing')).toEqual('top');
    expect(wrapper.prop('renderLabel')).toEqual(Function);
    expect(wrapper.prop('scrolling')).toEqual(true);
    expect(wrapper.prop('search')).toEqual(Function);
    expect(wrapper.prop('searchInput')).toEqual({});
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('selectOnBlur')).toEqual(true);
    expect(wrapper.prop('selectOnNavigation')).toEqual(true);
    expect(wrapper.prop('simple')).toEqual(true);
    expect(wrapper.prop('tabIndex')).toEqual('one');
    expect(wrapper.prop('text')).toEqual('example');
    expect(wrapper.prop('upward')).toEqual(true);
  });

  it('has open prop', () => {
    const wrapper = shallow(<Dropdown open />);
    expect(wrapper.prop('open')).toEqual(true);
  });

  it('has searchQuery prop', () => {
    const wrapper = shallow(<Dropdown searchQuery="query" />);
    expect(wrapper.prop('searchQuery')).toEqual('query');
  });

  it('has selectedLabel prop', () => {
    const wrapper = shallow(<Dropdown multiple selectedLabel="select" />);
    expect(wrapper.prop('selectedLabel')).toEqual('select');
  });

  it('has trigger prop', () => {
    const wrapper = shallow(<Dropdown trigger={<div />} />);
    expect(wrapper.prop('trigger')).toEqual(<div />);
  });

  it('has value prop', () => {
    const wrapper = shallow(<Dropdown value={10} />);
    expect(wrapper.prop('value')).toEqual(10);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Dropdown
        additionPosition="top"
        as="a"
        basic
        button
        className="dropdown-custom"
        closeOnBlur
        closeOnChange
        compact
        deburr
        defaultOpen
        defaultSearchQuery="search"
        defaultSelectedLabel={1}
        defaultValue={10}
        disabled
        error
        floating
        fluid
        header="text"
        icon="h"
        inline
        item
        labeled
        loading
        minCharacters={2}
        multiple
        noResultsMessage="no"
        onAddItem={Function}
        onBlur={Function}
        onChange={Function}
        onClick={Function}
        onClose={Function}
        onFocus={Function}
        onLabelClick={Function}
        onMouseDown={Function}
        onOpen={Function}
        onSearchChange={Function}
        openOnFocus
        placeholder="text"
        pointing="top"
        renderLabel={Function}
        scrolling
        search={Function}
        searchInput={{}}
        selectOnBlur
        selectOnNavigation
        simple
        style={{}}
        tabIndex="one"
        text="example"
        upward
      >
        <div />
      </Dropdown>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Dropdown open />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Dropdown searchQuery="query" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Dropdown multiple selectedLabel="select" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Dropdown trigger={<div />} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Dropdown value={10} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
