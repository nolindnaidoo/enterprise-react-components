import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SearchResults from '../SearchResults';

configure({ adapter: new Adapter() });

describe('<SearchResults /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <SearchResults as="span" className="searchResults-custom" style={{}}>
        <div />
      </SearchResults>
    );
    expect(wrapper.find('SearchResults').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'searchResults searchResults-custom'
    );
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content', () => {
    const wrapper = shallow(<SearchResults content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <SearchResults as="span" className="searchResults-custom" style={{}}>
        <div />
      </SearchResults>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('snapshot', () => {
    const component = renderer.create(<SearchResults content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
