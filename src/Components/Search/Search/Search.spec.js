import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search';

configure({ adapter: new Adapter() });

describe('<Search /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Search
        aligned="left"
        as="input"
        category
        categoryRenderer={Function}
        className="search-custom"
        defaultOpen={false}
        defaultValue="Search"
        fluid
        icon="search"
        input="text"
        loading
        minCharacters={1}
        noResultsDescription="No results found."
        noResultsMessage="No results found."
        onBlur={Function}
        onFocus={Function}
        onMouseDown={Function}
        onResultSelect={Function}
        onSearchChange={Function}
        onSelectionChange={Function}
        resultRenderer={Function}
        results={{}}
        selectFirstResult
        showNoResults
        size="large"
        style={{}}
      />
    );
    expect(wrapper.find('Search').length).toBe(1);
    expect(wrapper.prop('aligned')).toEqual('left');
    expect(wrapper.prop('as')).toEqual('input');
    expect(wrapper.prop('category')).toEqual(true);
    expect(wrapper.prop('categoryRenderer')).toEqual(Function);
    expect(wrapper.prop('className')).toEqual('search search-custom');
    expect(wrapper.prop('defaultOpen')).toEqual(false);
    expect(wrapper.prop('defaultValue')).toEqual('Search');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('icon')).toEqual('search');
    expect(wrapper.prop('input')).toEqual('text');
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('minCharacters')).toEqual(1);
    expect(wrapper.prop('noResultsDescription')).toEqual('No results found.');
    expect(wrapper.prop('noResultsMessage')).toEqual('No results found.');
    expect(wrapper.prop('onBlur')).toEqual(Function);
    expect(wrapper.prop('onFocus')).toEqual(Function);
    expect(wrapper.prop('onMouseDown')).toEqual(Function);
    expect(wrapper.prop('onResultSelect')).toEqual(Function);
    expect(wrapper.prop('onSearchChange')).toEqual(Function);
    expect(wrapper.prop('onSelectionChange')).toEqual(Function);
    expect(wrapper.prop('resultRenderer')).toEqual(Function);
    expect(wrapper.prop('results')).toEqual({});
    expect(wrapper.prop('selectFirstResult')).toEqual(true);
    expect(wrapper.prop('showNoResults')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has open prop', () => {
    const wrapper = shallow(<Search open />);
    expect(wrapper.prop('open')).toEqual(true);
  });

  it('has value prop', () => {
    const wrapper = shallow(<Search value="Daniel" />);
    expect(wrapper.prop('value')).toEqual('Daniel');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Search
        aligned="left"
        as="input"
        category
        categoryRenderer={Function}
        className="search-custom"
        defaultOpen={false}
        defaultValue="Search"
        fluid
        icon="search"
        input="text"
        loading
        minCharacters={1}
        noResultsDescription="No results found."
        noResultsMessage="No results found."
        onBlur={Function}
        onFocus={Function}
        onMouseDown={Function}
        onResultSelect={Function}
        onSearchChange={Function}
        onSelectionChange={Function}
        resultRenderer={Function}
        results={{}}
        selectFirstResult
        showNoResults
        size="large"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Search open />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Search value="Daniel" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
