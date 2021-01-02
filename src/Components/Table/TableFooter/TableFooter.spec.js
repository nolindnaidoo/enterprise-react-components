import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TableFooter from '../TableFooter';

configure({ adapter: new Adapter() });

describe('<TableFooter /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <TableFooter as="a" className="tableFooter-custom" style={{}}>
        children
      </TableFooter>
    );
    expect(wrapper.find('TableFooter').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tableFooter tableFooter-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <TableFooter as="a" className="tableFooter-custom" style={{}}>
        children
      </TableFooter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
