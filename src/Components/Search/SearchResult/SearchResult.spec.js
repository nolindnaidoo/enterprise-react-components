import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SearchResult from '../SearchResult';

configure({ adapter: new Adapter() });

describe('<SearchResult /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <SearchResult
        active
        as="span"
        className="searchResult-custom"
        description="description"
        id={5}
        image="path/to/image"
        onClick={Function}
        price="$80.80"
        renderer={Function}
        style={{}}
        title="Search"
      />
    );
    expect(wrapper.find('SearchResult').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('className')).toEqual(
      'searchResult searchResult-custom'
    );
    expect(wrapper.prop('description')).toEqual('description');
    expect(wrapper.prop('id')).toEqual(5);
    expect(wrapper.prop('image')).toEqual('path/to/image');
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('price')).toEqual('$80.80');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('title')).toEqual('Search');
  });

  it('has content prop', () => {
    const wrapper = shallow(<SearchResult content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <SearchResult
        active
        as="span"
        className="searchResult-custom"
        description="description"
        id={5}
        image="path/to/image"
        onClick={Function}
        price="$80.80"
        style={{}}
        title="Search"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<SearchResult content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
