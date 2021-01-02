import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Subheader from '../Subheader';

configure({ adapter: new Adapter() });

describe('<Subheader /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Subheader as="a" className="subheader-custom" style={{}}>
        children
      </Subheader>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('subheader subheader-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Subheader as="a" className="subheader-custom" style={{}}>
        children
      </Subheader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
