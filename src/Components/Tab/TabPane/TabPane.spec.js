import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import TabPane from '../TabPane';

configure({ adapter: new Adapter() });

describe('<TabPane /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <TabPane active as="a" className="tabPane-custom" loading style={{}}>
        children
      </TabPane>
    );
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('tabPane tabPane-custom');
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <TabPane active as="a" className="tabPane-custom" loading style={{}}>
        children
      </TabPane>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
