import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import SearchCategory from '../SearchCategory';

configure({ adapter: new Adapter() });

describe('<SearchCategory /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <SearchCategory
        active
        as="span"
        className="searchCategory-custom"
        name="Search"
        results={[]}
        style={{}}
      >
        <div />
      </SearchCategory>
    );
    expect(wrapper.find('SearchCategory').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('children')).toEqual(<div />);
    expect(wrapper.prop('className')).toEqual(
      'searchCategory searchCategory-custom'
    );
    expect(wrapper.prop('name')).toEqual('Search');
    expect(wrapper.prop('results')).toEqual([]);
    expect(wrapper.prop('style')).toEqual({});
  });
  it('has content prop', () => {
    const wrapper = shallow(<SearchCategory content="content" />);
    expect(wrapper.prop('content')).toEqual('content');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <SearchCategory
        active
        as="span"
        className="searchCategory-custom"
        name="Search"
        results={[]}
        style={{}}
      >
        <div />
      </SearchCategory>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('snapshot', () => {
    const component = renderer.create(<SearchCategory content="content" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
