import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import PaginationItem from '../PaginationItem';

configure({ adapter: new Adapter() });

describe('<PaginationItem /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <PaginationItem
        active
        className="paginationItem-custom"
        onClick={Function}
        onKeyDown={Function}
        style={{}}
        type="ellipsisItem"
      />
    );
    expect(wrapper.find('PaginationItem').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('className')).toEqual(
      'paginationItem paginationItem-custom'
    );
    wrapper.find('onClick');
    wrapper.simulate('click');
    wrapper.find('onKeyDown');
    wrapper.simulate('keydown');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('type')).toEqual('ellipsisItem');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <PaginationItem
        active
        className="paginationItem-custom"
        onClick={Function}
        onKeyDown={Function}
        style={{}}
        type="ellipsisItem"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
