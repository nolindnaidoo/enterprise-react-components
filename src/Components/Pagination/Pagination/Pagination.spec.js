import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from '../Pagination';

configure({ adapter: new Adapter() });

describe('<Pagination /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Pagination
        ariaLabel="Pagination"
        boundaryRange={2}
        className="pagination-custom"
        color="blue"
        defaultActivePage={5}
        ellipsisItem="..."
        firstItem={{}}
        floated="right"
        fluid
        inverted
        lastItem={{}}
        nextItem={{}}
        onPageChange={Function}
        pageItem={{}}
        pointing
        prevItem={{}}
        siblingRange={2}
        size="large"
        secondary
        stackable
        style={{}}
        text
        totalPages={20}
        vertical
      />
    );
    expect(wrapper.find('Pagination').length).toBe(1);
    expect(wrapper.prop('ariaLabel')).toEqual('Pagination');
    expect(wrapper.prop('boundaryRange')).toEqual(2);
    expect(wrapper.prop('className')).toEqual('pagination pagination-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('defaultActivePage')).toEqual(5);
    expect(wrapper.prop('ellipsisItem')).toEqual('...');
    expect(wrapper.prop('firstItem')).toEqual({});
    expect(wrapper.prop('floated')).toEqual('right');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('lastItem')).toEqual({});
    expect(wrapper.prop('nextItem')).toEqual({});
    expect(wrapper.prop('onPageChange')).toEqual(Function);
    expect(wrapper.prop('pageItem')).toEqual({});
    expect(wrapper.prop('pointing')).toEqual(true);
    expect(wrapper.prop('prevItem')).toEqual({});
    expect(wrapper.prop('secondary')).toEqual(true);
    expect(wrapper.prop('siblingRange')).toEqual(2);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('stackable')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('text')).toEqual(true);
    expect(wrapper.prop('totalPages')).toEqual(20);
    expect(wrapper.prop('vertical')).toEqual(true);
  });
  it('has activePage & totalPages prop', () => {
    const wrapper = shallow(<Pagination activePage={2} totalPages={20} />);
    expect(wrapper.prop('activePage')).toEqual(2);
    expect(wrapper.prop('totalPages')).toEqual(20);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Pagination
        ariaLabel="Pagination"
        boundaryRange={2}
        className="pagination-custom"
        color="blue"
        defaultActivePage={5}
        ellipsisItem="..."
        firstItem={{}}
        floated="right"
        fluid
        inverted
        lastItem={{}}
        nextItem={{}}
        onPageChange={Function}
        pageItem={{}}
        pointing
        prevItem={{}}
        secondary
        siblingRange={2}
        size="large"
        stackable
        style={{}}
        text
        totalPages={20}
        vertical
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('snapshot test', () => {
    const component = renderer.create(
      <Pagination activePage={2} totalPages={20} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
